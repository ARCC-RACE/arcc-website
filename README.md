# ARCC Website

Check out our [Compodoc Documentation](https://jhs-arcc-club.github.io/arcc-website/)

## About This Project

An Angular 8 webpage for the JHS ARCC Club, an autonomous RC car club out of Jesuit High School Sacramento.

Designed and developed by [Caelin Sutch](https://github.com/caelinsutch).

This project is hosted with Firebase webhosting and uses Firestore for the blog. Bootstrap 4 is used for layout, and ngx-markdown is used for markdown support.

## Get started with development

1. Install NVM: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`
2. Install node 12 `nvm install 12`
3. Set node 12 as default`nvm alias default 12`
4. Install Angular CLI globally `npm i -g @angular/cli`
5. Clone repository `git clone https://github.com/JHS-ARCC-Club/arcc-website`
6. Install packages `npm i`
7. Start development server `ng s`

_Optional for Release_

1. Install Compodoc `npm i -g @compodoc/compodoc`
2. Install Firebase `npm i -g firebase` and setup/login to account. For permissions to release, contact Caelin


## Release Cycle

1. Merge into master branch
2. Make sure code is linted `ng lint`
3. Build documentation `npm run doc`
4. Build app `ng build --prod`
5. Deploy `firebase deploy`

If you have any questions, shoot Caelin a question.
