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
* Super Easy OOCSS Responsive Grid
* Simple, Modular LESS structure
* jQuery CDN & Local Fallback
* Custom Reset/Normalize
* Chrome Frame Support  & Conditional IE/no-js Comments
* Old Browser Support (read: fixes)

##How to use myBP

###Folder Structure
All HTML/PHP pages go in the root along with your main stylesheet. style.css is the main(and only) stylesheet, that contains media queries and your IE/no-js fixes. It's all contained in one to reduce HTTP requests.

####Images
Pretty obvious really, put all your images here. I find that using a naming convention for images really helps when you're looking through this folder. Here's how I prepend my image files:
* Icons: `icon-`
* Images: `img-`
* Backgrounds: `bg-`
* Logos: `logo-`

####js
All scripts should be placed in here. There's a lib folder inside to place any script libraries such as jQuery, prototype, etc. The plugins.js should be where you place all plugin code, again all in one file to reduce the amount of HTTP requests. scripts.js is where you put your site's js code.

####Includes
The includes folder is where your header and footer are kept. The page-start.php file contains everything above the page content, including navigation and the opening `body` tag. The page-end.php contains the footer and scripts to be loaded just before the closing `body` tag. It doesn't close the body in case you want to load scripts specific to the page. Within the page-start.php are relevant variables which are assigned on the sites pages to fill in meta descriptions/titles and add classes to the body tag.

####Less
This is the Less folder where all less files are contained. This should be compiled locally and only publish the output (style.css) to the live site. The main style.less is where the majority of your CSS is, for layouts, objects, etc. It pulls in a number of LESS files, for variables, type, reset, mixins, etc. Keeping things in seperate .less files keeps it modular and easy to use. Media Queries are changed in variables.less and set with `@media @desktop {}`, etc.

####Misc files
You'll also find a To Do.txt and a humans.txt file. The former is just a text file for you put reminders in of things to do, a checklist, comes with some I find I need reminding of. The latter is explained here (http://humanstxt.org/) and is pointed to in the author meta. If your  site is playing up, uncomment the debug.less file, it might help.

###Less Mixins
myBP comes with some pretty nifty and useful mixins I found and I tend to use often. There's a load I don't tend to use which are in other boilerplates so you could add your own to the mixins.less file. Here's a brief overview of the ones included:
* `.font-size(16)` - Sets a font-size in rems and a px fallback for older browsers. 
* `.grad-h(blue, red)` - Sets a horizontal gradient with start colour and end colour parameters.
* `.grad-v(blue, red)` - As above but for vertical gradients.
* `.transition(rotate(90deg))` - Sets transitions, not limited to rotations.
* `.rotate(45deg)` - Sets a rotate transition, similar to above but easier.
* `.cf` - Clear floats, not a mixin now in case you want to add the class to html instead, but it extends as well.

###Credits:
Thanks to these guys I made myBP. Most of the things I use in myBP comes from the things these cool guys made, check them out, they might help your workflow.

* HTML5BP Project (http://html5boilerplate.com/)
* 320andUp Project (http://stuffandnonsense.co.uk/projects/320andup/)
* Meyer's Reset (http://meyerweb.com/eric/tools/css/reset/)
* Normalize.css (https://github.com/necolas/normalize.css)
* Inuit.css (http://csswizardry.com)
* Clear Less (https://github.com/clearleft/clearless)
* CSS-Tricks Grids (http://css-tricks.com/dont-overthink-it-grids/)