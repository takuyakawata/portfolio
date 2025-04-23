// app/about/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/shadcn/ui/card'
import { ExperienceSection } from '@/components/shadcn/experience-section'

export default function AboutPage() {
    return (
        <section className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>profile index</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* 自己紹介セクション */}
                    <ExperienceSection
                        title="Self Introduction"
                        descriptions={[
                            "私は、PHPとKotlinを中心にバックエンド開発を行っているエンジニアです。",
                            "新しい技術やトレンドに常に興味を持ち、自己成長を追求しています。チームでの協力やコミュニケーションを大切にし、プロジェクトの成功に貢献することを目指しています。",
                        ]}
                        skills={[
                            'PHP',
                            'Kotlin',
                            'API設計',
                        ]}
                    />
                    {/* 趣味セクション */}
                    <ExperienceSection
                        title="Hobbies & Interests"
                        descriptions={[
                            "ゴルフを趣味として楽しんでいます。自然の中でリフレッシュしながら、スコアの向上に取り組んでいます。",
                            "読書が好きで、特に技術書や自己啓発本を中心に読んでいます。",
                            "旅行も好きで、新しい場所や文化に触れることで視野を広げています。",
                        ]}
                        skills={[
                            'ゴルフ',
                            '読書',
                            '旅行',
                            '料理',
                            '温泉',
                        ]}
                    />
                    {/* 出身地セクション */}
                    <ExperienceSection
                        title="Hometown"
                        descriptions={[
                            "出身地は山口です。生まれも育ちも山口です。",
                        ]}
                        skills={[
                            '山口',
                            '温泉',
                            '自然',
                        ]}
                    />
                    {/* その他 */}
                    <ExperienceSection
                        title="Hometown"
                        descriptions={[
                            "大学時代は、フットサルで活動していました。全国大会も経験させていただきました！チームワークやコミュニケーション能力を磨くことができました。",
                        ]}
                        skills={[
                            'フットサル',
                            'チームワーク',
                            'コミュニケーション',
                        ]}
                    />
                </CardContent>
                {/*おすすめの本の紹介　リンクページ*/}
                <CardHeader>
                    <CardTitle>Books I Recommend</CardTitle>
                    <CardDescription>おすすめの本</CardDescription>
                </CardHeader>
            </Card>
        </section>
    )
}
