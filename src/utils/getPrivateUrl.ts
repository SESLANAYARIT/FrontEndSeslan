export const getPrivateUrl = (url: string) =>
  `${import.meta.env.VITE_BACKEND_BASE_URL}/files/s3-url/${url}`;
