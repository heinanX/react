/* adding styles and something elements */

/* import { Component } from "react";

export  default class App extends Component {
    state = { isLoggedin: false}
    state = { list: ['Linda','Sara','Koda','Saga', 'June', 'Paras'], todo: [
      {
        chore: 'clean',
        when: 'Today'
      },
      {
        chore: 'do dishes',
        when: 'Tomorrow'
      },
      {
        chore: 'Hoover',
        when: 'Yesterday'
      }
    ]}


    showMessage() {
      if(this.state.isLoggedin) { return <h1 style={{color:'green'}}> hello user</h1> } 
      return <h1 style={{color:'orange'}}> hello guest</h1>
    }

    render() {

      return(
        <div>
          { this.showMessage()}
          <ul>
            { this.state.list.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          
          { this.state.todo.map((todos) => (
            <div style={{backgroundColor:'teal', color:'white'}} key={todos.id}>
              <h2>{todos.chore}</h2>
              <p>{todos.when}</p>
            </div>
          ))}
          
        </div>
        )
    }
} */

/* FORMS IN REACT */

import { Component } from "react";

export  default class App extends Component {

  state = {
    email: '',
    password: ''
  }

  login() {
    console.log(this.state)
  }

    render() {

      return(
        <div>
          <input type="text" placeholder="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value})}/>
          <input type="text" placeholder="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value})} />
          <button onClick={() => this.login()}>Log in</button>

          <p> { this.state.email }</p>
          <p> { this.state.password }</p>

        </div>
        )
    }
}