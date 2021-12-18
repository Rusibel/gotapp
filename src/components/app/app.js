import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';

const Button = styled.button`
    background-color: #fff;
    border-radius: 50%;
    margin-bottom: 50px;
    padding: 5px 15px;
`
class App extends Component {

    state = {
        randomCharVisibility: true,
        error: false
    }

    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
    }
    
    onToogle = () => {
        this.setState((state) => {
            return {
                randomCharVisibility: !state.randomCharVisibility
            }
        })
    }


    
    render() {  
        const {randomCharVisibility, error} = this.state;
        const randomChar = randomCharVisibility ? <RandomChar/> : null; 

        if(error){
            return<ErrorMessage/>
        } 

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                           {randomChar}
                        </Col>
                    </Row>
                    <Button onClick={this.onToogle}> Toogle randomChar </Button>
                    <CharacterPage/>
                    <CharacterPage/>
                    <CharacterPage/>
                </Container>
            </>
        );  
    }
};

export default App;