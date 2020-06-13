import React from 'react'
import { Route, Switch} from 'react-router-dom'
import { Container, } from 'semantic-ui-react'
import Nosotros from '../components/Nosotros'
import Productos from '../components/Productos'
import Encontranos from '../components/Encontranos'
import Inicio from '../components/Inicio'
const Content = () => {
  return (
    <Container>
      <Switch>
        <Route exact path='/nosotros' component={Nosotros} />
        <Route exact path='/productos' component={Productos} />
        <Route exact path='/encontranos' component={Encontranos} />
        <Route exact path='/' component={Inicio} />
      </Switch>
    </Container>
  )
}
export default Content
