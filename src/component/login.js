import React,{Component} from "react";
import  "../theme/login.css"
export default class Login extends Component{
    constructor(props){
        super(props)
        this.onLoginSubmit=this.onLoginSubmit.bind(this)
        this.onChangeValue=this.onChangeValue.bind(this)
    }
    
    onLoginSubmit(){

    }
    onChangeValue(event){
        console.log("event>>>>>>>>>>",event.target.value)
        console.log("event>>>>>>>>>>",event.target.type)

    }
    render(){
return <div className="login-page">
  <div className="form" onSubmit={this.onLoginSubmit}>
    <form className="register-form">
      <input type="text" placeholder="name" />
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form className="login-form">
      <input type="text"  placeholder="username" onChange={this.onChangeValue}/>
      <input type="password"  placeholder="password"  onChange={this.onChangeValue}/>
      <button>login</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
    }
}