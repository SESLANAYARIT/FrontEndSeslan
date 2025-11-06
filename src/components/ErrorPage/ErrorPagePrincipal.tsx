import {useNavigate } from "react-router-dom";
import Error444 from "../../assets/svg/404error.svg?react";
export const ErrorPagePrincipal = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                ¡Wow!, ¿Como llegaste a este lugar?
              </h1>
              <p className="my-2 text-gray-800">
                La página que estas buscando no existe, pero puedes regresar a
                la página principal
              </p>
              <button
                onClick={() => {
                  handleclick();
                }}
                className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-slate-400 text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-opacity-50"
              >
                Volver a la página principal
              </button>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <Error444 />
      </div>
    </div>
  );
};
