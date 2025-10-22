import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">
              <img src='./img/logofarol.png' style={{maxWidth: '40%', filter: 'brightness(0) invert(1)'}}/>
            </span>
          </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-base">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-base">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="text-sm hover:text-primary transition-base">
                  {t('nav.ministries')}
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm hover:text-primary transition-base">
                  {t('nav.events')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Rua Godinho de Faria, 552<br />4465-150 S. Mamede de Infesta</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+351 229 021 834</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>igreja@ibaporto.pt</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">{t('contact.followUs')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ibaporto"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-base"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/ibaporto/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-base"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@ibaporto"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-base"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/80">
            © {currentYear} Igreja Baptista Antioquia. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
