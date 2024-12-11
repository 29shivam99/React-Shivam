// when we say we are loading a class component it means we are creating the instance of that class and hence constructor is called. This constrcutor recieves the props and we can create state variables in the constructor.
// state is a resereved keyword in class based, it contains all our state variables
// to declare a state var we use this

// construnctor(props){
// count, text are now state variable
//   this.state = {
//     count: 0,
//  text: "default"
//   }
// }

// to use count -> this.state.count

//! vvvvvv imp react class based component life cycle

//? mounting/loading-

// when class based component renders/loads then a new instance of that class is created. And the constructor of the class is called and then the render() is called.

//? order of calls -

// if a parent class component returns a JSX that has a class component. Then in that case we have a parent compoent and a child component.
// In this scenario parent class is mounted/loaded firsts so its constrcutor is called the its render func then when it encounters the line like <UserClass /> or whatever child is, then the child is mounted/loaded and constructor of child is called and the render func of child is called

// parent constructor -> parent render -> child constructor -> child render

//? componentDidMount

// class based comp also have a method called componentDidMount
// once the component is loaded/mounted and it is in the DOM then this is called

// constructor -> render -> componentDidMount

//! what if parent also has componentDidMount and child also has componentDidMount

// parent constructor -> parent render -> child constructor -> child render -> child componentDidMount -> parent componentDidMount

//OR

// parent constructor -> parent render -> child lifecycle -> parent componentDidMount

// this is bcoz once render is done then only componentDidMount is called. Once children is encountered in JSX so the complete lifecyle of child will complete then parent componentDidMount is called

//! vvvv imp in case of multiple children

// parent constructor -> parent render -> child constructor -> child render -> child componentDidMount -> parent componentDidMount

// render phase - constructor called and render called
// commit phase - DOM is updated
// then componentDidMount called.

// hence if multiple children are there then react will batches them render them and then only goes to componentDidMount.
// this batching up the render phase of children helps to react being fast.

//! usecases for the componentDidMount

// to make API calls
// just think it like this - in functional components we used to call APIs in useEffect, that is when the ccomponent is rendered. Similarly in the class based components the similar case that is when class based comp is rendered comes in componentDidMount.
// why we wait to render -> so that we dont have to wait for API call to complete rather render it so that something is visible to UI(though we dont have data but atleast something is visible) and then we can fetch the API data and then fill the data in UI

//! componentDidUpdate

// called once the component is updated

//! triggers for rerender of a component -> 1. new props 2.setState() 3.forceUpdate()

// once the component is rerendered due to any of the triggers mentioned above then in that case the DOM is updated/ UI is updated. And after this updation of DOM/UI the componentDidUpdate is called.

//! componentWillUnmount()

// is called just before the component is going to be unloaded from DOM/UI

//! we can not use hooks in class comp
