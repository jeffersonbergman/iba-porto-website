import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Heart, Users } from 'lucide-react';
import communityImage from '@/assets/community.jpg';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t('about.title')}</h1>
          <div className="w-20 h-1 bg-primary-foreground mx-auto" />
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src='./img/templo.jpg'
                alt="Church Community"
                className="rounded-lg shadow-elegant w-full max-w-[600] h-auto mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.history')}</h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t('about.historyText')}
              </p>
              <p className="text-lg text-muted-foreground">
                Ao longo de mais de duas décadas, temos sido uma comunidade acolhedora onde
                pessoas de todas as idades e origens encontram um lugar para crescer
                espiritualmente e servir ao próximo com amor e dedicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{t('about.vision')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('about.visionText')}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{t('about.mission')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('about.missionText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('about.leadership')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Pr. Antônio Figueira', role: 'Pastor Principal' },
              { name: 'Ana Figueira', role: 'Diretora EMMA' },
              { name: 'Michael Marcondes', role: 'SAAS (Serviço Apoio Aos Santos)' },
              { name: 'Jackson Martinez', role: 'Coordenador Casas Farol' },
              { name: 'Helena Vamba', role: 'Secretária' },
              { name: 'Abner Dantas', role: 'Administrativo' },
            ].map((leader, index) => (
              <Card key={index} className="text-center shadow-elegant">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{leader.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
