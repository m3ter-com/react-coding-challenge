import React from 'react';
import { Route, Switch } from 'react-router';
import { Posts } from 'features/posts/Posts';
import { Post } from 'features/posts/Post';

const App = (): JSX.Element => {
  return (
    <div>
      <h1>React Coding Challenge</h1>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
