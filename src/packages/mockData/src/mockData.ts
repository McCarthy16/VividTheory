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
<pre><code>roscore
roslaunch turtlebot_bringup minimal.launch
roslaunch turtlebot_teleop logitech.launch # To control your robot with a wireless Logitech controller
rosbag record -O data.bag /scan /tf
</code></pre>
<p>Now drive the robot about the course to record the details in the rosbag. Driving as slow as possible will result in the highest quality map. Once you're done with mapping, press Ctrl-C in the terminal window to quit the mapping process.  </p>
<p>And lastly, set map generation parameters (you may need to change these to get an optimal map)</p>
<pre><code>rosparam set /slam_gmapping/angularUpdate 0.1
rosparam set /slam_gmapping/linearUpdate 0.1
rosparam set /slam_gmapping/map_update_interval 2.0
rosparam set /slam_gmapping/minimumScore 200
rosparam set /slam_gmapping/xmax 20.0
rosparam set /slam_gmapping/xmin -20.0
rosparam set /slam_gmapping/ymax 20.0
rosparam set /slam_gmapping/ymin -20.0
rosrun gmapping slam_gmapping
</code></pre>
<p>Now you should have two files: map.pgm and map.yaml. Rename these to my<em>map.pgm and my</em>map.yaml and copy them to /tmp to use them with our system. </p>
<p>NOTE: if you choose to remap, the way points at the start of the StateMachine.py file will need to changed. </p>
<h2 id="runningthesystem">Running the System</h2>
<p>To run our system, launch the following nodes after connecting your computer to the mobile base, Xtion Pro and USB camera (from the root directory of this repo).</p>
<pre><code>cp my_map.yaml my_map.pgm /tmp
roscore
roslaunch turtlebot_bringup minimal.launch
roslaunch turtlebot_bringup 3dsensor.launch
cd launch
roslaunch amcl_demo.launch
roslaunch marker_track.launch
roslaunch usb.launch 
cd ../src/
chmod u+x StateMachine.py
./StateMachine.py
</code></pre>
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
<pre><code>Function ImageCallBack():
    image = getHSVImage()
    redImage = image.maskOutRed()
    whiteImage = image.maskOutWhite()
    whiteMoments = computeMoments(whiteImage)
    redMoments = computeMoments(redImage)
    #If red moment[m00] (the centroid is too close)
    if redMoments[m00] is too close():
        LinearX.publishSpeed(0.3)
        self.Stop = True # now we would move to the stop state
    else if whiteMoments[m00] &gt; 0 and self.Stop = False:
        PIDController (whiteMoment) # follow the line
</code></pre>
<p>PID Pseudocode:</p>
<pre><code>previous_error = 0
integral = 0
loop:
  error = setpoint - measured_value
  integral = integral + error * dt
  derivative = (error - previous_error) / dt
  output = Kp * error + Ki * integral + Kd * derivative
  previous_error = error
  wait(dt)
  goto loop
</code></pre>
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
<pre><code class="python language-python"># Goal Creation
self.client = actionlib.SimpleActionClient('move_base', MoveBaseAction)
self.goal = MoveBaseGoal()
self.goal.target_pose.header.frame_id = 'map'
...                          # placeholder for purpose of report
self.goal.target_pose.pose.orientation.x = orientation[0]
...
# Goal sent
self.client.send_goal(self.goal)
self.client.wait_for_result()      
</code></pre>
<p>At the beginning of 'exit1' state, localization is performed by publishing a position and orientation to the /initialpose topic and performing a quick rotation to increase accuracy in estimated pose. The code for this localization is below.</p>
<pre><code class="python language-python">self.initpos = rospy.Publisher('/initialpose', PoseWithCovarianceStamped, queue_size=10)
start = PoseWithCovarianceStamped()
start.header.frame_id = 'map'
start.pose.pose.position.x = 0.153
...                                      # placeholder for purpose of report
start.pose.pose.orientation.x = 0
...
self.initpos.publish(start)
</code></pre>
<p></p>
<h2 id="shapewaypoints">Shape Waypoints</h2>
<p>Encapsulates the following states 'six', 'seven', and 'eight'. For each Shape Waypoint state a goal location is published, and once the robot has reached that location, Shape Detection is performed to find the green shape that was saved from Location 2. This shape detection is performed exactly the same way as the Read Shape state.</p>
<h2 id="checkarwaypoints">Check AR Waypoints</h2>
<p>Encapsulates the following states 'checkAR1', 'checkAR2', 'checkAR3', 'checkAR4', and 'checkAR5'. For each check AR Waypoint state a goal location is predetermined and the robot goes to that location by using the ROS navigation stack. Once there, AR Detection is performed using /ar<em>pose</em>marker topic. A timer is set for 2 seconds during which the alvarCallback looks for any AR tags present. The important code for the callback is below:</p>
<pre><code class="python language-python"> def alvarCallback(self, msg):
        global objectives, BoxGoal, OtherAR, BoxAR, BoxSpot
        if self.readTime and 'ar_tag' in objectives:
            try:          
                marker = msg.markers[0]                     # Get the marker id
                if marker.id != 0:
                    if marker.id in OtherAR:                # If id is the tag location set
                        BoxGoal = self.name[-1]             # a integer representing parking stall location
                        self.tagLocated = 1                 # Flag to exit callback in execute function
                        self.color = 1                      # color to show
                    elif marker.id in BoxAR:                # If id is the box tag set
                        BoxSpot = self.name[-1]             # a integer representing parking stall location
                        self.tagLocated = 1                 # Flag to exit callback in execute function
                        self.color = 3                      # color to show
            except:
                pass
</code></pre>
<p>The AR marker id's are listed in global variables, BoxAR is a list of the possible box marker id's, whereas OtherAR is a list of the possible goal marker id's. Depending on if a AR tag is present and the AR tags marker id see if parking stall contains either the box or the goal location.</p>
<h2 id="sidebox">Side Box</h2>
<p>The Side Box state takes into account the location of the box and the location of the goal and determines which side of box to align itself on. If <code>BoxSpot &lt; BoxGoal</code> go to left side of box, if <code>BoxSpot&gt;BoxGoal</code> go to right side of box. Once determined a goal location is published, and the robot navigates to that location by making use of the ROS navigation stack.</p>
<h2 id="pushbox">Push Box</h2>
<p>The Push Box state pushes for a set time dependent on how far the box is from the goal, approximately four seconds for each box away. Once in the parking stall the turtlebot signals completion with sound and led, then transitions to exit Location 4. </p>`, day:"19", month:"FEB" },
	   						{ id: 4, url:"Article/04", title: 'Article 04', preview:"This is Article 04",body: 'This is Article 04', day:"18", month:"FEB" },  
				            { id: 5, url:"Article/05", title: 'Article 05', preview:"This is Article 05",body: 'This is Article 05', day:"17", month:"FEB" },
				            { id: 6, url:"Article/06", title: 'Article 06', preview:"This is Article 06",body: 'This is Article 06', day:"16", month:"FEB" },
				            { id: 7, url:"Article/07", title: 'Article 07', preview:"This is Article 07",body: 'This is Article 07', day:"15", month:"FEB" },
				            {  id: 8, url:"Article/08", title: 'Article 08', preview:"This is Article 08",body: 'This is Article 08', day:"14", month:"FEB" },
				            { id: 7, url:"Article/09", title: 'Article 09', preview:"This is Article 09",body: 'This is Article 09', day:"13", month:"FEB" },
				            {  id: 8, url:"Article/10", title: 'Article 10', preview:"This is Article 10",body: 'This is Article 10', day:"12", month:"FEB" }]
	return articles
}