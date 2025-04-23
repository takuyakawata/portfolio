// app/portfolio/page.tsx
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/shadcn/ui/card'
import { Button } from '@/components/shadcn/ui/button'
import { Badge } from '@/components/shadcn/ui/badge'

export default function PortfolioPage() {
    return (
        <section className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Portfolio</CardTitle>
                    <CardDescription>制作物・プロジェクト一覧</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Project A */}
                    <Card className="hover:shadow-lg transition">
                        <CardHeader>
                            <CardTitle>プロジェクトA</CardTitle>
                            <CardDescription>Kotlin/Spring Boot を使用したマイクロサービス</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                マイクロサービスアーキテクチャを採用した予約管理システム。
                                DDD と TDD の手法を取り入れ、品質の高いコードベースを実現しました。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Kotlin', 'Spring Boot', 'MySQL', 'Docker', 'マイクロサービス', 'DDD', 'TDD'].map((tech) => (
                                    <Badge key={tech}>{tech}</Badge>
                                ))}
                            </div>
                            <Button asChild size="sm">
                                <Link href="/portfolio/project-a">詳細を見る</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Project B */}
                    <Card className="hover:shadow-lg transition">
                        <CardHeader>
                            <CardTitle>プロジェクトB</CardTitle>
                            <CardDescription>Laravel と Next.js によるフルスタックアプリケーション</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                Laravel バックエンドと Next.js フロントエンドを組み合わせた
                                モダンなウェブアプリケーション。REST API と TypeScript の型安全性を活用しています。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Laravel', 'PHP', 'Next.js', 'TypeScript', 'MySQL', 'REST API'].map((tech) => (
                                    <Badge key={tech}>{tech}</Badge>
                                ))}
                            </div>
                            <Button asChild size="sm">
                                <Link href="/portfolio/project-b">詳細を見る</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </section>
    )
}
