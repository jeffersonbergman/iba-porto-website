import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Calendar } from 'lucide-react';

const ITEMS_PER_PAGE = 9;

interface Article {
  id: string;
  title: string;
  title_en: string | null;
  content: string;
  content_en: string | null;
  featured_image: string | null;
  slug: string;
  published_at: string;
}

const Blog = () => {
  const { t, language } = useLanguage();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchArticles();
  }, [currentPage]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const from = (currentPage - 1) * ITEMS_PER_PAGE;
      const to = from + ITEMS_PER_PAGE - 1;

      const { data, error, count } = await supabase
        .from('articles')
        .select('*', { count: 'exact' })
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .range(from, to);

      if (error) throw error;

      setArticles(data || []);
      setTotalPages(Math.ceil((count || 0) / ITEMS_PER_PAGE));
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTitle = (article: Article) => {
    return language === 'en' && article.title_en ? article.title_en : article.title;
  };

  const getContent = (article: Article) => {
    const content = language === 'en' && article.content_en ? article.content_en : article.content;
    return content.substring(0, 150) + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen from-primary/5 via-background to-secondary/5">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="py-20 bg-gradient-primary">
            <h1 className="text-5xl font-bold mb-4">{t('blog.title')}</h1>
            <p className="text-xl text-muted-foreground">{t('blog.subtitle')}</p>
            <div className="w-20 h-1 bg-primary-foreground mx-auto" />
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">{t('blog.noArticles')}</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {articles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    {article.featured_image && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={article.featured_image}
                          alt={getTitle(article)}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.published_at).toLocaleDateString()}
                      </div>
                      <CardTitle className="line-clamp-2">{getTitle(article)}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {getContent(article)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={`/blog/${article.slug}`}>
                        <Button variant="outline" className="w-full">
                          {t('article.readMore')}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
