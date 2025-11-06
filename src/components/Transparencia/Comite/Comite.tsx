import { useEffect, useState } from "react";
import { TablePerYear } from "../../../utils/TablePerYear";
import { FilesByYear } from "src/interfaces/files.interfaces";
import { getDocsTranspPerYear } from "src/api/calls";

const Comite = () => {
  const [files, setFiles] = useState<FilesByYear>([]);
  const [openYear, setOpenYear] = useState<null | number>(null);

  useEffect(() => {
    const getFiles = async () => {
      const files = await getDocsTranspPerYear();
      setFiles(files);
    };
    getFiles();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Comité de Transparencia
      </h1>
      <div className="grid gap-8">
        {Object.entries(files)
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([year, files]) => (
            <TablePerYear
              key={year}
              openYear={openYear}
              setOpenYear={setOpenYear}
              yearConst={Number(year)}
              files={files}
            />
          ))}
      </div>
    </div>
  );
};

export default Comite;
