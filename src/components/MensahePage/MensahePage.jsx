import React from 'react'
import MensaheHero from '../MensaheHero/MensaheHero'
import MensaheLogIn from '../MensaheLogIn/MensaheLogIn'
import './MensahePage.css'

const Container = ({ children, spacing = 0 }) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: spacing }}>
    {children}
  </div>
);

const Column = ({ children, style = {} }) => (
  <div style={{ flex: 1, ...style }}>
    {children}
  </div>
);

const MensahePage = () => (
  <div className="mensahe-page">
    <Container spacing={130}>
      <Column>
        <MensaheHero />
      </Column>

      <Column>
        <MensaheLogIn />
      </Column>
    </Container>
    <br />
    <a href=""><h1>What's mensahe?</h1></a>
  </div>
);

export default MensahePage
