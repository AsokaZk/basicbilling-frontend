# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Demo

To run the backend, enter the backend solution and go to the address "BasicBilling.API\bin\Debug\net8.0" and execute the command "dotnet BasicBilling.API.dll"

1. The application works under the same parameters of the postman json provided with the backend, it has 3 main views.
   To run the application run the command "npm run dev".

   a. The first view is the main home page that shows all the pending billings of all clients in a configurable table with the amount shown, in addition there is the Search options with the category parameter and the option to create billings with the format required and validating that said data is written correctly.

   b. The second page is the list of clients in a table that has the option to see their invoices for that client in the selected row where it takes you to a new view with a table with the pending invoices for that client, you also have the option to pay that billing for that customer's queue.

   c. The third page is the history of paid billings.

There is also a snack bar for payment actions or when an error occurs.

2. With the requirements and the postman json provided, it helped to notice what states and views would be present. Also the libraries that were used are Redux for state management, Material UI for styles and component creation, and Jest for unittests.

3. To test the unittest run the command "npm run test".

The entire application was not tested using unittest because over time test cases were being made and upon noticing that critical functionality was not tested, it was decided to do a manual test to test the UI using the application directly.
