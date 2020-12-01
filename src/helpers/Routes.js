import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FlashCard from '../views/FlashCard';
import Home from '../views/Home';
import NotFound from '../views/NotFound';

export default function Routes() {
  return (
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/flash-card' component={() => <FlashCard />} />
        <Route component={NotFound} />
      </Switch>
  );
}
