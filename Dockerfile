FROM node:13.8.0

RUN apt-get update && apt-get install -y --no-install-recommends apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install apt-transport-https
RUN apt update && apt install -y --no-install-recommends yarn && \
    rm -rf /var/lib/apt/lists/*
RUN yarn global add serve
RUN mkdir /opt/react-shows

COPY . /opt/react-shows/

WORKDIR /opt/react-shows
RUN yarn install && yarn build

EXPOSE 5000

CMD serve -s build
