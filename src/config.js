export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "mmhnotes",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ubtoskhoxl.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_udJetNsWD",
    APP_CLIENT_ID: "2ka7007l9laj2b3p0mdgfebfvo",
    IDENTITY_POOL_ID: "us-east-1:3183b2b8-e007-4828-95da-e42c4fd992e6",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_xwhwusxgzQ4qusctK3bGjSRP00gv3twIXE",
}
