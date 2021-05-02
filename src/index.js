import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Loginform from './components/Loginform';
import EmployeeList from "./components/EmployeeList";


ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Loginform />
        <Route path="/EmployeeList" exact={true} strict component={EmployeeList}></Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);