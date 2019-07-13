# TODO

Some todos are located inilne code in comments formated as `// TODO`.

Broader TODOs for refactoring projects are listed below

## Refactor blog actions into services

### Problem

Most of the blog posts are reusing code, no WET code allowed

### Solution

The majority of the methods can be put into a service in the `_services` folder. This includes methods like getBlogPost (reused), editng, and updating blog posts.

## Refactor Commenting Features

### Problem

Commenting is really convuluted, required way more code than it should.

The profile picture displayed on each comment isn't the same as the current user profile pic, when the user profile pic is changed, the comments aren't updated

### Solution

Create a comemnting service to handle comments. FIgure out some way to link user accounts with their respective comments. I did this on yelpcamp, but I don't remember exactly how :(

## Refactor NavBar

### Problem

I made the navbar somewhat readable, didn't change the actual structure, still very jank

### Solution

Just make it so it's not jank. Look at the `nav.component.ts` to see how jank it is
