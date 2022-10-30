# Seasonal Produce

#### (Brief Description of Application)
This application will show users what produce is currently in season within their area. The user will also have the ability to change their location and season to know what other produce are available at different times and if different areas.

#### Contributors
  * Greg Ramsower
  * Peter Philavanh
  * Grace Lee
  * Athea DeLing
  * Jonathan Liera

## Technologies Used
  * HTML
  * CSS
  * Bootstrap
  * Javascript

## Description
This application will show users what produce are in season based on the area they live in and the season. This is done by when the user opens the application an api call happens with the api ipgeolocation this returns the users ip letting the application know what state the user is in. From the same api we retrieve the date that the api call was made, we use this information to return the season that the user is currently in. Once all these calls have been made the user is able to see a list of produce that is currently in season in their area. From there the user can select the cards to get more information and suggested recipes for each produce. The user also has the ability to to change their location and season to receive a different search results of produce.

## Setup/Installation Requirements
For the user to setup this seasonal produce application the user will first need to start by forking the repository to their personal GitHub. Once the user has done that they will want to create a file and clone into that file from the forked repository they just created. They then will want to open the folder with in their vs code. When everything is open the user will want to start the setup for the application. The user will want to start with a npm install with in the terminal followed by a npm run build. When that is finished the user should create a .env file this is where they will put their personal key for the api's used in this application. To get the api keys for each api first the user should create a count for the [ipgeolocation](https://ipgeolocation.io/), once an account it made it will give you a key. Next the user will need to make an account with [spoonacular](https://spoonacular.com/food-api/docs), this will give them the key for recipes for each produce presented. Once the keys have been added the .env file the user is ready to use the application they will just have to do _npm run start_ this will open the application giving the suggested seasonal produce 

## Known Bugs
  * Currently there are no known bugs

## License
[GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/#) copyright (c) 10/23/2022