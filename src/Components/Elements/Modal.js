import React from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

import Icon from './Icon';
import { Card } from './Cards';

import { Portal } from '../Utilities';
import { absolute, fixed } from '../Utilities/position';

const Modal = ({ toggle, isToggled, children }) => {
  const transition = useTransition(isToggled, null, {
    from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
  });

  return (
    <Portal>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <ModalWrapper key={key} style={animation}>
              <ModalCard animation={animation}>
                <CloseButton onClick={toggle}>
                  <Icon name="close" />
                </CloseButton>
                <>{children}</>
              </ModalCard>
              <Background onClick={toggle} />
            </ModalWrapper>
          )
      )}
    </Portal>
  );
};

export default Modal;

const ModalWrapper = styled(animated.div)`
  ${fixed({
    y: 'top',
    x: 'left',
    r: 'right',
    b: 'bottom',
  })};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalCard = styled(Card)`
  z-index: 2;
  opacity: 0.95;
  min-width: 520px;
  position: relative;
  margin-bottom: 7rem;
  background: var(--green);
`;

const CloseButton = styled.button`
  ${absolute({
    y: 'top',
    x: 'right'
  })};
  padding: 10px;
  background: transparent;
`;

const Background = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: black;
`;