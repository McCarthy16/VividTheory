import {Article} from "./../../shared/lib/Article";

export default function mockData(): Article[]{
	var articles: Article[]





	articles = [{ id: 1, url:"Article/DeveloperSeries", title: 'Developer Series', preview:"Meet the man behind the blog's development", body: `<h1 id="jordanmccarthy">Jordan McCarthy</h1> <p>Hello my name is Jordan McCarthy and I am this blogs developer.</p> <h2 id="origin">Origin</h2> <pre><code>I was born and raised in Calgary, AB. </code></pre> <h2 id="education">Education</h2> <pre><code>I got my Bachelor of Science Specialization in Computing Science degree from the University of Alberta, where I graduated in December 2019. </code></pre> <h2 id="knownprogramminglanguagesrankedbylikeness">Known Programming Languages (Ranked by likeness)</h2> <p>1. Python</p><p> 2. Java</p>  <p> 3. JavaScript/TypeScript(typescript is newer to me but I enjoy it)</p><p>   4. C++ </p> <p> 5. html/css (Markup Language) </p> <p> 6. SQL</p> <p>  7. C </p><p>  8. Visual Basic </p><p>  9. Lisp </p><p>  10. Assembly Code  </p> <h2 id="github">GitHub</h2> <pre><code>My GitHub url is:<a href="https://github.com/McCarthy16"> https://github.com/McCarthy16 </a></code></pre> <h2 id="favouriteeditor">Favourite Editor</h2> <pre><code>Sublime Text </code></pre> <h2 id="hobbies">Hobbies</h2> <pre><code>Coding, Hockey, Soccer, Wake Surfing </code></pre>`, day:"21", month:"FEB"},
	    		{ id: 2, url:"Article/ProgrammingAssignment", title: 'Vivid Theory Programming Assignment', day:"21", month:"FEB",preview:"A Full Stack Challenge",body: `<h1 align="center">Vivid Theory Programming Assignment</h1><div align="center">								  <img src="https://vividtheory.blob.core.windows.net/assignment/vtlogo.svg" alt="VT Logo" width="400" height="400"/>
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
								<p>The choice of database technology is entirely up to you. Additionally, it could be acceptable to not have a database for some solutions.</p>								<p>Hint: For serving up blog posts there are two commonly used approaches.</p>								<ul>								<li>Store the blog posts directly in the database as markdown or text files and query them directly from the backend.</li>								<li>Store the blog posts in a third party service (Amazon S3, Azure storage, Google Drive, DropBox, etc.) and store the URL to each blog post in the database.</li>								</ul><h2 id="anoteontheblogposts">A note on the Blog Posts</h2>								<p>Blog posts are typically markdown files. When creating this deliverable you are free to serve up whatever blog post content you want. Go online and find some sample markdown files and use them for the project. You could even use this README file as one of the blog posts if you want!</p>								<h1 id="goodluckandhavefun">Good Luck and Have Fun!</h1>`  },

	   						{ id: 3, url:"Article/MobileRobotics", title: `Jordan's Mobile Robotics`, preview:"A mobile robotics project",body: `<h2 id="authorsrevanmacqueenjordanmccarthy">Authors: Revan MacQueen, Jordan McCarthy</h2>
								<h2 id="contents">Contents</h2>
								<p><a href="https://github.com/cmput412/final_competition/wiki/Competition-Report#purpose-and-prerequisites">Purpose and  Prerequisites</a></p>
								<p><a href="https://github.com/cmput412/final_competition/wiki/Competition-Report#execution">Execution</a></p>
								<p><a href="https://github.com/cmput412/final_competition/wiki/Competition-Report#code-and-concepts">Code and Concepts</a></p>
								<h1 id="purposeandprerequisites">Purpose and Prerequisites</h1>
								<h2 id="purpose">Purpose</h2>
								<p>The purpose of this system is to follow a line on the ground while performing various computer vision and manipulation tasks at designated spots along the course. These tasks include object counting, colour recognition and shape detection and box pushing. Additionally, there is a "parking lot" at which the robot must park at a stall denoted by a shape seen earlier and push a box to a stall marked with an AR tag.</p>
								<h2 id="prerequisites">Prerequisites</h2>
								<p>This project was built on Ubuntu 16.04 using ROS kinetic and python3. The appropriate links are below. </p>
								<p>https://www.ubuntu.com/download/alternative-downloads</p>
								<p>http://wiki.ros.org/kinetic/Installation/Ubuntu</p>
								<p>To install python3 if you don't already have it, open a terminal window and type:</p>
								<pre><code>sudo apt-get update
								</code></pre>
								<pre><code>sudo apt-get -y update
								</code></pre>
								<p>We'll also need pip for some other packages:</p>
								<pre><code>sudo apt-get install -y python3-pip
								</code></pre>
								<p>To install Python Libraries:</p>
								<pre><code>pip3 install numpy
								</code></pre>
								<pre><code>pip3 install scikit-image
								</code></pre>
								<p>Additionally, a number of other ROS packages where used. To install these use:</p>
								<p>For Turtlebot: (http://wiki.ros.org/Robots/TurtleBot)</p>
								<pre><code>sudo apt-get install ros-kinetic-turtlebot
								</code></pre>
								<p>SMACH: (http://wiki.ros.org/smach)</p>
								<pre><code>sudo apt-get install ros-kinetic-smach
								</code></pre>
								<p>Tele-op with a controller: (http://wiki.ros.org/turtlebot_teleop)</p>
								<pre><code>sudo apt-get install ros-kinetic-turtlebot-teleop 
								</code></pre>
								<p>AR tag tracking: (http://wiki.ros.org/ar<em>track</em>alvar)</p>
								<pre><code>sudo apt-get install ros-kinetic-ar-track-alvar
								</code></pre>
								<p>Mapping tool: (http://wiki.ros.org/slam_gmapping)</p>
								<pre><code>sudo apt-get install ros-kinetic-gmapping
								</code></pre>
								<p>AMCL: (http://wiki.ros.org/amcl)</p>
								<pre><code>sudo apt-get install ros-kinetic-amcl
								</code></pre>
								<p>usb<em>cam: (http://wiki.ros.org/usb</em>cam)</p>
								<pre><code>sudo apt-get install ros-kinetic-usb-cam
								</code></pre>
								<p>You'll also need OpenCV for computer vision libraries. Follow the instructions at the following link:
								https://www.learnopencv.com/install-opencv3-on-ubuntu/</p>
								<p>Lastly, you'll need to clone and this directory into a catkin workspace.</p>
								<pre><code>git clone https://github.com/cmput412/final_competition.git
								</code></pre>
								<p>It's very useful to get familiar with smach, as this system uses it extensively. A tutorial can be found at: http://wiki.ros.org/smach/Tutorials</p>
								<h2 id="robotassembly">Robot Assembly</h2>
								<p>Follow the steps at https://imgur.com/a/PCgm7YN to configure your system</p>
								<h1 id="execution">Execution</h1>
								<h2 id="mapping">Mapping</h2>
								<p>Our system makes user of AMCL and the ROS navigation stack. This requires the area the robot is operating to be mapped out. We have included default map files in the repo, but if you wish to use the system on another course, you'll need to map it out first. If you're running the system on the default course, ignore this part.</p>
								<p>To create a map, launch your robot system with the following nodes (after you've connected a logitech wireless controller):</p>
								<p id="code">roscore<br></br>
								roslaunch turtlebot_bringup minimal.launch<br></br>
								roslaunch turtlebot_teleop logitech.launch # To control your robot with a wireless Logitech controller<br></br>
								rosbag record -O data.bag /scan /tf<br></br>
								</p>
								<p>Now drive the robot about the course to record the details in the rosbag. Driving as slow as possible will result in the highest quality map. Once you're done with mapping, press Ctrl-C in the terminal window to quit the mapping process.  </p>
								<p>And lastly, set map generation parameters (you may need to change these to get an optimal map)</p>
								<p id="code">rosparam set /slam_gmapping/angularUpdate 0.1<br></br>
								rosparam set /slam_gmapping/linearUpdate 0.1<br></br>
								rosparam set /slam_gmapping/map_update_interval 2.0<br></br>
								rosparam set /slam_gmapping/minimumScore 200<br></br>
								rosparam set /slam_gmapping/xmax 20.0<br></br>
								rosparam set /slam_gmapping/xmin -20.0<br></br>
								rosparam set /slam_gmapping/ymax 20.0<br></br>
								rosparam set /slam_gmapping/ymin -20.0<br></br>
								rosrun gmapping slam_gmapping<br></br>
								</p>
								<p>Now you should have two files: map.pgm and map.yaml. Rename these to my<em>map.pgm and my</em>map.yaml and copy them to /tmp to use them with our system. </p>
								<p>NOTE: if you choose to remap, the way points at the start of the StateMachine.py file will need to changed. </p>
								<h2 id="runningthesystem">Running the System</h2>
								<p>To run our system, launch the following nodes after connecting your computer to the mobile base, Xtion Pro and USB camera (from the root directory of this repo).</p>
								<p id="code">cp my_map.yaml my_map.pgm /tmp <br></br>
								roscore<br></br>
								roslaunch turtlebot_bringup minimal.launch<br></br>
								roslaunch turtlebot_bringup 3dsensor.launch<br></br>
								cd launch<br></br>
								roslaunch amcl_demo.launch<br></br>
								roslaunch marker_track.launch<br></br>
								roslaunch usb.launch <br></br>
								cd ../src/<br></br>
								chmod u+x StateMachine.py<br></br>
								./StateMachine.py<br></br>
								</p>
								<p>NOTE: you may need to change video0 in usb.launch to video1 depending on whether your computer starts the webcam as the usb camera.</p>
								<p>NOTE: you may also need to adjust the inflation radius for the local cost map down in rqt.</p>
								<h1 id="course">Course</h1>
								<p>The robot will now run, provided it's on an appropriate course. The robot is current programmed to run the following:</p>
								<p><a href='https://github.com/cmput412/final_competition/blob/master/StateMachine.png'>https://github.com/cmput412/final_competition/blob/master/StateMachine.png</a></p>
								<h3 id="location1">Location 1</h3>
								<p>For this competition, we bypassed location 1 to save time. </p>
								<h3 id="location2">Location 2</h3>
								<p>Image of location 2:</p>
								<p><img src ="https://user-images.githubusercontent.com/35321012/53614670-efc0c800-3b97-11e9-9c14-46391cd100b8.PNG"
								 width="300" /> </p>
								<p>The robot will once again count the number of objects it sees (in this case shapes) and give a corresponding number of beeps. However, it will also look for the green shape and remember which specific shape it is (circle, triangle, etc.) for later.</p>
								<h3 id="location3">Location 3</h3>
								<p>For this competition, we bypassed location 3 to save time. </p>
								<h3 id="location4">Location 4</h3>
								<p>Location 4 contains 8 different parking spots. The robot will search for, then park at a stall marked by the shape seen earlier. Then it will search for the box, and AR tag denoted goal for the box, then push the box to that spot.</p>
								<p>Example of AR tags:</p>
								<p><img src ="https://user-images.githubusercontent.com/35321012/54700284-5468a600-4af8-11e9-82c2-c6a274554bf8.png" width="400" /></p>
								<p>Example of shape to look for:</p>
								<p><img src ="https://user-images.githubusercontent.com/35321012/53614815-6b227980-3b98-11e9-8a09-4f95448e18bb.PNG" width="300" /></p>
								<h1 id="codeandconcepts">Code and Concepts</h1>
								<h2 id="overview">Overview</h2>
								<h3 id="video">Video</h3>
								<p>Click here to see the robot in action:</p>
								<p><a href=" https://www.youtube.com/watch?v=5XsuE7OAziA&amp;app=desktop <br />
								" target="_blank"><img src=" http://img.youtube.com/vi/5XsuE7OAziA/0.jpg" 
								alt="IMAGE ALT TEXT HERE" width="300" height="300" border="10" /></a></p>
								<h3 id="statediagram">State Diagram</h3>
								<p>Our system is summarized by the following state diagram:
								<img src="https://github.com/cmput412/final_competition/blob/master/StateMachine.png" alt="State Machine" /></p>
								<p>Most of the states are fairly self explanatory (sleepstate, turn90, turn180 etc.) but a few warrant some explanation. The specific transitions between states are determined by a counter which is incremented each time a red line is encountered. Additionally, the long sequence of states (exit1 -> exit2 -> exit3 ...) correspond to the traversal of the "parking lot" area.</p>
								<h2 id="linefollow">Line Follow</h2>
								<p>The most important part of the line follow state is the image callback, which computes a centroid of the white part of the image. The robot then follows this centroid with the help of a PID controller</p>
								<p>Pseudo-code:</p>
								<p id="code">Function ImageCallBack():<br></br>
								    image = getHSVImage()<br></br>
								    redImage = image.maskOutRed()<br></br>
								    whiteImage = image.maskOutWhite()<br></br>
								    whiteMoments = computeMoments(whiteImage)<br></br>
								    redMoments = computeMoments(redImage)<br></br>
								    #If red moment[m00] (the centroid is too close)<br></br>
								    if redMoments[m00] is too close():<br></br>
								        LinearX.publishSpeed(0.3)<br></br>
								        self.Stop = True # now we would move to the stop state<br></br>
								    else if whiteMoments[m00] &gt; 0 and self.Stop = False:<br></br>
								        PIDController (whiteMoment) # follow the line<br></br>
								</p>
								<p>PID Pseudocode:</p>
								<p id="code">previous_error = 0<br></br>
								integral = 0<br></br>
								loop:<br></br>
								  error = setpoint - measured_value<br></br>
								  integral = integral + error * dt<br></br>
								  derivative = (error - previous_error) / dt<br></br>
								  output = Kp * error + Ki * integral + Kd * derivative<br></br>
								  previous_error = error<br></br>
								  wait(dt)<br></br>
								  goto loop<br></br>
								</p>
								<h2 id="scanobject">Scan Object</h2>
								<p>This states counts the number of objects present. The Most important part of this state is again the image call back, where the number of red and green objects is determined by first masking the relevant HSV values, then using <code>cv2.findContours()</code> to return the contours of each shape. Then we use  <code>measure.regionprops()</code> to find number of blobs</p>
								<h2 id="readshape">Read Shape</h2>
								<p>This state determines what shape the robot robot is looking at. The general algorithm is to mask out the green values of the image, then use the following lines of code to find the contours:</p>
								<pre><code class="python language-python">ret, thresh = cv2.threshold(mask, 127, 255, 0)
								m2, cnts, hierarchy = cv2.findContours(thresh,cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
								</code></pre>
								<p>We then use our shape detector class to can the contours and return the shape (if any) it sees.</p>
								<h2 id="shapedetector">Shape Detector</h2>
								<p>It's worth mentioning the helper class shape detector, we when given a contour, determines what shape it is through the openCV functions</p>
								<pre><code class="python language-python">peri = cv2.arcLength(c, True)
								approx = cv2.approxPolyDP(c, .04 * peri, True)
								</code></pre>
								<p></p>
								<h2 id="enterexitwaypoints">Enter/Exit Waypoints</h2>
								<p>Encapsulates the following states 'exit1', 'exit2', 'exit3', 'enter1', 'enter2', and 'enter3'. These states are waypoint states used to enter and exit the off-ramp area. Given a location on the map each state sends a goal and waits for the turtlebot to safely complete its task.</p>
								<p id="code"># Goal Creation<br></br>
								self.client = actionlib.SimpleActionClient('move_base', MoveBaseAction)<br></br>
								self.goal = MoveBaseGoal()<br></br>
								self.goal.target_pose.header.frame_id = 'map'<br></br>
								...                          # placeholder for purpose of report<br></br>
								self.goal.target_pose.pose.orientation.x = orientation[0]<br></br>
								...<br></br>
								# Goal sent<br></br>
								self.client.send_goal(self.goal)<br></br>
								self.client.wait_for_result()<br></br> 
								</p>
								<p>At the beginning of 'exit1' state, localization is performed by publishing a position and orientation to the /initialpose topic and performing a quick rotation to increase accuracy in estimated pose. The code for this localization is below.</p>
								<p id="code">self.initpos = rospy.Publisher('/initialpose', PoseWithCovarianceStamped, queue_size=10)<br></br>
								start = PoseWithCovarianceStamped()<br></br>
								start.header.frame_id = 'map'<br></br>
								start.pose.pose.position.x = 0.153<br></br>
								...                                      # placeholder for purpose of report<br></br>
								start.pose.pose.orientation.x = 0<br></br>
								...<br></br>
								self.initpos.publish(start)<br></br>
								</p>
								<p></p>
								<h2 id="shapewaypoints">Shape Waypoints</h2>
								<p>Encapsulates the following states 'six', 'seven', and 'eight'. For each Shape Waypoint state a goal location is published, and once the robot has reached that location, Shape Detection is performed to find the green shape that was saved from Location 2. This shape detection is performed exactly the same way as the Read Shape state.</p>
								<h2 id="checkarwaypoints">Check AR Waypoints</h2>
								<p>Encapsulates the following states 'checkAR1', 'checkAR2', 'checkAR3', 'checkAR4', and 'checkAR5'. For each check AR Waypoint state a goal location is predetermined and the robot goes to that location by using the ROS navigation stack. Once there, AR Detection is performed using /ar<em>pose</em>marker topic. A timer is set for 2 seconds during which the alvarCallback looks for any AR tags present. 
								<p>The AR marker id's are listed in global variables, BoxAR is a list of the possible box marker id's, whereas OtherAR is a list of the possible goal marker id's. Depending on if a AR tag is present and the AR tags marker id see if parking stall contains either the box or the goal location.</p>
								<h2 id="sidebox">Side Box</h2>
								<p>The Side Box state takes into account the location of the box and the location of the goal and determines which side of box to align itself on. If <code>BoxSpot &lt; BoxGoal</code> go to left side of box, if <code>BoxSpot&gt;BoxGoal</code> go to right side of box. Once determined a goal location is published, and the robot navigates to that location by making use of the ROS navigation stack.</p>
								<h2 id="pushbox">Push Box</h2>
								<p>The Push Box state pushes for a set time dependent on how far the box is from the goal, approximately four seconds for each box away. Once in the parking stall the turtlebot signals completion with sound and led, then transitions to exit Location 4. </p>`, day:"20", month:"FEB" },


	   						{ id: 4, url:"Article/React", title: 'React Installation', preview:"The README from react's github",body: `<h1 id="reacthttpsreactjsorgmiddotgithublicensehttpsimgshieldsiobadgelicensemitbluesvghttpsgithubcomfacebookreactblobmasterlicensenpmversionhttpsimgshieldsionpmvreactsvgstyleflathttpswwwnpmjscompackagereactcirclecistatushttpscirclecicomghfacebookreactsvgstyleshieldcircletokencircletokenhttpscirclecicomghfacebookreactprswelcomehttpsimgshieldsiobadgeprswelcomebrightgreensvghttpsreactjsorgdocshowtocontributehtmlyourfirstpullrequest"><a href="https://reactjs.org/">React</a> &middot; <a href="https://github.com/facebook/react/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitHub license" /></a> <a href="https://www.npmjs.com/package/react"><img src="https://img.shields.io/npm/v/react.svg?style=flat" alt="npm version" /></a> <a href="https://circleci.com/gh/facebook/react"><img src="https://circleci.com/gh/facebook/react.svg?style=shield&amp;circle-token=:circle-token" alt="CircleCI Status" /></a> <a href="https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" /></a></h1>
								<p>React is a JavaScript library for building user interfaces.</p>
								<ul>
								<li><strong>Declarative:</strong> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.</li>
								<li><strong>Component-Based:</strong> Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</li>
								<li><strong>Learn Once, Write Anywhere:</strong> We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using <a href="https://facebook.github.io/react-native/">React Native</a>.</li>
								</ul>
								<p><a href="https://reactjs.org/docs/getting-started.html">Learn how to use React in your own project</a>.</p>
								<h2 id="installation">Installation</h2>
								<p>React has been designed for gradual adoption from the start, and <strong>you can use as little or as much React as you need</strong>:</p>
								<ul>
								<li>Use <a href="https://reactjs.org/docs/getting-started.html#online-playgrounds">Online Playgrounds</a> to get a taste of React.</li>
								<li><a href="https://reactjs.org/docs/add-react-to-a-website.html">Add React to a Website</a> as a <code>&lt;script&gt;</code> tag in one minute.</li>
								<li><a href="https://reactjs.org/docs/create-a-new-react-app.html">Create a New React App</a> if you're looking for a powerful JavaScript toolchain.</li>
								</ul>
								<p>You can use React as a <code>&lt;script&gt;</code> tag from a <a href="https://reactjs.org/docs/cdn-links.html">CDN</a>, or as a <code>react</code> package on <a href="https://www.npmjs.com/">npm</a>.</p>
								<h2 id="documentation">Documentation</h2>
								<p>You can find the React documentation <a href="https://reactjs.org/docs">on the website</a>.  </p>
								<p>Check out the <a href="https://reactjs.org/docs/getting-started.html">Getting Started</a> page for a quick overview.</p>
								<p>The documentation is divided into several sections:</p>
								<ul>
								<li><a href="https://reactjs.org/tutorial/tutorial.html">Tutorial</a></li>
								<li><a href="https://reactjs.org/docs/hello-world.html">Main Concepts</a></li>
								<li><a href="https://reactjs.org/docs/jsx-in-depth.html">Advanced Guides</a></li>
								<li><a href="https://reactjs.org/docs/react-api.html">API Reference</a></li>
								<li><a href="https://reactjs.org/community/support.html">Where to Get Support</a></li>
								<li><a href="https://reactjs.org/docs/how-to-contribute.html">Contributing Guide</a></li>
								</ul>
								<p>You can improve it by sending pull requests to <a href="https://github.com/reactjs/reactjs.org">this repository</a>.</p>
								<h2 id="contributing">Contributing</h2>
								<p>The main purpose of this repository is to continue to evolve React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React.</p>
								<h3 id="codeofconducthttpscodefbcomcodeofconduct"><a href="https://code.fb.com/codeofconduct">Code of Conduct</a></h3>
								<p>Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read <a href="https://code.fb.com/codeofconduct">the full text</a> so that you can understand what actions will and will not be tolerated.</p>
								<h3 id="contributingguidehttpsreactjsorgcontributinghowtocontributehtml"><a href="https://reactjs.org/contributing/how-to-contribute.html">Contributing Guide</a></h3>
								<p>Read our <a href="https://reactjs.org/contributing/how-to-contribute.html">contributing guide</a> to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React.</p>
								<h3 id="goodfirstissues">Good First Issues</h3>
								<p>To help you get your feet wet and get you familiar with our contribution process, we have a list of <a href="https://github.com/facebook/react/labels/good%20first%20issue">good first issues</a> that contain bugs which have a relatively limited scope. This is a great place to get started.</p>
								<h3 id="license">License</h3>
								<p>React is <a href="./LICENSE">MIT licensed</a>.</p>`, day:"20", month:"FEB" },  




				            { id: 5, url:"Article/Bootstrap", title: 'Bootstrap', preview:"Don't miss out on Bootstrap's newest release",body: `<p align="center">   <a href="https://getbootstrap.com/">     <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="Bootstrap logo" width="72" height="72">   </a> </p> <h3 align="center">Bootstrap</h3> <p align="center">   Sleek, intuitive, and powerful front-end framework for faster and easier web development.   <br>   <a href="https://getbootstrap.com/docs/4.3/"><strong>Explore Bootstrap docs »</strong></a>   <br>   <br>   <a href="https://github.com/twbs/bootstrap/issues/new?template=bug.md">Report bug</a>   ·   <a href="https://github.com/twbs/bootstrap/issues/new?template=feature.md&labels=feature">Request feature</a>   ·   <a href="https://themes.getbootstrap.com/">Themes</a>   ·   <a href="https://blog.getbootstrap.com/">Blog</a> </p> <h2 id="tableofcontents">Table of contents</h2> <ul> <li><a href="#quick-start">Quick start</a></li> <li><a href="#status">Status</a></li> <li><a href="#whats-included">What's included</a></li> <li><a href="#bugs-and-feature-requests">Bugs and feature requests</a></li> <li><a href="#documentation">Documentation</a></li> <li><a href="#contributing">Contributing</a></li> <li><a href="#community">Community</a></li> <li><a href="#versioning">Versioning</a></li> <li><a href="#creators">Creators</a></li> <li><a href="#thanks">Thanks</a></li> <li><a href="#copyright-and-license">Copyright and license</a></li> </ul> <h2 id="quickstart">Quick start</h2> <p>Several quick start options are available:</p> <ul> <li><a href="https://github.com/twbs/bootstrap/archive/v4.3.1.zip">Download the latest release.</a></li> <li>Clone the repo: <code>git clone https://github.com/twbs/bootstrap.git</code></li> <li>Install with <a href="https://www.npmjs.com/">npm</a>: <code>npm install bootstrap</code></li> <li>Install with <a href="https://yarnpkg.com/">yarn</a>: <code>yarn add bootstrap@4.3.1</code></li> <li>Install with <a href="https://getcomposer.org/">Composer</a>: <code>composer require twbs/bootstrap:4.3.1</code></li> <li>Install with <a href="https://www.nuget.org/">NuGet</a>: CSS: <code>Install-Package bootstrap</code> Sass: <code>Install-Package bootstrap.sass</code></li> </ul> <p>Read the <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">Getting started page</a> for information on the framework contents, templates and examples, and more.</p> <h2 id="status">Status</h2> <p><a href="https://bootstrap-slack.herokuapp.com/"><img src="https://bootstrap-slack.herokuapp.com/badge.svg" alt="Slack" /></a> <a href="https://github.com/twbs/bootstrap/actions?workflow=Tests"><img src="https://github.com/twbs/bootstrap/workflows/Tests/badge.svg" alt="Build Status" /></a> <a href="https://www.npmjs.com/package/bootstrap"><img src="https://img.shields.io/npm/v/bootstrap.svg" alt="npm version" /></a> <a href="https://rubygems.org/gems/bootstrap"><img src="https://img.shields.io/gem/v/bootstrap.svg" alt="Gem version" /></a> <a href="https://atmospherejs.com/twbs/bootstrap"><img src="https://img.shields.io/badge/meteor-twbs%3Abootstrap-blue.svg" alt="Meteor Atmosphere" /></a> <a href="https://packagist.org/packages/twbs/bootstrap"><img src="https://img.shields.io/packagist/vpre/twbs/bootstrap.svg" alt="Packagist Prerelease" /></a> <a href="https://www.nuget.org/packages/bootstrap/absoluteLatest"><img src="https://img.shields.io/nuget/vpre/bootstrap.svg" alt="NuGet" /></a> <a href="https://david-dm.org/twbs/bootstrap?type=peer"><img src="https://img.shields.io/david/peer/twbs/bootstrap.svg" alt="peerDependencies Status" /></a> <a href="https://david-dm.org/twbs/bootstrap?type=dev"><img src="https://img.shields.io/david/dev/twbs/bootstrap.svg" alt="devDependency Status" /></a> <a href="https://coveralls.io/github/twbs/bootstrap?branch=master"><img src="https://img.shields.io/coveralls/github/twbs/bootstrap/master.svg" alt="Coverage Status" /></a> <a href="https://github.com/twbs/bootstrap/tree/master/dist/css/bootstrap.min.css"><img src="https://img.badgesize.io/twbs/bootstrap/master/dist/css/bootstrap.min.css?compression=gzip&amp;label=CSS+gzip+size" alt="CSS gzip size" /></a> <a href="https://github.com/twbs/bootstrap/tree/master/dist/js/bootstrap.min.js"><img src="https://img.badgesize.io/twbs/bootstrap/master/dist/js/bootstrap.min.js?compression=gzip&amp;label=JS+gzip+size" alt="JS gzip size" /></a> <a href="https://www.browserstack.com/automate/public-build/SkxZcStBeExEdVJqQ2hWYnlWckpkNmNEY213SFp6WHFETWk2bGFuY3pCbz0tLXhqbHJsVlZhQnRBdEpod3NLSDMzaHc9PQ==--3d0b75245708616eb93113221beece33e680b229"><img src="https://www.browserstack.com/automate/badge.svg?badge_key=SkxZcStBeExEdVJqQ2hWYnlWckpkNmNEY213SFp6WHFETWk2bGFuY3pCbz0tLXhqbHJsVlZhQnRBdEpod3NLSDMzaHc9PQ==--3d0b75245708616eb93113221beece33e680b229" alt="BrowserStack Status" /></a> <a href="#backers"><img src="https://img.shields.io/opencollective/backers/bootstrap.svg" alt="Backers on Open Collective" /></a> <a href="#sponsors"><img src="https://img.shields.io/opencollective/sponsors/bootstrap.svg" alt="Sponsors on Open Collective" /></a></p> <h2 id="whatsincluded">What's included</h2> <p>Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:</p> <pre><code class="text language-text">bootstrap/ └── dist/     ├── css/     │   ├── bootstrap-grid.css     │   ├── bootstrap-grid.css.map     │   ├── bootstrap-grid.min.css     │   ├── bootstrap-grid.min.css.map     │   ├── bootstrap-reboot.css     │   ├── bootstrap-reboot.css.map     │   ├── bootstrap-reboot.min.css     │   ├── bootstrap-reboot.min.css.map     │   ├── bootstrap-utilities.css     │   ├── bootstrap-utilities.css.map     │   ├── bootstrap-utilities.min.css     │   ├── bootstrap-utilities.min.css.map     │   ├── bootstrap.css     │   ├── bootstrap.css.map     │   ├── bootstrap.min.css     │   └── bootstrap.min.css.map     └── js/         ├── bootstrap.bundle.js         ├── bootstrap.bundle.js.map         ├── bootstrap.bundle.min.js         ├── bootstrap.bundle.min.js.map         ├── bootstrap.esm.js         ├── bootstrap.esm.js.map         ├── bootstrap.esm.min.js         ├── bootstrap.esm.min.js.map         ├── bootstrap.js         ├── bootstrap.js.map         ├── bootstrap.min.js         └── bootstrap.min.js.map </code></pre> <p>We provide compiled CSS and JS (<code>bootstrap.*</code>), as well as compiled and minified CSS and JS (<code>bootstrap.min.*</code>). <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps">source maps</a> (<code>bootstrap.*.map</code>) are available for use with certain browsers' developer tools. Bundled JS files (<code>bootstrap.bundle.js</code> and minified <code>bootstrap.bundle.min.js</code>) include <a href="https://popper.js.org/">Popper</a>.</p> <h2 id="bugsandfeaturerequests">Bugs and feature requests</h2> <p>Have a bug or a feature request? Please first read the <a href="https://github.com/twbs/bootstrap/blob/master/.github/CONTRIBUTING.md#using-the-issue-tracker">issue guidelines</a> and search for existing and closed issues. If your problem or idea is not addressed yet, <a href="https://github.com/twbs/bootstrap/issues/new">please open a new issue</a>.</p> <h2 id="documentation">Documentation</h2> <p>Bootstrap's documentation, included in this repo in the root directory, is built with <a href="https://gohugo.io/">Hugo</a> and publicly hosted on GitHub Pages at <a href="https://getbootstrap.com/">https://getbootstrap.com/</a>. The docs may also be run locally.</p> <p>Documentation search is powered by <a href="https://community.algolia.com/docsearch/">Algolia's DocSearch</a>. Working on our search? Be sure to set <code>debug: true</code> in <code>site/assets/js/src/search.js</code> file.</p> <h3 id="runningdocumentationlocally">Running documentation locally</h3> <ol> <li>Run <code>npm install</code> to install the Node.js dependencies, including Hugo (the site builder).</li> <li>Run <code>npm run test</code> (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.</li> <li>From the root <code>/bootstrap</code> directory, run <code>npm run docs-serve</code> in the command line.</li> <li>Open <code>http://localhost:9001/</code> in your browser, and voilà.</li> </ol> <p>Learn more about using Hugo by reading its <a href="https://gohugo.io/documentation/">documentation</a>.</p> <h3 id="documentationforpreviousreleases">Documentation for previous releases</h3> <p>You can find all our previous releases docs on <a href="https://getbootstrap.com/docs/versions/">https://getbootstrap.com/docs/versions/</a>.</p> <p><a href="https://github.com/twbs/bootstrap/releases">Previous releases</a> and their documentation are also available for download.</p> <h2 id="contributing">Contributing</h2> <p>Please read through our <a href="https://github.com/twbs/bootstrap/blob/master/.github/CONTRIBUTING.md">contributing guidelines</a>. Included are directions for opening issues, coding standards, and notes on development.</p> <p>Moreover, if your pull request contains JavaScript patches or features, you must include <a href="https://github.com/twbs/bootstrap/tree/master/js/tests">relevant unit tests</a>. All HTML and CSS should conform to the <a href="https://github.com/mdo/code-guide">Code Guide</a>, maintained by <a href="https://github.com/mdo">Mark Otto</a>.</p> <p>Editor preferences are available in the <a href="https://github.com/twbs/bootstrap/blob/master/.editorconfig">editor config</a> for easy use in common text editors. Read more and download plugins at <a href="https://editorconfig.org/">https://editorconfig.org/</a>.</p> <h2 id="community">Community</h2> <p>Get updates on Bootstrap's development and chat with the project maintainers and community members.</p> <ul> <li>Follow <a href="https://twitter.com/getbootstrap">@getbootstrap on Twitter</a>.</li> <li>Read and subscribe to <a href="https://blog.getbootstrap.com/">The Official Bootstrap Blog</a>.</li> <li>Join <a href="https://bootstrap-slack.herokuapp.com/">the official Slack room</a>.</li> <li>Chat with fellow Bootstrappers in IRC. On the <code>irc.freenode.net</code> server, in the <code>##bootstrap</code> channel.</li> <li>Implementation help may be found at Stack Overflow (tagged <a href="https://stackoverflow.com/questions/tagged/bootstrap-4"><code>bootstrap-4</code></a>).</li> <li>Developers should use the keyword <code>bootstrap</code> on packages which modify or add to the functionality of Bootstrap when distributing through <a href="https://www.npmjs.com/browse/keyword/bootstrap">npm</a> or similar delivery mechanisms for maximum discoverability.</li> </ul> <h2 id="versioning">Versioning</h2> <p>For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under <a href="https://semver.org/">the Semantic Versioning guidelines</a>. Sometimes we screw up, but we adhere to those rules whenever possible.</p> <p>See <a href="https://github.com/twbs/bootstrap/releases">the Releases section of our GitHub project</a> for changelogs for each release version of Bootstrap. Release announcement posts on <a href="https://blog.getbootstrap.com/">the official Bootstrap blog</a> contain summaries of the most noteworthy changes made in each release.</p> <h2 id="creators">Creators</h2> <p><strong>Mark Otto</strong></p> <ul> <li><a href="https://twitter.com/mdo">https://twitter.com/mdo</a></li> <li><a href="https://github.com/mdo">https://github.com/mdo</a></li> </ul> <p><strong>Jacob Thornton</strong></p> <ul> <li><a href="https://twitter.com/fat">https://twitter.com/fat</a></li> <li><a href="https://github.com/fat">https://github.com/fat</a></li> </ul> <h2 id="thanks">Thanks</h2> <p><a href="https://www.browserstack.com/">   <img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack Logo" width="192" height="42"> </a></p> <p>Thanks to <a href="https://www.browserstack.com/">BrowserStack</a> for providing the infrastructure that allows us to test in real browsers!</p> <h2 id="sponsors">Sponsors</h2> <p>Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [<a href="https://opencollective.com/bootstrap#sponsor">Become a sponsor</a>]</p> <p><a href="https://opencollective.com/bootstrap/sponsor/0/website"><img src="https://opencollective.com/bootstrap/sponsor/0/avatar.svg" alt="" /></a> <a href="https://opencollective.com/bootstrap/sponsor/1/website"><img src="https://opencollective.com/bootstrap/sponsor/1/avatar.svg" alt="" /></a> <a href="https://opencollective.com/bootstrap/sponsor/2/website"><img src="https://opencollective.com/bootstrap/sponsor/2/avatar.svg" alt="" /></a> <a href="https://opencollective.com/bootstrap/sponsor/3/website"><img src="https://opencollective.com/bootstrap/sponsor/3/avatar.svg" alt="" /></a> <a href="https://opencollective.com/bootstrap/sponsor/4/website"><img src="https://opencollective.com/bootstrap/sponsor/4/avatar.svg" alt="" /></a> <a href="https://opencollective.com/bootstrap/sponsor/5/website"><img src="https://opencollective.com/bootstrap/sponsor/5/avatar.svg" alt="" /></a> <a href="https://opencollective.com/bootstrap/sponsor/6/website"><img src="https://opencollective.com/bootstrap/sponsor/6/avatar.svg" alt="" /></a> <a href="https://opencollective.com/bootstrap/sponsor/7/website"><img src="https://opencollective.com/bootstrap/sponsor/7/avatar.svg" alt="" /></a> <a href="https://opencollective.com/bootstrap/sponsor/8/website"><img src="https://opencollective.com/bootstrap/sponsor/8/avatar.svg" alt="" /></a> <a href="https://opencollective.com/bootstrap/sponsor/9/website"><img src="https://opencollective.com/bootstrap/sponsor/9/avatar.svg" alt="" /></a></p> <h2 id="backers">Backers</h2> <p>Thank you to all our backers! 🙏 [<a href="https://opencollective.com/bootstrap#backer">Become a backer</a>]</p> <p><a href="https://opencollective.com/bootstrap#backers"><img src="https://opencollective.com/bootstrap/backers.svg?width=890" alt="Backers" /></a></p> <h2 id="copyrightandlicense">Copyright and license</h2> <p>Code and documentation copyright 2011-2020 the <a href="https://github.com/twbs/bootstrap/graphs/contributors">Bootstrap Authors</a> and <a href="https://twitter.com">Twitter, Inc.</a> Code released under the <a href="https://github.com/twbs/bootstrap/blob/master/LICENSE">MIT License</a>. Docs released under <a href="https://creativecommons.org/licenses/by/3.0/">Creative Commons</a>.</p>`, day:"19", month:"FEB" },
				            { id: 6, url:"Article/Node", title: 'Node.js', 
				            preview:"Get started with Node.js",
				            body:`<p align="center">   <a href="https://nodejs.org/">     <img       alt="Node.js"       src="https://nodejs.org/static/images/logo-light.svg"       width="400"     />   </a> </p> <p>Node.js is an open-source, cross-platform, JavaScript runtime environment. It executes JavaScript code outside of a browser. For more information on using Node.js, see the <a href="https://nodejs.org/">Node.js Website</a>.</p> <p>The Node.js project uses an <a href="./GOVERNANCE.md">open governance model</a>. The <a href="http://openjs.foundation/">OpenJS Foundation</a> provides support for the project.</p> <p><strong>This project is bound by a <a href="https://github.com/nodejs/admin/blob/master/CODE_OF_CONDUCT.md">Code of Conduct</a>.</strong></p> <h1 id="tableofcontents">Table of Contents</h1> <ul> <li><a href="#support">Support</a></li> <li><a href="#release-types">Release Types</a> <ul> <li><a href="#download">Download</a></li> <li><a href="#current-and-lts-releases">Current and LTS Releases</a></li> <li><a href="#nightly-releases">Nightly Releases</a></li> <li><a href="#api-documentation">API Documentation</a></li> <li><a href="#verifying-binaries">Verifying Binaries</a></li></ul> </li> <li><a href="#building-nodejs">Building Node.js</a></li> <li><a href="#security">Security</a></li> <li><a href="#contributing-to-nodejs">Contributing to Node.js</a></li> 
				            <li><a href="#current-project-team-members">Current Project Team Members</a> <ul> <li><a href="#tsc-technical-steering-committee">TSC (Technical Steering Committee)</a></li> <li><a href="#collaborators">Collaborators</a></li> <li><a href="#release-keys">Release Keys</a></li></ul> </li> </ul> <h2 id="support">Support</h2> <p>Looking for help? Check out the <a href=".github/SUPPORT.md">instructions for getting support</a>.</p> <h2 id="releasetypes">Release Types</h2> <ul> <li><strong>Current</strong>: Under active development. Code for the Current release is in the branch for its major version number (for example, <a href="https://github.com/nodejs/node/tree/v10.x">v10.x</a>). Node.js releases a new major version every 6 months, allowing for breaking changes. This happens in April and October every year. Releases appearing each October have a support life of 8 months. Releases appearing each April convert to LTS (see below) each October.</li> <li><strong>LTS</strong>: Releases that receive Long-term Support, with a focus on stability and security. Every even-numbered major version will become an LTS release. LTS releases receive 12 months of <em>Active LTS</em> support and a further 18 months of <em>Maintenance</em>. LTS release lines have alphabetically-ordered codenames, beginning with v4 Argon. There are no breaking changes or feature additions, except in some special circumstances.</li> <li><strong>Nightly</strong>: Code from the Current branch built every 24-hours when there are changes. Use with caution.</li> </ul> <p>Current and LTS releases follow <a href="https://semver.org">Semantic Versioning</a>. A member of the Release Team <a href="#release-keys">signs</a> each Current and LTS release. For more information, see the <a href="https://github.com/nodejs/Release#readme">Release README</a>.</p> <h3 id="download">Download</h3> <p>Binaries, installers, and source tarballs are available at <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a>.</p> <h4 id="currentandltsreleases">Current and LTS Releases</h4> <p><a href="https://nodejs.org/download/release/">https://nodejs.org/download/release/</a></p> <p>The <a href="https://nodejs.org/download/release/latest/">latest</a> directory is an alias for the latest Current release. The latest-<em>codename</em> directory is an alias for the latest release from an LTS line. For example, the <a href="https://nodejs.org/download/release/latest-carbon/">latest-carbon</a> directory contains the latest Carbon (Node.js 8) release.</p> <h4 id="nightlyreleases">Nightly Releases</h4> <p><a href="https://nodejs.org/download/nightly/">https://nodejs.org/download/nightly/</a></p> <p>Each directory name and filename contains a date (in UTC time) and the commit SHA at the HEAD of the release.</p> <h4 id="apidocumentation">API Documentation</h4> <p>Documentation for the latest Current release is at <a href="https://nodejs.org/api/">https://nodejs.org/api/</a>. Version-specific documentation is available in each release directory in the <em>docs</em> subdirectory. Version-specific documentation is also at <a href="https://nodejs.org/download/docs/">https://nodejs.org/download/docs/</a>.</p> <h3 id="verifyingbinaries">Verifying Binaries</h3> <p>Download directories contain a <code>SHASUMS256.txt</code> file with SHA checksums for the files.</p> <p>To download <code>SHASUMS256.txt</code> using <code>curl</code>:</p> <pre><code class="console language-console">$ curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt </code></pre> <p>To check that a downloaded file matches the checksum, run it through <code>sha256sum</code> with a command such as:</p> <pre><code class="console language-console">$ grep node-vx.y.z.tar.gz SHASUMS256.txt | sha256sum -c - </code></pre> <p>For Current and LTS, the GPG detached signature of <code>SHASUMS256.txt</code> is in <code>SHASUMS256.txt.sig</code>. You can use it with <code>gpg</code> to verify the integrity of <code>SHASUM256.txt</code>. You will first need to import <a href="#release-keys">the GPG keys of individuals authorized to create releases</a>. To import the keys:</p> <pre><code class="console language-console">$ gpg --keyserver pool.sks-keyservers.net --recv-keys DD8F2338BAE7501E3DD5AC78C273792F7D83545D </code></pre> <p>See the bottom of this README for a full script to import active release keys.</p> <p>Next, download the <code>SHASUMS256.txt.sig</code> for the release:</p> <pre><code class="console language-console">$ curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt.sig </code></pre> <p>Then use <code>gpg --verify SHASUMS256.txt.sig SHASUMS256.txt</code> to verify the file's signature.</p> <h2 id="buildingnodejs">Building Node.js</h2> <p>See <a href="BUILDING.md">BUILDING.md</a> for instructions on how to build Node.js from source and a list of supported platforms.</p> <h2 id="security">Security</h2> <p>For information on reporting security vulnerabilities in Node.js, see <a href="./SECURITY.md">SECURITY.md</a>.</p> <h2 id="contributingtonodejs">Contributing to Node.js</h2> <ul> <li><a href="CONTRIBUTING.md">Contributing to the project</a></li> <li><a href="https://github.com/nodejs/TSC/blob/master/WORKING_GROUPS.md">Working Groups</a></li> <li><a href="https://github.com/nodejs/TSC/blob/master/Strategic-Initiatives.md">Strategic Initiatives</a></li> </ul>`,
				            day:"18", month:"FEB" },
				            { id: 7, url:"Article/Lerna", title: 'Lerna', preview:"Implement monorepo structure with Lerna",body: `<p align="center">   <img alt="Lerna" src="https://cloud.githubusercontent.com/assets/952783/15271604/6da94f96-1a06-11e6-8b04-dc3171f79a90.png" width="480"> </p> <p align="center">   A tool for managing JavaScript projects with multiple packages. </p> <p align="center">   <a href="https://www.npmjs.com/package/lerna"><img alt="NPM Status" src="https://img.shields.io/npm/v/lerna.svg?style=flat"></a>   <a href="https://travis-ci.org/lerna/lerna"><img alt="Travis Status" src="https://img.shields.io/travis/lerna/lerna/master.svg?style=flat&label=travis"></a> </p> <ul> <li><a href="#about">About</a></li> <li><a href="#getting-started">Getting Started</a></li> <li><a href="#how-it-works">How It Works</a></li> <li><a href="#troubleshooting">Troubleshooting</a></li> <li>Commands <ul> <li><a href="./commands/publish#readme"><code>lerna publish</code></a></li> <li><a href="./commands/version#readme"><code>lerna version</code></a></li> <li><a href="./commands/bootstrap#readme"><code>lerna bootstrap</code></a></li> <li><a href="./commands/list#readme"><code>lerna list</code></a></li> <li><a href="./commands/changed#readme"><code>lerna changed</code></a></li> <li><a href="./commands/diff#readme"><code>lerna diff</code></a></li> <li><a href="./commands/exec#readme"><code>lerna exec</code></a></li> <li><a href="./commands/run#readme"><code>lerna run</code></a></li> <li><a href="./commands/init#readme"><code>lerna init</code></a></li> <li><a href="./commands/add#readme"><code>lerna add</code></a></li> <li><a href="./commands/clean#readme"><code>lerna clean</code></a></li> <li><a href="./commands/import#readme"><code>lerna import</code></a></li> <li><a href="./commands/link#readme"><code>lerna link</code></a></li> <li><a href="./commands/create#readme"><code>lerna create</code></a></li> <li><a href="./commands/info#readme"><code>lerna info</code></a></li></ul> </li> <li><a href="#concepts">Concepts</a></li> <li><a href="#lernajson">Lerna.json</a></li> <li><a href="./core/global-options">Global Flags</a></li> <li><a href="./core/filter-options">Filter Flags</a></li> </ul> <h2 id="about">About</h2> <p>Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is <em>messy</em> and difficult to track, and testing across repositories gets complicated really fast.</p> <p>To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories (sometimes called <a href="https://github.com/babel/babel/blob/master/doc/design/monorepo.md">monorepos</a>). Projects like <a href="https://github.com/babel/babel/tree/master/packages">Babel</a>, <a href="https://github.com/facebook/react/tree/master/packages">React</a>, <a href="https://github.com/angular/angular/tree/master/modules">Angular</a>, <a href="https://github.com/emberjs/ember.js/tree/master/packages">Ember</a>, <a href="https://github.com/meteor/meteor/tree/devel/packages">Meteor</a>, <a href="https://github.com/facebook/jest/tree/master/packages">Jest</a>, and many others develop all of their packages within a single repository.</p> <p><strong>Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.</strong></p> <p>Lerna can also reduce the time and space requirements for numerous copies of packages in development and build environments - normally a downside of dividing a project into many separate NPM packages. See the <a href="doc/hoist.md">hoist documentation</a> for details.</p> <h3 id="whatdoesalernarepolooklike">What does a Lerna repo look like?</h3> <p>There's actually very little to it. You have a file structure that looks like this:</p> <pre><code>my-lerna-repo/   package.json   packages/     package-1/       package.json     package-2/       package.json </code></pre> <h3 id="whatcanlernado">What can Lerna do?</h3> <p>The two primary commands in Lerna are <code>lerna bootstrap</code> and <code>lerna publish</code>.</p> <p><code>bootstrap</code> will link dependencies in the repo together. <code>publish</code> will help publish any updated packages.</p> <h3 id="whatcantlernado">What can't Lerna do?</h3> <p>Lerna is not a deployment tool for serverless monorepos. Hoisting might be incompatible with traditional serverless monorepo deployment techniques.</p> <h2 id="gettingstarted">Getting Started</h2> <blockquote>   <p>The instructions below are for Lerna 3.x.   We recommend using it instead of 2.x for a new Lerna project.</p> </blockquote> <p>Let's start by installing Lerna as a dev dependency of your project with <a href="https://www.npmjs.com/">npm</a>.</p> <pre><code class="sh language-sh">$ mkdir lerna-repo &amp;&amp; cd $_ $ npx lerna init </code></pre> <p>This will create a <code>lerna.json</code> configuration file as well as a <code>packages</code> folder, so your folder should now look like this:</p> <pre><code>lerna-repo/   packages/   package.json   lerna.json </code></pre> <h2 id="howitworks">How It Works</h2> <p>Lerna allows you to manage your project using one of two modes: Fixed or Independent.</p> <h3 id="fixedlockedmodedefault">Fixed/Locked mode (default)</h3> <p>Fixed mode Lerna projects operate on a single version line. The version is kept in the <code>lerna.json</code> file at the root of your project under the <code>version</code> key. When you run <code>lerna publish</code>, if a module has been updated since the last time a release was made, it will be updated to the new version you're releasing. This means that you only publish a new version of a package when you need to.</p> <p>This is the mode that <a href="https://github.com/babel/babel">Babel</a> is currently using. Use this if you want to automatically tie all package versions together. One issue with this approach is that a major change in any package will result in all packages having a new major version.</p> <h3 id="independentmode">Independent mode</h3> <p><code>lerna init --independent</code></p> <p>Independent mode Lerna projects allows maintainers to increment package versions independently of each other. Each time you publish, you will get a prompt for each package that has changed to specify if it's a patch, minor, major or custom change.</p> <p>Independent mode allows you to more specifically update versions for each package and makes sense for a group of components. Combining this mode with something like <a href="https://github.com/semantic-release/semantic-release">semantic-release</a> would make it less painful. (There is work on this already at <a href="https://github.com/atlassian/lerna-semantic-release">atlassian/lerna-semantic-release</a>).</p> <blockquote>   <p>Set the <code>version</code> key in <code>lerna.json</code> to <code>independent</code> to run in independent mode.</p> </blockquote> <h2 id="troubleshooting">Troubleshooting</h2> <p>If you encounter any issues while using Lerna please check out our <a href="doc/troubleshooting.md">Troubleshooting</a> document where you might find the answer to your problem.</p> <h2 id="frequentlyaskedquestions">Frequently asked questions</h2> <p>See <a href="FAQ.md">FAQ.md</a>.</p> <h2 id="concepts">Concepts</h2> <p>Lerna will log to a <code>lerna-debug.log</code> file (same as <code>npm-debug.log</code>) when it encounters an error running a command.</p> <p>Lerna also has support for <a href="https://docs.npmjs.com/misc/scope">scoped packages</a>.</p> <p>Run <code>lerna --help</code> to see all available commands and options.</p> <h3 id="lernajson">lerna.json</h3> <pre><code class="json language-json">{   "version": "1.1.3",   "npmClient": "npm",   "command": {     "publish": {       "ignoreChanges": ["ignored-file", "*.md"],       "message": "chore(release): publish",       "registry": "https://npm.pkg.github.com"     },     "bootstrap": {       "ignore": "component-*",       "npmClientArgs": ["--no-package-lock"]     }   },   "packages": ["packages/*"] } </code></pre> <ul> <li><code>version</code>: the current version of the repository.</li> <li><code>npmClient</code>: an option to specify a specific client to run commands with (this can also be specified on a per command basis). Change to <code>"yarn"</code> to run all commands with yarn. Defaults to "npm".</li> <li><code>command.publish.ignoreChanges</code>: an array of globs that won't be included in <code>lerna changed/publish</code>. Use this to prevent publishing a new version unnecessarily for changes, such as fixing a <code>README.md</code> typo.</li> <li><code>command.publish.message</code>: a custom commit message when performing version updates for publication. See <a href="commands/version#--message-msg">@lerna/version</a> for more details.</li> <li><code>command.publish.registry</code>: use it to set a custom registry url to publish to instead of npmjs.org, you must already be authenticated if required.</li> <li><code>command.bootstrap.ignore</code>: an array of globs that won't be bootstrapped when running the <code>lerna bootstrap</code> command.</li> <li><code>command.bootstrap.npmClientArgs</code>: array of strings that will be passed as arguments directly to <code>npm install</code> during the <code>lerna bootstrap</code> command.</li> <li><code>command.bootstrap.scope</code>: an array of globs that restricts which packages will be bootstrapped when running the <code>lerna bootstrap</code> command.</li> <li><code>packages</code>: Array of globs to use as package locations.</li> </ul> <p>The packages config in <code>lerna.json</code> is a list of globs that match directories containing a <code>package.json</code>, which is how lerna recognizes "leaf" packages (vs the "root" <code>package.json</code>, which is intended to manage the dev dependencies and scripts for the entire repo).</p> <p>By default, lerna initializes the packages list as <code>["packages/*"]</code>, but you can also use another directory such as <code>["modules/*"]</code>, or <code>["package1", "package2"]</code>. The globs defined are relative to the directory that <code>lerna.json</code> lives in, which is usually the repository root. The only restriction is that you can't directly nest package locations, but this is a restriction shared by "normal" npm packages as well.</p> <p>For example, <code>["packages/*", "src/**"]</code> matches this tree:</p> <pre><code>packages/ ├── foo-pkg │   └── package.json ├── bar-pkg │   └── package.json ├── baz-pkg │   └── package.json └── qux-pkg     └── package.json src/ ├── admin │   ├── my-app │   │   └── package.json │   ├── stuff │   │   └── package.json │   └── things │       └── package.json ├── profile │   └── more-things │       └── package.json ├── property │   ├── more-stuff │   │   └── package.json │   └── other-things │       └── package.json └── upload     └── other-stuff         └── package.json </code></pre> <p>Locating leaf packages under <code>packages/*</code> is considered a "best-practice", but is not a requirement for using Lerna.</p> <h4 id="legacyfields">Legacy Fields</h4> <p>Some <code>lerna.json</code> fields are no longer in use. Those of note include:</p> <ul> <li><code>lerna</code>: originally used to indicate the current version of Lerna. <a href="https://github.com/lerna/lerna/pull/1122">Made obsolete</a> and <a href="https://github.com/lerna/lerna/pull/1225">removed</a> in v3</li> </ul> <h3 id="commondevdependencies">Common <code>devDependencies</code></h3> <p>Most <code>devDependencies</code> can be pulled up to the root of a Lerna repo with <code>lerna link convert</code></p> <p>The above command will automatically hoist things and use relative <code>file:</code> specifiers.</p> <p>Hoisting has a few benefits:</p> <ul> <li>All packages use the same version of a given dependency</li> <li>Can keep dependencies at the root up-to-date with an automated tool such as <a href="https://greenkeeper.io/">GreenKeeper</a></li> <li>Dependency installation time is reduced</li> <li>Less storage is needed</li> </ul> <p>Note that <code>devDependencies</code> providing "binary" executables that are used by npm scripts still need to be installed directly in each package where they're used.</p> <p>For example the <code>nsp</code> dependency is necessary in this case for <code>lerna run nsp</code> (and <code>npm run nsp</code> within the package's directory) to work correctly:</p> <pre><code class="json language-json">{   "scripts": {     "nsp": "nsp"   },   "devDependencies": {     "nsp": "^2.3.3"   } } </code></pre> <h3 id="githosteddependencies">Git Hosted Dependencies</h3> <p>Lerna allows target versions of local dependent packages to be written as a <a href="https://docs.npmjs.com/cli/install">git remote url</a> with a <code>committish</code> (e.g., <code>#v1.0.0</code> or <code>#semver:^1.0.0</code>) instead of the normal numeric version range. This allows packages to be distributed via git repositories when packages must be private and a <a href="https://www.dotconferences.com/2016/05/fabien-potencier-monolithic-repositories-vs-many-repositories">private npm registry is not desired</a>.</p> <p>Please note that lerna does <em>not</em> perform the actual splitting of git history into the separate read-only repositories. This is the responsibility of the user. (See <a href="https://github.com/lerna/lerna/pull/1033#issuecomment-335894690">this comment</a> for implementation details)</p> <pre><code>// packages/pkg-1/package.json {   name: "pkg-1",   version: "1.0.0",   dependencies: {     "pkg-2": "github:example-user/pkg-2#v1.0.0"   } } // packages/pkg-2/package.json {   name: "pkg-2",   version: "1.0.0" } </code></pre> <p>In the example above,</p> <ul> <li><code>lerna bootstrap</code> will properly symlink <code>pkg-2</code> into <code>pkg-1</code>.</li> <li><code>lerna publish</code> will update the committish (<code>#v1.0.0</code>) in <code>pkg-1</code> when <code>pkg-2</code> changes.</li> </ul> <h3 id="readmebadge">README Badge</h3> <p>Using Lerna? Add a README badge to show it off: <a href="https://lerna.js.org/"><img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="lerna" /></a></p> <pre><code>[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) </code></pre> <h3 id="wizard">Wizard</h3> <p>If you prefer some guidance for cli (in case you're about to start using lerna or introducing it to a new team), you might like <a href="https://github.com/szarouski/lerna-wizard">lerna-wizard</a>. It will lead you through a series of well-defined steps:</p> <p><img src="https://raw.githubusercontent.com/szarouski/lerna-wizard/2e269fb5a3af7100397a1f874cea3fa78089486e/demo.png" alt="lerna-wizard demo image" /></p>`, day:"18", month:"FEB" },
				            {  id: 8, url:"Article/Readme", title: 'The blogs README.md ', preview:"The blogs README.md ",body: `<h1 id="vividtheoryblogchallenge">Vivid Theory Blog Challenge</h1> <p>The purpose of this challenge is to develop a functional blog for Vivid Theory.</p> <h2 id="gettingstarted">Getting Started</h2> <p>These instructions will get you a copy of the blog up and running on your local machine.</p> <h3 id="prerequisites">Prerequisites</h3> <p>In order to run the project you must have Node Pack Manager (npm).</p> <h3 id="dependencies">Dependencies</h3> <h4 id="server">Server</h4>  <p>  "devDependencies": {   </p> <p>"netlify-cli": "^2.35.0",</p> <p>"nodemon": "^1.14.6",</p>      <p>"react-scripts": "^3.4.0"   }, </p>   <p>"dependencies": {  </p> <p>"concurrently": "^3.5.1",</p>      <p>"express": "^4.16.2",</p>   <p>     "mongoose": "^5.9.2" </p>    <h4 id="client">Client</h4>    <p>"dependencies": {   </p>   <p>  "react": "^16.2.0",  </p>   <p>   "react-dom": "^16.2.0",    </p>   <p> "react-router": "^5.1.2",  </p>   <p>   "react-router-dom": "^5.1.2",  </p>   <p>   "react-scripts": "1.0.17"   }, </p> <h3 id="installation">Installation</h3> <p>First you must clone the github repository using the following.</p> <pre><code>https://github.com/McCarthy16/VividTheory.git </code></pre> <p>cd into the root folder</p> <pre><code>cd ./VividTheory </code></pre> <p>Install the dependencies for server</p> <pre><code>npm install </code></pre> <p>Install the dependecies for client</p> <pre><code>npm run client-install </code></pre> <h2 id="running">Running</h2> <p>Now that everything is installed run the application, both client and server, on local host with</p> <pre><code>npm run dev </code></pre> <h2 id="appinfo">App Info</h2> <h3 id="author">Author</h3> <p>Jordan McCarthy</p> <h3 id="version">Version</h3> <p>1.0.0</p>`, day:"13", month:"FEB" }]
	return articles
}