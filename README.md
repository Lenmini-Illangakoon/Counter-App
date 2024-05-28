Simple Counter Project with React

This project demonstrates creating a simple counter using React functional components and the useState hook.

1. Create a New React App
    - Begin by creating a new React app using the following command:
            npx create-react-app counter-app
    - To start the local development server and run the app, execute the following command:
            npm start

2. Create HTML Elements
    - Within the App.js file, the HTML structure IS defined for the counter.
    - This includes creating buttons for incrementing, decrementing, and resetting the counter and a span element to display the current count.
3. Create States and Functions
     A state called counter uses the useState hook to store the counter value. Initially, the state will be set to 0. Three functions to control the counter values are made:
            1. increment: Increments the counter value by 1.
            2. decrement: Decrements the counter value by 1, but only if it's greater than 0.
            3. reset: Resets the counter value to 0.
   These functions will be triggered by clicking events on the respective buttons, and updating the counter value accordingly.
   
5. Add CSS Styling
Create a new file called App.css and add CSS styles to enhance the display of the counter component.
