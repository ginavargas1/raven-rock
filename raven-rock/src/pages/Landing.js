import React from "react";
import { Header } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Button, Image, Modal } from 'semantic-ui-react'

function Landing(){

 
  const [open, setOpen] = React.useState(false)

  
  
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

    {/* Section Below will be used for our modals and templates */}
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Template Number One</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
    {/* End Of Modal One */}

    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Template Number Two</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
    {/* End Of Modal Two */}

    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Template Number Three</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>

    {/* End Of Modal Three */}
      

    </div>
  )
  
  }



export default Landing;
