# ARCC Website

[ARCC](https://arcc.ai)
Check out our [Compodoc Documentation](https://arcc-race.github.io/arcc-website/)

Have problems or feature requests? Leave us an issue in Github Issues and I'll try to get to it as fast as possible.

## About This Project

An Angular 8 webpage for the JHS ARCC Club, an autonomous RC car club out of Jesuit High School Sacramento.

Designed and developed by [Caelin Sutch](https://github.com/caelinsutch).

This project is hosted with Firebase webhosting and uses Firestore for the blog and Angolia for search. Firebase functions is used to sync Firestore with the Angolia database used for searching. Fireauth through Google oAuth is used for creating user accounts. Bootstrap 4 is used for layout, and ngx-markdown is used for markdown support.

I question myself daily why I chose to run an Angular app opposed to a static webpage, but here we are and it's too late for me to redo everything. 

Backend is handled by the library `@angular/fire`, so Firebase functions and http requests aren't used directly in the code. 

## Getting started with development

1. Install NVM: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`
2. Install node 12 `nvm install 12`
3. Set node 12 as default`nvm alias default 12`
4. Install Angular CLI globally `npm i -g @angular/cli`
5. Install Compodoc `npm i -g @compodoc/compodoc`
6. Clone repository `git clone https://github.com/JHS-ARCC-Club/arcc-website`
7. Install packages `npm i`
8. Start development server `ng s`

_Optional for Database and Functions Testing_

1. Install Firebase `npm i -g firebase` and setup/login to account. For permissions to release, contact Caelin

## Fun Stuff To Know Before Starting Development

### Page Format
Each page has its own lazy loaded module.

### HTML Format
Every section in an html page is broken up into a seperate component.

### SCSS
There are some prebuilt scss variables you can import from `_common.scss` in the `/styles` folder. Breakpoint and color variables are included, I'd look at those. In terms of formatting, reference how I did formatting on the home page for scss. I embed structures, an example is included below.

```
.home {
  &__btn {
    background-color: white;
  }
  
  &__block {
    display: block;
    margin: 21em;
  }
}
```

### Included Libraries
I already have bootstrap included for formatting as wells as the scss variables above. For animations, reference animations.css in the project, there are already some prebuilt animation classes in there. 

## Release Cycle

Make sure all your code is linted and built before pushing, Travis will run `ng lint` and `npm run build` before deploying, if code is not properly linted the build will fail and I will be sad.

1. Merge into master branch
2. Build documentation `npm run doc`
3. Push to Master where deploy is handled by Travis `git push`

If you have any questions, shoot Caelin a question.
