import {Route, Switch} from "react-router-dom";
import ViewUserInfo from './ViewUserInfo'

const ViewUserInfoRoute=()=>{
    return(
        <div>
            <Switch>
                <Route path="/ViewUserInfoRoute/:userid">
                    <ViewUserInfo/>
                </Route>
            </Switch>
        </div>
    )
}

export default ViewUserInfoRoute;