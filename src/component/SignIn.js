import React, {Component} from 'react';
class SignIn extends Component{
    handleSubmit = event=>{
        event.preventDefault();
        let formData = new FormData();
        formData.append("username", this.inputNode1.value);
        formData.append("password", this.inputNode2.value);
        fetch("http://localhost:3001/tokens", {method:'POST', body:formData}).then(
            res=>res.json()
        ).then(
            res=>{
                window.localStorage.setItem('jwt', res.jwt)
            }
        ).then(
            ()=>this.props.history.push('/welcome')
        ).catch(
            (e)=>{console.log("this is an error: ", e.message)}
        )
    }
    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>

                <label htmlFor='username'>username</label>
                <input type="username" id='username' name='username' ref={node => {this.inputNode1=node}}/>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' ref={node => {this.inputNode2=node}}/>
                <input type='submit' value='Sign In'/>
            </form>
        </div>
    }
}
export default SignIn;