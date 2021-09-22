import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Public/pages/Authentication/NewSignup'
import Up from './Public/pages/Authentication/Up'
import In from './Public/pages/Authentication/In'
import ContentHome from './Public/pages/ContentHome'
import SignInSide from './Public/pages/Authentication/NewSignin'
import Dashboard from './Public/pages/Dashboard'
import UserDashboard from './Public/pages/UserDashboard'
import IMSDashboard from './Public/pages/IMSDashboard'
import CMSDashboard from './Public/pages/CMSDashboard'
import ViewUser from './Public/pages/ManageUsers/ViewUser'
import AddNewUser from './Public/pages/ManageUsers/AddNewUser'
import AddNewContent from './Public/pages/AddNewContent'
import AddNewImgGal from './Public/pages/AddNewImgGal'
import ViewUsers from './Public/pages/ManageUsers/ViewUsers';
import AvailableBadges from './Public/pages/BadgeWork/AvailableBadges'
import AvailableBadge from './Public/pages/BadgeWork/AvailableBadge'
import ViewEarnedBadges from './Public/pages/BadgeWork/EarnedBadges';
import BadgeProgress from './Public/pages/BadgeWork/Progress';
import ProfilePage from './Public/components/ProfilePage';
import ContentSViewAllPost from './Public/pages/ContentSViewAllPost';
import AddNewEvent from './Public/pages/AddNewEvent';
import NewTest from './Public/components/NewTest';


import Inventory from './Public/pages/Inventory';
import ItemList from './Public/pages/ItemList';
import ItemRequest from './Public/pages/ItemRequest';
import ItemReserved from './Public/pages/ItemReserved';
import ItemIssued from './Public/pages/ItemIssued';
import EditItemPage from './Public/pages/EditItemPage';
import AddNewItem from './Public/pages/AddNewItem';
import ItemLog from './Public/pages/ItemLog';
import InventoryRequest from './Public/pages/InventoryUserRequest';
import ViewInventory from './Public/pages/ViewInventory';
import Event from './Public/pages/Event';
import EventUpcoming from './Public/pages/EventUpcoming';
import ContentViewPage from './Public/pages/ContentViewPage';
import ContentGallaryPage from './Public/pages/ContentGallaryPage';
import BadgeRequestPage from './Public/pages/BadgeRequestPage';
import BadgeProgressPage from './Public/pages/BadgeProgressPage';
import BadgeCompleted from './Public/pages/BadgeCompletedPage';
import BadgePending from './Public/pages/BadgePendingPage';
import BadgeLog from './Public/pages/BadgeLogPage';
import Home from './Public/pages/Home';
import ManageOtp from './Public/pages/Authentication/ManageOtp';
import EventUserView from './Public/pages/EventUserView';
import ViewUserInfo from './Public/pages/ManageUsers/ViewUserInfo';
import ViewUserInfoRoute from './Public/pages/ManageUsers/ViewUserInfoRoute';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/manageotp' component={ManageOtp} />
          <Route path='/signup' component={Up} />
          <Route path='/login' component={In} />
          {/* <Route path='/' component={Home} /> */}

          <Route path='/contenthome' component={ContentHome} />
          <Route path='/newcontent' component={AddNewContent} />
          <Route path='/newimggal' component={AddNewImgGal} />

          <Route path='/old-login' component={SignInSide} />
          <Route path='/old-signup' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/view-users' component={ViewUsers} />
          <Route path='/add-user' component={AddNewUser} />
          <Route path='/test' component={AddNewImgGal} />
          <Route path='/view-user' component={ViewUser} />


          <Route path='/user-dashboard' component={UserDashboard} />
          <Route path='/ims-dashboard' component={IMSDashboard} />
          <Route path='/cms-dashboard' component={CMSDashboard} />
          <Route path='/content-view' component={ContentViewPage} />
          <Route path='/content-gallary-view' component={ContentGallaryPage} />
          {/* <Route path='/senior-dashboard' component={UserDashboard} /> */}


          <Route path='/available-badge' component={AvailableBadge} />
          <Route path='/available-badges' component={AvailableBadges} />
          <Route path='/earned-badge' component={ViewEarnedBadges} />
          <Route path='/badge-progress' component={BadgeProgress} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/newevent' component={AddNewEvent} />
          <Route path='/ViewUserInfo' component={ViewUserInfo} />
          <Route path='/ViewUserInfoRoute' component={ViewUserInfoRoute} />





          <Route path='/inventory' component={Inventory} />
          <Route path='/item-list' component={ItemList} />
          <Route path='/item-request' component={ItemRequest} />
          <Route path='/item-reserved' component={ItemReserved} />
          <Route path='/item-issued' component={ItemIssued} />
          <Route path='/edit-item-form' component={EditItemPage} />
          <Route path='/add-item' component={AddNewItem} />
          <Route path='/item-log' component={ItemLog} />
          <Route path='/view-inventory' component={ViewInventory} />
          <Route path='/request-inventory' component={InventoryRequest} />
          <Route path='/event' component={Event} />
          <Route path='/event-upcoming' component={EventUpcoming} />
          <Route path='/badge-view' component={BadgeRequestPage} />
          <Route path='/badge-request' component={BadgeRequestPage} />
          <Route path='/badge-progress-list' component={BadgeProgressPage} />
          <Route path='/badge-completed' component={BadgeCompleted} />
          <Route path='/badge-pending' component={BadgePending} />
          <Route path='/badge-log' component={BadgeLog} />
          <Route path='/event-user-view' component={EventUserView} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
