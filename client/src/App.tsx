// Imports: Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Imports: Containers
import Home from './containers/Home.jsx';
import NotFound from './containers/NotFound.jsx';

import ExampleContainer1 from './containers/ExampleContainer1.jsx';
import ExampleContainer2 from './containers/ExampleContainer2.jsx';


// // Setup: Apollo
// const CLIENT = new ApolloClient({
//   link: new HttpLink({ uri: "/https://localhost:4000/graphql" }),
//   cache: new InMemoryCache()
// });


// React Application
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <ApolloProvider client={CLIENT}> */}
        <div>

          <header>
            <Link href="#" to="/">Home</Link>
            <Link href="#" to="/ExampleContainer1">ExampleContainer1</Link>
            <Link href="#" to="/ExampleContainer2">ExampleContainer2</Link>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ExampleContainer1" component={ExampleContainer1} />
            <Route path="/ExampleContainer2" component={ExampleContainer2} />
            <Route component={NotFound} />
          </Switch>

        </div>
        {/* </ApolloProvider> */}
      </BrowserRouter>
    );
  }
}


// Exports
export default App;
