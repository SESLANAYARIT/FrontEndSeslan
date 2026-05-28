import { useLocation, Navigate } from 'react-router-dom';
import PDFFlipBook from './VisorRevista';

const VisorLibroPage = () => {
  const location = useLocation();
  const { pdfUrl, title } = location.state || {};
  if (!pdfUrl) {
    return <Navigate to="/" replace />;
  }

  return <PDFFlipBook pdfUrl={pdfUrl} title={title} />;
};

export default VisorLibroPage;