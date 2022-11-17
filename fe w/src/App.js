import './App.css';

import DatingCard from './component/datingcard/DatingCards';
import SwipeButton from './component/swipebutton/SwipeButton';
import Header from './component/Header/Header';

function App() {

  return (

    <div className="app">

    <Header />

    <DatingCard />

    <SwipeButton />

    </div>

);
  }

export default App;