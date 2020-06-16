import React from 'react'
import { Container, Grid, Card, Image, Icon } from 'semantic-ui-react'
import producto from '../images/producto.png'
const Productos = () => {
  return (
      <Container>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={16}>
              <Card.Group fluid='true' centered>
                <Card>
                  <Image src={producto} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Nombre del Producto</Card.Header>
                    <Card.Meta>
                      <span className='tag'>Clasico</span>
                    </Card.Meta>
                    <Card.Description>
                      Descripcion del Producto
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <span>
                      <Icon name='dollar' />
                      10.000
                    </span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src={producto} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Nombre del Producto</Card.Header>
                    <Card.Meta>
                      <span className='tag'>Clasico</span>
                    </Card.Meta>
                    <Card.Description>
                      Descripcion del Producto
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <span>
                      <Icon name='dollar' />
                      10.000
                    </span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src={producto} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Nombre del Producto</Card.Header>
                    <Card.Meta>
                      <span className='tag'>Clasico</span>
                    </Card.Meta>
                    <Card.Description>
                      Descripcion del Producto
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <span>
                      <Icon name='dollar' />
                      10.000
                    </span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src={producto} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Nombre del Producto</Card.Header>
                    <Card.Meta>
                      <span className='tag'>Clasico</span>
                    </Card.Meta>
                    <Card.Description>
                      Descripcion del Producto
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <span>
                      <Icon name='dollar' />
                      10.000
                    </span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src={producto} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Nombre del Producto</Card.Header>
                    <Card.Meta>
                      <span className='tag'>Clasico</span>
                    </Card.Meta>
                    <Card.Description>
                      Descripcion del Producto
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <span>
                      <Icon name='dollar' />
                      10.000
                    </span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src={producto} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Nombre del Producto</Card.Header>
                    <Card.Meta>
                      <span className='tag'>Clasico</span>
                    </Card.Meta>
                    <Card.Description>
                      Descripcion del Producto
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <span>
                      <Icon name='dollar' />
                      10.000
                    </span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src={producto} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Nombre del Producto</Card.Header>
                    <Card.Meta>
                      <span className='tag'>Clasico</span>
                    </Card.Meta>
                    <Card.Description>
                      Descripcion del Producto
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <span>
                      <Icon name='dollar' />
                      10.000
                    </span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src={producto} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Nombre del Producto</Card.Header>
                    <Card.Meta>
                      <span className='tag'>Clasico</span>
                    </Card.Meta>
                    <Card.Description>
                      Descripcion del Producto
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <span>
                      <Icon name='dollar' />
                      10.000
                    </span>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src={producto} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Nombre del Producto</Card.Header>
                    <Card.Meta>
                      <span className='tag'>Clasico</span>
                    </Card.Meta>
                    <Card.Description>
                      Descripcion del Producto
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <span>
                      <Icon name='dollar' />
                      10.000
                    </span>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
  )
}
export default Productos
