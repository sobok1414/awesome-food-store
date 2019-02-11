import React, { Component, Fragment } from 'react';
import { Modal, Header, Image } from 'semantic-ui-react';

class StoreModal extends Component {

  render() {
    const { store } = this.props
    const descriptions = store.description.split('.')
  
    return (
      <Fragment>
        <Modal.Content image>
          <Image wrapped size='huge' src={store.image} alt={store.name} />
          <Modal.Description>
            <Header><h1>{store.name}</h1></Header>
            {
              descriptions.map((description, i) => <p key={i}>{description}</p>)
            }
            {
              store.url 
              ?
              <a href={store.url}>{store.url}</a> 
              :
              null
            }
          </Modal.Description>
        </Modal.Content>
      </Fragment>
    )
  }
}

export default StoreModal