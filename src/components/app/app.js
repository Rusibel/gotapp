import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

const Button = styled.button`
    background-color: #fff;
    border-radius: 50%;
    margin-bottom: 50px;
    padding: 5px 15px;
`
class App extends Component {
    constructor(){
        super();

    }
    state = {
        randomCharVisibility: true
    }

    onToogle = () => {
        if(this.state.randomCharVisibility){
            this.setState({randomCharVisibility: false})
        } else {
            this.setState({randomCharVisibility: true})
        }
    }

    
    render() {  
        const {randomCharVisibility} = this.state;
        const randomChar = randomCharVisibility ? <RandomChar/> : null; 
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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );  
    }
};

export default App;