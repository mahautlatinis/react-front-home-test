# Instructions

On this project, a junior developer started to implement a tag filter system on a site that presents some cooking recipes.

The developer has gone on vacation, so you will have to take over and continue his work.

Currently, the filter system is not working. You will try to improve/redo this filter system.

## Preliminary Tasks

- add one recipe in the recipe database (RecipeData.ts) ✅ "Cake aux olives"
- add 2 new tags and affect these tags to the recipes (it could be any type of tag) ✅ "spring" & "diet"

## Features to add

- add a feature to allow to filter recipes by clicking on a tag (the behavior must work if you click on a menu tag or a recipe tag). ✅ 
- display the selected tags in the header and hide those that are not selected ✅ 
- if you click on the tag in the header, it will remove the tag from the filter ✅ 
- add the possibility to select several tags at the same time (the displayed recipes should contain all the selected tags) ✅ 

To develop this feature you can use a state, a context or any other solution you like. ✅ 

You are encouraged to refactor the existing code before adding your own, as you would do if this was a real task in real life.

Please commit as frequently as possible to make the review easier.

## Bonus

- You can do whatever you want to improve the experience on this little app.  ✅  bonus will be on the bonus branch
- ✅ Please use `npm install --legacy-peer-deps` and `npm start` in the bonus branch 
- ✅ Made a Makefile and a docker-compose file so you will be able to do a simple $ make (need internet connection)
- ⏱ I am willing to work on the next steps after my holidays in mid august
- ✨ I am strongly motivated to work at Greenly


The mandatory part was ended around the 6th of August and the bonus part will be part timely done starting from Tuesday 09 August. 

### Next Steps (candidate wants to do more)
- Depending on the screen (retina or not) change the grey color text
- create a backend with express and node
- handle the possibility to add recipes (and related ingredients and steps), recipes tags and menu tags
- add Cypress tests for frontend and Jest test for the backend 

# Requirements

To run this project you will need to install yarn and npm

# Run the project

To Install dependencies & node modules, run : `yarn`
To launch the project, run : `yarn start`
