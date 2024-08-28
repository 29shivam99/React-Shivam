// custom hooks helps to make our code more modular

// it is not a mandatory thing but it makes code more- modular, readable, reusable.

// it is just a function that does something

// for example the RestaurantMenu component earlier was doing 2 major things -
// to fetch data in the useEffect
// to display the data to UI

// but it should ideally only display to UI hence we can create a custom hook for fetching data

// folder/file structure for the hooks-
// put each hook in seperate file and these file should be in utils
// name of file must be same as the hook name
// always start the hook name with 'use'
// we will export this hook and this can be imported in the

// if u r building a custom hook then as per official doc it says 'use' should be used as prefix of name.
// sometimes some projects use the linter that can throw error if u dont have 'use'
// it also makes the code consistent and easy to manage and debug
