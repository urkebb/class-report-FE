# Prerequisites

Make sure you have installed Node which you can find [here](https://nodejs.org/en/download/) and Angular CLI which you can find [here](https://github.com/angular/angular-cli), and this project is using version 13.1.2.
When you do all the above just run npm install to install all the packages.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Description

- This is simple a application to show teacher how his class did today. Actually, now is 24.03.2015 11:30:00 UTC, so the answers after that time therefore not shown yet.
- When start the application teacher will see table where users are listed, together with what exercise they submited, is it correct answer etc.
- Clicking on statistics button, modal will apper with correct answers percent and average progress so teacher can know how well they did exercices and how far his class has progressed.
- Also if teacher want to see informations for particular student, he can search for a user.
- Because of a large amaunt of data, this application has a pagination, so in one database call teacher get certain number of records, and this greatly improves application performance.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
