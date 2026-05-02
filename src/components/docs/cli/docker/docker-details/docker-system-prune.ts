import dedent from "dedent";

export const detail = dedent(`
    ### docker system prune (prune = 不要なものを取り除く)
    不要データ(停止中のコンテナ、未使用のネットワーク、タグ無し（dangling）のイメージ、およびビルドキャッシュ)を安全に一括削除<br />
    「未使用」のものだけを消すため、使用中のコンテナやイメージは残る

    \`\`\`bash
    docker system prune [オプション]
    \`\`\`

    #### オプション
    \`\`\`bash
    -a        : 使われていないイメージすべてを削除
    -f        : 確認プロンプトを非表示
    --volumes : ボリュームも削除
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker image prune -a -f   未使用のイメージ削除
        Deleted Images:
        deleted: sha256:4f2c8d1e7b3a...
        deleted: sha256:8a71d2b9c6ef...

        Total reclaimed space: 542.3MB (解放できたディスク容量)

    docker image prune -a --filter "until=24h"   24時間以上前の未使用イメージだけ削除
    docker volume prune -f                       未使用のボリューム削除
    docker builder prune -a -f                   dockerのキャッシュを削除
    docker network prune -f                      未使用のネットワークを削除
    docker builder prune -a -f                   dockerのキャッシュを削除
    \`\`\`
    ⚠️ 削除されたデータは復元できない。必要なイメージや、停止中だけど後で使いたいコンテナが削除されないよう、使用前にdocker ps -aやdocker imagesで状況を確認
`);