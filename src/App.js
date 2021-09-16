import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Public/pages/Login';
import SignUp from './Public/pages/NewSignup';
import ContentHome from './Public/pages/ContentHome'
import SignInSide from './Public/pages/NewSignin'
import Dashboard from './Public/pages/Dashboard'
import ViewUser from './Public/pages/ViewUser'
import AddNewUser from './Public/pages/AddNewUser'
import AddNewContent from './Public/pages/AddNewContent'
import AddNewImgGal from './Public/pages/AddNewImgGal'
import ContentSViewAllPost from './Public/pages/ContentSViewAllPost';
import ScheduleEvent from './Public/components/ScheduleEvent';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/login' component={Login} />
          {/* <Route path='/signup' component={Signup} /> */}
          <Route path='/test1' component={ScheduleEvent} />
          <Route path='/contenthome' component={ContentHome} />
          <Route path='/newcontent' component={AddNewContent} />
          <Route path='/newimggal' component={AddNewImgGal} />
          <Route path='/login' component={SignInSide} />
          <Route path='/signup' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/view-user' component={ViewUser} />
          <Route path='/add-user' component={AddNewUser} />
          <Route path='/test' component={ContentSViewAllPost} />
          
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
