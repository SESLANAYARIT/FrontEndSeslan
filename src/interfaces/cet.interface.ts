export interface DocumentsComites {
    normas: ComiteDocument[];
    planes: ComiteDocument[];
}

 interface ComiteDocument {
    topico:   string;
    title:    string;
    fileData: FileData;
}

export interface FileData {
    name: string;
    url:  string;
}
