FROM node:16.19.1 AS builder

# Set working directory
WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# Copy the rest of the application
COPY . .

# Install dependencies
RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false
RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:16.19.1

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["yarn", "start"]
