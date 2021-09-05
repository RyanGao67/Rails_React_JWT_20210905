import React, {Component } from 'react';
import jwtDecode from 'jwt-decode';
class Welcome extends Component{
    state = {username:null}
    componentDidMount(){
        let jwt=window.localStorage.getItem('jwt');
        console.log(jwt);
        let result = jwtDecode(jwt)
        this.setState({username:result.username});
    }
    render(){
        return <div>
            <h1>hello {this.state.username}</h1>
        </div>
    }
}
export default Welcome;