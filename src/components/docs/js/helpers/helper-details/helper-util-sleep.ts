import dedent from "dedent";

export const detail = dedent(`
    ### sleep
    指定した時間だけ処理を止める（遅延させる）関数

    #### 使用場面
    - ローディング演出
    - アニメーション制御
    - UIステップ遷移
    - 疑似API遅延

    \`\`\`js
    const sleep = (ms) => 
        new Promise(resolve => setTimeout(resolve, ms));
    \`\`\`

    使用例① ローディング演出を作る →「ローディングが一瞬で消える問題」を防ぐ
    \`\`\`js
    async function fetchData() {
        setLoading(true);

        await sleep(1000); // 1秒待つ（演出）

        const res = await fetch("/api/data");
        const data = await res.json();

        setData(data);
        setLoading(false);
    }
    \`\`\`

    使用例② アニメーションのタイミング調整 → ステップUI・チュートリアルに使う
    \`\`\`js
    async function animateSequence() {
        setStep(1);
        await sleep(500);

        setStep(2);
        await sleep(500);

        setStep(3);
    }
    \`\`\`

    使用例③ APIの負荷テスト（疑似遅延）
    \`\`\`js
    async function mockFetch() {
        await sleep(2000);

        return { message: "success" };
    }
    \`\`\`

    使用例④ UIのフェード制御
    \`\`\`js
    async function closeModal() {
        setClosing(true);

        await sleep(300); // アニメーション待ち

        setOpen(false);
        setClosing(false);
    }
    \`\`\`
    ⚠️ 注意点
    - sleep は処理を止めるのではなく「遅延」するだけ
    - CPUは止まらない（非同期）
    - await を付けないと意味がない
`);