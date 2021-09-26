import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import loadable from '@loadable/component';
import './App.css'


const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
// workspace 만 등록 했놓고. 또 Router Siwtch 가능합니다. 
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
    return (
    <Switch>
       <Redirect exact path="/" to="/login" />
       <Route path="/login" component={LogIn} />
       <Route path="/signup" component={SignUp} />
       <Route path="/workspace/:workspace" component={Workspace} />
    </Switch>
    );
}
export default App;


// jatai, zustand, recoil 