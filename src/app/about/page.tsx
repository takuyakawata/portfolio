// app/about/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/shadcn/ui/card'
import { Badge } from '@/components/shadcn/ui/badge'
import { ExperienceSection } from '@/components/shadcn/experience-section'

export default function AboutPage() {
    return (
        <section className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>元小学校教員→バックエンドエンジニアの歩み</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* 教員時代 */}
                    <ExperienceSection
                        title="Teacher"
                        descriptions={[
                            "小学校教員として 5 年間勤務。教育現場での経験を通じて、子どもたちの成長を支えることに情熱を注ぎました。",
                            "特に、体育や ICT活用に力を入れ、子どもたちに新しい学びの機会を提供しました。",
                            "教員としての経験は、チームワークやコミュニケーション能力を高める貴重な機会となりました。",
                            "体育教育推進担当として、運動会や体育祭の企画・運営を担当し、子どもたちの成長を見守りました。",
                            "ICT活用推進担当として、プログラミング教育やデジタル教材の導入を行い、子どもたちの学びをサポートしました。",
                        ]}
                        skills={[
                            '教育',
                            'チームワーク',
                            'コミュニケーション',
                            'ICT活用',
                            '体育教育',
                        ]}
                    />

                    {/* エンジニア時代 */}
                    <ExperienceSection
                        title="Engineer"
                        descriptions={[
                            "業務では Laravel を用いた API 開発や Kotlin/Spring Boot によるマイクロサービス設計を経験。",
                            "Next.js/TypeScript でのサーバーサイドレンダリング対応アプリ構築にも携わりました。",
                            "CI/CD パイプライン構築、Docker コンテナ化、自動テスト導入で品質向上を実現。",
                            "DDD や TDD の手法を取り入れ、開発プロセスの効率化と品質向上に努めました。",
                        ]}
                        skills={[
                            'Laravel',
                            'PHP',
                            'Kotlin',
                            'Spring Boot',
                            'Next.js',
                            'TypeScript',
                            'CI/CD',
                            'Docker',
                            '自動テスト',
                            'マイクロサービス',
                            'サーバーサイドレンダリング',
                            'API開発',
                            'DDD',
                            'TDD',
                        ]}
                    />
                </CardContent>
            </Card>
        </section>
    )
}
