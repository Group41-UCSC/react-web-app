import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Public/pages/Login';
import Signup from './Public/pages/Signup';
import Sidebar from './Public/components/Sidebar';
import ContentHome from './Public/pages/ContentHome';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/sidebar' component={Sidebar} />
          <Route path='/contenthome' component={ContentHome} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
