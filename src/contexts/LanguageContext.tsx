import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { pt: 'Início', en: 'Home' },
  'nav.about': { pt: 'Sobre', en: 'About' },
  'nav.ministries': { pt: 'Ministérios', en: 'Ministries' },
  'nav.events': { pt: 'Eventos', en: 'Events' },
  'nav.contact': { pt: 'Contacto', en: 'Contact' },
  
  // Hero
  'hero.title': { pt: 'Igreja Baptista Antioquia', en: 'Baptist Church Antioquia' },
  'hero.subtitle': { pt: 'Pregando a Cristo, Fortalecendo Sua Igreja.', en: 'Preaching Christ, Strengthening His Church.' },
  'hero.cta': { pt: 'Fale conosco', en: 'Talk to us' },
  'hero.learn': { pt: 'Saiba Mais', en: 'Learn More' },
  
  // Services
  'services.title': { pt: 'Horários', en: 'Service Times' },
  'services.sunday': { pt: 'Domingo', en: 'Sunday' },
  'services.tuesday': { pt: 'Terça-feira', en: 'Tuesday' },
  'services.friday': { pt: 'Sexta-feira', en: 'Friday' },
  'services.morning': { pt: 'Escola bíblica', en: 'Morning Service' },
  'services.celebration': { pt: 'Celebração', en: 'Evening Service' },
  'services.lighthouse': { pt: 'Casas Farol', en: 'Prayer Meeting' },
  'services.prayer': { pt: 'Reunião de Horação', en: 'Youth Service' },
  
  // About
  'about.title': { pt: 'Quem somos', en: 'About Us' },
  'about.history': { pt: 'Nossa História', en: 'Our History' },
  'about.vision': { pt: 'Visão', en: 'Vision' },
  'about.mission': { pt: 'Missão', en: 'Mission' },
  'about.leadership': { pt: 'Liderança', en: 'Leadership' },
  'about.historyText': { 
    pt: 'A Igreja Baptista Antioquia é uma igreja local que reconhece e afirma o Senhorio de Jesus Cristo. Portanto, estamos comprometidos a nos esforçar diligentemente pela fé que uma vez por todas foi entregue aos santos por Ele (Judas 3). A essência dessa fé está baseada no Evangelho proclamado pelos Apóstolos, bem como no ensinamento subjacente, que o Senhor ordenou que fosse ensinado a todos os que creem (Mateus 28:19-20).',
    en: 'The Baptist Church Antioquia is a local church that recognizes and affirms the Lordship of Jesus Christ. Therefore, we are committed to diligently contending for the faith that was once for all delivered to the saints by Him (Jude 3). The essence of this faith is founded on the Gospel proclaimed by the Apostles, as well as on the underlying teaching that the Lord commanded to be taught to all who believe (Matthew 28:19–20).'
  },
  'about.visionText': { 
    pt: 'Ser uma igreja que transforma vidas através do amor de Cristo, impactando nossa comunidade e além com a mensagem do evangelho.',
    en: 'To be a church that transforms lives through the love of Christ, impacting our community and beyond with the gospel message.'
  },
  'about.missionText': { 
    pt: 'Nossa missão é adorar a Deus, fazer discípulos, servir com amor e compartilhar as boas novas de Jesus Cristo com todas as pessoas.',
    en: 'Our mission is to worship God, make disciples, serve with love, and share the good news of Jesus Christ with all people.'
  },
  
  // Ministries
  'ministries.title': { pt: 'Nossos Ministérios', en: 'Our Ministries' },
  'ministries.learnMore': { pt: 'Saiba Mais', en: 'Learn More' },
  'ministries.showLess': { pt: 'Mostrar Menos', en: 'Show Less' },
  'ministries.worship': { pt: 'EMMA', en: 'EMMA' },
  'ministries.worshipDesc': { 
    pt: 'Escola de Ministros de Música Antioquia.',
    en: 'Escola de Ministros de Música Antioquia.'
  },
  'ministries.youth': { pt: 'Olímpicos', en: 'Olympic' },
  'ministries.youthDesc': { 
    pt: 'Capacitando a próxima geração com fé e propósito.',
    en: 'Empowering the next generation with faith and purpose.'
  },
  'ministries.children': { pt: 'ETIBA', en: 'ETIBA' },
  'ministries.childrenDesc': { 
    pt: 'Escola de Educação Teológica da Igreja Baptista Antioquia.',
    en: 'Escola de Educação Teológica da Igreja Baptista Antioquia.'
  },
  'ministries.social': { pt: 'SAS', en: 'SAS' },
  'ministries.socialDesc': { 
    pt: 'Serviço de Apoio aos Santos. ',
    en: 'Serviço de Apoio aos Santos.'
  },
  'ministries.prayer': { pt: 'SIS', en: 'SIS' },
  'ministries.prayerDesc': { 
    pt: 'Buscando a Deus através da oração e intercessão.',
    en: 'Seeking God through prayer and intercession.'
  },
  'ministries.couples': { pt: 'Família em Forma', en: 'Família em Forma' },
  'ministries.couplesDesc': { 
    pt: 'Fortalecendo os relacionamentos e famílias em Cristo.',
    en: 'Strengthening relationships and families in Christ.'
  },
  'ministries.missions': { pt: 'Iniciativa Antioquia em Africa', en: 'Iniciativa Antioquia em Africa' },
  'ministries.missionsDesc': { 
    pt: 'Fortalecendo os relacionamentos e famílias em Cristo.',
    en: 'Strengthening relationships and families in Christ.'
  },
  'ministries.sabores': { pt: 'Sabores & Saberes', en: 'Sabores & Saberes' },
  'ministries.saboresDesc': { 
    pt: 'Fortalecendo os relacionamentos e famílias em Cristo.',
    en: 'Strengthening relationships and families in Christ.'
  },
  'ministries.mulheres': { pt: 'Encontro Mulheres', en: 'Encontro Mulheres' },
  'ministries.mulheresDesc': { 
    pt: 'Fortalecendo os relacionamentos e famílias em Cristo.',
    en: 'Strengthening relationships and families in Christ.'
  },
  'ministries.worshipDetails': { 
    pt: 'Nosso ministério de louvor e adoração é dedicado a criar um ambiente onde a presença de Deus é sentida e celebrada. Com uma equipe talentosa de músicos e cantores, buscamos conduzir nossa congregação a momentos profundos de conexão com o divino.\n\nAcreditamos que a música é uma linguagem universal que toca corações e transforma vidas. Através de ensaios semanais, workshops e momentos de adoração espontânea, desenvolvemos não apenas habilidades musicais, mas também uma profunda intimidade com Deus.\n\nSe você tem o dom da música ou simplesmente deseja aprender, junte-se a nós!',
    en: 'Our worship and praise ministry is dedicated to creating an environment where God\'s presence is felt and celebrated. With a talented team of musicians and singers, we seek to lead our congregation into profound moments of connection with the divine.\n\nWe believe that music is a universal language that touches hearts and transforms lives. Through weekly rehearsals, workshops, and moments of spontaneous worship, we develop not only musical skills but also a deep intimacy with God.\n\nIf you have the gift of music or simply want to learn, join us!'
  },
  'ministries.youthDetails': { 
    pt: 'O ministério de jovens é um espaço vibrante onde a próxima geração encontra propósito, comunidade e direção espiritual. Realizamos encontros semanais repletos de adoração, estudo bíblico dinâmico, jogos e discussões relevantes sobre temas que afetam os jovens de hoje.\n\nOrganizamos retiros anuais, acampamentos de verão e eventos especiais que fortalecem laços de amizade e fé. Nosso objetivo é equipar os jovens com ferramentas práticas para viver sua fé no dia a dia, seja na escola, trabalho ou em suas comunidades.\n\nAqui, cada jovem é valorizado e encorajado a descobrir e desenvolver seus dons únicos.',
    en: 'The youth ministry is a vibrant space where the next generation finds purpose, community, and spiritual direction. We hold weekly meetings filled with worship, dynamic Bible study, games, and relevant discussions on topics affecting today\'s youth.\n\nWe organize annual retreats, summer camps, and special events that strengthen bonds of friendship and faith. Our goal is to equip young people with practical tools to live their faith daily, whether at school, work, or in their communities.\n\nHere, each young person is valued and encouraged to discover and develop their unique gifts.'
  },
  'ministries.childrenDetails': { 
    pt: 'O ministério infantil é onde as crianças aprendem sobre Jesus de forma divertida e envolvente. Com atividades lúdicas, histórias bíblicas interativas, música, teatro e jogos educativos, criamos um ambiente seguro e acolhedor onde cada criança pode crescer em sua fé.\n\nNossa equipe dedicada de professores e voluntários é treinada para nutrir o desenvolvimento espiritual das crianças de 0 a 12 anos. Realizamos programas especiais durante festividades, escola bíblica de férias e eventos temáticos ao longo do ano.\n\nAcreditamos que as crianças são capazes de ter um relacionamento real com Deus desde cedo.',
    en: 'The children\'s ministry is where kids learn about Jesus in a fun and engaging way. With playful activities, interactive Bible stories, music, drama, and educational games, we create a safe and welcoming environment where each child can grow in their faith.\n\nOur dedicated team of teachers and volunteers is trained to nurture the spiritual development of children ages 0-12. We hold special programs during holidays, vacation Bible school, and themed events throughout the year.\n\nWe believe that children are capable of having a real relationship with God from an early age.'
  },
  'ministries.socialDetails': { 
    pt: 'O ministério de ação social expressa o amor de Cristo através de ações práticas que impactam nossa comunidade. Organizamos campanhas de doação de alimentos, roupas e materiais de construção, além de visitas a hospitais, asilos e comunidades carentes.\n\nDesenvolvemos projetos contínuos de assistência a famílias em situação de vulnerabilidade, oferecendo apoio material, emocional e espiritual. Realizamos também ações educativas, workshops de capacitação profissional e programas de alfabetização.\n\nNossa missão é ser as mãos e os pés de Jesus, levando esperança e transformação para aqueles que mais precisam.',
    en: 'The social action ministry expresses Christ\'s love through practical actions that impact our community. We organize food, clothing, and building material donation campaigns, as well as visits to hospitals, nursing homes, and underprivileged communities.\n\nWe develop ongoing assistance projects for vulnerable families, offering material, emotional, and spiritual support. We also conduct educational activities, professional training workshops, and literacy programs.\n\nOur mission is to be the hands and feet of Jesus, bringing hope and transformation to those most in need.'
  },
  'ministries.prayerDetails': { 
    pt: 'O ministério de intercessão é o coração pulsante de nossa igreja. Através da oração fervorosa e perseverante, buscamos a face de Deus e intercedemos pelas necessidades de nossa congregação, cidade e nação.\n\nRealizamos vigílias de oração mensais, correntes de intercessão 24/7 e reuniões semanais onde compartilhamos pedidos e testemunhos de orações respondidas. Também oferecemos treinamento em guerra espiritual e desenvolvimento da vida de oração.\n\nAcreditamos que a oração muda situações e libera o poder de Deus sobre a terra. Junte-se a nós nesta batalha espiritual!',
    en: 'The intercession ministry is the beating heart of our church. Through fervent and persevering prayer, we seek God\'s face and intercede for the needs of our congregation, city, and nation.\n\nWe hold monthly prayer vigils, 24/7 prayer chains, and weekly meetings where we share requests and testimonies of answered prayers. We also offer training in spiritual warfare and developing prayer life.\n\nWe believe that prayer changes situations and releases God\'s power on earth. Join us in this spiritual battle!'
  },
  'ministries.couplesDetails': { 
    pt: 'O ministério de casais é dedicado a fortalecer e restaurar relacionamentos conjugais à luz dos princípios bíblicos. Oferecemos encontros mensais, retiros de casais, cursos de preparação para o matrimônio e aconselhamento para casais em crise.\n\nNossos encontros abordam temas como comunicação efetiva, finanças familiares, criação de filhos, intimidade e resolução de conflitos. Criamos um espaço seguro onde casais podem compartilhar desafios e crescer juntos em sua jornada matrimonial.\n\nAcreditamos que casamentos fortes são a base de famílias saudáveis e uma sociedade próspera.',
    en: 'The couples ministry is dedicated to strengthening and restoring marital relationships in light of biblical principles. We offer monthly meetings, couples retreats, marriage preparation courses, and counseling for couples in crisis.\n\nOur meetings address topics such as effective communication, family finances, parenting, intimacy, and conflict resolution. We create a safe space where couples can share challenges and grow together in their marital journey.\n\nWe believe that strong marriages are the foundation of healthy families and a prosperous society.'
  },
  'ministries.missionsDetails': { 
    pt: 'O ministério de casais é dedicado a fortalecer e restaurar relacionamentos conjugais à luz dos princípios bíblicos. Oferecemos encontros mensais, retiros de casais, cursos de preparação para o matrimônio e aconselhamento para casais em crise.\n\nNossos encontros abordam temas como comunicação efetiva, finanças familiares, criação de filhos, intimidade e resolução de conflitos. Criamos um espaço seguro onde casais podem compartilhar desafios e crescer juntos em sua jornada matrimonial.\n\nAcreditamos que casamentos fortes são a base de famílias saudáveis e uma sociedade próspera.',
    en: 'The couples ministry is dedicated to strengthening and restoring marital relationships in light of biblical principles. We offer monthly meetings, couples retreats, marriage preparation courses, and counseling for couples in crisis.\n\nOur meetings address topics such as effective communication, family finances, parenting, intimacy, and conflict resolution. We create a safe space where couples can share challenges and grow together in their marital journey.\n\nWe believe that strong marriages are the foundation of healthy families and a prosperous society.'
  },
  
  // Events
  'events.title': { pt: 'Próximos Eventos', en: 'Upcoming Events' },
  'events.register': { pt: 'Inscrever-se', en: 'Register' },
  'events.noEvents': { pt: 'Não há eventos próximos no momento.', en: 'No upcoming events at this time.' },
  
  // Contact
  'contact.title': { pt: 'Entre em Contato', en: 'Get in Touch' },
  'contact.subtitle': { pt: 'Estamos aqui para você', en: 'We\'re here for you' },
  'contact.name': { pt: 'Nome', en: 'Name' },
  'contact.email': { pt: 'E-mail', en: 'Email' },
  'contact.phone': { pt: 'Telefone', en: 'Phone' },
  'contact.message': { pt: 'Mensagem', en: 'Message' },
  'contact.send': { pt: 'Enviar Mensagem', en: 'Send Message' },
  'contact.address': { pt: 'Endereço', en: 'Address' },
  'contact.schedule': { pt: 'Horários', en: 'Schedule' },
  'contact.followUs': { pt: 'Siga-nos', en: 'Follow Us' },
  
  // Footer
  'footer.about': { pt: 'Sobre', en: 'About' },
  'footer.quickLinks': { pt: 'Links Rápidos', en: 'Quick Links' },
  'footer.contact': { pt: 'Contato', en: 'Contact' },
  'footer.rights': { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
  
  // Spotify
  'spotify.title': { pt: 'Estamos no Spotify', en: 'We\'re on Spotify' },
  'spotify.subtitle': { pt: 'Ouça nossos podcasts e mensagens', en: 'Listen to our podcasts and messages' },
  
  // Cookies
  'cookies.message': { pt: 'Utilizamos cookies para melhorar sua experiência em nosso site.', en: 'We use cookies to improve your experience on our website.' },
  'cookies.accept': { pt: 'Aceitar', en: 'Accept' },
  'cookies.decline': { pt: 'Recusar', en: 'Decline' },
  
  // Auth
  'auth.login': { pt: 'Entrar', en: 'Login' },
  'auth.logout': { pt: 'Sair', en: 'Logout' },
  'auth.signup': { pt: 'Cadastrar', en: 'Sign Up' },
  'auth.email': { pt: 'E-mail', en: 'Email' },
  'auth.password': { pt: 'Senha', en: 'Password' },
  'auth.forgotPassword': { pt: 'Esqueceu a senha?', en: 'Forgot password?' },
  'auth.noAccount': { pt: 'Não tem uma conta?', en: "Don't have an account?" },
  'auth.hasAccount': { pt: 'Já tem uma conta?', en: 'Already have an account?' },
  'auth.welcome': { pt: 'Bem-vindo de volta', en: 'Welcome back' },
  'auth.createAccount': { pt: 'Criar uma conta', en: 'Create an account' },
  'auth.signupSuccess': { pt: 'Conta criada com sucesso!', en: 'Account created successfully!' },
  'auth.loginSuccess': { pt: 'Login realizado com sucesso!', en: 'Login successful!' },
  'auth.logoutSuccess': { pt: 'Logout realizado com sucesso!', en: 'Logout successful!' },
  'auth.error': { pt: 'Erro ao autenticar', en: 'Authentication error' },
  
  // Admin
  'admin.dashboard': { pt: 'Painel Administrativo', en: 'Admin Dashboard' },
  'admin.welcome': { pt: 'Bem-vindo ao painel', en: 'Welcome to the dashboard' },
  'admin.manageArticles': { pt: 'Gerenciar Artigos', en: 'Manage Articles' },
  'admin.articles': { pt: 'Artigos', en: 'Articles' },
  'admin.newArticle': { pt: 'Novo Artigo', en: 'New Article' },
  'admin.editArticle': { pt: 'Editar Artigo', en: 'Edit Article' },
  'admin.deleteArticle': { pt: 'Excluir Artigo', en: 'Delete Article' },
  'admin.confirmDelete': { pt: 'Tem certeza que deseja excluir este artigo?', en: 'Are you sure you want to delete this article?' },
  'admin.articleDeleted': { pt: 'Artigo excluído com sucesso!', en: 'Article deleted successfully!' },
  'admin.articleSaved': { pt: 'Artigo salvo com sucesso!', en: 'Article saved successfully!' },
  
  // Article
  'article.title': { pt: 'Título', en: 'Title' },
  'article.titleEn': { pt: 'Título (EN)', en: 'Title (EN)' },
  'article.content': { pt: 'Conteúdo', en: 'Content' },
  'article.contentEn': { pt: 'Conteúdo (EN)', en: 'Content (EN)' },
  'article.featuredImage': { pt: 'Imagem Destaque', en: 'Featured Image' },
  'article.status': { pt: 'Status', en: 'Status' },
  'article.draft': { pt: 'Rascunho', en: 'Draft' },
  'article.published': { pt: 'Publicado', en: 'Published' },
  'article.author': { pt: 'Autor', en: 'Author' },
  'article.publishedAt': { pt: 'Publicado em', en: 'Published at' },
  'article.save': { pt: 'Salvar', en: 'Save' },
  'article.cancel': { pt: 'Cancelar', en: 'Cancel' },
  'article.readMore': { pt: 'Ler mais', en: 'Read more' },
  'article.viewAll': { pt: 'Ver Todos os Artigos', en: 'View All Articles' },
  'article.recentArticles': { pt: 'Artigos Recentes', en: 'Recent Articles' },
  'article.backToBlog': { pt: 'Voltar', en: 'Back' },
  
  // Blog
  'blog.title': { pt: 'Blog', en: 'Blog' },
  'blog.subtitle': { pt: 'Últimas notícias e atualizações', en: 'Latest news and updates' },
  'blog.noArticles': { pt: 'Nenhum artigo publicado ainda.', en: 'No articles published yet.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
