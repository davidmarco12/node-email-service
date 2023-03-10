import { SERVER_PORT, SERVER_HOST, DOMAIN } from "../constants";

export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Email Service API",
      version: "1.0.0",
      description: "Email Service API NODEJS",
    },
    servers: [
      {
        url: DOMAIN || SERVER_HOST + ":" + SERVER_PORT,
      },
    ],
    components: {
      securitySchemes: {
        apiKeyAuth: {
          type: "apiKey",
          in: "header",
          description: "Token to access these api endpoints",
          name: "authorization",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};
