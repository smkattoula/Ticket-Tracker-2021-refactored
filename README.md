# Ticket-Tracker-2021-refactored
A full-stack ticket tracker application that allows users to create tickets to track their bugs, issues, or tasks to complete. This is a new, improved and refactored version of my Ticket Tracker application on my personal portfolio. Implements ES6+ modern coding practices, React Hooks, Async/Await promises, Redux-like state management (Context API), MongoDB for persistent data storage, and NodeJS/Express backend.   

![Image](https://github.com/smkattoula/smkattoula.github.io/blob/master/assets/img/ticket-tracker-refactored.png)

## Installation 
Clone this repo to your text editor and `cd into the root folder`. In the command line, go ahead and run `npm install`. Afterwards, `cd into the client folder` and run `npm install` as well. This will install all of the dependacies for both server side and client side package.json. You can then `cd back into the root folder` and run `npm run dev` to start up the nodemon server (for real-time error handling) and the development server (to view the app in localhost on your browser). 

## System Requirement Specification (SRS)
### Overview
I am a full-stack web developer specializing in the MERN framework and currently seeking opportunities for full-time employment. My goal is to create high-quality web and mobile applications that help to solve real world business problems and engineer creative solutions to excell your company in the marketplace. The scope of this project is fairly small and simple, but provides a functional software that allows anyone to create tickets to track their bugs, issues, or tasks to complete. This application was originally designed for software developers to track their bugs, however, it can easily be implemented as a Customer Support ticketing system or Task Manager for professional business's. Ticket Tracker implements REST API's with axios, CRUD functionality, JSON, user authentication using JWT and bcryptJS, MongoDB with mongoose, state management using Context API, styling of the UI with CSS frameworks such as bootstrap/react-bootstrap, use of React libraries such as BrowserRouter, React-Router-Dom, Hooks, Bootstrap/Reactstrap and more. 

### Project Developer

**Shaker Kattoula - Full Stack Web Developer - shakerkattoula.com**

### Goal
* Manage and organize your employee's daily tasks to boost productivity and work flow.
* Provide a simple and convenient customer support ticketing system in which users can submit forms for any issue, allowing you to more effectively communicate to and serve your clientele.
* Operate as a bug tracker for software developers to track their bugs for a more efficient debugging experience. 


### Phases
* Phase 1: Backend - MongoDB with express API and mongoose, Models, API routes, CRUD functionality.
* Phase 2: Frontend - React, UI design with CSS and Bootstrap/React-Bootstrap, connecting frontend to backend via axios.
* Phase 3: User Authentication - JSON Web Token(JWT), bcryptJS, form validations, error handling, auth middleware.
* Phase 4: Review - Debugging, refactoring, improvements, and documentation.
* Phase 5: Deployment - Prepare build and deploy to Heroku.

### User Stories
* As a user, I WANT to be able to register my own account with a name, email and password so that I can have access to my own personal ticket tracker.
* As a user, I WANT to be able to log into my own account with my email and password.
* As a user, I WANT to be able to log out of my own account.
* As a user, I WANT to be able to create a ticket wherein each ticket item includes a subject, category, priority, description, status and date so that I can keep track of my bugs, issues, or tasks to complete.
* As a user, I WANT to be able to see a list of all of my tickets.
* As a user, I WANT to be able to delete an existing ticket.
* As a user, I WANT to be able to edit an existing ticket.
