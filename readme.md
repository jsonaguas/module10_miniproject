I have coded a webpage that will allow a visitor to search for an existing
Pokemon and be able to retrieve more detailed stats about that Pokemon. When
you arrive on the landing page, there is a cover photo that will introduce the visitor
to the website. There is a call-to-action at the bottom of the page which intuitively
where one would expect as the user finishes reading but they can also navigate
to the search function by clicking on the 'search' link in the nav bar.

The search feature is located on a separate page. It has basic instructions that
directs the user to enter the name or ID of an existing Pokemon into the textbox and
press the 'search' button when finished. There is an onclick event with an async/await
function that will fetch the appropriate data if Pokemon exists and display a sprite.

For more info on that specific Pokemon's attributes, I added another onclick event to a separate button underneath the sprite where the Pokemon name would be accessed in a separate page and retrieved again from the PokeAPI using localStorage. The sprite would display
along with other attributes.

For the search bar, I added the functionality of an error message to display to the
user if that Pokemon doesn't exist due to spelling or wrong ID.

I utilized Bootstrap components to streamline CSS styling of HTML elements such as the 
background color, toggle icon of the navbar, etc. The toggle icon of the navbar is
the predominant dynamic element as the page is solely designed within the confines
of a singular column.