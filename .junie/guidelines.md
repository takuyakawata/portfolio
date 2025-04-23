# Project Guidelines
    
This is a placeholder of the project guidelines for Junie.
Replace this text with any project-level instructions for Junie, e.g.:

* What is the project structure
* Whether Junie should run tests to check the correctness of the proposed solution
* How does Junie run tests (once it requires any non-standard approach)
* Whether Junie should build the project before submitting the result
* Any code-style related instructions

As an option you can ask Junie to create these guidelines for you.

TypeScript で厳格モード（strict: true）を有効化。

パスエイリアス @/* を活用して相対パスを避ける。

ファイル名は PascalCase（ページ/コンポーネント）、ディレクトリは kebab-case。

関数コンポーネントは FC ではなく明示的に型指定不要。

1 ファイル最大 200 行程度に抑え、責務が異なる場合は分割。

UI コンポーネント
shadcn/ui をベースにカスタムコンポーネントを用意。

/components/shadcn/ 配下にラッパーを管理。

ページ固有の小部品は /app/.../Component.tsx にコロケート。

コンポーネントはなるべく 無状態 (stateless) にし、必要なロジックは親ページや hook へ。
