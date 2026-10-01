FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG REACT_APP_BUILD_NUMBER
ARG REACT_APP_DEPLOY_DATE
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
