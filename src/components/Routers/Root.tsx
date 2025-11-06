import { Outlet } from "react-router-dom";
import { Footer } from "../Principal/footer/Footer";
import { NavBar } from "../Principal/navBar/NavBar";
import { MetadataUpdater } from "./MetadataUpdater";

export const Root = () => {
  return (
    <>
     <MetadataUpdater />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer className=" text-white pt-6 ">
        <Footer />
      </footer>
    </>
  );
};
