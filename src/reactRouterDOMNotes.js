// React router dom gives us -
// a special hook called useRouteError
// a 'link' for navigations - never ever use <a href> tag bcoz that will reload the entire page and if it does so then what is the purpose of SPA.
// Link is given by react router and it is a wrapper over the anchor tag. Also when u inspect in HTML the Link u wont see u will se <a> only. This is bcoz React ka Link interanlly uses <a>
