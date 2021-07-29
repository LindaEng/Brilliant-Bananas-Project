### Code Review

## Roses
* Great team. A-team. Super responsive. Really nice to work with the Brilliant Bananas. (Afreen + Lindsey + Sharon)
* Everyone was big brain-ed. Bouncing ideas off of each other (Chad)
* Overcomed imposter syndrome (Lindsey)
* Learning from everyone vicariously. (Sharon)

## Thorns
* Git work-flow (Afreen + the rest of the Brilliant Bananas)
* Task board on-boarding + Features (should of been introduced on day 1)(Chad + Lindsey)


## API
* Excellent labelling for the tickets
* In the future, think about writing tickets as a vertical slice (models -> routes -> views [assign 2-N engineers to the ticket])
* aisle model -> change the datatype to number
* item model -> change the datatype to enum for enchanced filtering
* Restful 
* Make sure you all delete commented out code
* Make a '/' navigates to your home page
* Making a not found page 404 error page
* Delete warehouse / aisle

## Front-End
* Delete commented code
* warehouse.handlebars button should be more descriptive


## Product Road-Map
* Adding additional tests other than testing for datatypes [x]
* Editing an item [x]
* Admin account (access to deleting/ editing/ and adding items, aisles, warehouses) + customer account (only able to view) [might need another model : User: username: password: loggedin: cart: ??? 
 ***] 
|
|

### Code Review Part II

## Roses
* Everyone was autonomous + responsible (Chad)
* Experimented with code + self discovery (Sharon)

## Thorns
* Git workflow
* Heroku (mac > windows)
* Need a more specific outline (Chad) CRUD app


## API
* Aisle - # - categories - naming convention
* Nice styling 
* Garden your code
* PUT route for update item -> check if item exists before updating -> then check if updated item exists
* add 404 before your app.listen()

## Front-End
* Click here to enter warehouse
* Images should also be clickable
* Labeling (breadcrumb menu?)


## Product Road-Map
* Log in feature -> introduce a User model -> Google OAuth -> passport
* Logged in user(admin) should be able to see extra features (delete button/edit button) -> conditional logic (ternary operator within the handlebars view)