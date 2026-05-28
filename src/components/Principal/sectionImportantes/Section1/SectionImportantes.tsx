import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFeaturedNews } from "src/api/calls";
import { NewsFeaturedResponse } from "src/interfaces/principal.interfaces";
import { getPrivateUrl } from "../../../../utils/getPrivateUrl";
import { BookOpen } from "lucide-react";
import libro from "/pdf/libre_de_corrupcion.pdf";
import portada from "../../../../assets/jpg/fondoLibro.jpg";

const SectionImportantes = () => {
  const [data, setdata] = useState<NewsFeaturedResponse[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getFeaturedNews();
      setdata(response);
    };
    getData();
  }, []);

  return (
    <>
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Lo mas importante
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed ">
              La Secretaría Ejecutiva ha estado haciendo esto en la lucha
              anticorrupción
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {data.map((item) => (
              <Card key={item.slug}>
                <Link
                  to={`/noticias/${item.slug}`}
                  className="group block overflow-hidden border-b border-slate-200 rounded-lg"
                  aria-label="Noticia 1"
                >
                  <img
                    src={getPrivateUrl(item.file)}
                    alt="Noticia 1"
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    <Link
                      to={`/noticias/${item.slug}`}
                      className="hover:text-primary transition-colors"
                      aria-label="Noticia"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-muted-foreground text-justify">
                    {item.excerpt}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección del Libro - Separada */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto w-full px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-primary/20">
              <div className="grid md:grid-cols-[250px_1fr] gap-6 md:gap-8">
                {/* Imagen del libro con efecto 3D */}
                <div className="p-6 md:p-8 flex items-center justify-center">
                  <Link 
                    to="/visor-libro"
                    state={{ 
                      pdfUrl: libro,
                      title: "A 10 AÑOS DE LA REFORMA CONSTITUCIONAL ANTICORRUPCIÓN EN MÉXICO Buenas Prácticas en Anticorrupción, Derechos Humanos y Bienestar Social"
                    }}
                    className="group relative block w-full max-w-[200px]"
                  >
                    <div className="relative" style={{ perspective: '1500px' }}>
                      {/* Libro en 3D */}
                      <div className="relative transition-all duration-700 ease-out 
                                      group-hover:scale-105 group-hover:-rotate-y-6"
                           style={{ transformStyle: 'preserve-3d' }}>
                        
                        {/* Portada */}
                        <img
                          src={portada}
                          alt="Portada del libro"
                          className="w-full h-auto shadow-[8px_8px_20px_rgba(0,0,0,0.3)] rounded-r"
                        />
                        
                        {/* Páginas simuladas */}
                        <div className="absolute top-1 right-0 w-2 h-[calc(100%-8px)] bg-white border-l border-gray-300">
                          <div className="w-full h-full bg-gradient-to-r from-gray-100 to-white opacity-80"></div>
                        </div>
                      </div>
                      
                      {/* Sombra dinámica */}
                      <div className="absolute -bottom-4 left-8 right-8 h-6 bg-black/30 blur-xl 
                                      group-hover:blur-2xl group-hover:bg-black/40 transition-all duration-700"></div>
                    </div>
                  </Link>
                </div>

                {/* Contenido */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">
                      Publicación Destacada
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    <Link
                      to="/visor-libro"
                      state={{ 
                        pdfUrl: libro,
                        title: "A 10 AÑOS DE LA REFORMA CONSTITUCIONAL ANTICORRUPCIÓN EN MÉXICO Buenas Prácticas en Anticorrupción, Derechos Humanos y Bienestar Social"
                      }}
                      className="hover:text-primary transition-colors"
                    >
                      A 10 AÑOS DE LA REFORMA CONSTITUCIONAL ANTICORRUPCIÓN EN
                      MÉXICO Buenas Prácticas en Anticorrupción, Derechos
                      Humanos y Bienestar Social
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 text-justify">
                    La Secretaría participó en la elaboración de un capítulo del
                    libro A 10 Años de la Reforma Constitucional Anticorrupción
                    en México: Buenas Prácticas en Anticorrupción, Derechos
                    Humanos y Bienestar Social realizado por la SEA Michoacán,
                    en el que se aborda la experiencia de SESLAN Educa. Te
                    invitamos a leer esta publicación y conocer más sobre
                    nuestro compromiso con la transparencia, la formación cívica
                    y el bienestar social.
                  </p>
                  <Link
                    to="/visor-libro"
                    state={{ 
                      pdfUrl: libro,
                      title: "A 10 AÑOS DE LA REFORMA CONSTITUCIONAL ANTICORRUPCIÓN EN MÉXICO Buenas Prácticas en Anticorrupción, Derechos Humanos y Bienestar Social"
                    }}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Ver más
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionImportantes;