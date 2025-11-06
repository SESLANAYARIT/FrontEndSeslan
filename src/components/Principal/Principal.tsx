import { loadable } from "../Loadable/loadable";

const CarouselPage = loadable(() => import("./carousel/CarouselPage"));
const SectionImportantes = loadable(
  () => import("./sectionImportantes/Section1/SectionImportantes")
);
const SliderInfinito = loadable(
  () => import("./SliderInfinito/SliderInfinito")
);
const SectionDestacados = loadable(
  () => import("./sectionImportantes/Section2/SectionDestacados")
);

export const Principal = () => {
  return (
    <>
      <section className="w-full pt-6 md:pt-4 lg:pt-16">
        <CarouselPage />
      </section>

      <section className="w-full pt-10 md:pt-12 lg:pt-16 px-4 md:px-6">
        <SectionImportantes />
      </section>

      <section className="w-full pt-10 md:pt-12 lg:pt-16 px-4 md:px-6">
        <SliderInfinito />
      </section>

      <aside className="border-t px-4 md:px-6 pt-10 lg:pt-16">
        <SectionDestacados />
      </aside>
    </>
  );
};