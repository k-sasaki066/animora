import dedent from "dedent";

export const detail = dedent(`
    ### URLSearchParams
    URLからパラメータ取得

    #### 使用場面
    - 商品詳細ページ（id取得）
    - ブログ記事ページ（slug取得）
    - 検索ページ（keyword取得）
    - ページネーション（page取得）
    - 並び替え（sort取得）
    - 絞り込み（category取得）

    \`\`\`js
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    https://example.com/product?id=15
    console.log(id);      //"15"

    https://example.com/search?keyword=javascript
    const keyword = params.get("keyword");    //"javascript"

    https://example.com/posts?id=10&page=2
    const id = params.get("id");
    const page = params.get("page");
    console.log(id, page);      //"10 2"

    値が存在しない場合 null
    数値として扱う場合 const id = Number(params.get("id"));
    \`\`\`
`);