```diff
+ if you like this project, Please consider,
- following me on GitHub & a generous STAR * to this repository.
```
<h2>Visitor Management App</h2>
<h4>An Electronic Visitor register App for storing Host & Guest Records, Picture Attendance with GPS Locations</h4>
<h2>Objective</h2>
Store all visitor & host records electronically.<br/>
1. Paperless Records for Visitors and Host<br/>
2. Save Visits with Pictures and GPS Locations<br/>
3. Online and/or Offline App<br/>
4. One App for multiple platforms (iOS, Android, Desktop, Cloud etc.)<br/>
5. Unlimited Storage (only limited to server/database hosting).<br/>
6. Store and Access millions of records instantly.<br/>
7. Paperless and Mobile on-premise App.<br/>
8. Instant access to ALL guest/host historical records at guest check-in.<br/>
9. No Thumb expressions or card punching to verify identify.<br/>
10. Auto Face Recognition (Pro version only).<br/>

<i>send an email to info@elishconsulting.com for Pro version enquiries.</i>
<h2><a href="https://www.youtube.com/playlist?list=PLp0TENYyY8lEZgC9Ug2RwOr62NLrwaCAr">Video Tutorials Link!</a></h2>
<h2>Tools: </h2>
<b>front-end:</b> Angular 7, HTML CSS JS & Bootstrap<br/>
<b>back-end:</b> MONGODB (free)<br/>
Pro Version: MYSQL/PostGre/Oracle/MS SQL, CouchDB, Firebase <br/>
<b>middleware:</b> JWT, CORS, NodeJS, Express etc.<br/>
<h2>Let's get started :-</h2>
<h2>Front end :-</h2>
At first, We are going to work on a static website using HTML, CSS and Bootstrap.<br/>
We are going to use part of this website in our Angular App.
<br/>
If you are using VisualCode editor, please install a live-server extension.<br/>
Otherwise, you can use any webserver to host your website.<br/>
Now, let's create index.html, login.html, signup.html, aboutus.html, dashboard.html, reports.html and settings.html and host this to your webserver.<br/>
At this point, we only want to make sure that individual html pages work fine only, these pages don't need to be connected or have any business logic because we are going to write all business, routing and other logic in Angular 7.
<br/><br/>
Before we start, Please make sure you have latest version of node js installed.<br/>
Let's head out to https://nodejs.org/en/ and grab latest nodejs.<br/>
Once you have nodejs installed, open command prompt/terminal window.<br/>
$ node -v // make sure, this command comes back with a node version<br/>
$ npm -v // make sure, this command comes back with a npm version<br/><br/>

$ npm install -g @angular/cli<br/>
$ mkdir app<br/>
$ cd app<br/>
$ mkdir client<br/>
$ mkdir server<br/>
$ cd client<br/>
$ ng new GPS-Mobile-Tracker<br/>
$ cd GPS-Mobile-Tracker<br/>
$ ng serve<br/>

<h2>Back end :-</h2>
$ cd server<br/>
$ npm init<br/>
$ npm install --save nodemon cors express dotenv jsonwebtoken mongoose bcrypt@3.0.1 body-parser<br/>
$ nodemon app<br/>
<br/>
