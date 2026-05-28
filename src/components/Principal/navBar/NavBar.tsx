/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useRef } from "react";
import SecretariaEjecutiva from "../../../assets/png/SESLAN.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const button = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const dropdownButton = useRef<HTMLButtonElement>(null);
  const dropdownButton2 = useRef<HTMLButtonElement>(null);
  const dropdownButton3 = useRef<HTMLButtonElement>(null);
  const dropdownButton4 = useRef<HTMLButtonElement>(null);
  const dropDownMenu = useRef<HTMLDivElement>(null);
  const dropDownMenu2 = useRef<HTMLDivElement>(null);
  const dropDownMenu3 = useRef<HTMLDivElement>(null);
  const dropDownMenu4 = useRef<HTMLDivElement>(null);
  const doubleDropdDownButton = useRef<HTMLButtonElement>(null);
  const doubleDropdown = useRef<HTMLDivElement>(null);

  const closeAllMenus = () => {
    menu.current?.classList.add("hidden");
    dropDownMenu.current?.classList.add("hidden");
    dropDownMenu2.current?.classList.add("hidden");
    dropDownMenu3.current?.classList.add("hidden");
    dropDownMenu4.current?.classList.add("hidden");
    doubleDropdown.current?.classList.add("hidden");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleToggle = (
    menuRef: RefObject<HTMLDivElement | HTMLButtonElement>,
    menusToClose: RefObject<HTMLDivElement | HTMLButtonElement>[],
  ) => {
    menuRef.current?.classList.toggle("hidden");
    menusToClose.forEach((menu) => {
      if (!menu.current?.classList.contains("hidden")) {
        menu.current?.classList.toggle("hidden");
      }
    });
  };

  const handleButtonClick = (e: MouseEvent) => {
    e.stopPropagation();
    handleToggle(menu, [
      dropDownMenu,
      dropDownMenu2,
      dropDownMenu3,
      dropDownMenu4,
      doubleDropdown,
    ]);
  };

  const handleDropdownButtonClick = (e: MouseEvent) => {
    e.stopPropagation();
    handleToggle(dropDownMenu, [
      dropDownMenu2,
      dropDownMenu3,
      dropDownMenu4,
      doubleDropdown,
    ]);
  };

  const handleDropdownButtonClick2 = (e: MouseEvent) => {
    e.stopPropagation();
    handleToggle(dropDownMenu2, [
      dropDownMenu,
      dropDownMenu3,
      dropDownMenu4,
      doubleDropdown,
    ]);
  };

  const handleDropdownButtonClick3 = (e: MouseEvent) => {
    e.stopPropagation();
    handleToggle(dropDownMenu3, [
      dropDownMenu,
      dropDownMenu2,
      dropDownMenu4,
      doubleDropdown,
    ]);
  };

  const handleDropdownButtonClick4 = (e: MouseEvent) => {
    e.stopPropagation();
    handleToggle(dropDownMenu4, [
      dropDownMenu,
      dropDownMenu2,
      dropDownMenu3,
      doubleDropdown,
    ]);
  };

  const handleDoubleDropdownButtonClick = () => {
    doubleDropdown.current?.classList.toggle("hidden");
  };

  useEffect(() => {
    const handleDocumentClick = (e: Event) => {
      const target = e.target as Node;
      if (doubleDropdDownButton.current?.contains(target)) {
        // Si el clic es dentro del botón o del menú desplegable, no hacer nada
        return;
      }
      closeAllMenus();
    };
    document.addEventListener("click", (e) => handleDocumentClick(e));
    button.current?.addEventListener("click", handleButtonClick);
    dropdownButton.current?.addEventListener(
      "click",
      handleDropdownButtonClick,
    );
    dropdownButton2.current?.addEventListener(
      "click",
      handleDropdownButtonClick2,
    );
    dropdownButton3.current?.addEventListener(
      "click",
      handleDropdownButtonClick3,
    );
    dropdownButton4.current?.addEventListener(
      "click",
      handleDropdownButtonClick4,
    );
    doubleDropdDownButton.current?.addEventListener(
      "click",
      handleDoubleDropdownButtonClick,
    );

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      button.current?.removeEventListener("click", handleButtonClick);
      dropdownButton.current?.removeEventListener(
        "click",
        handleDropdownButtonClick,
      );
      dropdownButton2.current?.removeEventListener(
        "click",
        handleDropdownButtonClick2,
      );
      dropdownButton3.current?.removeEventListener(
        "click",
        handleDropdownButtonClick3,
      );
      dropdownButton4.current?.removeEventListener(
        "click",
        handleDropdownButtonClick4,
      );
      doubleDropdDownButton.current?.removeEventListener(
        "click",
        handleDoubleDropdownButtonClick,
      );
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-400 dark:border-gray-700 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center" aria-label="logo">
          <img
            src={SecretariaEjecutiva}
            className="w-60 h-auto"
            alt="Secretaria Ejecutiva"
          />
        </Link>
        <button
          ref={button}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center dark:bg- text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-900"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Abrir menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" ref={menu}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-400 md:dark:bg-gray-400 dark:border-gray-600">
            <li>
              <Link
                to="about"
                className="block py-2 pl-3 pr-4  text-gray-700 border-b border-gray-200 hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-amber-900 md:p-0 md:w-auto dark:text-white md:dark:hover:text-black dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-600 md:dark:hover:bg-transparent"
                aria-current="page"
              >
                ¿Quiénes somos?
              </Link>
            </li>

            <li>
              <button
                ref={dropdownButton}
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-200 hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-amber-900 md:p-0 md:w-auto dark:text-white md:dark:hover:text-black dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-600 md:dark:hover:bg-transparent"
              >
                Publicaciones
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                ref={dropDownMenu}
                className="absolute z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-300 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      to="noticias"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                      aria-label="noticias"
                    >
                      Noticias
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="convocatorias"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                      aria-label="convocatorias"
                    >
                      Convocatorias
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <button
                ref={dropdownButton2}
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-200 hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-amber-900 md:p-0 md:w-auto dark:text-white md:dark:hover:text-black dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-600 md:dark:hover:bg-transparent"
              >
                Transparencia
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                ref={dropDownMenu2}
                className="absolute z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-300 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      to="comite"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                      aria-label="comite"
                    >
                      Comité
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="articulo33"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                      aria-label="articulo33"
                    >
                      Articulo 33
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="cuentaPublica"
                      className="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-400 dark:text-gray-400 dark:hover:text-white"
                      aria-label="cuentaPublica"
                    >
                      Cuenta Pública
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="sevac"
                      className="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-400 dark:text-gray-400 dark:hover:text-white"
                      aria-label="sevac"
                    >
                      SEVAC
                    </Link>
                  </li>

                  {/* <li aria-labelledby="dropdownNavbarLink">
                    <button
                      ref={doubleDropdDownButton}
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                    >
                      Financieros
                      <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      ref={doubleDropdown}
                      className="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-100 transform translate-x-44"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <Link
                            to="cuentaPublica"
                            className="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-400 dark:text-gray-400 dark:hover:text-white"
                            aria-label="cuentaPublica"
                          >
                            Cuenta Pública
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="sevac"
                            className="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-400 dark:text-gray-400 dark:hover:text-white"
                            aria-label="sevac"
                          >
                            SEVAC
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                </ul>
              </div>
            </li>

            <li>
              <button
                ref={dropdownButton4}
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-200 hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-amber-900 md:p-0 md:w-auto dark:text-white md:dark:hover:text-black dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-600 md:dark:hover:bg-transparent"
              >
                Secretaría Ejecutiva
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                ref={dropDownMenu4}
                className="absolute z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-300 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      to="informes_Seslan"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                      aria-label="informes_Seslan"
                    >
                      Informes y Programas Anuales
                    </Link>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button
                      ref={doubleDropdDownButton}
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                    >
                      Comités
                      <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      ref={doubleDropdown}
                      className="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-100 transform translate-x-44"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <Link
                            to="comite_Etica"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                            aria-label="comite_Etica"
                          >
                            Comité de Ética
                          </Link>
                        </li>
                      </ul>
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <Link
                            to="comite_Archivo"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                            aria-label="comite_Etica"
                          >
                            Grupo Interdisciplinario de Archivo
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="comite_Adquisiciones"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                            aria-label="comite_Etica"
                          >
                            SubComité de Adquisiciones
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="Cocodi"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                            aria-label="comite_Etica"
                          >
                            COCODI
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="ConCc"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                      aria-label="ConCc"
                    >
                      Convenios y Cartas Compromiso
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://pdlseslan.mx/"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                      aria-label="pdlseslan.mx"
                    >
                      Plataforma Digital Local
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="seslan_normatividad"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                      aria-label="seslan_normatividad"
                    >
                      Normatividad
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <button
                ref={dropdownButton3}
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-200 hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-amber-900 md:p-0 md:w-auto dark:text-white md:dark:hover:text-black dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-600 md:dark:hover:bg-transparent"
              >
                Órganos Colegiados
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                ref={dropDownMenu3}
                className="absolute z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-300 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      to="c_coordinador"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                      aria-label="c_coordinador"
                    >
                      Comité Coordinador
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="o_gobierno"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                      aria-label="o_gobierno"
                    >
                      Órgano de gobierno
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="c_ejecutiva"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                      aria-label="c_ejecutiva"
                    >
                      Comisión Ejecutiva
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
