import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import PDFDesRojo from "../assets/svg/PDFDesRojo.svg?react";
import {  AnimatePresence,motion } from "framer-motion";
import { getPrivateUrl } from "./getPrivateUrl";

interface FileInfo {
  title: string;
  description: string;
  url: string;
}

interface TablePerYearProps {
  openYear: number | null;
  setOpenYear: React.Dispatch<React.SetStateAction<number | null>>;
  yearConst: number;
  files: FileInfo[];
}

export const TablePerYear = ({
  openYear,
  setOpenYear,
  yearConst,
  files,
}: TablePerYearProps) => {
  const toggleYear = (year: number | null) => {
    setOpenYear(openYear === year ? null : year);
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
            {openYear === yearConst &&
              files.map(({ title, description, url }, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <TableCell align="center">{title}</TableCell>
                  <TableCell align="center">{description}</TableCell>
                  <TableCell align="center">
                    <a
                      href={getPrivateUrl(url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="link to file"
                    >
                      <PDFDesRojo className="h-10 w-10" />
                    </a>
                  </TableCell>
                </motion.tr>
              ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
};
