# PROJECT 4 README <!-- omit in toc -->

> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details.

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Impression** is an application where users can share and like photos. They have the ability to upload their own photos to share with other users as well as like other users' photos. They will also have the ability to comment on posts. They can create, edit, browse, and delete photos. I want to use this project as an opportunity to learn about image uploading, authentication, and authorization before the class ends._


<br>

## MVP

_This project will be a functional image upload and sharing application, utilizng at least 3 tables with one-to-many assiciations between them. Users will be able to upload their own photos, comment on any photo, and "like" photos. There will be basic styling using a component library as well as media queries to allow for usability across many different devices._

<br>

### Goals

- _Reach MVP in the designated timeframe_
- _At least 3 tables_
- _Full CRUD for non-user tables_


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Frontend framework for user-facing content._ |
|   React Router   | _Client side routing._ |
|     Ant Design   | _Components library for design elements and image upload._ |
|       Rails      | _Backend framework for database management._ |
|     Firebase     | _Image upload._ |

<br>

### Client (Front End)

#### Wireframes


[Landing Page](https://user-images.githubusercontent.com/19270116/116118090-96bf2280-a682-11eb-9245-0648911f876c.png)

[Sign Up Page](https://user-images.githubusercontent.com/19270116/116118167-a76f9880-a682-11eb-95d9-b8e30f2d0ce7.png)

[Browse Page](https://user-images.githubusercontent.com/19270116/116118249-b5bdb480-a682-11eb-9bff-31c19ddf64a1.png)

[Details Page](https://user-images.githubusercontent.com/19270116/116118295-bfdfb300-a682-11eb-91cd-fe3b2485dfcb.png)

[Add Comment Page](https://user-images.githubusercontent.com/19270116/116118359-d128bf80-a682-11eb-8eea-557f00919a29.png)

[Edit Post](https://user-images.githubusercontent.com/19270116/116118393-dd148180-a682-11eb-8080-f4057fbb6644.png)

[Create Post Page](https://user-images.githubusercontent.com/19270116/116118415-e6055300-a682-11eb-9e1a-704a2096757f.png)


#### Component Tree

[Component Tree](https://user-images.githubusercontent.com/19270116/116121017-cc193f80-a685-11eb-8176-bee0138446ab.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Layout.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
      |__ CreatePost.jsx
      |__ MainContainer.jsx
      |__ Posts.jsx
      |__ PostDetails.jsx
      |__ PostEdit.jsx
      |__ Comment.jsx
|__ services/
      |__ api-config.js
App.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create backend models |    H     |     2 hrs      |      hrs     |     TBD     |
| Create backend controllers |    H     |     2 hrs      |      hrs     |     TBD     |
| Build all backend endpoints |    H     |     4 hrs      |      hrs     |     TBD     |
| Test full CRUD on backend |    H     |     2 hrs      |      hrs     |     TBD     |
| Image upload functionality |    M     |     4 hrs      |      hrs     |     TBD     |
| User authentication |    H     |     3 hrs      |      hrs     |     TBD     |
| Sign in form    |    H     |     2 hrs      |      hrs     |     hrs    |
| Sign up form    |    H     |     2 hrs      |      hrs     |     hrs    |
| "liking" functionality    |    H     |     3 hrs      |      hrs     |     hrs    |
| Construct Layout    |    H     |     3 hrs      |      hrs     |     hrs    |
| Implement Ant Design    |    M     |     2 hrs      |      hrs     |     hrs    |
| Additional CSS    |    M     |     5 hrs      |      hrs     |     hrs    |
| Edit post functionality    |    H     |     2 hrs      |      hrs     |     hrs    |
| Edit post authorization    |    H     |     4 hrs      |      hrs     |     hrs    |
| Create post functionality    |    H     |     3 hrs      |      hrs     |     hrs    |
| Ability to comment    |    M     |     4 hrs      |      hrs     |     hrs    |
| TOTAL               |          |     47 hrs      |      hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model
![P4 ERD](https://user-images.githubusercontent.com/19270116/116092842-c44ca180-a66b-11eb-8526-efd5029af39f.png)

<br>

***

## Post-MVP

> I would like to be able to have users follow each other so that they can curate their specific experience. I would also like to have a list of all of the photos that a user has liked. I would render this to another page so that a user can revisit previously liked photos.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
