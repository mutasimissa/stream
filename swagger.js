const fs = require("fs");
const { Server } = require("http");
const { version, name, description } = require("./package.json");
const swaggerAutogen = require("swagger-autogen")({openapi: '3.0.0'});

const doc = {
  info: {
    version: version,
    title: name,
    description: description,
  },
  host: "127.0.0.1:3000",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [{}],
  definitions: {
    Error: {
      message: "Error Message"
    }
  }
};

swaggerAutogen("./swagger.json", ['./server.js'], doc);

