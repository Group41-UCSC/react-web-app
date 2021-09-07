import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './HomePage/pages/Home';
// import Footer from './homePage/Footer';
import Login from './Public/pages/Login';
import Signup from './Public/pages/Signup';
// import Administrator from './Administrator/pages/adminDashboard';
// import BranchManager from './BranchManager/pages/managerDashboard';
// import ManagerSettings from './BranchManager/pages/managerSetting';
// import AdminSettings from './Administrator/pages/adminSetting';
// import ManagerStudents from './BranchManager/pages/managerStudent';
// import ManagerNotifications from './BranchManager/pages/managerNotification';
// import ManagerInstructors from './BranchManager/pages/managerInstructor';
// import AdminStudents from './Administrator/pages/adminStudent';
// import AdminInstructors from './Administrator/pages/adminInstructor';
// import AdminManagers from './Administrator/pages/adminManager';
// import ManagerViewStudents from './BranchManager/pages/managerViewStudent';
// import ManagerViewInstructors from './BranchManager/pages/managerViewInstructor';
// import AdminViewStudents from './Administrator/pages/adminViewStudent';
// import AdminViewInstructors from './Administrator/pages/adminViewInstructor';
// import AdminViewManagers from './Administrator/pages/adminViewManager';
// import ManagerAddStudents from './BranchManager/pages/managerAddStudent';
// import ManagerAddInstructors from './BranchManager/pages/managerAddInstructor';
// import AdminAddStudents from './Administrator/pages/adminAddStudent';
// import AdminAddInstructors from './Administrator/pages/adminAddInstructor';
// import AdminAddManagers from './Administrator/pages/adminAddManager';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
