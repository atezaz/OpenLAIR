#stage 1
FROM node:16-alpine3.16 as node
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install 
#RUN npm install -g @angular/cli@8.3.29

RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/frontend /usr/share/nginx/html

#EXPOSE 4200
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
