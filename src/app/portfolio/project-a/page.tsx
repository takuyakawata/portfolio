// app/portfolio/project-a/page.tsx
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/shadcn/ui/card'
import { Button } from '@/components/shadcn/ui/button'
import { Badge } from '@/components/shadcn/ui/badge'

export default function ProjectAPage() {
    return (
        <section className="space-y-8">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle>プロジェクトA</CardTitle>
                            <CardDescription>Kotlin/Spring Boot を使用したマイクロサービス</CardDescription>
                        </div>
                        <Button asChild variant="outline" size="sm">
                            <Link href="/portfolio">戻る</Link>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">プロジェクト概要</h3>
                        <p className="mb-4">
                            マイクロサービスアーキテクチャを採用した予約管理システム。
                            DDD と TDD の手法を取り入れ、品質の高いコードベースを実現しました。
                            複数のサービスが連携して動作し、スケーラビリティと保守性を両立しています。
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">使用技術</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Kotlin', 'Spring Boot', 'MySQL', 'Docker', 'Kubernetes', 'マイクロサービス', 'DDD', 'TDD', 'CI/CD', 'GitHub Actions'].map((tech) => (
                                <Badge key={tech}>{tech}</Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">主な機能</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>ユーザー認証・認可システム</li>
                            <li>予約作成・管理機能</li>
                            <li>リソース管理システム</li>
                            <li>通知サービス（メール、SMS）</li>
                            <li>管理者ダッシュボード</li>
                            <li>レポート生成機能</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">アーキテクチャ</h3>
                        <p className="mb-4">
                            本プロジェクトでは、以下のマイクロサービスを実装しました：
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>認証サービス</strong>: JWT を使用したユーザー認証</li>
                            <li><strong>予約サービス</strong>: 予約の作成・管理を担当</li>
                            <li><strong>リソースサービス</strong>: 予約可能なリソースを管理</li>
                            <li><strong>通知サービス</strong>: メールや SMS による通知を処理</li>
                            <li><strong>API ゲートウェイ</strong>: クライアントからのリクエストをルーティング</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">開発プロセス</h3>
                        <p className="mb-4">
                            DDD（ドメイン駆動設計）と TDD（テスト駆動開発）を採用し、ビジネスロジックを明確に表現したコードベースを構築。
                            CI/CD パイプラインを構築し、自動テストとデプロイを実現しました。
                            GitHub Flow によるブランチ戦略を採用し、コードレビューを徹底しました。
                        </p>
                    </div>

                    <div className="pt-4 border-t">
                        <Button asChild size="sm">
                            <Link href="/portfolio">ポートフォリオに戻る</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
