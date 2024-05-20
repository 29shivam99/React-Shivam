import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", abcd: "hi" }, // attributes
  "Hello Akshay, react!" // children
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
//root.render(heading);

// Please note that createElement here in react is not same as in JS. Here heading will not be a HTML element like we get in vanilla JS, rather here it is an object.

// now render method takes the object returened by createElement and then converts it into HTML element and adds it to DOM. Also see the children which were already in the root div of html (<h1>This H1 is already in HTML</h1>) will be replaced by whatever is passed to render fn. SO render replaces ( not append) everything in the root. And see how everytihng at top/bottom of the Root stays same.
// Hence react works only at the part which we declare at root.

console.log(typeof heading, heading);
console.log(typeof root, root);

///// NEED FOR JSX ///////////

/*
Now suppose we need to create a HTML structure like this-

  <div id="container">
    <div id=inner-container>
      <h1>This is a H1</h1>
      <h2>THis is a H2</h2>
    </div>
  </div>
*/

const tmp = React.createElement(
  "div",
  { id: "container" },
  React.createElement(
    "div",
    { id: "inner-container" },
    //passing multiple children (we need to use array for it)
    [
      React.createElement("h1", {}, "This is a H1"),
      React.createElement("h2", {}, "This is a H2"),
    ]
  )
);
// the above this will get more and more complicated once the HTML u want to create becomes lengthy
root.render(tmp1);

///// WHAT IS A PRODUCTION READY CODE ///

/**
 * MINIFICATION
 * BUNDLING
 * REMOVE UNNCESSARY COMMENTS AND CONSOLES LOGS
 * IMAGE OPOTIMISATION
 * CACHING
 * CODE SPLITTING
 * COMPRESS CODE
 * CHUNKING
 */

////////////////////////// NPM ///////////////

/**
 * A lottttt of packages/libraries/utilities are hosted in npm
 * NPM is a repo for a lott of packages
 * NPM manages the packages in our project like what is the version of those packages etc
 */

/////////////////// HOW TO CONFIGURE NPM IN REACT APP /////////
//packages are also called dependencies
// we have 2 types of dependecies - dev dependecy other is normal one. Dev dependecy is the one which we use while development only. But the other one is used for prod as well

/*
When we use the create react app then in that case the npm automatically comes configured.
But to configure it ourselves do this

1. npm init or npm init -y (this will skip some things)
2. After doing the steps in previous step, the new file called package.json will be created, """"this file is configuration for NPM""""
3. We will install our packages -> Most imp is bundler
  bundler is a dev depnednecy since bundling, minification etc all these needs to be done in dev only not in the prod.
  TO install a pckage as a normal dependecy use npm install <package name> but for dev dependecy
  use - > npm install -D <package name> 
  So when we execute these commands then these packages are fetched from npm repo to local
*/

// What is a bundler - we have html, css, JS files. That needs to be bundled
// webpack, parcel, weed are bundler
// create react app uses webpack
// in our project we will use parcel

//////////////////////// how to build the app via the parcel ////////////

/*
  command - npx parcel <source file name> 
      here  npx parcel index.html 

      To execute  a package we use npx just like we use npm for the installation of a package

      to execute for prod we can use npx parcel - in this case it compresses everything into 3 files like css, html, js

*/

////////////////// what are the ways to get the react code/paxkage to our project///

//1. via cdn links- not a good way- bcoz we are fetcing it from a website which will take time so its rather better that we have it in our node modules to avoid that. Second is that in cdn link we have version hardcoded so if react version changes we need to change it there.
//2. via npm

//////////// Interview quesion //////////

//Q- What's the difference between tilde(~) and caret(^) in package.json?

// ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

// ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

// Q- What is diff between package.json and package-lock.json

//Q- What does node module contains?

// it contains the packages we install from npm. But when we install even 1 pckage then a lot of things are added to the node modules, all these things are dependencies of that package that u installed and some other dependency has some other dependency etc etc. Each package in node modules has its own package.json so that npm knows which package has dependency on which and so on so it installs that as well ans chain keeps on going

//Q Should I put this node module to the production or git hub?

// no put it in git ignore for git

//Q Should I put this package-locak.json to the production or git hub?

////////////////////////////// ADVANTAGES OF PARCEL /////////////////
// go to https://parcel.org u will find a lot of things
/**
 *dev builds
 *local serers
 *HMR => Hot module replacement
 *File watching algorithms
 * Caching- faster builds
 * Image optimisation
 * Minification
 * Bundling
 * Compress the file
 * Consistent hashing
 * Code splitting
 * Differential bundling- to support older browser
 * Better error suggestions on the web page
 * Gives support to host app on the Https as well apart from http (npx parcel index.html --https)
 * Tree Shaking - removes unused code
 * Different bundles for dev and prod
 */
// parcel creates cache folder
// parcel creates the dist folder which has the build files, when u load the web page then it takes the resources from dist

// one of the most expensive operations when the web page loads is to load images, parcel does image optimisation
