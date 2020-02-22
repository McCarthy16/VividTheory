import {Article} from "./../../shared/lib/Article";
export default function mockData(): Article[]{
	var articles: Article[]
	articles = [{ id: 1, url:"Article/01", title: 'Article 01', preview:"This is Article 02", body: 'This is Article 01', day:"21", month:"FEB"},
	    					{ id: 2, url:"Article/ProgrammingAssignment", title: 'Vivid Theory Programming Assignment', day:"20", month:"FEB",preview:"A Full Stack Challenge",body: `<h1 align="center">Vivid Theory Programming Assignment</h1>

		<div align="center">
		  <img src="https://vividtheory.blob.core.windows.net/assignment/vtlogo.svg" alt="VT Logo" width="400" height="400"/>
		</div>
		<div align="center">
		  <strong>A Full Stack Challenge</strong>
		</div>
		<p><br /></p>
		<h1 id="introduction">Introduction</h1>
		<p>The purpose of this assignment is to evaluate your full stack application development skills. Principles and best practices of front end design, responsive components, DRY, client server model, git-flow, user experience, and page performance will all be tested.</p>
		<p>In a project such as this we want you to focus on the things that matter. Code structure, architecture, design patterns, and overall approach is more important than having a great custom webpack configuration. Focus on the main platform features.</p>
		<p>Please spend time creating a simple and elegant solution rather than fighting with a framework!</p>
		<h2 id="timeline">Timeline</h2>
		<p>The suggested time to complete this challenge is 8 hours. Upon receiving the challenge you will have one week to make a final submission.</p>
		<h2 id="tableofcontents">Table of Contents</h2>
		<ul>
		<li><a href="#problem-definition">Problem Definition</a></li>
		<li><a href="#tools">Tools</a></li>
		<li><a href="#getting-started">Getting Started</a></li>
		<li><a href="#front-end">Front End</a></li>
		<li><a href="#back-end">Back End</a></li>
		<li><a href="#database">Database</a></li>
		</ul>
		<h2 id="problemdefinition">Problem Definition</h2>
		<p>Vivid Theory is in need of a simple yet performant blogging platform for our corporate website. We would like to provide our users and customers an elegant platform for navigating and reading blog posts about the company.</p>
		<h2 id="tools">Tools</h2>
		<p>The tooling used for this project is mostly up to you. We want you to focus on architecture design and clean code rather than implementing the coolest new framework. We have provided a common stack proposal for this project below. These are suggestions rather than requirements.</p>
		<p>The only hard criteria for the stack is the use of Javascript and/or Typescript as the programming language.</p>
		<h3 id="somestackideas">Some stack ideas</h3>
		<ul>
		<li>Package manager <a href="https://yarnpkg.com/">yarn</a></li>
		<li>Mono Repo manager <a href="https://github.com/lerna/lerna">lerna</a></li>
		<li>Linter <a href="https://eslint.org/">eslint</a></li>
		<li>Formatter <a href="https://prettier.io/">prettier</a></li>
		<li>Front End
		<ul>
		<li><a href="https://reactjs.org/">React</a></li>
		<li><a href="https://github.com/facebook/create-react-app">Create React App</a></li>
		<li><a href="https://material-ui.com/">Material UI</a></li></ul>
		</li>
		<li>Back End
		<ul>
		<li>Framework</li>
		<li><a href="https://nestjs.com/">Nest.js</a></li>
		<li><a href="https://graphql.org/">GraphQL</a></li>
		<li>ORM</li>
		<li><a href="https://sequelize.org/">sequelize</a></li>
		<li>or <a href="https://typeorm.io/#/">TypeORM</a></li>
		<li>or <a href="https://mongoosejs.com/">Mongoose</a></li>
		<li>or <a href="https://github.com/szokodiakos/typegoose">TypeGoose</a></li>
		<li>or no ORM</li></ul>
		</li>
		<li>Database
		<ul>
		<li><a href="https://www.mongodb.com/">MongoDB</a></li>
		<li>or SQL</li></ul>
		</li>
		</ul>
		<h4 id="acceptablealternatives">Acceptable alternatives</h4>
		<ul>
		<li>REST over GraphQL</li>
		<li>Express (or any other JS/TS backend framework) over Nest.js</li>
		<li>npm over yarn</li>
		<li>two repos (frontend/backend) over a monorepo</li>
		<li>... anything else that is reasonable</li>
		</ul>
		<h4 id="unacceptablestackchoices">Unacceptable Stack Choices</h4>
		<ul>
		<li>Out of date libraries or framework versions</li>
		<li>JQuery</li>
		<li>XML apis</li>
		<li>Old versions of Javascript/Typescript</li>
		</ul>
		<h2 id="gettingstarted">Getting Started</h2>
		<p>Its the journey not the destination!</p>
		<p>This project will require some planning and foresight. Take your time to design a sensible solution before jumping right into writing the code. If you have questions or concerns please ask us! We don't bite!</p>
		<p>Part of the evaluation process will be incremental progress. Please make frequent commits and branch appropriately. One commit with the entire solution will not count as an acceptable deliverable.</p>
		<h2 id="frontend">Front End</h2>
		<p>The front end for this project will consist of two pages. One page will be a dashboard/list view of the articles available to read. The other page will be for viewing a specific article.</p>
		<p>Hint: Use the Material-UI sample code as a starting point!</p>
		<h3 id="articlesdashboard">Articles Dashboard</h3>
		<p>An example of what this could look like is provided <a href="https://material-ui.com/getting-started/templates/album/">here</a>. When a user clicks on a card in the album it should take them to the article page.</p>
		<h3 id="articlepage">Article Page</h3>
		<p>The second page will be for viewing a specific article. An example of what this could look like is provided <a href="https://material-ui.com/getting-started/templates/sticky-footer/">here</a></p>
		<p>Hint: Use <a href="https://www.npmjs.com/package/markdown-to-jsx">this</a> library, or another like it to create the article page!</p>
		<p>A challenge of this project is designing a front end that is synchronous with the back end. The front end will need to query the back end to get article information on all the articles for the "blog page" and the query one specific article for the "article page". It is up to you as to how to account for this.</p>
		<h2 id="backend">Back End</h2>
		<p>The back end server for this project will be responsible for serving article information to the front end. There should be two routes, one for serving all articles and one for serving a specific article.</p>
		<h2 id="database">Database</h2>
		<p>The choice of database technology is entirely up to you. Additionally, it could be acceptable to not have a database for some solutions.</p>
		<p>Hint: For serving up blog posts there are two commonly used approaches.</p>
		<ul>
		<li>Store the blog posts directly in the database as markdown or text files and query them directly from the backend.</li>
		<li>Store the blog posts in a third party service (Amazon S3, Azure storage, Google Drive, DropBox, etc.) and store the URL to each blog post in the database.</li>
		</ul>
		<h2 id="anoteontheblogposts">A note on the Blog Posts</h2>
		<p>Blog posts are typically markdown files. When creating this deliverable you are free to serve up whatever blog post content you want. Go online and find some sample markdown files and use them for the project. You could even use this README file as one of the blog posts if you want!</p>
		<h1 id="goodluckandhavefun">Good Luck and Have Fun!</h1>`  },
	   						{ id: 3, url:"Article/03", title: 'Article 03', preview:"This is Article 03",body: 'This is Article 03', day:"19", month:"FEB" },
	   						{ id: 4, url:"Article/04", title: 'Article 04', preview:"This is Article 04",body: 'This is Article 04', day:"18", month:"FEB" },  
				            { id: 5, url:"Article/05", title: 'Article 05', preview:"This is Article 05",body: 'This is Article 05', day:"17", month:"FEB" },
				            { id: 6, url:"Article/06", title: 'Article 06', preview:"This is Article 06",body: 'This is Article 06', day:"16", month:"FEB" },
				            { id: 7, url:"Article/07", title: 'Article 07', preview:"This is Article 07",body: 'This is Article 07', day:"15", month:"FEB" },
				            {  id: 8, url:"Article/08", title: 'Article 08', preview:"This is Article 08",body: 'This is Article 08', day:"14", month:"FEB" },
				            { id: 7, url:"Article/09", title: 'Article 09', preview:"This is Article 09",body: 'This is Article 09', day:"13", month:"FEB" },
				            {  id: 8, url:"Article/10", title: 'Article 10', preview:"This is Article 10",body: 'This is Article 10', day:"12", month:"FEB" }]
	return articles
}