import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AnimatePresence, m } from "framer-motion";
import PDFDesRojo from "../assets/svg/PDFDesRojo.svg?react";
import {
  TableTransparenciaProps,
  typeMonth,
} from "./interfaces";
import Excel from "../assets/svg/excelDescarga.svg?react";

export const TablePerMonth = ({
  openYear,
  setOpenYear,
  yearConst,
  typeMonthAct,
}: TableTransparenciaProps) => {
  const toggleYear = (year: number | null) => {
    setOpenYear(openYear === year ? null : year);
  };
  const tableHead = (typeMonthAct: typeMonth) => {
    switch (typeMonthAct) {
      case 1: {
        return (
          <TableHead className="w-full">Denominación del Formato</TableHead>
        );
      }
      case 2: {
        return (
          <>
            <TableHead className="w-full">1er Bimestre</TableHead>
            <TableHead className="w-full">2do Bimestre</TableHead>
            <TableHead className="w-full">3er Bimestre</TableHead>
            <TableHead className="w-full">4to Bimestre</TableHead>
            <TableHead className="w-full">5to Bimestre</TableHead>
            <TableHead className="w-full">6to Bimestre</TableHead>
          </>
        );
      }
      case 3: {
        return (
          <>
            <TableHead className="w-full">1er Trimestre</TableHead>
            <TableHead className="w-full">2do Trimestre</TableHead>
            <TableHead className="w-full">3er Trimestre</TableHead>
            <TableHead className="w-full">4to Trimestre</TableHead>
          </>
        );
      }
      case 6: {
        return (
          <>
            <TableHead className="w-full">1er Semestre</TableHead>
            <TableHead className="w-full">2do Semestre</TableHead>
          </>
        );
      }
      case 12: {
        return <TableHead className="w-full">Anual</TableHead>;
      }
    }
  };
  const getRandomStringFromArray = (
    array: string[] = ["pdf", "csv", "xlsx", "xls"]
  ): string => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              colSpan={3}
              className={`text-2xl text-center pb-5 font-bold cursor-pointer ${
                openYear === yearConst ? "text-primary" : ""
              }`}
              onClick={() => toggleYear(yearConst)}
            >
              {yearConst}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence>
            {openYear === yearConst && (
              <m.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto", width: "100%" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <TableRow className="w-full">
                  <TableHead className="w-full text-center">
                    Denominación del Formato
                  </TableHead>
                  {tableHead(typeMonthAct)}
                </TableRow>
                {Array.from({ length: 5 }).map(() => (
                  <TableRow>
                    <TableCell align="center">
                      Informe Anual {yearConst}.pdf
                    </TableCell>
                    {
                      Array.from({ length: (12/typeMonthAct)}).map(() => (
                        <TableCell align="center">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="bg-transparent"
                        >
                          {getRandomStringFromArray() == "pdf" ? (
                            <PDFDesRojo className="h-10 w-10" />
                          ) : (
                            <Excel className="h-10 w-10" />
                          )}
                        </Button>
                      </TableCell>
                      ))
                    
                    }
                    
                    
                  </TableRow>
                ))}
                
              </m.div>
            )}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
};
