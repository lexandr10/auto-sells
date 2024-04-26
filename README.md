Project implemented using react-redux. Implemented cards with API connection with descriptions and photographs.
The cards also had an added button for adding to favorites, this was implemented through redux and persist. With the help of persist, the card is added to the local storage and after refreshing the page or re-entering the site, the cards are saved. The favorite block is implemented so that it takes data from local storage and renders it.
The card also has a show more button, when clicked, it opens a modal window with a detailed description, reviews and a form with which you can reserve a car. The modal window is implemented through reduxSlice and with a request for the back end, which, using the car ID, shows its data, in The form also contains a validator with required fields and date control. For routing, react-router-dom was used with the help of Routes and Route implemented routings. There is also pagination and when you click on the more button, 4 more cars are rendered.
