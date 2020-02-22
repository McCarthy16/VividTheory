## Authors: Revan MacQueen, Jordan McCarthy
## Contents
[Purpose and  Prerequisites](https://github.com/cmput412/final_competition/wiki/Competition-Report#purpose-and-prerequisites)

[Execution](https://github.com/cmput412/final_competition/wiki/Competition-Report#execution)

[Code and Concepts](https://github.com/cmput412/final_competition/wiki/Competition-Report#code-and-concepts)

# Purpose and Prerequisites
## Purpose
The purpose of this system is to follow a line on the ground while performing various computer vision and manipulation tasks at designated spots along the course. These tasks include object counting, colour recognition and shape detection and box pushing. Additionally, there is a "parking lot" at which the robot must park at a stall denoted by a shape seen earlier and push a box to a stall marked with an AR tag.

## Prerequisites
This project was built on Ubuntu 16.04 using ROS kinetic and python3. The appropriate links are below. 

https://www.ubuntu.com/download/alternative-downloads

http://wiki.ros.org/kinetic/Installation/Ubuntu

To install python3 if you don't already have it, open a terminal window and type:
```
sudo apt-get update
```
```
sudo apt-get -y update
```
We'll also need pip for some other packages:
```
sudo apt-get install -y python3-pip
```

To install Python Libraries:
```
pip3 install numpy
```
```
pip3 install scikit-image
```


Additionally, a number of other ROS packages where used. To install these use:

For Turtlebot: (http://wiki.ros.org/Robots/TurtleBot)
```
sudo apt-get install ros-kinetic-turtlebot
```
SMACH: (http://wiki.ros.org/smach)
```
sudo apt-get install ros-kinetic-smach
```
Tele-op with a controller: (http://wiki.ros.org/turtlebot_teleop)
```
sudo apt-get install ros-kinetic-turtlebot-teleop 
```
AR tag tracking: (http://wiki.ros.org/ar_track_alvar)
```
sudo apt-get install ros-kinetic-ar-track-alvar
```
Mapping tool: (http://wiki.ros.org/slam_gmapping)
```
sudo apt-get install ros-kinetic-gmapping
```
AMCL: (http://wiki.ros.org/amcl)
```
sudo apt-get install ros-kinetic-amcl
```
usb_cam: (http://wiki.ros.org/usb_cam)
```
sudo apt-get install ros-kinetic-usb-cam
```
You'll also need OpenCV for computer vision libraries. Follow the instructions at the following link:
https://www.learnopencv.com/install-opencv3-on-ubuntu/

Lastly, you'll need to clone and this directory into a catkin workspace.
```
git clone https://github.com/cmput412/final_competition.git
```

It's very useful to get familiar with smach, as this system uses it extensively. A tutorial can be found at: http://wiki.ros.org/smach/Tutorials

## Robot Assembly
Follow the steps at https://imgur.com/a/PCgm7YN to configure your system

# Execution
## Mapping

Our system makes user of AMCL and the ROS navigation stack. This requires the area the robot is operating to be mapped out. We have included default map files in the repo, but if you wish to use the system on another course, you'll need to map it out first. If you're running the system on the default course, ignore this part.

To create a map, launch your robot system with the following nodes (after you've connected a logitech wireless controller):
```
roscore
roslaunch turtlebot_bringup minimal.launch
roslaunch turtlebot_teleop logitech.launch # To control your robot with a wireless Logitech controller
                                           
rosbag record -O data.bag /scan /tf
```
Now drive the robot about the course to record the details in the rosbag. Driving as slow as possible will result in the highest quality map. Once you're done with mapping, press Ctrl-C in the terminal window to quit the mapping process.  

And lastly, set map generation parameters (you may need to change these to get an optimal map)
```
rosparam set /slam_gmapping/angularUpdate 0.1
rosparam set /slam_gmapping/linearUpdate 0.1
rosparam set /slam_gmapping/map_update_interval 2.0
rosparam set /slam_gmapping/minimumScore 200
rosparam set /slam_gmapping/xmax 20.0
rosparam set /slam_gmapping/xmin -20.0
rosparam set /slam_gmapping/ymax 20.0
rosparam set /slam_gmapping/ymin -20.0

rosrun gmapping slam_gmapping
```
Now you should have two files: map.pgm and map.yaml. Rename these to my_map.pgm and my_map.yaml and copy them to /tmp to use them with our system. 

NOTE: if you choose to remap, the way points at the start of the StateMachine.py file will need to changed. 

## Running the System
To run our system, launch the following nodes after connecting your computer to the mobile base, Xtion Pro and USB camera (from the root directory of this repo).

```
cp my_map.yaml my_map.pgm /tmp
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
```

NOTE: you may need to change video0 in usb.launch to video1 depending on whether your computer starts the webcam as the usb camera.

NOTE: you may also need to adjust the inflation radius for the local cost map down in rqt.

# Course

The robot will now run, provided it's on an appropriate course. The robot is current programmed to run the following:

<img src ="https://user-images.githubusercontent.com/35321012/54699883-7d3c6b80-4af7-11e9-9f91-276e61b1e12d.PNG"/>


### Location 1
For this competition, we bypassed location 1 to save time. 

### Location 2
Image of location 2:

<img src ="https://user-images.githubusercontent.com/35321012/53614670-efc0c800-3b97-11e9-9c14-46391cd100b8.PNG"
 width="300" /> 

The robot will once again count the number of objects it sees (in this case shapes) and give a corresponding number of beeps. However, it will also look for the green shape and remember which specific shape it is (circle, triangle, etc.) for later.

### Location 3 

For this competition, we bypassed location 3 to save time. 


### Location 4

Location 4 contains 8 different parking spots. The robot will search for, then park at a stall marked by the shape seen earlier. Then it will search for the box, and AR tag denoted goal for the box, then push the box to that spot.

Example of AR tags:

<img src ="https://user-images.githubusercontent.com/35321012/54700284-5468a600-4af8-11e9-82c2-c6a274554bf8.png" width="400" />

Example of shape to look for:

<img src ="https://user-images.githubusercontent.com/35321012/53614815-6b227980-3b98-11e9-8a09-4f95448e18bb.PNG" width="300" />

# Code and Concepts

## Overview
### Video
Click here to see the robot in action:

<a href=" https://www.youtube.com/watch?v=5XsuE7OAziA&app=desktop  
" target="_blank"><img src=" http://img.youtube.com/vi/5XsuE7OAziA/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="300" height="300" border="10" /></a>

### State Diagram
Our system is summarized by the following state diagram:
![State Machine](https://github.com/cmput412/final_competition/blob/master/StateMachine.png)

Most of the states are fairly self explanatory (sleepstate, turn90, turn180 etc.) but a few warrant some explanation. The specific transitions between states are determined by a counter which is incremented each time a red line is encountered. Additionally, the long sequence of states (exit1 -> exit2 -> exit3 ...) correspond to the traversal of the "parking lot" area.


## Line Follow
The most important part of the line follow state is the image callback, which computes a centroid of the white part of the image. The robot then follows this centroid with the help of a PID controller

Pseudo-code:
```
Function ImageCallBack():
    image = getHSVImage()
    redImage = image.maskOutRed()
    whiteImage = image.maskOutWhite()

    whiteMoments = computeMoments(whiteImage)
    redMoments = computeMoments(redImage)

    #If red moment[m00] (the centroid is too close)
    if redMoments[m00] is too close():
        LinearX.publishSpeed(0.3)
        self.Stop = True # now we would move to the stop state


    else if whiteMoments[m00] > 0 and self.Stop = False:
        PIDController (whiteMoment) # follow the line
```

PID Pseudocode:
```
previous_error = 0
integral = 0
loop:
  error = setpoint - measured_value
  integral = integral + error * dt
  derivative = (error - previous_error) / dt
  output = Kp * error + Ki * integral + Kd * derivative
  previous_error = error
  wait(dt)
  goto loop
```

## Scan Object
This states counts the number of objects present. The Most important part of this state is again the image call back, where the number of red and green objects is determined by first masking the relevant HSV values, then using `cv2.findContours()` to return the contours of each shape. Then we use  `measure.regionprops()` to find number of blobs

## Read Shape
This state determines what shape the robot robot is looking at. The general algorithm is to mask out the green values of the image, then use the following lines of code to find the contours:
```python
ret, thresh = cv2.threshold(mask, 127, 255, 0)
m2, cnts, hierarchy = cv2.findContours(thresh,cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
```
We then use our shape detector class to can the contours and return the shape (if any) it sees.

## Shape Detector
It's worth mentioning the helper class shape detector, we when given a contour, determines what shape it is through the openCV functions
```python
peri = cv2.arcLength(c, True)
approx = cv2.approxPolyDP(c, .04 * peri, True)
``` 

## Enter/Exit Waypoints
Encapsulates the following states 'exit1', 'exit2', 'exit3', 'enter1', 'enter2', and 'enter3'. These states are waypoint states used to enter and exit the off-ramp area. Given a location on the map each state sends a goal and waits for the turtlebot to safely complete its task.

```python
# Goal Creation
self.client = actionlib.SimpleActionClient('move_base', MoveBaseAction)
self.goal = MoveBaseGoal()
self.goal.target_pose.header.frame_id = 'map'
...                          # placeholder for purpose of report
self.goal.target_pose.pose.orientation.x = orientation[0]
...
# Goal sent
self.client.send_goal(self.goal)
self.client.wait_for_result()      
```

At the beginning of 'exit1' state, localization is performed by publishing a position and orientation to the /initialpose topic and performing a quick rotation to increase accuracy in estimated pose. The code for this localization is below.

```python
self.initpos = rospy.Publisher('/initialpose', PoseWithCovarianceStamped, queue_size=10)
start = PoseWithCovarianceStamped()
start.header.frame_id = 'map'
start.pose.pose.position.x = 0.153
...                                      # placeholder for purpose of report
start.pose.pose.orientation.x = 0
...
self.initpos.publish(start)
``` 

## Shape Waypoints
Encapsulates the following states 'six', 'seven', and 'eight'. For each Shape Waypoint state a goal location is published, and once the robot has reached that location, Shape Detection is performed to find the green shape that was saved from Location 2. This shape detection is performed exactly the same way as the Read Shape state.

## Check AR Waypoints
Encapsulates the following states 'checkAR1', 'checkAR2', 'checkAR3', 'checkAR4', and 'checkAR5'. For each check AR Waypoint state a goal location is predetermined and the robot goes to that location by using the ROS navigation stack. Once there, AR Detection is performed using /ar_pose_marker topic. A timer is set for 2 seconds during which the alvarCallback looks for any AR tags present. The important code for the callback is below:

```python
 def alvarCallback(self, msg):
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
```

The AR marker id's are listed in global variables, BoxAR is a list of the possible box marker id's, whereas OtherAR is a list of the possible goal marker id's. Depending on if a AR tag is present and the AR tags marker id see if parking stall contains either the box or the goal location.

## Side Box
The Side Box state takes into account the location of the box and the location of the goal and determines which side of box to align itself on. If `BoxSpot < BoxGoal` go to left side of box, if `BoxSpot>BoxGoal` go to right side of box. Once determined a goal location is published, and the robot navigates to that location by making use of the ROS navigation stack.

## Push Box
The Push Box state pushes for a set time dependent on how far the box is from the goal, approximately four seconds for each box away. Once in the parking stall the turtlebot signals completion with sound and led, then transitions to exit Location 4. 