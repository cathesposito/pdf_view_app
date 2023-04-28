# Getting Started with Pdf View App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and deployed in Github pages.

To access: https://cathesposito.github.io/pdf_view_app/

The idea was to create Users table from .js file that can be later changed to json file or any database. The table has two column that send the user to a html view button "View" and a pdf view using button "Print". Each user will have their own pages.

<img width="403" alt="Screenshot 2023-04-28 at 11 02 10 AM" src="https://user-images.githubusercontent.com/73259833/235183754-241124a0-892d-4697-8e14-38e4469436f2.png">

## Clone

You can clone the project and test it locally:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Deployment at Github pages

Edit package.json to change from `"homepage": "https://cathesposito.github.io/pdf_view_app/",` to `"homepage": "https://{user}.github.io/{project_name}/",`  
Then run:

### `npm run build` 

After `Published`, check `https://{user}.github.io/{project_name}/`

You may see an error 404 page when you view the url after successful deployment/publish, this is normal, give it 30–60 seconds, refresh the browser and your application should be present.
