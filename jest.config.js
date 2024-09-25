/* eslint-disable no-undef */
/** @type {import('jest').Config} */

const config = {
  testEnvironment: "jsdom",
  roots: ["./src"],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

module.exports = config;
