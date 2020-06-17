import React from 'react'
import { Container, Embed } from 'semantic-ui-react'
const Encontranos = () => {
  return(
    <Container className='container-encontranos'>
      <h1>Nos encontras aquí</h1>
        <Embed
          autoplay={true}
          color='white'
          iframe={{
            allowFullScreen: true,
            style: {
              padding: 10,
              border: 0,
            },
          }}
          source='google maps'
          url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.542426811702!2d-57.02626088495563!3d-26.886275183138995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945a258d8ec11dc5%3A0xd12d474e363130b!2sHerboristeria%20Santa%20Lucia!5e0!3m2!1sen!2sus!4v1592344566205!5m2!1sen!2sus'
        />
    </Container>
  )
}

export default Encontranos
