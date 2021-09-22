import {Route, Switch} from "react-router-dom";
import ItemInfo from './ItemInfo'

const ItemInfoRoute=()=>{
    return(
        <div>
            <Switch>
                <Route path="/ItemInfoRoute/:item_id">
                    <ItemInfo/>
                </Route>
            </Switch>
        </div>
    )
}

export default ItemInfoRoute;