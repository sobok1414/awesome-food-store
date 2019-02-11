import StoreModal from './StoreModal';
import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class StoreList extends React.Component {
  render() {
    const { stores } = this.props;

    return (
      <div className="ui four column grid">
        {stores.map(store => 
          <div className="column" key={store.id}>
            <div className="ui sement" key={store.id}>
              <Modal trigger={
                <img
                  src = {store.thumb}
                  alt = {store.name}
                  style = {{cursor: 'pointer'}}
                />
              } closeIcon >
                <StoreModal store={store}/>
              </Modal>
            </div>
          </div>
        )}
     </div>
    )
  }
}

export default StoreList;
  