import React, { Component } from 'react';
import styled from 'styled-components';

import Portal from './Portal';
import Icon from './Utilities/Icon';

export default class Modal extends Component {
    render() {
        const {children, toggle, on } = this.props;
        return (
            <Portal>
                {on &&
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
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalCard = styled.div`
    position: relative;
    background: white;
    border-radius: 15px;
    padding: 15px;
    min-width: 520px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    z-index: 10;
    opacity: 0.95;
    margin-bottom: 7rem;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    padding: 10px;
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.5;
`;