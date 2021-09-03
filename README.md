# Udagram Project
This is a cloud application developed alongside the Full Stack JavaScript Developer program at Udacity. Most code developed by Udacity.  It allows us to learn how to set up deployment using AWS (RDS, EB, S3).  The application allows users to register and log into a web client and post photos to the feed.  The link of the application where it was deployed is [Udagram](http://pw-udacity-udagram.s3-website-us-west-1.amazonaws.com/).

![Screenshot](screenshots/udagram_in_browser_1.png)

## Table of Contents
* [General Info](#general-information)
* [Technologies](#technologies)
* [Install dependencies](#install-dependencies)
* [Set up environment](#set-up-environment)
* [Start Server API](#start-server-api)
* [Start FrontEnd](#start-frontend)
* [CircleCI Status Badges](#circleci-status-badges)
* [Purpose of this project](#purpose-of-this-project)
* [Contact](#contact)

## General Information
Patrick would gain his experience deploying the Udagram app that developed by Udacity while learning the following different things:
- AWS Console including RDS, EB, S3
- AWS CLI S3
- EB CLI
- CircleCI
- Set up on local first to see if it works okay before deploying it to AWS

The Udagram app was developed in two separate parts which are:
- Backend API: Node and Express
- Frontend: Angular and Ionic

## Technologies 
- AWS
- CircleCI
- NPM
- Node.js

## Install dependencies
Clone this repository and open your terminal and go to the root of the directory of this project.
Then execute the following at your command or terminal:
```
cd udagram-api
npm install
```
```
cd ..
cd udagram-frontend
npm install
```
## Set up environment
Create '.env' file on the root of udagram and enter the following based on what you have set up on RDS and EB:
- POSTGRES_USERNAME=`username`
- POSTGRES_PASSWORD=`password`
- POSTGRES_DB=`database name`
- POSTGRES_PORT=`port number`
- POSTGRES_HOST=`EB address`
- AWS_REGION=`region`
- AWS_PROFILE=`profile name`
- AWS_BUCKET=`s3 bucket name`
- URL=
- JWT_SECRET=`secret name - any`
- AWS_ACCESS_KEY=`IAM access key`
- AWS_SECRET_KEY=`IAM secret key`

## Start server
Open your terminal and go to the root of the directory of this project.
Then run the following at your command or terminal:
```
cd udagram-api
npm run dev
```
Open new terminal while keeping the other terminal open so API can stay running.
Go to the root of the directory of this project.
Then run the following at your commandd or terminal:
```
cd udagram-frontend
npm run start
```

It will run the web application at http://localhost:4200.  Please go to the browser and type it in the address. It should show as the screenshot above.

## CircleCI 
- Process:
    - config.yml would do the following in the order:
        - Front-End Install: It will update the dependencies of the Front-End
        - Back-End Install: It will update the dependencies of the back-end
        - Front-End Build: It will build the code and produce javascript files into folder called WWW.
        - Back-End Build: It will build the code and produce javascript files into the folder called WWW.
        - Back-End Deploy: It will deploy the zip file to EB.
        - Front-End Deploy: It will deploy the WWW code into S3 as a website hosting.
        

- Status Badge
    - [![CircleCI](https://circleci.com/gh/Patrick-Wallin/udacity-udagram.svg?style=svg)](<LINK>)

## Purpose of this project
This is one of the Full Stack JavaScript Developer's project for Udacity.  It gives Patrick an opportunity to gain experience and knowledge of the deployment including AWS such as EB, RDS, S3, and CircleCI.

## Contact
Created by [Patrick Wallin](https://www.linkedin.com/in/patrick-wallin) - feel free to contact me!
