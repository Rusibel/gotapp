import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';
import GotService from '../../services/gotService';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
// import CharacterPage from '../pages/characterPage';
// import BooksPage from '../pages/booksPage';
// import HousesPage from '../pages/housesPage';
import { Outlet } from "react-router-dom";
// import { BooksItem } from '../pages/booksPage';

const Button = styled.button`
    background-color: #fff;
    border-radius: 50%;
    margin-bottom: 50px;
    padding: 5px 15px;
`
// class Appi extends Component{
//     render(){
//         return <div> Die Motherfacker!!!</div>
//     }
// }
class App extends Component {
    gotService = new GotService();
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
        const randomChar = randomCharVisibility ? <RandomChar interval={10000}/> : null; 

        if(error){
            return<ErrorMessage/>
        } 

        return (
            <>
                <div className='app'> 
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
                        <Outlet />
                    </Container>
                </div>
            </>

        );  
    }
};

export default App;