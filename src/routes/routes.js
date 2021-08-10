import { Switch, Route, Redirect } from 'react-router';

import Home from '../screens/Home'

const Routes = () => {
    return ( 
        <Switch>
            <Route exact path='/' component={Home}/>
            <Redirect path='/**' to='/' />
        </Switch>
     );
}
 
export default Routes;