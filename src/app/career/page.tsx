// app/career/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/shadcn/ui/card'
import { Badge } from '@/components/shadcn/ui/badge'

export default function CareerPage() {
    return (
        <section className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Career</CardTitle>
                    <CardDescription>職歴・経歴</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Timeline */}
                    <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6 ml-3">
                        {/* Engineer Position */}
                        <div className="mb-10 relative">
                            <div className="absolute -left-9 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                            <h3 className="text-lg font-semibold">バックエンドエンジニア</h3>
                            <p className="text-sm text-muted-foreground mb-2">2020年 - 現在</p>
                            <p className="mb-2">
                                Web アプリケーション開発を担当。主に Kotlin/Spring Boot と Laravel を使用したバックエンド開発に従事。
                                マイクロサービスアーキテクチャの設計と実装、CI/CD パイプラインの構築なども担当。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {['Kotlin', 'Spring Boot', 'Laravel', 'Next.js', 'マイクロサービス', 'Docker'].map((tech) => (
                                    <Badge key={tech}>{tech}</Badge>
                                ))}
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>予約管理システムのマイクロサービス化</li>
                                <li>REST API の設計と実装</li>
                                <li>CI/CD パイプラインの構築</li>
                                <li>コードレビューとメンタリング</li>
                            </ul>
                        </div>

                        {/* Teacher Position */}
                        <div className="relative">
                            <div className="absolute -left-9 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                            <h3 className="text-lg font-semibold">小学校教員</h3>
                            <p className="text-sm text-muted-foreground mb-2">2015年 - 2020年</p>
                            <p className="mb-2">
                                小学校教員として5年間勤務。主に高学年の担任を担当し、体育や ICT 教育に力を入れた授業を展開。
                                校内の ICT 活用推進担当として、デジタル教材の導入やプログラミング教育の推進にも取り組む。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {['教育', 'ICT活用', '体育', 'プログラミング教育'].map((skill) => (
                                    <Badge key={skill}>{skill}</Badge>
                                ))}
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>学級経営と教科指導</li>
                                <li>体育教育推進担当</li>
                                <li>ICT 活用推進担当</li>
                                <li>プログラミング教育の導入</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
