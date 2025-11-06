import { useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { CarrouselResponse } from "src/interfaces/principal.interfaces";
import { getCarrousel } from "src/api/calls";
import { getPrivateUrl } from '../../../utils/getPrivateUrl';

const CarouselPage = () => {
  const [data, setData] = useState<CarrouselResponse[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center'
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  useEffect(() => {
    const getData = async () => {
      const response = await getCarrousel();
      setData(response);
    };
    getData();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getAspectRatio = () => {
    if (windowWidth < 640) return '16 / 9';  // Móvil: más alto para contain
    return '3.09 / 1';                       // Desktop/Tablet: ratio original
  };

  const isMobile = windowWidth < 640;
  const currentRatio = getAspectRatio();

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {data.map((item) => (
          <div key={item.id} className="flex-[0_0_100%] min-w-0">
            <div 
              className="relative w-full" 
              style={{ 
                aspectRatio: currentRatio, 
                overflow: 'hidden',
                backgroundColor: isMobile ? '#f3f4f6' : 'transparent'
              }}
            >
              <a href={item.link} aria-label="link to image page" className="block w-full h-full">
                <img
                  src={getPrivateUrl(item.file)}
                  alt={`Carousel slide ${item.id}`}
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: isMobile ? 'contain' : 'cover',
                    objectPosition: 'center', 
                    display: 'block'
                  }}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselPage;