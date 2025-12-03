FROM node:20-alpine

# 作業ディレクトリ
WORKDIR /app

# 依存関係ファイルのみコピー
COPY package.json package-lock.json* ./

# package-lock があれば npm ci、なければ npm install
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# 残りのソースコードをコピー
COPY . .

# Next.js の開発サーバーは 3000 番を使用
EXPOSE 3000

# 開発サーバー起動
CMD ["npm", "run", "dev"]