1)Project implemented using react-redux. Implemented cards with API connection with descriptions and photographs.
The cards also had an added button for adding to favorites, this was implemented through redux and persist. With the help of persist, the card is added to the local storage and after refreshing the page or re-entering the site, the cards are saved. The favorite block is implemented so that it takes data from local storage and renders it.
The card also has a show more button, when clicked, it opens a modal window with a detailed description, reviews and a form with which you can reserve a car. The modal window is implemented through reduxSlice and with a request for the back end, which, using the car ID, shows its data, in The form also contains a validator with required fields and date control. For routing, react-router-dom was used with the help of Routes and Route implemented routings. There is also pagination and when you click on the more button, 4 more cars are rendered.

2)A filter has been made to search for a car, which includes a search by location, search by amenities and by type of car. 
To implement filter search, I created another thunk.js and added additional filtering after the request to the backend, after which I returned an array of required products.
This function takes an object with arguments that include a location as a string, a convenience as an array of strings, and another string as a type.To filter using the filter method.
This filtering form includes an input for entering a location, 5 checkboxes designed as icons and 3 radio buttons for selecting the type of car.
For input with location, its own function is assigned to track changes, which is written to its own variable.
For 5 checkboxes, a separate function has also been written that monitors the selected checkboxes; this information is recorded in a variable, after which it filters only the selected checkboxes and, upon submission, sends them to the function for the request to the backend. 
And for radio buttons there is a function that records the value and sends a variable with this value to the function.
There are placeholders in case their request does not find anything. It is worth redirecting if the user has visited a non-existent page and there is also a stub on the favorites page with a request to add cars and the ability to go to the catalog.
