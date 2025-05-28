FROM node:18-alpine as build
WORKDIR /app
COPY Angular/Front/package*.json ./
RUN npm install
COPY Angular/Front/ .
RUN npm run build --configuration production

FROM httpd:alpine
COPY --from=build /app/dist /usr/local/apache2/htdocs/
COPY apache.conf /usr/local/apache2/conf/httpd.conf
EXPOSE 80
CMD ["httpd-foreground"]
