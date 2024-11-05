# syntax=docker/dockerfile:1
FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY . .

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/pnpm/store cd ui && pnpm install --frozen-lockfile
RUN pnpm build
RUN cd ui && pnpm build

FROM base AS main
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build ./app/build ./build
COPY --from=build ./app/ui/dist ./public

VOLUME [ "/app/data" ]
EXPOSE 3000

ENV DEBUG="blossom,blossom:*"

ENTRYPOINT [ "node", "." ]
