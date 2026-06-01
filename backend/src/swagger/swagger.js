const swaggerJsdoc =
  require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",

    info: {
      title:
        "Task Manager API",
      version: "1.0.0",
      description:
        "REST API with JWT Authentication and Role Based Access",
    },

    servers: [
      {
        url:
          "http://localhost:5000",
      },
    ],
  },

  apis: [
    "./src/routes/*.js",
  ],
};

const swaggerSpec =
  swaggerJsdoc(
    swaggerOptions
  );

module.exports =
  swaggerSpec;