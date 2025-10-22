import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  day: string;
  title: string;
  time: string;
}

const ServiceCard = ({ day, title, time }: ServiceCardProps) => {
  return (
    <Card className="transition-base hover:shadow-elegant hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">{day}</p>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-primary font-medium">{time}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
