import React, { Component } from 'react';
import styled from 'styled-components';

//Absolute Imports: (For Things Won't Change!) 
import { Portal } from 'Utilities';
// import { Card, Icon } from "Elements"; has to be:
import Icon from './Icon';
import { Card } from './Cards';

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

const ModalCard = styled(Card)`
    position: relative;
    min-width: 520px;
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