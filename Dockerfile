# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app
COPY --from=builder /app ./
RUN npm install --omit=dev

CMD ["npm", "start"]
EXPOSE 3000
