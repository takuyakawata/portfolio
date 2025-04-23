// app/contact/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/shadcn/ui/card'
import { Button } from '@/components/shadcn/ui/button'

export default function ContactPage() {
    return (
        <section className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Contact</CardTitle>
                    <CardDescription>お問い合わせ</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="mb-4">
                        お仕事のご依頼やご質問など、お気軽にお問い合わせください。
                        以下のフォームからメッセージを送信いただくか、SNSでも連絡可能です。
                    </p>

                    {/* Contact Form */}
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    お名前
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800"
                                    placeholder="山田 太郎"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    メールアドレス
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800"
                                    placeholder="example@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">
                                件名
                            </label>
                            <input
                                id="subject"
                                type="text"
                                className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800"
                                placeholder="お問い合わせ内容の件名"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                メッセージ
                            </label>
                            <textarea
                                id="message"
                                className="h-32 w-full rounded-md border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800"
                                placeholder="お問い合わせ内容を入力してください"
                            ></textarea>
                        </div>
                        <Button type="submit" className="w-full sm:w-auto">
                            送信する
                        </Button>
                    </form>

                    {/* Social Links */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-2">SNS</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/yourname" className="text-blue-600 hover:underline dark:text-blue-400">
                                GitHub
                            </a>
                            <a href="https://twitter.com/yourname" className="text-blue-600 hover:underline dark:text-blue-400">
                                Twitter
                            </a>
                            <a href="https://linkedin.com/in/yourname" className="text-blue-600 hover:underline dark:text-blue-400">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
