import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import {  NewsInterface } from "src/interfaces/principal.interfaces";
import { categoryColors, categoryLabels } from "./news.interface";
import { getPrivateUrl } from '../../../utils/getPrivateUrl';
import { formatDate } from "src/utils";

interface NewsCardProps {
  news: NewsInterface;
}


 function NewsCard({ news }: NewsCardProps) {


  return (
    <Link to={`/noticias/${news.slug}`} aria-label="Noticia">
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <img
            src={getPrivateUrl(news.file)}
            alt={news.title}
            className="w-full h-full object-cover"
          />
          {news.featured && (
            <Badge variant="secondary" className="absolute top-2 right-2 bg-red-500 text-white">
              Destacada
            </Badge>
          )}
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-2">
            <Badge className={categoryColors[news.category]}>
              {categoryLabels[news.category]}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(news.publishDate)}
            </div>
          </div>

          <h3 className="text-lg font-semibold line-clamp-2 leading-tight">
            {news.title}
          </h3>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
            {news.excerpt}
          </p>

          {news.tags.length > 0 && (
            <div className="flex items-center gap-1 flex-wrap">
              <Tag className="w-3 h-3 text-muted-foreground" />
              {news.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {news.tags.length > 3 && (
                <span className="text-xs text-muted-foreground">
                  +{news.tags.length - 3} más
                </span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}

export default NewsCard;