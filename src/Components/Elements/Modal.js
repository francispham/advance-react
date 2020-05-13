import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import { Card } from './Cards';

import { Portal } from "../Utilities";
import { absolute } from "../Utilities/position";

export default class Modal extends Component {
  render() {
    const { children, toggle, isToggled } = this.props;
    return (
      <Portal>
        {isToggled &&
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <>{children}</>
          </ModalCard>
            <Background onClick={toggle}/>
          </ModalWrapper>
        }
      </Portal>
    )
  }
};

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const ModalCard = styled(Card)`
  position: relative;
  min-width: 520px;
  z-index: 20;
  opacity: 0.95; 
  margin-bottom: 7rem;
`;

const CloseButton = styled.button`
  ${absolute({
    y: 'top',
    x: 'right'
  })};
  background: transparent;
  padding: 10px;
`;

const Background = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;