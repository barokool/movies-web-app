import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import LabelBottomNavigation from './components/Navigation/BottomNavigation';
import Trending from './components/Trending'
import Search from './components/Search'
import Tvseries from './components/Tvseries'
import Movies from './components/Movies'
import { Container } from '@material-ui/core'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/tvseries" component={Tvseries} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <LabelBottomNavigation />
    </BrowserRouter>

  );
}

export default App;
//