import React, { useState } from "react";
import { Button, Image, Modal, Header } from 'semantic-ui-react'

function Templates(){

  // samples of templates 
  const [open, setOpen] = React.useState(false)
  
  return (
    <div>
        <h1>Templates</h1>

        <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Template One</Button>}
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
          Go Back
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
      trigger={<Button>Template Two</Button>}
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
          Go Back
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
      trigger={<Button>Template Three</Button>}
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
          Go Back
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



    </div>
  )
  
  }



export default Templates;
