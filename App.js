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
root.render(tmp);

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
 */

/////////////////// HOW TO CONFIGURE NPM IN REACT APP /////////

/*
When we use the create react app then in that case the npm automatically comes configured.
But to configure it ourselves do this

1. npm init or npm init -y (this will skip some things)

*/
