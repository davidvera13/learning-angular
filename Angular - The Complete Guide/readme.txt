Tooltips

To install Angular, Install NodeJs

CLI command lines

TO install

>  npm install -g @angular/cli@latest
>  ng version

To uninstall and reinstall

> npm uninstall -g @angular/cli
> npm cache verify
>  npm install -g @angular/cli@latest
>  ng version


To create a new project: 
> ng new applicationName


To install bootstrap to a project

Depending on the version 

npm i --save bootstrap@3
npm i --save bootstrap@4.6.0

Add the following line 

> "node_modules/bootstrap/dist/css/bootstrap.min.css",

in angular.json file (around line 27 > styles) 


Create a new component: 
We can do manually or by command lines

-------------------------------------------------------



Note: 
the AppComponent is loaded by default because it is refered as app-root

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


In the index.html we find: 

  <app-root></app-root>


In main.ts: angular application will be using appModule


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


And the AppModule loads used components and components that are bootstraped: 

## creating a component

ng g c components/componentName

## commonly use command lines

ng generate <schematic>
ng g <schematic>

This command has the following sub-commands:

 - app-shell
 - application
 - class
 - component
 - config
 - directive
 - enum
 - environments
 - guard
 - interceptor
 - interface
 - library
 - module
 - pipe
 - resolver
 - service
 - service-worker
 - web-worker


