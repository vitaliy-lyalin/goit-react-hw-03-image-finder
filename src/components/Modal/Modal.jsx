import { Component } from 'react';
import { Overlay } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.hideModal();
    }
  };

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.hideModal();
    }
  };

  render() {
    return (
      <Overlay className="overlay" onClick={this.handleClick}>
        <Modal className="modal">
          <img src={this.props.url} alt={this.props.alt} />
        </Modal>
      </Overlay>
    );
  }
}
