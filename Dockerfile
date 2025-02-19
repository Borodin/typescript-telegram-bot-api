FROM node:20.14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV TEST_TELEGRAM_TOKEN=${TEST_TELEGRAM_TOKEN}
ENV TEST_USER_ID=${TEST_USER_ID}
ENV TEST_GROUP_ID=${TEST_GROUP_ID}
ENV TEST_GROUP_MEMBER_ID=${TEST_GROUP_MEMBER_ID}
ENV TEST_CHANNEL_ID=${TEST_CHANNEL_ID}

ENTRYPOINT ["npm"]

CMD ["test"]