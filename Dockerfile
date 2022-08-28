FROM node:16

RUN apt-get -y update
RUN apt-get install -y ffmpeg
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 3000
CMD [ "yarn", "start" ]