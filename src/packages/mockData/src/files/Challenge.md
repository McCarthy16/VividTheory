<h1 align="center">Vivid Theory Programming Assignment</h1>

<div align="center">
  <img src="https://vividtheory.blob.core.windows.net/assignment/vtlogo.svg" alt="VT Logo" width="400" height="400"/>
</div>
<div align="center">
  <strong>A Full Stack Challenge</strong>
</div>
<br />

# Introduction

The purpose of this assignment is to evaluate your full stack application development skills. Principles and best practices of front end design, responsive components, DRY, client server model, git-flow, user experience, and page performance will all be tested.

In a project such as this we want you to focus on the things that matter. Code structure, architecture, design patterns, and overall approach is more important than having a great custom webpack configuration. Focus on the main platform features.

Please spend time creating a simple and elegant solution rather than fighting with a framework!

## Timeline

The suggested time to complete this challenge is 8 hours. Upon receiving the challenge you will have one week to make a final submission.

## Table of Contents

- [Problem Definition](#problem-definition)
- [Tools](#tools)
- [Getting Started](#getting-started)
- [Front End](#front-end)
- [Back End](#back-end)
- [Database](#database)

## Problem Definition

Vivid Theory is in need of a simple yet performant blogging platform for our corporate website. We would like to provide our users and customers an elegant platform for navigating and reading blog posts about the company.

## Tools

The tooling used for this project is mostly up to you. We want you to focus on architecture design and clean code rather than implementing the coolest new framework. We have provided a common stack proposal for this project below. These are suggestions rather than requirements.

The only hard criteria for the stack is the use of Javascript and/or Typescript as the programming language.

### Some stack ideas

- Package manager [yarn](https://yarnpkg.com/)
- Mono Repo manager [lerna](https://github.com/lerna/lerna)
- Linter [eslint](https://eslint.org/)
- Formatter [prettier](https://prettier.io/)
- Front End
  - [React](https://reactjs.org/)
    - [Create React App](https://github.com/facebook/create-react-app)
  - [Material UI](https://material-ui.com/)
- Back End
  - Framework
    - [Nest.js](https://nestjs.com/)
    - [GraphQL](https://graphql.org/)
  - ORM
    - [sequelize](https://sequelize.org/)
    - or [TypeORM](https://typeorm.io/#/)
    - or [Mongoose](https://mongoosejs.com/)
    - or [TypeGoose](https://github.com/szokodiakos/typegoose)
    - or no ORM
- Database
  - [MongoDB](https://www.mongodb.com/)
  - or SQL

#### Acceptable alternatives

- REST over GraphQL
- Express (or any other JS/TS backend framework) over Nest.js
- npm over yarn
- two repos (frontend/backend) over a monorepo
- ... anything else that is reasonable

#### Unacceptable Stack Choices

- Out of date libraries or framework versions
- JQuery
- XML apis
- Old versions of Javascript/Typescript

## Getting Started

Its the journey not the destination!

This project will require some planning and foresight. Take your time to design a sensible solution before jumping right into writing the code. If you have questions or concerns please ask us! We don't bite!

Part of the evaluation process will be incremental progress. Please make frequent commits and branch appropriately. One commit with the entire solution will not count as an acceptable deliverable.

## Front End

The front end for this project will consist of two pages. One page will be a dashboard/list view of the articles available to read. The other page will be for viewing a specific article.

Hint: Use the Material-UI sample code as a starting point!

### Articles Dashboard

An example of what this could look like is provided [here](https://material-ui.com/getting-started/templates/album/). When a user clicks on a card in the album it should take them to the article page.

### Article Page

The second page will be for viewing a specific article. An example of what this could look like is provided [here](https://material-ui.com/getting-started/templates/sticky-footer/)

Hint: Use [this](https://www.npmjs.com/package/markdown-to-jsx) library, or another like it to create the article page!

A challenge of this project is designing a front end that is synchronous with the back end. The front end will need to query the back end to get article information on all the articles for the "blog page" and the query one specific article for the "article page". It is up to you as to how to account for this.

## Back End

The back end server for this project will be responsible for serving article information to the front end. There should be two routes, one for serving all articles and one for serving a specific article.

## Database

The choice of database technology is entirely up to you. Additionally, it could be acceptable to not have a database for some solutions.

Hint: For serving up blog posts there are two commonly used approaches.

- Store the blog posts directly in the database as markdown or text files and query them directly from the backend.
- Store the blog posts in a third party service (Amazon S3, Azure storage, Google Drive, DropBox, etc.) and store the URL to each blog post in the database.

## A note on the Blog Posts

Blog posts are typically markdown files. When creating this deliverable you are free to serve up whatever blog post content you want. Go online and find some sample markdown files and use them for the project. You could even use this README file as one of the blog posts if you want!

# Good Luck and Have Fun!
