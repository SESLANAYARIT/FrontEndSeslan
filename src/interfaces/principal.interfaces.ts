
export interface CarrouselResponse {
    id: string;
    file: string;
    link: string;
}

//-----------------News----------------------------------------
export interface NewsFeaturedResponse {
    slug:        string;
    title:       string;
    excerpt:     string;
    file:        string;
}


export interface NewsInterface {
  id: string
  title: string
  excerpt: string
  category: NewsCategory
  publishDate: string
  content: string
  featured: boolean
  status: NewsStatus
  tags: string[]
  file: string
  slug: string
}


export enum NewsCategory {
  COMITE_COORDINADOR = "COMITE_COORDINADOR",
  SECRETARIA_EJECUTIVA = "SECRETARIA_EJECUTIVA",
  POLITICA_ESTATAL_ANTICORRUPCION = "POLITICA_ESTATAL_ANTICORRUPCION",
  EVENTOS = "EVENTOS",
  CAPACITACIONES = "CAPACITACIONES",
  SISTEMA_LOCAL_ANTICORRUPCION = "SISTEMA_LOCAL_ANTICORRUPCION",
}

export enum NewsStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}


export interface getNewsRequest {
  page ?: number
  perPage ?: number
  featured : "true" | "false" | "all"
}

export interface getNewsResponse {
  news: NewsInterface[]
  totalPages: number
  currentPage: number
}