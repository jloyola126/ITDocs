import './App.css';
import Dashboard from './views/Dashboard'
import LandingView from './views/LandingView'
import {useState} from 'react'
import {ToastContainer} from 'react-toastify'
import {Switch,Route} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
function App() {
  const[isLoggedIn,setLoggedIn] = useState(false);  
  const [role,setRole] = useState("")

  return(
    <div>
      {!isLoggedIn && <LandingView setLoggedIn={setLoggedIn} setRole={setRole}/>}
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard role={role} />
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  )
}

export default withRouter(App);
