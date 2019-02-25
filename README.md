# charlotte-events-app
events app for whats going on around charlotte, info sourced from https://bit.ly/2VdojLR

Sheety Google Sheets events API:
https://api.sheety.co/ce216392-6bb9-4b1f-8940-7d293edf62e4

Uses Vue Material for the UI: https://vuematerial.io/components/select
List of Components available to import: https://github.com/vuematerial/vue-material/tree/dev/dist/components

Hosted on netlify: https://charlotte-events-app.netlify.com


## To Do
+ ~~List all events within a week of the current date~~
  + ~~List all events in the next week~~
  + ~~list all events in 2+ weeks out~~
  + ~~List all events in the past~~
  + ~~List events on the page by time category~~
  + Sort events by most recent first
  + Extract each event section to its own `EventCategory` component
+ Sort events (this week, next week, later, past) in a tab bar at the top
  + Remove the "Upcoming..." header
  + Keep the "Feb 4 - Mar..."
    + Copy the logic that prevents "Feb 4 - 11" from showing up as "Feb 4 - Feb 11" in the event card into the header area
+ Change component organization to be one component in `components/pages/` for each page of the `router-view` then inside there it will have the `EventCategory` components or the `Place` components
+ For the places list view also use a card list
  + have place name as the header
  + place address as the subheader with a `&middot;` then the distance away string (e.g. "26 minutes away")
  + have one action button that says "View Events" and another that says "Get Directions"
+ For the place details view
  + Have a header that says the place name and maybe the same half bold/half not treatment that the event category titles currently have
  + have the ability to see all events going on at a place with the same next week, this week, later, past organization
+ Get google maps integrated:
  + Geolocate a place to find its lat and long based on just the place name
  + Use the HTML5 geolocation api to find the user's current lat and long, combined with the lat and long of the event location to get the distance in minutes to the current location (e.g. "26 minutes away")
    + include avoid highways option in call to google directions api
+ Add a button for adding a new place and searching all the places where events are going on
+ Add events using firebase (tutorials bookmarked in browser on computer)
  + when adding new events on submit, geocode the location entered into lat, long coordinates that are saved in the firebase db
    + then use these coordinates as the "destination" when requesting from the google maps API how far a place is

