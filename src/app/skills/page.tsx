// app/skills/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/shadcn/ui/card'
import { Badge } from '@/components/shadcn/ui/badge'

export default function SkillsPage() {
    return (
        <section className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>技術スタック＆スキル</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">バックエンド</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Kotlin', 'Spring Boot', 'Laravel', 'PHP', 'Java', 'MySQL', 'PostgreSQL', 'API設計', 'マイクロサービス'].map((skill) => (
                                <Badge key={skill}>{skill}</Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">フロントエンド</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'].map((skill) => (
                                <Badge key={skill}>{skill}</Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">DevOps & ツール</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Docker', 'CI/CD', 'Git', 'GitHub', 'AWS', 'Linux', 'Agile', 'Scrum'].map((skill) => (
                                <Badge key={skill}>{skill}</Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">開発手法</h3>
                        <div className="flex flex-wrap gap-2">
                            {['TDD', 'DDD', 'Clean Architecture', 'RESTful API', 'GraphQL'].map((skill) => (
                                <Badge key={skill}>{skill}</Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
