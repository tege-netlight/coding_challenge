FROM node:lts-stretch as build

WORKDIR /app
COPY . /app
ENV CI=true
RUN npm install && npm run test

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]