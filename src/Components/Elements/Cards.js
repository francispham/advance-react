import styled from 'styled-components';
import { elevation, transition, custom, purp } from "Utilities";

export const CardGrid = styled.div`
    display: grid;
    grid-gap: 20px;
`;

export const Card = styled.div`
    background: ${purp};
    border-radius: 5px;
    padding: 20px;
    h3 {
        margin-top: 0;
        font-size: 2rem;
    }
    img {
        width: 100%;
    }
    color: ${custom}; 
    ${elevation[4]};
    ${transition({
        ease: 'ease-in',
        length: '1s'
    })};
    &:hover {
        ${elevation[5]};
    }
`;