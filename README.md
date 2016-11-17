# npmTask
how to use npm as task manager and say bye to Gulp &amp; Grunt

![captura de tela](https://cloud.githubusercontent.com/assets/20716736/20402442/e22a528c-ace3-11e6-9489-a51962ba46c6.png)


Use `npm start` to start the .scss and .ts watch

Use `nodemon` to start the app


The idea off this project is to use only npm to manage build and test tasks in dev environment.

This uses the package.json to declare the scripts, actually this isn't required but is very usefull when you want to execute a single step like `npm run build-typescript`.

####Tasks:
* build-typescript: Used to transpile .ts files to .js;
* build-sass: Used to compile .scss files to .css;
* prestart: run chmod +x to script files under npm_sctipts/ folder. This is a necessary step to allow npm to run the files as scripts. This will run automatically before `npm start`;
* start: put all scripts in hook mode;


