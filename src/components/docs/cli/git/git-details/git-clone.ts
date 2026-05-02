import dedent from "dedent";

export const detail = dedent(`
    ### git clone URL
    リモートリポジトリをローカルPCへ丸ごとコピーする<br />
    GitHub / GitLab / Bitbucket などのプロジェクトを自分のPCで編集できるようにする

    \`\`\`bash
    git clone リポジトリURL (https://github.com/******.git)
    \`\`\`

    #### 実行後取得されるもの

    \`\`\`txt
    sample/
    ├── .git    Git履歴
    ├── src     ソースコード
    ├── package.json
    └── ...
    ブランチ情報
    remote(origin)設定
    \`\`\`

    #### 出力項目の例
    \`\`\`txt
    Cloning into 'xxx'      その名前のフォルダを作成中
    Enumerating objects     取得対象ファイル・履歴数を数えている
    Counting objects        必要データ件数計算
    Compressing objects     サーバー側で圧縮送信準備
    Receiving objects       ローカルへダウンロード中
    Resolving deltas        差分履歴を復元中
    \`\`\`

    #### オプション
    \`\`\`bash
    git clone URL 任意フォルダ名      フォルダ名指定
        git clone https://github.com/user/app.git myapp
        → myapp/ に保存される

    git clone -b develop URL        特定ブランチだけ取得
        git clone -b feature/top https://github.com/user/app.git

    git clone --depth 1 URL shallow clone（最新履歴のみ取得）
    \`\`\`

    #### HTTPSで clone
    \`\`\`bash
    git clone https://github.com/vercel/next.js.git
        Cloning into 'next.js'...
        remote: Enumerating objects: 500000, done.
        remote: Counting objects: 100% (500000/500000), done.
        remote: Compressing objects: 100% (...), done.
        Receiving objects: 100% (...), done.
        Resolving deltas: 100% (...), done.

    \`\`\`

    #### SSHで clone
    \`\`\`bash
    git clone git@github.com:user/project.git
    \`\`\`
    ⚠️ 同名フォルダがあると失敗 (fatal: destination path 'フォルダ名' already exists)<br />
    origin/main (取得したリモートmain)と main (自分のローカルmain)は別物

    #### clone後の流れ(リモートリポジトリを変更する場合)
    \`\`\`bash
    ① 保存したいディレクトリに移動
    ② git clone URL
    ③ リモートリポジトリを作成
        New → リポジトリ名、public、初期設定(全て空白にする)
    ④ 紐付け先を変更
        git remote -v 現在の紐付け先を確認
            origin  https://github.com/コピー元.git (fetch) データを取得するためのURL
            origin  https://github.com/コピー元.git (push) データを送信するためのURL

        git remote set-url origin 新しく作成したリポジトリのURL

        git remote -v 変更されたか確認
            origin  https://github.com/新URL.git (fetch)
            origin  https://github.com/新URL.git (push)

    ⑤ ローカルリポジトリの変更を新しいリポジトリに反映させる
        git status
        git add .
        git status
        git commit -m ""
        git push origin ブランチ名
    \`\`\`
`);