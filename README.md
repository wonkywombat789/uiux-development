# Development

### Link to Deployed Website
If you used the stencil code, this is https://wonkywombat789.github.io/uiux-development/

### Goal and Value of the Application
The goal of this application is to serve as a way for users to browse through this bakery website and add items to their cart and filter based on their preferences. The filters and sorting allows for the users to more easily find what they are looking for. Setting the filters to lowest, cookie, special, can help the user quickly find what is the least expensive special flavored cookie. 

### Usability Principles Considered
When thinking about usability for the app, I wanted to make sure that it was easy to navigate and learn. Intuitively labeling my filters and items could allow for users to understand what they want to be looking for and how to find it. For the cart, I wanted to ensure that it was clear to the user what was in their cart, so at the top I made sure to label how many items were in their cart as well as label how many of each item is in there. I also tried to use a high contrast color scheme for visual accessibility. 

### Organization of Components
I created different components with the main rendering component being the App. In addition to the App component I created Cart, Filter and Product components. Each component manages how their respective aspects are rendered. While much of the updating takes place in the App component, separating out the components into different files allowed me to more easily keep track of the different parts of the page. 

### How Data is Passed Down Through Components
Data is passed down through components using props. 

### How the User Triggers State Changes
State changes are triggered when the user applies a filter or adds/removes an item from the cart. This can be done if the user clicks on one of the dropdown menus (sort, type or flavor) or clicks an add to cart button for one of the items. These events trigger a state change as it must alter the layout of the page and the state of the item (whether it appears or not, or how it is ordered).
