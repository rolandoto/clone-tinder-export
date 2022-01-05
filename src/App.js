import './App.css';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Home from './Component/Home/Home';
import History from './Component/History/History';
import Login from './Component/Login/Login';
import HomeTinder from './Component/HomeTinder/HomeTinder';
import Useprovider  from './context/Useproviders';
import { useContext} from 'react';
import { UseEmailcontext } from './context/UseEmailcontext';
import PrivateRoute from './privateRoute/privateRoute';
import { AuthProvider } from './Auth/Auth';

function App() {
  const {time} = useContext(Useprovider)
  return (
    <div className={`App ${time}`}>
      <AuthProvider >
        <UseEmailcontext>
          <BrowserRouter>
            <Switch>
                <Route  exact path='/' component={Home}  />
                <Route exact path='/Login' component={Login}  />
                <PrivateRoute exact path='/HomeTinder' component={HomeTinder}  />
                <PrivateRoute exact path='/history' component={History}  />
              </Switch>
          </BrowserRouter>
        </UseEmailcontext>
      </AuthProvider>
    </div>
  );
}

export default App;
