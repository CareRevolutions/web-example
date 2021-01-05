# Instructions

This is a simple web app that based on the [react-boilerplate CRA template](https://github.com/react-boilerplate/react-boilerplate-cra-template).

It currently has two pages, an index and a `/countries` page which downloads a list of countries from the CareRev API and displays links to a country detail page. Right now the link leads to a 404. Your task is to add the missing route which will download the details for the selected country and display them.

**NOTE:** The task is broken up into smaller steps and shouldn't take more than an hour or two in total. If you find yourself stuck on any step, simply note where you ran into any problems and what you were trying to do so we can discuss it later, then move on to the next step.

1. Get the app running with `yarn install` and `yarn start`

2. Add a route for `/country/:id`

3. Add a container for that route which initiates the fetch of `https://api.carerev.com/api/v1/countries/:id` on mount

4. Add a saga to fetch that data

5. Add a reducer to save that data in the redux store

6. Add selector(s) to pick data out of the store

7. Display that country's name and currency code in the container when it loads, using the selector(s).

8. Bonus (optional): Add an error view in case the data fetching has a problem.

This added container should function roughly like the existing `Countries` container. In the interview, we'll discuss this app, ways to improve it, architectural concepts, best practices and what ideas you think are important in making a strong, reliable and easy to use app.