interface FileItem {
  id: string;
  title: string;
  description: string;
  url: string;
}

// Record<number, FileItem[]> → significa "un objeto cuyas claves son números (años) y valores son arreglos de FileItem"
export type FilesByYear = Record<number, FileItem[]>;
