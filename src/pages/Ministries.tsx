import { useLanguage } from '@/contexts/LanguageContext';
import MinistryCard from '@/components/MinistryCard';
import { Music, Users, Baby, Heart, HandHeart, UserCheck } from 'lucide-react';
import worshipImage from '@/assets/worship.jpg';

const Ministries = () => {
  const { t } = useLanguage();

  const ministries = [
    {
      image: './img/emma.jpg',
      title: t('ministries.worship'),
      description: t('ministries.worshipDesc'),
      detailedContent: t('ministries.worshipDetails'),
    },
    {
      image: './img/olimpicos.jpg',
      title: t('ministries.youth'),
      description: t('ministries.youthDesc'),
      detailedContent: t('ministries.youthDetails'),
    },
    {
      image: './img/bible.jpg',
      title: t('ministries.children'),
      description: t('ministries.childrenDesc'),
      detailedContent: t('ministries.childrenDetails'),
    },
    {
      icon: Heart,
      title: t('ministries.social'),
      description: t('ministries.socialDesc'),
      detailedContent: t('ministries.socialDetails'),
    },
    {
      icon: HandHeart,
      title: t('ministries.prayer'),
      description: t('ministries.prayerDesc'),
      detailedContent: t('ministries.prayerDetails'),
    },
    {
      icon: UserCheck,
      title: t('ministries.couples'),
      description: t('ministries.couplesDesc'),
      detailedContent: t('ministries.couplesDetails'),
    },
    {
      image: './img/iniciativa.png',
      title: t('ministries.missions'),
      description: t('ministries.couplesDesc'),
      detailedContent: t('ministries.couplesDetails'),
    },
    {
      image: './img/mulheres.jpg',
      title: t('ministries.mulheres'),
      description: t('ministries.couplesDesc'),
      detailedContent: t('ministries.couplesDetails'),
    },
    {
      icon: UserCheck,
      title: t('ministries.sabores'),
      description: t('ministries.couplesDesc'),
      detailedContent: t('ministries.couplesDetails'),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t('ministries.title')}</h1>
          <div className="w-20 h-1 bg-primary-foreground mx-auto" />
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <MinistryCard
                key={index}
                image={ministry.image}
                icon={ministry.icon}
                title={ministry.title}
                description={ministry.description}
                detailedContent={ministry.detailedContent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ministry */}
      {/* <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t('ministries.worship')}</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Nosso ministério de louvor e adoração é dedicado a criar um ambiente onde a
                presença de Deus é sentida e celebrada. Com uma equipe talentosa de músicos
                e cantores, buscamos conduzir nossa congregação a momentos profundos de
                conexão com o divino.
              </p>
              <p className="text-lg text-muted-foreground">
                Acreditamos que a música é uma linguagem universal que toca corações e
                transforma vidas. Junte-se a nós nos cultos e experimente o poder
                transformador do louvor.
              </p>
            </div>
            <div>
              <img
                src={worshipImage}
                alt="Worship Team"
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Ministries;
