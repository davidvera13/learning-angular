# App29NgConfig

## notes:

> file .editorconfig contains information concerning how code should be displayed (indentation... )

> file .gitignore is used for defining files ignored by git 

> angular.json contains all project configuration 

> package.json contains all dependencies and third parties declaration

> tsconfig files: configure compiler and options

## Cli commands 

To get commands : 
> ng help 

Create a project
>ng new 

Generate 
> we can use ng g ... new schematics ng g components mycomponent

Information about command :
> ng server --help

add package: modify also angular files and may be configurabley
> for example: ng add @angular/material
> Once installed : ng generate @Angular/material:nav main

Update angular smartly 
> ng update

Differential loading 
> already configured by default

## multiple project in a single app

let's type 
> ng generate application backend
 we can serve the project: 
> ng serve --project=backend
We can have alternative project structuration : 
> ng new app30-shop-no-app --create-application=false
THis will create a new angular project ... without application by default

## Create a library
> λ ng generate library my-buttons

## in angular json

We have `"schematics": {}`
It allows to : 
- configure how to generate custom blocks / components
- list custom schematics 


build command can be configured
We can also add custom configuration for staging (see angular.json)
We can also configure serve options
`

## Introduction 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
