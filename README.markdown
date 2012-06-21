#myBP

My boilerplate/framework when starting new projects. myBP contains all the necessary files and templates I use to begin a new site, without the bloat I don't need which is usually found in boilerplates. A lot of code snippets used in this are from the many boilerplates found on the net so while some of it may seem very similar, and it probably is, it's specifically tuned for my workflow. Much thanks to the guys that helped/inspired me to make it, see bottom for credits.

###Uses:
* HTML5
* CSS3
* PHP
* jQuery
* LESS

###Features:
* HTML5 Ready
* Convenient CSS3 Mixins
* Simple, Modular CSS & PHP Includes
* jQuery CDN & Local Fallback
* Customised Eric Meyer's Reset
* Chrome Frame Support  & Conditional IE/no-js Comments
* Box-sizing support for IE6/7
* Basic Print Styles

##How to use myBP

###Folder Structure
All HTML/PHP pages go in the root along with your main stylesheet. style.css is the main(and only) stylesheet, that contains media queries and your IE/no-js fixes. It's all contained in one to reduce HTTP requests.

####images folder
Pretty obvious really, put all your images here. I find that using a naming convention for images really helps when you're looking through this folder. Here's how I prepend my image files:
* Icons: `icon-`
* Images: `img-`
* Backgrounds: `bg-`
* Logos: `logo-`

####Scripts
All scripts should be placed in here. There's a lib folder inside to place any script libraries such as jQuery, prototype, etc. The plugins.js should be where you place all plugin code, again all in one file to reduce the amount of HTTP requests. scripts.js is where you put your site's js code. box-sizing.htc is the box-sizing fix for older versions of IE.

####Includes
The includes folder is where your modules are kept, such as header, footer, etc. The start.php file contains everything above, and including, the opening `body` tag. The end.php contains the scripts to be loaded just before the closing `body` tag and closes the html document. Within the start.php are relevant variables which are assigned on the sites pages to fill in meta descriptions/titles and add classes to the body tag.

####Less
This is the Less folder where all less files are contained. This shouldn't be uploaded, well it doesn't add to the site, really and is used as a local folder. The main style.less is where you'll be creating your css, you should set this to compile(locallly, don't compile client or server side!) a style.css to the root. style.less pulls in the reset from reset.less(duh..) and any mixins you may use from elements.less.

####Misc files
You'll also find a To Do.txt and a humans.txt file. The former is just a text file for you put reminders in of things to do, a checklist, comes with some I find I need reminding of. The latter is explained here (http://humanstxt.org/).

###Less Mixins
myBP comes with some pretty nifty and useful mixins I found and I tend to use often. There's a load I don't tend to use which are in other boilerplates so you could add your own to the element.less file. Here's a brief overview of the ones included:
* `.font-size(16)` - Sets a font-size in rems and a px fallback for older browsers. 
* `.h-gradient(blue, red)` - Sets a horizontal gradient with start colour and end colour parameters. Contains browser prefixes & fallbacks.
* `.v-gradient(blue, red)` - As above but for vertical gradients.
* `.border-radius(5px)` - Sets the border radius. Use more than one parameter for different corners (`.border-radius(5px 0 5px 0)`). Contains browser prefixes.
* `.box-shadow(1px 1px 0 #000)` - Sets box-shadow. Contains browser prefixes.
* `.transition(rotate(90deg))` - Sets transitions, not limited to rotations. Contains browser prefixes.
* `.rotate(45deg)` - Sets a rotate transition, similar to above but easier. Contains browser prefixes.
* `.opacity(0.5)` - Sets opacity. Contains IE filter.
* `.clear()` - The awesome one. Apply to any element you want cleared instead of applying a "clearfix" class to the html tag. Uses the micro clearfix method.

###Credits:
Thanks to these guys I made myBP. Most of the things I use in myBP comes from the things these cool guys made, check them out, they might help your workflow.

(http://html5boilerplate.com/) The HTML5 Boilerplate.
(http://stuffandnonsense.co.uk/projects/320andup/) The 320andUp project.
(http://meyerweb.com/eric/tools/css/reset/) Mr. Meyer's awesome reset.
(https://github.com/Schepp/box-sizing-polyfill) Christian Schaefer's awesome box-sizing fix for IE6/7.