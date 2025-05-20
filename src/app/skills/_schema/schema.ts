export type Skill = { name: string; value: number };
export type DevStyle = string;

export const languageSkills: Skill[] = [
  { name: 'PHP', value: 4 },
  { name: 'Kotlin', value: 4 },
  { name: 'Go', value: 3 },
  { name: 'JavaScript', value: 3 },
  { name: 'TypeScript', value: 3 },
  { name: 'HTML/CSS', value: 2.5 },
];
export const librarySkills: Skill[] = [
  { name: 'Laravel', value: 4 },
  { name: 'Spring Boot', value: 4 },
  { name: 'React', value: 3 },
  { name: 'Next.js', value: 3 },
  { name: 'GraphQL', value: 4 },
  { name: 'REST API', value: 4 },
  { name: 'jQuery', value: 3 },
  { name: 'Bootstrap', value: 3 },
];
export const infraSkills: Skill[] = [
  { name: 'Docker', value: 3.5 },
  { name: 'AWS', value: 3 },
  { name: 'GitHub Actions', value: 3 },
];
export const otherSkills: Skill[] = [
  { name: 'MySQL', value: 4 },
  { name: 'Postman', value: 4 },
  { name: 'Cursor', value: 3 },
  { name: 'Junie', value: 3 },
  { name: 'Devin', value: 3 },
];
export const devStyles: DevStyle[] = [
  'DDD',
  'TDD',
  'アジャイル開発',
  'スクラム開発',
];
export {};
