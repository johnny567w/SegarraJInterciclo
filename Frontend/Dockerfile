FROM node:20-alpine AS build
WORKDIR /app
COPY Angular/Front/package*.json ./
RUN npm install
COPY Angular/Front/ .
RUN npm run build -- --configuration production

FROM httpd:alpine
COPY --from=build /app/dist/Front/browser /usr/local/apache2/htdocs/
COPY apache.conf /usr/local/apache2/conf/conf.d/angular.conf
EXPOSE 80
CMD ["httpd-foreground"]
