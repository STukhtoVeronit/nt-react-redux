import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from  './components/NavBar'
import Home from './components/Home/Home'
import About from  './components/About'
import Post from  './components/Post'
import Contact from  './components/Contact'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="">
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route exact path='/:post_id' component={Post} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
