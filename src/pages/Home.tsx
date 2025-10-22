import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import ArticleCard from '@/components/ArticleCard';
import heroImage from '@/assets/hero-church.jpg';
import communityImage from '@/assets/community.jpg';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const Home = () => {
  const { t } = useLanguage();
  const [recentArticles, setRecentArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentArticles();
  }, []);

  const fetchRecentArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('status', 'published')
        .not('published_at', 'is', null)
        .order('published_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setRecentArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('./img/ibaportohome.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/contact">
              <Button size="lg" className="group">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-base" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                {t('hero.learn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <ServiceCard
              day={t('services.sunday')}
              title={t('services.morning')}
              time="10:00"
            />
            <ServiceCard
              day={t('services.sunday')}
              title={t('services.celebration')}
              time="11:30"
            />
            <ServiceCard
              day={t('services.friday')}
              title={t('services.lighthouse')}
              time="20:30"
            />
            <ServiceCard
              day={t('services.tuesday')}
              title={t('services.prayer')}
              time="16:00 e 21:00"
            />
          </div>
        </div>
      </section>

      {/* Spotify Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-3">{t('spotify.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('spotify.subtitle')}</p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="max-w-3xl mx-auto">
            <iframe 
              data-testid="embed-iframe" 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/show/03TukQG10fmCgrVlY4ayvE?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify Podcast"
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('about.historyText')}
              </p>
              <Link to="/about">
                <Button variant="default" className="group">
                  {t('hero.learn')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-base" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src='./img/ibafrente.png'
                alt="Community"
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      {!loading && recentArticles.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{t('article.recentArticles')}</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {recentArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  title_en={article.title_en}
                  content={article.content}
                  content_en={article.content_en}
                  featured_image={article.featured_image}
                  published_at={article.published_at}
                  slug={article.slug}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/blog">
                <Button variant="outline" size="lg" className="group">
                  {t('article.viewAll')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-base" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('hero.subtitle')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('about.missionText')}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              {t('nav.contact')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
