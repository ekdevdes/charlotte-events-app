# charlotte-events-app
events app for whats going on around charlotte, info sourced from https://bit.ly/2VdojLR

Sheetly Google Sheets events API:
https://api.sheety.co/ce216392-6bb9-4b1f-8940-7d293edf62e4

Maybe could try hosting on Github Pages since that's free or try something with Github Actions that's free and easy to use

Uses Vue Material for the UI: https://vuematerial.io/components/select
List of Components available to import: https://github.com/vuematerial/vue-material/tree/dev/dist/components


## To Do
+ ~~List all events within a week of the current date~~
  + ~~List all events in the next week~~
  + ~~list all events in 2+ weeks out~~
  + ~~List all events in the past~~
  + ~~List events on the page by time category~~
  + Sort events by most recent first
  + Extract each event section to its own `EventCategory` component
+ Make each events section an accordion
  + Might be easier to absorb all the information and not get overwhelmed
+ Add ability to see all events going on at a place with the same (next week, this week, future, past organization)
+ Get google maps integrated:
  + to get distance from event location to current location
  + link to open directions in Google Maps
  + locate place on a map
+ Add tab for switching between events and places
+ Detail view
+ Add events in-app
  + select from a list of previously used locations
  + calendar for date
  + etc.
  + save data in a nosql db



