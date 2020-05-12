import React from 'react';


// Absolute Imports: (Does not Need Directory)
import { blue, purp, black, green } from './Backgrounds';
import { Container, Card, CardGrid } from './Elements';

const CoolCards = () => {
  return (
    <Container>
      <h2>Super Cool</h2>
      <CardGrid>
        <Card style={{ background: "var(--purp)" }}>
        <h3>Some card</h3>
        <img alt={purp} src={purp} />
        </Card>
        <Card style={{ background: "var(--blue)" }}>
        <h3>Some card</h3>
        <img alt={blue} src={blue} />
        </Card>
        <Card style={{ background: "var(--black)" }}>
        <h3>Some card</h3>
        <img alt={black} src={black} />
        </Card>
        <Card style={{ background: "var(--green)" }}>
        <h3>Some card</h3>
        <img alt={green} src={green} />
        </Card>
      </CardGrid>
    </Container>
  );
};

export default CoolCards;
