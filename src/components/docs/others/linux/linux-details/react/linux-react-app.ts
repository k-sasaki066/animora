import dedent from "dedent";

export const detail = dedent(`
    \`\`\`txt
    /app/src                  コンポーネント・画面・hooks・ロジックなど開発コード本体
    /app/src/components       再利用UIコンポーネント（Button, Modal, Card など）
    /app/src/pages            ルーティングページ（CRA / 一部構成）
    /app/src/app              App Router構成（Next.js系React環境で使用）
    /app/src/hooks            custom hooks（useFetch, useModal など）
    /app/src/context          Context API状態管理ファイル
    /app/public               画像・動画・favicon・robots.txtなど静的公開ファイル
    /app/package.json         依存ライブラリ・scripts・プロジェクト情報
    /app/package-lock.json    npm依存関係の固定バージョン情報
    /app/node_modules         React本体・npmライブラリ一式保存先
    /app/.env                 API URL・公開環境変数・秘密設定値
    /app/.next                Next.jsビルド成果物・キャッシュ（Next.js利用時）
    /app/build                React本番ビルド成果物（create-react-app系）
    /app/dist                 Viteなどの本番ビルド成果物
    \`\`\`
`);