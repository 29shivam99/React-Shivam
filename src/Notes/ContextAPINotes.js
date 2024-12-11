// we generaly keep context in utils folder
// we can make as many context we want
// dont keep every data (event wihch is needed only 1-2 component) in context, keep only those data which is used in multiple places in context - good practice

//! context creation

// create a js file in utils.js for the property u want as context (ex UserContext.js for loggedin user)
// CreateContext - using -  import { createContext } from "react";
// export the function

//! to use context using hooks (in functional components) - very common

// import in the component where u want to use the contex
// we need to use the useContext hook

//!  to use context using .consumer (in class components) - not common - but need to learn

//! to modify the value of
