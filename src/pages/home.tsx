import React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import Navigation from '../components/Navigation';


const HomePage: React.FunctionComponent =  () => {
    return (
        <Container>
            <Navigation />
            <Header 
                title="Coding Blog"
                headline="Welcome to the home page"
            />
            <Container>
                Blogging....
            </Container>
        </Container>
    )}

export default HomePage;