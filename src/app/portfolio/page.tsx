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
                            <CardDescription>Kotlin/Spring Boot を使用したapi</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                DDD と TDD の手法を取り入れ、品質の高いコードベースを実現しました。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Kotlin', 'Spring Boot', 'MySQL', 'Docker', 'gradle', 'flyway','DDD', 'TDD'].map((tech) => (
                                    <Badge key={tech}>{tech}</Badge>
                                ))}
                            </div>
                            <Button asChild size="sm">
                                <Link href="https://github.com/takuyakawata/kotlin-graphql-sample">Githubを見る</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Project B */}
                    <Card className="hover:shadow-lg transition">
                        <CardHeader>
                            <CardTitle>プロジェクトB</CardTitle>
                            <CardDescription>Laravel によるアプリケーション</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                Laravelで、backend,livewire,bootstrapでフロント実装。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Laravel', 'PHP', 'MySQL', 'REST API'].map((tech) => (
                                    <Badge key={tech}>{tech}</Badge>
                                ))}
                            </div>
                            <Button asChild size="sm">
                                <Link href="https://github.com/graduate-app-dev13">GitHubを見る</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Project C */}
                    <Card className="hover:shadow-lg transition">
                        <CardHeader>
                            <CardTitle>プロジェクトC</CardTitle>
                            <CardDescription>goによるapiの開発</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                goでapiの実装。entによるORMの実装を行い、インフラ層の明確化。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['go', 'echo', 'MySQL', 'REST API','ent'].map((tech) => (
                                    <Badge key={tech}>{tech}</Badge>
                                ))}
                            </div>
                            <Button asChild size="sm">
                                <Link href="https://github.com/takuyakawata/go-sample">GitHubを見る</Link>
                            </Button>
                            <Link href=""></Link>
                        </CardContent>
                    </Card>

                    {/* Project D */}
                    <Card className="hover:shadow-lg transition">
                        <CardHeader>
                            <CardTitle>プロジェクトC</CardTitle>
                            <CardDescription>Portfolio サイト</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                ポートフォリオ、プロフィールをまとめたサイトを作成。
                                githubのコミット数をグラフ化して表示。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Next.js', 'app router', 'shadcn', 'vercel'].map((tech) => (
                                    <Badge key={tech}>{tech}</Badge>
                                ))}
                            </div>
                            <Button asChild size="sm">
                                <Link href="https://github.com/takuyakawata/portfolio">GitHubを見る</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Project E */}
                    <Card className="hover:shadow-lg transition">
                        <CardHeader>
                            <CardTitle>プロジェクトE</CardTitle>
                            <CardDescription>Qiitaの記事のgithub管理</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                               qiita cliとgithub actionを利用して、markdownの記事をQiitaと連携。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['gihub action','CLI'].map((tech) => (
                                    <Badge key={tech}>{tech}</Badge>
                                ))}
                            </div>
                            <Button asChild size="sm">
                                <Link href="https://github.com/takuyakawata/Qiita-norishio-times">GitHubを見る</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </section>
    )
}
