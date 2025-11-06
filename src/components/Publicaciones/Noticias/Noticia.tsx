import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { categoryColors, categoryLabels } from "./news.interface";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsInterface } from "src/interfaces/principal.interfaces";
import { getNewsBySlug } from "src/api/calls";
import { Loading } from "src/components/LoadingSpinner/Loading";
import { Badge } from "@/components/ui/badge";
import { getPrivateUrl } from "../../../utils/getPrivateUrl";
import { formatDate } from "src/utils";

const Noticia = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState<NewsInterface>();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchNews = async () => {
      if (!params.slug || params.slug === "") {
        navigate("/Error", { replace: true });
        return;
      }
      try {
        const response = await getNewsBySlug(params.slug);
        setNews(response);
      } catch (err) {
        navigate("/Error", { replace: true });
      }
    };

    fetchNews();
  }, [params.slug, navigate]);


  if (!news) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/noticias" aria-label="Volver a Noticias">
            <Button variant="ghost" size="sm" className="mb-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Noticias
            </Button>
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge className={categoryColors[news.category]}>
              {categoryLabels[news.category]}
            </Badge>
          </div>

          {news.featured && (
            <Badge className="mb-4 bg-red-500 text-white">
              Noticia Destacada
            </Badge>
          )}

          <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            {news.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6 leading-relaxed text-justify">
            {news.excerpt}
          </p>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Publicado el {formatDate(news.publishDate)}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={getPrivateUrl(news.file)}
            alt={news.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
          <div dangerouslySetInnerHTML={{ __html: news.content }} />
        </div>

        {/* Tags */}
        {news.tags.length > 0 && (
          <div className="border-t pt-6">
            <div className="flex items-center space-x-2 mb-3">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Etiquetas:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};
export default Noticia;
