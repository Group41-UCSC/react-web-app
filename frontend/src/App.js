import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Public/pages/Authentication/NewSignup';
import ContentHome from './Public/pages/ContentHome'
import SignInSide from './Public/pages/Authentication/NewSignin'
import Dashboard from './Public/pages/Dashboard'
import UserDashboard from './Public/pages/UserDashboard'
import ViewUser from './Public/pages/ManageUsers/ViewUser'
import AddNewUser from './Public/pages/ManageUsers/AddNewUser'
import AddNewContent from './Public/pages/AddNewContent'
import AddNewImgGal from './Public/pages/AddNewImgGal'
import AddMultipleImg from './Public/components/AddMultipleImg';
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
          <Route path='/view-users' component={ViewUsers} />
          <Route path='/add-user' component={AddNewUser} />
          <Route path='/test' component={AddNewImgGal} />
          <Route path='/view-user' component={ViewUser} />
          <Route path='/user-dashboard' component={UserDashboard} />
          <Route path='/available-badge' component={AvailableBadge} />
          <Route path='/available-badges' component={AvailableBadges} />
          <Route path='/earned-badge' component={ViewEarnedBadges} />
          <Route path='/badge-progress' component={BadgeProgress} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/newevent' component={AddNewEvent} />



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
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
