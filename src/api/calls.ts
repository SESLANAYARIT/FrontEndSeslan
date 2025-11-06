import { DocumentsCET } from "src/interfaces/cet.interface";
import { Article33, CardsInfo33 } from "../interfaces/articulo33.interfaces";
import { CCDocuments } from "../interfaces/cc.interfaces";
import {
  AnnouncementRequest,
  AnnouncementResponse,
} from "../interfaces/convocatorias.interfaces";
import { CuentaPublicaInterface } from "../interfaces/cuentaPublica.interfaces";
import { FilesByYear } from "../interfaces/files.interfaces";
import {
  CarrouselResponse,
  getNewsRequest,
  getNewsResponse,
  NewsFeaturedResponse,
  NewsInterface,
} from "../interfaces/principal.interfaces";
import { SevacDataPoint } from "../interfaces/sevac.interfaces";
import publicClient from "./publicClient";
import { Committee, Session } from "src/interfaces/sessions.interfaces";
import { PPIInterface } from "src/interfaces/PPI_Secretaria.interfaces";
import { NormativityDocument } from "src/interfaces/normativity.interfaces";
import { ConveniosCartasInterface } from "src/interfaces/ConveniosCartasCompromiso.interface";

export const getCarrousel = (): Promise<CarrouselResponse[]> =>
  publicClient.get("principal/carrousel_public").then((res) => res.data);

export const getFeaturedNews = (): Promise<NewsFeaturedResponse[]> =>
  publicClient.get("news/publicFeatured").then((res) => res.data);

export const getNews = (params: getNewsRequest): Promise<getNewsResponse> =>
  publicClient.get("news", { params }).then((res) => res.data);

export const getNewsBySlug = (slug: string): Promise<NewsInterface> =>
  publicClient.get(`news/publicNews/${slug}`).then((res) => res.data);

export const getConvocatorias = (
  params: AnnouncementRequest
): Promise<AnnouncementResponse> =>
  publicClient
    .get("announcement", { params })
    .then((res) => res.data as AnnouncementResponse);

export const getDocsTranspPerYear = (): Promise<FilesByYear> =>
  publicClient.get("comite-transp/findPerYear").then((res) => res.data);

export const getPublicAccount = (): Promise<CuentaPublicaInterface[]> =>
  publicClient.get("public-account/public").then((res) => res.data);

export const getCardsInfo33 = (): Promise<CardsInfo33[]> =>
  publicClient.get("articulo33/cards").then((res) => res.data);

export const get33ArticleBySlug = (slug: string): Promise<Article33> =>
  publicClient.get(`/articulo33/get33Article/${slug}`).then((res) => res.data);

export const getSevacInfo = (): Promise<SevacDataPoint[]> =>
  publicClient.get("sevac/public").then((res) => res.data);

export const getCCDocuments = (): Promise<CCDocuments> =>
  publicClient.get("/document/public/CC").then((res) => res.data);

export const getCETDocuments = (): Promise<DocumentsCET> =>
  publicClient.get("/document/public/CET").then((res) => res.data);

export const getPPISecretaria = (): Promise<PPIInterface> =>
  publicClient.get("/document/public/informes_planes").then((res) => res.data);

export const getConveniosCartasCompromiso = (): Promise<ConveniosCartasInterface> =>
  publicClient.get("/document/public/ConveniosCartasCompromiso").then((res) => res.data);

export const getSessionDocuments = (committee: Committee): Promise<Session[]> =>
  publicClient.get(`/sessions/public/${committee}`).then((res) => res.data);

export const getNormativity = (): Promise<NormativityDocument[]> =>
  publicClient.get(`/normativity/public`).then((res) => res.data);
