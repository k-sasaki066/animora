import dedent from "dedent";

export const detail = dedent(`
    ### docker compose build
    Dockerfile をもとに image（イメージ）を作成する<br />
    compose.yml に定義された全サービスを build

    - Dockerfile を変更した
    - package.json を変更した
    - npm install 内容を更新した
    - 初回セットアップ
    - キャッシュなしで作り直したい

    \`\`\`bash
    docker compose build [オプション] [--build-arg key=val...] [サービス...]
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker compose build app.                特定サービスだけ build
    docker compose build --no-cache          キャッシュ使わず完全再build
    docker compose build --pull              最新base image取得

    docker compose build --progress=plain    詳細ログ表示
        [+] Building 12.3s (10/10) FINISHED
            => [app internal] load build definition from Dockerfile (Dockerfile読み込み)
            => [app internal] load .dockerignore (除外設定読み込み)
            => [app 1/6] FROM node:20-alpine     (ベースimage取得)
            => [app 2/6] WORKDIR /app            (作業フォルダ設定)
            => [app 3/6] COPY package.json .
            => [app 4/6] RUN npm install         (コマンド実行)
            => [app 5/6] COPY . .                (ファイルコピー)
            => [app 6/6] RUN npm run build
            => exporting to image                (image化)
            => naming to animora-app             (image名付与)

    build後に起動する流れ
        docker compose build
        docker compose up -d
    一発でやるなら
        docker compose up -d --build

    package追加後
        npm install axios
        docker compose build app
    \`\`\`

    #### ⚠️ よくあるエラー表示
    \`\`\`bash
    RUN npm install
    npm ERR!
    → npm install失敗(package.json / lockfile確認)

    COPY failed: file not found
    → Copy失敗(パス間違い)

    no space left on device
    → Docker容量不足(docker system prune -a)
    \`\`\`
`);