import { Switch, Route } from 'react-router-dom';
import './App.css';
import { MainPage, Home, Country, Form, PageNotFound } from './components';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/countries">
          <Navbar />
          <MainPage />
        </Route>
        <Route exact path="/form">
          <Navbar />
          <Form />
        </Route>
        <Route exact path="/countries/:name">
          <Navbar />
          <Country />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
