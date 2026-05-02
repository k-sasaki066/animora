import dedent from "dedent";

export const detail = dedent(`
    ### git log
    コミット履歴を確認するコマンド<br />
    Gitで「いつ・誰が・何を変更したか」を見る

    #### 使用場面
    - 過去の変更履歴確認
    - どのコミットで不具合が入ったか調査
    - 作業者確認
    - コミットID取得（reset / cherry-pick / revert 用）
    - ブランチの流れ確認

    \`\`\`bash
    git log
    実行後[q]で終了
    \`\`\`

    #### 表示項目
    \`\`\`bash
    commit fc62fa  コミットID（SHA-1ハッシュ）
    Author         コミット作成者
    Date           コミット日時
    メッセージ       変更内容の説明
    \`\`\`

    #### オプション
    \`\`\`bash
    git log --oneline                1行で見やすく表示
    git log --max-count=5            最新5件だけ
    git log --oneline --graph --all  ブランチ図付き
    git log --stat                   変更ファイル付き
    git log -p                       差分付き
    git log --author="name"          特定ユーザーのみ
    git log --since="2026-04-01"     日付指定
    git log src/app/page.tsx         特定ファイルの履歴
    \`\`\`

    #### 実行例
    \`\`\`bash
    git log
        commit fc62fa675740135219b0b0dd00b3c64789986f97
        Author: k-sasaki <k.sasaki@example.com>
        Date:   Thu Apr 23 21:33:16 2026 +0900

            保存時の再ビルドピーク対策

        commit 2d2e0a2491fa7e90d707e0169a79b07a641a5dbc
        Author: k-sasaki <k.sasaki@example.com>
        Date:   Thu Apr 23 21:32:20 2026 +0900

            Docker設定修正

    git log --oneline
        fc62fa6 保存時の再ビルドピーク対策
        2d2e0a2 Docker設定修正
        5ca8120 README更新
    \`\`\`
`);