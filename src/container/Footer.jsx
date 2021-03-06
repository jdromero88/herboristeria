import React from 'react'
import { Container, Segment, Divider} from 'semantic-ui-react'

const Footer = () => {
  return(
    <Container>
      <Divider />
      <Segment textAlign='center' color='teal' inverted>
        <p>Santa Lucia © 2020</p>
      </Segment>
    </Container>
  )
}

export default Footer
