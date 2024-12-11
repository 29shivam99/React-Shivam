// in react we have 1 way flow
// if u want to pass data from first level to 6th level then doing this with the props is vert difficult and does not makes sense
// this problem is called props drilling
// for this we have react context - it is like a place where all components can access that data
// example of sucha data can be logged-in user, theme-light/dark this info is needed in entire app
// we can create as many contexts as we want to in aapliication
// but dont avoid props and start adding everything in context, only the data that can be present in multiple places should be used

//https://react.dev/learn/passing-data-deeply-with-context#the-problem-with-passing-props
