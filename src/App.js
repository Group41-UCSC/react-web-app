import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Public/pages/Login';
import SignUp from './Public/pages/NewSignup';
import ContentHome from './Public/pages/ContentHome'
import SignInSide from './Public/pages/NewSignin'
import Dashboard from './Public/pages/Dashboard'
import UserDashboard from './Public/pages/UserDashboard'
import ViewUser from './Public/pages/ViewUser'
import AddNewUser from './Public/pages/AddNewUser'
import AddNewContent from './Public/pages/AddNewContent'
import AddNewImgGal from './Public/pages/AddNewImgGal'
import AddMultipleImg from './Public/components/AddMultipleImg';
import ViewOneUser from './Public/pages/ViewOneUser';
import ViewAvailableBadges from './Public/pages/ViewAvailableBadges'
import ViewEarnedBadges from './Public/pages/EarnedBadges';
import BadgeProgress from './Public/pages/Progress';
import ProfilePage from './Public/components/ProfilePage';
import ContentSViewAllPost from './Public/pages/ContentSViewAllPost';
import AddNewEvent from './Public/pages/AddNewEvent';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/contenthome' component={ContentHome} />
          <Route path='/newcontent' component={AddNewContent} />
          <Route path='/newimggal' component={AddNewImgGal} />
          <Route path='/login' component={SignInSide} />
          <Route path='/signup' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/view-user' component={ViewUser} />
          <Route path='/add-user' component={AddNewUser} />
          <Route path='/test' component={AddNewImgGal} />
          <Route path='/view-user-todo' component={ViewOneUser} />
          <Route path='/user-dashboard' component={UserDashboard} />
          <Route path='/available-badge' component={ViewAvailableBadges} />
          <Route path='/earned-badge' component={ViewEarnedBadges} />
          <Route path='/badge-progress' component={BadgeProgress} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/newevent' component={AddNewEvent} />


        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
