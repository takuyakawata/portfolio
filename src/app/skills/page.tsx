// app/skills/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/shadcn/ui/card'
import { Badge } from '@/components/shadcn/ui/badge'
import { Rating } from '@/components/shadcn/ui/rating'
import { Section } from '@/components/shadcn/ui/section'
import { List, ListItem } from '@/components/shadcn/ui/list'
import { H3, Small } from '@/components/shadcn/ui/typography'
import { languageSkills, librarySkills, infraSkills, otherSkills, devStyles, Skill, DevStyle } from './_schema/schema'

export default function SkillsPage() {
    return (
        <Section>
            <Card>
                <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>技術スタック＆スキル</CardDescription>
                </CardHeader>
                <CardContent>
                    <Section className="flex flex-col md:flex-row gap-8">
                        <Section className="flex-1">
                            <H3>言語</H3>
                            <List>
                              {languageSkills.map((skill: Skill) => (
                                <ListItem key={skill.name} className="flex items-center gap-4">
                                  <Small className="w-32 inline-block">{skill.name}</Small>
                                  <Rating value={skill.value} />
                                </ListItem>
                              ))}
                            </List>
                        </Section>
                        <Section className="flex-1">
                            <H3>ライブラリ</H3>
                            <List>
                              {librarySkills.map((skill: Skill) => (
                                <ListItem key={skill.name} className="flex items-center gap-4">
                                  <Small className="w-32 inline-block">{skill.name}</Small>
                                  <Rating value={skill.value} />
                                </ListItem>
                              ))}
                            </List>
                        </Section>
                        <Section className="flex-1">
                            <H3>インフラ</H3>
                            <List>
                              {infraSkills.map((skill: Skill) => (
                                <ListItem key={skill.name} className="flex items-center gap-4">
                                  <Small className="w-32 inline-block">{skill.name}</Small>
                                  <Rating value={skill.value} />
                                </ListItem>
                              ))}
                            </List>
                        </Section>
                        <Section className="flex-1">
                            <H3>その他</H3>
                            <List>
                              {otherSkills.map((skill: Skill) => (
                                <ListItem key={skill.name} className="flex items-center gap-4">
                                  <Small className="w-32 inline-block">{skill.name}</Small>
                                  <Rating value={skill.value} />
                                </ListItem>
                              ))}
                            </List>
                        </Section>
                    </Section>
                    <Section className="mt-8">
                        <H3>開発手法・設計思想</H3>
                        <List className="flex flex-wrap gap-2">
                          {devStyles.map((style: DevStyle) => (
                            <ListItem key={style} className="p-0"><Badge>{style}</Badge></ListItem>
                          ))}
                        </List>
                    </Section>
                </CardContent>
            </Card>
        </Section>
    )
}
