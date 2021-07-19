import React from 'react'
import Header from './components/Header';
import Router from './Router';
import styled from 'styled-components';

const Container = styled.div `
background-color: #1C1C1C;
min-height: 100vh;
`
export function App() {
  return (
    <Container>
        <Header/>
        <Router/>
    </Container>
  );
}

export default App;
