// app/page.tsx
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/ui/card'
import { Button } from '@/components/shadcn/ui/button'
import Hero from '@/components/hero'

export default function HomePage() {
    return (
        <main className="space-y-12">
            {/* 1. ヒーロー */}
            <section>
                <Hero />
            </section>

            {/* 2. クイックナビ */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Quick Navigation</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                        { title: 'About', href: '/about' },
                        { title: 'Profile', href: '/profile' },
                        { title: 'Skills', href: '/skills' },
                        { title: 'Portfolio', href: '/portfolio' },
                        { title: 'Career', href: '/career' },
                        { title: 'Contact', href: '/contact' },
                    ].map((nav) => (
                        <Card key={nav.href} className="hover:shadow-lg transition">
                            <CardHeader>
                                <CardTitle>{nav.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button asChild size="sm">
                                    <Link href={nav.href}>Go to {nav.title}</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* 3. ハイライト（例） */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Latest Project</h2>
                <Card className="hover:shadow-lg transition">
                    <CardHeader>
                        <CardTitle>プロジェクトA</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>短い説明文をここに入れて、詳細は Portfolio ページへ誘導。</p>
                        <Button asChild size="sm">
                            <Link href="/portfolio/project-a">View Details</Link>
                        </Button>
                    </CardContent>
                </Card>
            </section>

            {/* 4. フッターPR */}
            <section className="text-center">
                <p>GitHub: <Link href="https://github.com/yourname" className="underline">yourname</Link></p>
            </section>
        </main>
    )
}

