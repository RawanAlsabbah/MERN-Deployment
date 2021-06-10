import './App.css';
import Home from './views/Home';
import New from './views/New';
import View from './views/View';

import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
       <Router>
        <Home path="/" />
        <New path="/new" />
        <View path="/edit/:id" />
      </Router>
 
    </div>
  );
}

export default App;
