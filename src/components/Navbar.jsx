import React from 'react'
import { Menu } from "semantic-ui-react"
import { Link, NavLink } from "react-router-dom"

class Navbar extends React.Component {
  state = {}
// option for colors: green teal olive
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render(){
    const { activeItem } = this.state
    return (
      <Menu stackable color='teal' inverted>
        <Menu.Item header><Link to='/'>Santa Lucia</Link></Menu.Item>
        <NavLink to='/' className='item'>Inicio</NavLink>
        <NavLink to='/nosotros' className='item'>Nosotros</NavLink>
        <NavLink to='/productos' className='item'>Productos</NavLink>
        <NavLink to='/encontranos' className='item'>Encontranos</NavLink>
      </Menu>
    )
  }
}

export default Navbar
