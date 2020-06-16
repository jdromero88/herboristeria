import React from 'react'
import { Menu } from "semantic-ui-react"
import { Link, NavLink } from "react-router-dom"

class Navbar extends React.Component {
  // option for colors: green teal olive
  state = { activeItem: 'inicio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return (
      <Menu stackable color='teal' inverted>
        <Menu.Item header><Link to='/'>Santa Lucia</Link></Menu.Item>
        <NavLink to='/' className='item' active={activeItem === 'inicio'}>Inicio</NavLink>
        <NavLink to='/nosotros' className='item' active={activeItem === 'nosotros'} >Nosotros</NavLink>
        <NavLink to='/productos' className='item' active={activeItem === 'productos'}>Productos</NavLink>
        <NavLink to='/encontranos' className='item'>Encontranos</NavLink>
      </Menu>
    )
  }
}

export default Navbar
