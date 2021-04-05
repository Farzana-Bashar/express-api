FROM ubuntu:latest
RUN apt update
RUN apt install nodejs -y
RUN apt install npm -y
WORKDIR /app
COPY package.json /app
RUN npm install
COPY ./src /app/src
# ENTRYPOINT [ "sleep","300"]
ENTRYPOINT ["node","/app/src/index.js"]