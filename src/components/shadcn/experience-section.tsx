import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/shadcn/ui/card'
import { Badge } from '@/components/shadcn/ui/badge'

type ExperienceSectionProps = {
    title: string
    descriptions: string[]
    skills: string[]
}

export function ExperienceSection({
                                      title,
                                      descriptions,
                                      skills,
                                  }: ExperienceSectionProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {descriptions.map((description, index) => (
                    <p key={index}>{description}</p>
                ))}
                <div className="flex flex-wrap gap-2">
                    {skills.map((s) => (
                        <Badge key={s}>
                            {s}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
