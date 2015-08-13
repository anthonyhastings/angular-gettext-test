# Angular Gettext

## Introduction
This repository showcases the full process of handling translations via an Angular gettext implementation called [`angular-gettext`](https://angular-gettext.rocketeer.be/). Translations can be extracted and compiled via their toolset called [`gulp-angular-gettext`](https://github.com/gabegorelick/gulp-angular-gettext).

## Installation
```npm install && gulp build && gulp server```

## Usage

### Extracting to `.pot` file
```
gulp gettext-extract;
```

### Compile `.po` files into angular-gettext modules.
```
gulp gettext-compile;
```