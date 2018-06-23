# React Boiler Plate with Redux, SASS, Jest
![logo](https://github.com/vishnuak1989/react-boiler-plate/blob/master/public/images/favico.png)
## Scripts 
#### This is a production ready boiler plate with redux. You must have minimal knowledge of react-redux to use this boilerplate.

1. Download the application and run to following commands to install dependencies:
    ```
    npm install
    ```
1. For production build of the app use the following command.
    ```
    npm run build:prod
    ```
1. For development build of the app use the following command.
    ```
    npm run build:dev
    ```
1. To start server, run the following command and go to http://localhost:3000/
   ```
    npm run start  
   ```
1. To run test scripts with `watchAll` mode     
    ```
    npm run test
    ```

#### Other Commands
To kick start the dev server, execute
``` 
npm run dev-server
```
### IMPORTANT
### This is not a pure react boiler plate. This has redux intergrated into app.js file. If you want to this boiler plate without redux.Follow these intructions. 
1. Delete folders `src/action`, `src/reducers`, `src/store`.
1. Please delete the test scripts folders corresponding to the folders removed  from `src/tests`
2. Then go to `src/app.js` and then change the contents to as shown         below
  ```javascript
  import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './styles/styles.scss'
import LoadingPage from './components/LoadingPage'
import AppRouter from './router/AppRouter'

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
ReactDOM.render(<AppRouter />, document.getElementById('app'));
```

 ## About me
 Vishnu Anilkumar, <nr />
 Developer <br />
  [My website](http://vishnuanilkumar.com)