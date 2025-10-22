import { useLanguage } from '@/contexts/LanguageContext';
import EventCard from '@/components/EventCard';

const Events = () => {
  const { t } = useLanguage();

  const events = [
    {
      title: 'Conferência de Avivamento',
      date: '15-17 de Dezembro, 2025',
      time: '19:00',
      location: 'Santuário Principal',
      description:
        'Três dias de adoração, ensinamento e renovação espiritual com pregadores convidados de todo o país.',
    },
    {
      title: 'Retiro de Jovens',
      date: '5-7 de Janeiro, 2026',
      time: '16:00',
      location: 'Chácara Monte Sinai',
      description:
        'Um final de semana especial para jovens conectarem-se com Deus e uns com os outros em um ambiente de natureza.',
    },
    {
      title: 'Culto ao Ar Livre',
      date: '20 de Janeiro, 2026',
      time: '17:00',
      location: 'Parque Central',
      description:
        'Celebração especial ao ar livre com música, mensagem e confraternização para toda a família.',
    },
    {
      title: 'Ação Social Comunitária',
      date: '10 de Fevereiro, 2026',
      time: '09:00',
      location: 'Centro Comunitário',
      description:
        'Dia dedicado a servir nossa comunidade com distribuição de alimentos, roupas e atendimento médico gratuito.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t('events.title')}</h1>
          <div className="w-20 h-1 bg-primary-foreground mx-auto" />
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {events.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">{t('events.noEvents')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
