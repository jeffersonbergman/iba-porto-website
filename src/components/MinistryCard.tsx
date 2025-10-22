import { useState } from 'react';
import { LucideIcon, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useLanguage } from '@/contexts/LanguageContext';

interface MinistryCardProps {
  icon?: LucideIcon;
  image?:string;
  title: string;
  description: string;
  detailedContent: string;
}

const MinistryCard = ({ icon: Icon, image, title, description, detailedContent }: MinistryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

   return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-100 h-60 rounded-xl bg-primary/5 flex items-center justify-center mb-4 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            Icon && <Icon className="h-10 w-10 text-primary" />
          )}
        </div>

        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <CardContent>
            <p className="text-muted-foreground whitespace-pre-line">
              {detailedContent}
            </p>
          </CardContent>
        </CollapsibleContent>
        <CardFooter>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full">
              {isOpen ? t('ministries.showLess') : t('ministries.learnMore')}
              <ChevronDown
                className={`ml-2 h-4 w-4 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </CollapsibleTrigger>
        </CardFooter>
      </Collapsible>
    </Card>
  );
};

export default MinistryCard;