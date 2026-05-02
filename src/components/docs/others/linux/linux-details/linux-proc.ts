import dedent from "dedent";

export const detail = dedent(`
    CPU・メモリ・PID情報<br />
    docker stats や top の元情報
    \`\`\`txt
    /proc/cpuinfo
    /proc/meminfo
    /proc/1/cmdline
    \`\`\`

    メモリ確認
    \`\`\`bash
    cat /proc/meminfo
    top
    \`\`\`
`);