## CLI Deep Dive & Troubleshooting

### Updating NodeJS:

Go to nodejs.org and download the latest version - uninstall (all) installed versions on your machine first.

### Updating npm:

`Run [sudo] npm install -g npm  (sudo  is only required on Mac/ Linux)`

### Updating the CLI

```
    [sudo] npm uninstall -g angular-cli @angular/cli `
    npm cache verify 
    [sudo] npm install -g @angular/cli 
    ng version
```

### Create a new application

    `ng new app01-startup`

WIll create a new angular application.


### Adding boostrap CSS to a project

Depending on the version 

    `npm i --save bootstrap@3`
    `npm i --save bootstrap@4.6.0`

Add the following line 

> `"node_modules/bootstrap/dist/css/bootstrap.min.css",`

in angular.json file (around line 27 > styles) 


### Create a new component: 
We can do manually or by command lines


