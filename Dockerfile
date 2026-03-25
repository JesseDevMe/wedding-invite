FROM node:20-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
RUN corepack enable
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM base AS builder
RUN corepack enable
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
ENV NEXT_OUTPUT=standalone
RUN yarn build

FROM base AS runner
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN useradd --create-home --shell /usr/sbin/nologin nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts

# Next.js standalone output (server.js + minimal node_modules)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Prisma CLI for migrate deploy (uses devDependency "prisma")
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

COPY docker/entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh && chown -R nextjs:nextjs /app

USER nextjs
EXPOSE 3000
CMD ["./entrypoint.sh"]

