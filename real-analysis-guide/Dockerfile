FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache ripgrep

ENV DOCS_NODE_HEAP_MB=8192

COPY package.json ./
RUN npm install

COPY docs ./docs
COPY scripts ./scripts

EXPOSE 31416

CMD ["npm", "run", "docs:dev:docker"]
