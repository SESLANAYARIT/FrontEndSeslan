export interface ConveniosCartasInterface {
    convenios:        Document[];
    cartasCompromiso: Document[];
}

export interface Document {
    topico:   string;
    title:    string;
    fileData: FileData;
}

export interface FileData {
    name: string;
    url:  string;
}
