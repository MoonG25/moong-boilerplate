import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
`

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  outline: 0;
  z-index: 1991;
  opacity: .5;
`

const ModalContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1992;

  .modal__container {
    width: 60%;
    min-width: 540px;
    max-width: 600px;
    margin: 30px auto;
    position: relative;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 8px 40px 0 rgba(0,0,0,.3);
    background-clip: padding-box;
    outline: 0;
    color: black;
  }
`

interface ModalProps {
  children: any
}

class Modal extends React.Component<ModalProps> {
  render() {

    return (
      <React.Fragment>
        <ModalContainer>
          {/* modal container */}
          <ModalBackdrop />
          <ModalContent>
            {/* modal content */}
            <div className="modal__container">
              {this.props.children}
            </div>
          </ModalContent>
        </ModalContainer>
      </React.Fragment>
    )
  }
}

export default Modal