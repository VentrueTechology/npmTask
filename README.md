# npmTask
how to use npm as task manager and say bye to Gulp &amp; Grunt

Use `npm start` to start the .scss and .ts watch

Use `nodemon` to start the app


The idea off this project is to use only npm to manage build and test tasks in dev environment.

This uses the package.json to declare the scripts, actually this isn't required but is very usefull when you want to execute a single step.

The script's files must be under -x grant, to ensure that the command `npm run prebuild` must be executed before the first execution and aways after a new script creation
