export interface AnnouncementResponse {
  announcements: Announcement[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  file: string;
}

export interface AnnouncementRequest {
  perPage: number;
  page: number;
}
