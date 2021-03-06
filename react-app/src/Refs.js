import React from 'react';
import ReactDOM from 'react-dom'

class RefsApp extends React.Component{
  constructor(){
    super()
    this.state = {
      txt: "No Intro"
    }
  }
  //Issue 1:
  // a: e.target.value,
  // b: e.target.value
  //Using the above convention led to updating a and b at same time.
  //Fix 1: Use refs to distinguish input elements
  //a: this.refs.a.value,
  //b: this.refs.b.value
  update(e){
    this.setState({
      a: this.a.value,
      b: this.refs.b.value,
      c: ReactDOM.findDOMNode(this.c).value
    })
  }
  render(){
    //Ref actually returns the node that we're referencing
    //We take that node and set equal to a. Then extract value from a
    return(
      <div>
        <input ref={node => this.a = node}
          type="text" onChange = {this.update.bind(this)}/>{this.state.a}
        <hr/>
        <input ref="b" type="text" onChange = {this.update.bind(this)}/>{this.state.b}
        <hr/>
        <Input
        ref={component => this.c = component}
        update={this.update.bind(this)}/>{this.state.c}
      </div>

    )
  }
}

class Input extends React.Component{
  render(){
    return(
      <input
        type="text"
        onChange={this.props.update}
      />
    )
  }
}

export {RefsApp}
