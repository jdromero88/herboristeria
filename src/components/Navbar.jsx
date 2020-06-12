import React from 'react'
import { Menu } from "semantic-ui-react"
import { Link, NavLink } from "react-router-dom"

class Navbar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render(){
    const { activeItem } = this.state
    return (
      <Menu stackable>
        <Menu.Item header>Santa Lucia</Menu.Item>
        <NavLink to='/' className='item'>inicio</NavLink>
        <Menu.Item
          name='inicio'
          active={activeItem === 'inicio'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='nosotros'
          active={activeItem === 'nosotros'}
          onClick={this.handleItemClick}
        />
        <NavLink to='/nosotros' className='item'>Nosotros</NavLink>
        <Menu.Item
          name='encontranos'
          active={activeItem === 'encontranos'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

export default Navbar
