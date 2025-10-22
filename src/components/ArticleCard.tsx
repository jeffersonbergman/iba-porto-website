import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ArticleCardProps {
  id: string;
  title: string;
  title_en?: string;
  content: string;
  content_en?: string;
  featured_image?: string;
  published_at: string;
  slug: string;
}

const ArticleCard = ({ id, title, title_en, content, content_en, featured_image, published_at, slug }: ArticleCardProps) => {
  const { language, t } = useLanguage();
  
  const displayTitle = language === 'en' && title_en ? title_en : title;
  const displayContent = language === 'en' && content_en ? content_en : content;
  
  // Strip HTML tags and get first 150 characters
  const getExcerpt = (html: string) => {
    const text = html.replace(/<[^>]*>/g, '');
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {featured_image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={featured_image}
            alt={displayTitle}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <time dateTime={published_at}>{formatDate(published_at)}</time>
        </div>
        <h3 className="text-2xl font-bold line-clamp-2">{displayTitle}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{getExcerpt(displayContent)}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/blog/${slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            {t('article.readMore')}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
