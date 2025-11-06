import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PDFDesRojo from "../assets/svg/PDFDesRojo.svg?react";
import { AnimatePresence,motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getPrivateUrl } from './getPrivateUrl';

interface BasicTableProps {
  name: string;
  url: string;
}

interface BasicTableComponentProps {
  data: BasicTableProps[];
}
export const BasicTable = ({ data }: BasicTableComponentProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto", width: "100%" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
      >
        <Table className="min-w-full">
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="text-left text-gray-700">
                Nombre Documento
              </TableHead>
              <TableHead className="text-center text-gray-700">
                Descargar
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((file) => (
              <TableRow
                key={file.url}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <TableCell className="py-3 px-4 text-gray-800 font-medium">
                  {file.name}
                </TableCell>
                <TableCell className="py-3 px-4 text-center">
                  <Link
                    to={getPrivateUrl(file.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100 transition"
                    title="Descargar documento"
                    aria-label="Descargar documento"
                  >
                    <PDFDesRojo className="h-8 w-8 text-red-600" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </AnimatePresence>
  );
};
