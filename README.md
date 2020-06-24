# Code Challenge

This repository contains the Front-End code challenge. 

## Running it locally
### Starting the application
The application can be started locally with npm by installing the dependencies with
 `npm install` and starting the development server with `npm run start` on 
 `http://localhost:3000`.
 
### Running the tests
The tests can be run in watch mode with `npm run test`.

## Containerized Deployment
To run the application in a containerized environment, the container image has to be 
built with the command in the root directory of the project: `docker build -t code-challenge .`.
As there is no build environment configured, the tests are executed during the build stage.
When the build stage is finnished, the container can be deployed with `docker run --rm -p 1337:80 code-challenge`
This will expose the application on `http://localhost:1337`.

## Outlook
With further time available, the following improvements could be implemented for the
application:
- Adjust the design according to the wireframe
- Implement sort functionality
- Improve test coverage
- Extract filtering into own component
