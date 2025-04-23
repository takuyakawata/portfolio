import { Badge } from '@/components/shadcn/ui/badge';

type CareerItemProps = {
    title: string;
    period: string;
    description: string;
    technologies: string[];
    responsibilities: string[];
    isLast?: boolean;
};

export function CareerItem({ 
    title, 
    period, 
    description, 
    technologies, 
    responsibilities,
    isLast = false
}: CareerItemProps) {
    return (
        <div className={`relative ${isLast ? '' : 'mb-10'}`}>
            <div className="absolute -left-9 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{period}</p>
            <p className="mb-2">{description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
                {technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                ))}
            </div>
            <ul className="list-disc pl-5 space-y-1">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </div>
    );
}
