import React,{Component} from 'react';
import TopMenu from '../TopMenu';
import RadiostationList from '../RadiostationList';
//import {Lines} from 'react-preloaders';

import './App.css';

class App extends Component{
    render(){
        return (
            <>
            
            <TopMenu />
            <RadiostationList />
            </>
        )
    }
}

export default App;
