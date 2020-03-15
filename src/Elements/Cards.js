import styled from 'styled-components';
import { elevation, transition, teal } from 'Utilities';

export const Card = styled.div`
    background: white;
    border-radius: 5px;
    padding: 15px;
    color: ${teal}; 
    ${elevation[4]};
    ${transition({
        ease: 'ease-in',
        length: '1s'
    })};
    &:hover {
        ${elevation[5]};
    }
`;