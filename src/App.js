import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Nav from './components/nav/nav';
import Artistes from './pages/artistes/Artistes';
import Home from './pages/home/home';
import Apropos from './pages/apropos/apropos'
import Stream from './pages/stream/stream'
const App = () => {
    return(
        <main>
        <BrowserRouter>
            <Nav/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/artistes' component={Artistes}/>
                <Route exact path='/apropos' component={Apropos}/>
                <Route exact path='/stream' component={Stream}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
        </main>
    )
}
export default App;