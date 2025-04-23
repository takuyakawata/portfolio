// app/profile/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/shadcn/ui/card'

export default function ProfilePage() {
    return (
        <section className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>プロフィール情報</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">基本情報</h3>
                            <ul className="space-y-2">
                                <li><strong>名前:</strong> 河田拓也</li>
                                <li><strong>職業:</strong> バックエンドエンジニア</li>
                                <li><strong>居住地:</strong> 東京</li>
                                <li><strong>経歴:</strong> 元小学校教員 → エンジニア</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">趣味・特技</h3>
                            <ul className="space-y-2">
                                <li>プログラミング</li>
                                <li>読書</li>
                                <li>スポーツ観戦</li>
                                <li>旅行</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
