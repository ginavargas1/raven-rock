import React from "react";
import { Header } from 'semantic-ui-react'
import { Placeholder } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'


function Landing(){

  
  
  return (
    <div>
      {/* Our Header Main Header */}
      <Header as='h1'>Let's get this bread</Header>

      {/* Description about our website Using Lorem as placeholder */}

      <Container fluid>

      <Header as='h2'>About Raven Rock</Header>
      <p>
        Domestic dogs inherited complex behaviors, such as bite inhibition, from
        their wolf ancestors, which would have been pack hunters with complex
        body language. These sophisticated forms of social cognition and
        communication may account for their trainability, playfulness, and
        ability to fit into human households and social situations, and these
        attributes have given dogs a relationship with humans that has enabled
        them to become one of the most successful species on the planet today.
      </p>
      <p>
        The dogs' value to early human hunter-gatherers led to them quickly
        becoming ubiquitous across world cultures. Dogs perform many roles for
        people, such as hunting, herding, pulling loads, protection, assisting
        police and military, companionship, and, more recently, aiding
        handicapped individuals. This impact on human society has given them the
        nickname "man's best friend" in the Western world. In some cultures,
        however, dogs are also a source of meat.
      </p>
    </Container>
      





    </div>
  )
  
  }



export default Landing;
