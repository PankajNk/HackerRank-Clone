import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './components/HomePage';
import CreateQuestion from './components/CreateQuestion';
import QuestionDetails from './components/Questiondetail';

function App() {
  return (
    <Router>
      {/* <Switch> */}
        <Route exact path="/" component={HomePage} />
        <Route path = "/create_question" component={CreateQuestion} />
        {/* <Route path = "/question/:questionTitle" component={QuestionDetails}/> */}
      {/* </Switch> */}
    </Router>
  );
}

export default App;
