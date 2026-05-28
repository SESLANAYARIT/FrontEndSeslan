/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist";

import pdfWorker from "pdfjs-dist/build/pdf.worker.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

interface PDFFlipBookProps {
  pdfUrl: string;
  title?: string;
}

const PDFFlipBook = ({ pdfUrl }: PDFFlipBookProps) => {
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [renderedPages, setRenderedPages] = useState<Map<number, string>>(new Map());
  const bookRef = useRef<any>(null);
  const pdfDocRef = useRef<any>(null);
  const renderingPages = useRef<Set<number>>(new Set());
  const renderedPagesRef = useRef<Map<number, string>>(new Map());

  useEffect(() => {
    renderedPagesRef.current = renderedPages;
  }, [renderedPages]);

  const renderPages = useCallback((pageNumbers: number[]) => {
    if (!pdfDocRef.current) return;

    pageNumbers.forEach(async (pageNum) => {
      if (
        renderingPages.current.has(pageNum) ||
        renderedPagesRef.current.has(pageNum) ||
        pageNum <= 0
      ) {
        return;
      }

      renderingPages.current.add(pageNum);

      try {
        const page = await pdfDocRef.current.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.3 }); // AUMENTO EN ESCALA VISUAL

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        if (context) {
          await page.render({
            canvasContext: context,
            viewport: viewport,
            canvas: canvas,
          }).promise;

          const imageData = canvas.toDataURL("image/jpeg", 0.85);

          setRenderedPages((prev) => {
            const updated = new Map(prev);
            updated.set(pageNum, imageData);
            return updated;
          });

          renderingPages.current.delete(pageNum);
        }
      } catch (err) {
        console.error(`Error rendering page ${pageNum}:`, err);
        renderingPages.current.delete(pageNum);
      }
    });
  }, []);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        setLoading(true);
        setError(null);

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        pdfDocRef.current = pdf;
        setNumPages(pdf.numPages);

        renderPages([1, 2, 3, 4]);
        setLoading(false);
      } catch (error) {
        console.error("Error loading PDF:", error);
        setError("Error al cargar el PDF. Por favor intenta de nuevo.");
        setLoading(false);
      }
    };

    loadPDF();
  }, [pdfUrl, renderPages]);

  const handleFlip = (e: any) => {
    const newPage = e.data;
    setCurrentPage(newPage);

    const pagesToRender = [newPage + 1, newPage + 2, newPage + 3, newPage + 4].filter(
      (p) => p > 0 && p <= numPages,
    );

    renderPages(pagesToRender);
  };

  /* ===================== ESTADOS ===================== */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="backdrop-blur-xl bg-white/60 p-10 rounded-2xl shadow-2xl text-center border border-white/40">
          <div className="animate-spin h-16 w-16 border-4 border-primary border-b-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 font-semibold">Cargando documento...</p>
          <p className="text-xs text-gray-500 mt-2">Por favor espera un momento</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100">
        <div className="backdrop-blur-xl bg-white/70 p-10 rounded-2xl shadow-2xl text-center border border-white/40 max-w-md">
          <div className="text-red-600 text-6xl mb-3">⚠️</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Error al cargar</h3>
          <p className="text-gray-600 text-sm mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 
                       transition-all shadow-xl active:scale-95"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  /* ===================== UI PRINCIPAL ===================== */

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gradient-to-b from-gray-50 to-gray-200">

      {/* HEADER */}
      <div className="text-center mb-6">
        {/* <h2 className="text-5xl font-extrabold tracking-tight text-gray-800 drop-shadow">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Página {currentPage + 1} / {numPages}
        </p> */}

        {/* Botón para abrir visor original */}
        <button
          onClick={() => window.open(pdfUrl, "_blank")}
          className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 
                     text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.03] 
                     active:scale-95 transition-all inline-flex items-center gap-2"
        >
          📄 Abrir en visor original
        </button>
      </div>

      {/* CONTENEDOR DEL LIBRO */}
      <div className="relative mt-4 shadow-2xl rounded-2xl overflow-hidden border border-gray-300 bg-white">
        {/* @ts-ignore */}
        <HTMLFlipBook
          width={1200}       // AUMENTADO
          height={1800}      // AUMENTADO
          size="stretch"
          minWidth={350}
          maxWidth={1400}
          minHeight={450}
          maxHeight={2000}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={handleFlip}
          ref={bookRef}
        >
          {Array.from({ length: numPages }, (_, index) => {
            const pageNum = index + 1;
            const pageImage = renderedPages.get(pageNum);

            return (
              <div key={index} className="page bg-white flex items-center justify-center">
                {pageImage ? (
                  <img
                    src={pageImage}
                    alt={`Página ${pageNum}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="animate-spin h-8 w-8 border-2 border-primary border-b-transparent rounded-full mx-auto mb-2"></div>
                      <p className="text-xs text-gray-500">Cargando página {pageNum}...</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </HTMLFlipBook>
      </div>

      {/* CONTROLES */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => bookRef.current?.pageFlip().flipPrev()}
          disabled={currentPage === 0}
          className="px-7 py-3 rounded-full bg-primary text-white font-semibold 
                     shadow-xl hover:shadow-2xl hover:bg-primary/90 disabled:opacity-40 
                     disabled:cursor-not-allowed transition-all active:scale-95"
        >
          ← Anterior
        </button>

        <button
          onClick={() => bookRef.current?.pageFlip().flip(0)}
          className="px-6 py-3 rounded-full bg-gray-300 text-gray-700 
                     hover:bg-gray-400 transition-all shadow-md hover:shadow-lg
                     active:scale-95 font-medium"
        >
          Ir al inicio
        </button>

        <button
          onClick={() => bookRef.current?.pageFlip().flipNext()}
          disabled={currentPage >= numPages - 1}
          className="px-7 py-3 rounded-full bg-primary text-white font-semibold 
                     shadow-xl hover:shadow-2xl hover:bg-primary/90 disabled:opacity-40 
                     disabled:cursor-not-allowed transition-all active:scale-95"
        >
          Siguiente →
        </button>
      </div>

      {/* <p className="mt-6 text-sm text-gray-500">
        💡 Navega arrastrando las esquinas o usando los controles.
      </p> */}
    </div>
  );
};

export default PDFFlipBook;
