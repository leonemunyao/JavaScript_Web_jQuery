JavaScript is the browser.

Now that we can structure the document and its content with HTML and we can style it in many ways with CSS, we may want to go beyond those capabilities like change the HTML document and perform some operation based on certain circumstances

JQuery & co

While JQuery's syntax is very appreciated by developers, one of its obvious tradeoff is one of perfomance. Its was immensely useful in writing code to safely work on all browsers.

Dealing with Data statistically versus dynamically.

A static website is an unchanging website and stays the same regardless of how we interact with it. A dynamic website has content and/or presentation that can change. If you deal with data statically, you are using your dataset as fixed set of values. If you deal with data dynamically, you are using it as a set of data that changes over time.

What is JavaScript.

JavaScript is a scripting or programming language. It allows developers to implement complec features on web pages.

So What can it really do.

The core-client javascript language consists of some common programming features that allow you to do things like;
 : Store Usefull values inside variables. In our case we ask for a new name to be entered then store that name in a variable called name
 : Operations on pieces of text known as strings in programming. We take our string which is Player 1: and join it with name.
 : Running the code in response to certain events occuring on a web page. We used click event in our example. 

 API's : Application User Interface.

 API's are ready made sets of code building blocks that allow a developer to implement programs that would other wise be hard or impossible to implement. They fall into two categories. We have 3rd Party API's and Browser API's.

 Browser API's are built into the web browser. These are like the DOM(Document Object Models) API's, Geolocation API, Canvas and WebGL, Audio and Video APIs like HTMLMediaElement.

 Third Party APIs are not built by default and you generally have to grab their code and information from somewhere on the Web. They include the Twitter APIs and the Google Maps API.


 JavaScript running Order

 When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. This means that you need to be carefully what order you put things. In our case we are selecting a button (line 1), then attaching an event listener to line 3 so that when the button is clicked, the updateName() code block runs.

 Interpreted versus compiled 