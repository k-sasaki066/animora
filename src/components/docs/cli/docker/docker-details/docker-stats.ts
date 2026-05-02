import dedent from "dedent";

export const detail = dedent(`
    ### docker stats
    DockerコンテナのCPU・メモリ・通信量などをリアルタイムに確認できる

    \`\`\`bash
    docker stats [OPTIONS] [CONTAINER...]
    \`\`\`

    #### 使用場面
    - メモリ食っているコンテナ
    - CPU暴走しているコンテナ
    - 通信中のコンテナ
    - プロセス数が多いコンテナ

    #### 表示項目
    \`\`\`txt
    CONTAINER ID          コンテナ識別ID
    NAME                  コンテナ名
    CPU %                 CPU使用率（ホスト上の CPU とメモリを、コンテナがどれだけ使っているか）
    MEM USAGE / LIMIT     使用中メモリ / 上限
    MEM %                 メモリ使用率
    NET I/O               ネット送受信量(送信 / 受信)
    BLOCK I/O             ディスク読み書き量(ログ・ビルド・キャッシュなど)
    PIDS                  プロセス数(Node / worker / shellなど)
    \`\`\`

    #### オプション
    \`\`\`bash
    docker stats --no-stream      1回だけ表示して終了
    docker stats -a               全てのコンテナを表示（デフォルトは実行中のみ表示）
    docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}"
    表示形式カスタム
    \`\`\`

    #### 実行例
    \`\`\`bash
    docker stats animora-app     特定コンテナだけ監視
    docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}"
        NAME         CPU %   MEM USAGE
        animora-app  5.2%    2.7GiB / 4GiB

    docker stats
        CONTAINER ID   NAME          CPU %   MEM USAGE / LIMIT   MEM %   NET I/O         BLOCK I/O       PIDS
        fb6bd7cb1896   animora-app   5.12%   2.7GiB / 4.0GiB     67.5%   12MB / 5MB      80MB / 30MB     58
    \`\`\`
`);