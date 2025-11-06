import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFeaturedNews } from "src/api/calls";
import { NewsFeaturedResponse } from "src/interfaces/principal.interfaces";
import { getPrivateUrl } from '../../../../utils/getPrivateUrl';

const SectionImportantes = () => {
  const [data, setdata] = useState<NewsFeaturedResponse[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getFeaturedNews();
      setdata(response);
    };
    getData();
  }, []);

  return (
    <>
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Lo mas importante
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed ">
              La Secretaría Ejecutiva ha estado haciendo esto en la lucha
              anticorrupción
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {data.map((item) => (
              <Card key={item.slug}>
                <Link
                  to={`/noticias/${item.slug}`}
                  className="group block overflow-hidden border-b border-slate-200 rounded-lg"
                  aria-label="Noticia 1"
                >
                  <img
                    src={getPrivateUrl(item.file)}
                    alt="Noticia 1"
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    <Link
                      to={`/noticias/${item.slug}`}
                      className="hover:text-primary transition-colors"
                      aria-label="Noticia"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-muted-foreground text-justify">
                    {item.excerpt}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionImportantes;
