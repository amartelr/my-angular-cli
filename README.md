# Playing with angular 2 framework and bootstrap 4

[![N|Angular](https://raw.githubusercontent.com/angular/angular.js/master/images/logo/AngularJS-Shield.exports/AngularJS-Shield-small.png)](https://angular.io/)

## Build and Running

```sh
ng build
ng serve
```

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# General Steps

## Installing bootstrap version 4 

```sh
npm install jquery --save
npm install bootstrap@next --save 
```

Some javascript libraries need to be added to the global scope, and loaded as if they were in a script tag.
We can do this using the apps[0].scripts and apps[0].styles properties of angular-cli.json


## Adding navbar component, samples [bootstrap 4](http://v4-alpha.getbootstrap.com)

```sh
cd src\app
ng g component ./components/navbar
```

## Routing home component
```sh
ng g component ./components/home
```

## Routing about component
```sh
ng g component ./components/about
```

## Carousel component
```sh
ng g component ./components/carousel
```

## Footer component
```sh
ng g component ./components/footer
```
