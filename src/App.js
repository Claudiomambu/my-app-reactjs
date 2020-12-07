import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import About from './components/About';
import TopMenu from './components/layout/TopMenu';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import People from './components/People';
import axios from 'axios';
import Search from './components/Search';
import PersonDetail from './components/PersonDetail';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      people:[],
      actorDetail:{}
    }
  }

  async componentDidMount(){
    const res = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=054f369a98ee292be6a99aa20259620a`);
    this.setState({people:res.data.results})
  }

  searching= async (SearchText) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=054f369a98ee292be6a99aa20259620a&query=${SearchText}`)
    this.setState({people:res.data.results});
  }

  getDetail= async (id)  => {
    const res = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=054f369a98ee292be6a99aa20259620a`)
    this.setState({actorDetail:res.data});
    console.log(res.data) 
  }

  render(){
    return (
      <Router>
        <div>
          <TopMenu/>
          <Container>
            <Switch>

              <Route exact path ="/"render={()=>(
                <React.Fragment>
                  <Search searching={this.searching}/>
                  <People people={this.state.people}/>
                </React.Fragment>
                
              )} />
              <Route exact path ="/About" component={About}/>
              <Route exact path="/PersonDetail/:id" render={props =>(
              <PersonDetail {... props} getDetail ={this.getDetail} actorDetail = {this.state.actorDetail}   /> 
              )}/>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
