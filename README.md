# CSCI-3308-Fall21-016-01 (Team MacroHard)
# LUMI Website Application

## Project Description
LUMI is designed to help snowboarders / ski enthusiasts ensure their safety and best experience while havimg fun. We provide information of weather predictions and snow levels of different ski resorts that will be shown towards users. In addition, new users will be given a quick survey in order to assign them a certain level of snowboarding experience which then allows them to be recommended to ski resorts that complies with their experience. Not to mention, we'd provide users reviews and ticket links to help them get easy access towards ski resorts and their information.

## Application Architecture
Lumi's front-end is designed using EJS, CSS, and Javascript in which it is coded using the Bootstrap framework. In addition, API calls and information will be dealt through Javascript files.
The backend is structured using NodeJS for server-side calls while using the Express framework. In addition, it uses the npm package manager in order to download and use dependencies throughout the website.
The database of Lumi will be connected through PostGreSQL in which it will be runned through Docker in order to create a container for the database to run.

## Repo Structure
The website will be listed inside the "Lumi" directory where it contains all of the source code for backend, frontend, API, and Database. The "milestone" directory contains all of our milestone progress while completing this website. It starts of on how we developed our idea until how the website is completely structured.

## How to Run
1. Clone git repository into local machine
2. Access the "Lumi" directory
3. Open and Run Docker in the background
4. Run using **docker-compose up -d**
5. Access website through **https://localhost:3000**
6. To stop the server run **docker-compose down --volume**

