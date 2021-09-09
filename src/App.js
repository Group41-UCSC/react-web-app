import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Login from './Public/pages/Login';
import SignUp from './Public/pages/NewSignup';
import Sidebar from './Public/components/Sidebar';
import Appbar from './Public/components/Appbar';
import ContentHome from './Public/pages/ContentHome'
import SignInSide from './Public/pages/NewSignin'
import Dashboard from './Public/pages/Dashboard'
import ViewUser from './Public/pages/ViewUser'
import AddNewUser from './Public/pages/AddNewUser'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/login' component={Login} /> */}
          {/* <Route path='/signup' component={Signup} /> */}
          <Route path='/sidebar' component={Sidebar} />
          <Route path='/appbar' component={Appbar} />
          <Route path='/contenthome' component={ContentHome} />
          <Route path='/login' component={SignInSide} />
          <Route path='/signup' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/view-user' component={ViewUser} />
          <Route path='/add-user' component={AddNewUser} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
