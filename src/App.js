import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import ParkingList from './pages/ParkingList/ParkingList'
function App() {
  
  return (
    <Router>
    <div className="font-lato">
      <Route exact path="/" component={Home} />
      <Route exact path="/search/:location" component={ParkingList} />
    </div>
    </Router>
  );
}

export default App;
