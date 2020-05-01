const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-5d3o63hvmjfs",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://fwkahzl8o1.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_DOXQiUArx",
    APP_CLIENT_ID: "7ulo99u6gcutkhvhtvjo0tt590",
    IDENTITY_POOL_ID: "us-east-1:fac837bf-2ed2-4037-aa1f-a1bfc662b685",
  },
  STRIPE_KEY: "pk_test_xwhwusxgzQ4qusctK3bGjSRP00gv3twIXE",
}

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1jxmcr38y3hvb",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://e9tc8dzrz7.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_8OrZQyQlX",
    APP_CLIENT_ID: "42h7l9be8mmrintodr5hhl9jgc",
    IDENTITY_POOL_ID: "us-east-1:f30616b9-5c15-4b67-ba3e-6c73c9ed78fb",
  },
  STRIPE_KEY: "pk_test_xwhwusxgzQ4qusctK3bGjSRP00gv3twIXE",
}

const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
}
