FROM node:18-alpine
WORKDIR /usr/app
COPY ./ /usr/app

RUN npm install -g @angular/cli
RUN npm install
RUN npm run build
CMD ["node","index.js"]