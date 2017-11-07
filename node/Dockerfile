# Dockerfile for ICS 211 Atomic Films project Node.js Server

# This is the base image on which all changes will be layered on. Comes from Docker Hub and uses latest mirror/patch release from Node.js LTS 6.x line.

FROM node:6

LABEL maintainer="Tim Evoy <tievo17@gmail.com>"

# Installs nodemon module as a global package, instead of being a dependency in project, because this is a mandantory tool used for development.
RUN npm install -g nodemon npm-check-updates