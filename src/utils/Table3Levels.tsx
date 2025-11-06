import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import React, { useState } from "react"

export const Table3Levels = () => {
  const [expandedRows, setExpandedRows] = useState<(number | string)[]>([])
  const handleRowClick = (level: string, id: string | number) => {
    if (level === "year") {
      setExpandedRows((prevExpanded) => {
        if (prevExpanded.includes(id)) {
          return prevExpanded.filter((row) => row !== id)
        } else {
          const newExpanded = prevExpanded.filter((row) => row === id)
          return [...newExpanded, id]
        }
      })
    } else if (level === "quarter") {
      setExpandedRows((prevExpanded) =>
        prevExpanded.includes(id) ? prevExpanded.filter((row) => row !== id) : [...prevExpanded, id],
      )
    }
  }
  const data = [
    {
        year: 2023,
        quarters: [
          {
            quarter: 1,
            files: [
              { name: "File 13", size: "900 KB" },
              { name: "File 14", size: "1 MB" },
              { name: "File 15", size: "850 KB" },
            ],
          },
          {
            quarter: 2,
            files: [
              { name: "File 16", size: "1.2 MB" },
              { name: "File 17", size: "1.5 MB" },
              { name: "File 18", size: "1.1 MB" },
            ],
          },
        ],
      },
    {
      year: 2022,
      quarters: [
        {
          quarter: 1,
          files: [
            { name: "File 1", size: "100 KB" },
            { name: "File 2", size: "200 KB" },
            { name: "File 3", size: "150 KB" },
          ],
        },
        {
          quarter: 2,
          files: [
            { name: "File 4", size: "300 KB" },
            { name: "File 5", size: "400 KB" },
            { name: "File 6", size: "250 KB" },
          ],
        },
        {
          quarter: 3,
          files: [
            { name: "File 7", size: "500 KB" },
            { name: "File 8", size: "600 KB" },
            { name: "File 9", size: "450 KB" },
          ],
        },
        {
          quarter: 4,
          files: [
            { name: "File 10", size: "700 KB" },
            { name: "File 11", size: "800 KB" },
            { name: "File 12", size: "650 KB" },
          ],
        },
      ],
    },

  ]
  return (
    <div className="bg-background p-6">
      <Table>
        <TableHeader>

          <TableRow>
            <TableHead className="text-center">Año</TableHead>
            <TableHead
              className={`text-center ${expandedRows.includes(`${data[0].year}-${data[0].quarters[0].quarter}`) ? "" : "hidden"}`}
            >
              Trimestre
            </TableHead>
            <TableHead
              className={`text-center ${expandedRows.includes(`${data[0].year}-${data[0].quarters[0].quarter}`) ? "" : "hidden"}`}
            >
              Documento
            </TableHead>
            <TableHead
              className={`text-center ${expandedRows.includes(`${data[0].year}-${data[0].quarters[0].quarter}`) ? "" : "hidden"}`}
            >
              Descarga
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          
          {data.map((year) => (
            <React.Fragment key={year.year}>
              <TableRow
                onClick={() => handleRowClick("year", year.year)}
                className={`cursor-pointer ${expandedRows.includes(year.year) ? "bg-muted" : ""}`}
              >
                <TableCell className="font-medium text-center">{year.year}</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              {expandedRows.includes(year.year) &&
                year.quarters.map((quarter) => (
                  <React.Fragment key={`${year.year}-${quarter.quarter}`}>
                    <TableRow
                      onClick={() => handleRowClick("quarter", `${year.year}-${quarter.quarter}`)}
                      className={`cursor-pointer ${
                        expandedRows.includes(`${year.year}-${quarter.quarter}`) ? "bg-muted" : ""
                      }`}
                    >
                      <TableCell className="text-center">-</TableCell>
                      <TableCell className="font-medium text-center">Trimestre {quarter.quarter}</TableCell>
                      <TableCell className="text-center">-</TableCell>
                    </TableRow>
                    {expandedRows.includes(`${year.year}-${quarter.quarter}`) &&
                      quarter.files.map((file) => (
                        <TableRow key={`${year.year}-${quarter.quarter}-${file.name}`}>
                          <TableCell className="text-center">-</TableCell>
                          <TableCell className="text-center">-{/*Nombre del documento* */}</TableCell>
                          <TableCell className="font-medium text-center">{file.name}</TableCell>
                          <TableCell className="font-medium text-center">Descarga</TableCell>
                        </TableRow>
                      ))}
                  </React.Fragment>
                ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
