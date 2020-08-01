# Resume Api

- Resume Api is an node.js based project.

# Code overview

### Getting started
Resume Api is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 3000, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd resume-api
docker build -t henriquepappis/resume-api -f docker/Dockerfile .
```
This will create the resume-api image.
Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 3000 of the host to port 3000 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d --name resume-api -p 3000:3000  <youruser>/resume-api
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:3000
```

### Dependencies

Resume Api uses a number of open source projects to work properly:

* [Express] - fast node.js network app framework [https://github.com/expressjs/express]
* [dotenv] - loads environment variables from a .env file [https://github.com/motdotla/dotenv]

### Application structure
* serve.js - The entry point of the application.
* docker/ - This folder contains
* config/ - This folder contains configuration for environment variables.
