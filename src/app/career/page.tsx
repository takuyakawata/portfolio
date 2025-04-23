// app/career/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/shadcn/ui/card'
import { CareerItem } from '@/app/_componets/CareerItem'

// Career data
const careerData = [
    {
        title: "バックエンドエンジニア",
        period: "2020年 - 現在",
        description: "Web アプリケーション開発を担当。主に Kotlin/Spring Boot と Laravel を使用したバックエンド開発に従事。マイクロサービスアーキテクチャの設計と実装、CI/CD パイプラインの構築なども担当。",
        technologies: ['Kotlin', 'Spring Boot', 'Laravel', 'Next.js', 'マイクロサービス', 'Docker'],
        responsibilities: [
            "予約管理システムのマイクロサービス化",
            "REST API の設計と実装",
            "CI/CD パイプラインの構築",
            "コードレビューとメンタリング"
        ]
    },
    {
        title: "小学校教員",
        period: "2015年 - 2020年",
        description: "小学校教員として5年間勤務。主に高学年の担任を担当し、体育や ICT 教育に力を入れた授業を展開。校内の ICT 活用推進担当として、デジタル教材の導入やプログラミング教育の推進にも取り組む。",
        technologies: ['教育', 'ICT活用', '体育', 'プログラミング教育'],
        responsibilities: [
            "学級経営と教科指導",
            "体育教育推進担当",
            "ICT 活用推進担当",
            "プログラミング教育の導入"
        ]
    }
];

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
                        {careerData.map((career, index) => (
                            <CareerItem 
                                key={index}
                                title={career.title}
                                period={career.period}
                                description={career.description}
                                technologies={career.technologies}
                                responsibilities={career.responsibilities}
                                isLast={index === careerData.length - 1}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
