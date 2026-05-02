import dedent from "dedent";

export const detail = dedent(`
    ### docker rmi
    ローカルのDockerホストから1つまたは複数のイメージを削除

    \`\`\`bash
    docker rmi [オプション] IMAGE [IMAGE...]
    \`\`\`

    #### オプション
    \`\`\`bash
    -f (--force)   : コンテナで使用中のイメージでも強制的に削除
    -v (--volumes) : コンテナに関連するボリュームも削除
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker rmi nginx
        Untagged: nginx:latest
        Deleted: sha256:605c77e624dd...

    docker rmi a1b2c3d4e5f6 IMAGE ID 指定で削除
        Untagged: myapp:v1
        Deleted: sha256:a1b2c3d4e5f6...

    docker rmi -f [イメージIDまたは名前]
    docker rmi <image1> <image2>   複数削除
    docker image prune             一括削除（使われていないイメージ）
    \`\`\`

    使用中コンテナがある場合
    \`\`\`bash
    Error response from daemon:
    conflict: unable to remove repository reference "コンテナ名"
    (container コンテナID is using its referenced image)
    \`\`\`

    ⚠️ 実行中のコンテナで使用されているイメージは、-f (force) オプションを付けないと削除できない。<br />
    削除されたか確認するには docker images コマンドを使用
`);