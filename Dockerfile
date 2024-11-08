# syntax=docker/dockerfile:1
FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY . .

FROM base AS node-gyp
# Install required packages for node-gyp
RUN apk add --no-cache python3 make g++ py3-pip

FROM node-gyp AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM prod-deps AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/pnpm/store cd ui && pnpm install --frozen-lockfile
RUN pnpm build && pnpm build-ui

FROM base AS main
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build ./app/build ./build
COPY --from=build ./app/ui/dist ./public

VOLUME [ "/app/data" ]
EXPOSE 3000

ENV DEBUG="blossom,blossom:*"

ENTRYPOINT [ "node", "." ]
