import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Mateo',
            age: 22
        }
        console.log('Se ejecutó el constructor')
    }

    componentDidMount(){
        console.log('Se montó el componente')
        setTimeout(() => {
            this.setState({name: 'Christian'})
        }, 2000)
    }
    componentDidUpdate() {
        console.log('Se actualizó el componente')
    }
    componentWillUnmount() {
        console.log('El componente se desmontó')
    }

  render() {
      console.log('Se ejecuta el render')
    return (
        <div>
            <h2>Componente de clase</h2>
            <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
          {this.state.name}
        </div>
    )
  }
}