import React, {Component} from 'react';
import styled from 'styled-components';
// import './randomChar.css';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const RandomCharBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
`;

const RandomCharTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;


const RandomCharLinksList = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-right: 0;
    border-left: 0;
    border-radius: 0;
`;


const RandomCharLinks = styled.li`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-right: 0;
    border-left: 0;
    border-radius: 0;
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-pack: justify !important;
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
`;

const RandomCharLinksTitle = styled.span`
    font-weight: bold;  
`;

export default class RandomChar extends Component {
    constructor(){
        super();
        this.updateChar();
    }

    gotService = new GotService() ;
    state ={
        char: {},
        loading: true,
        error: false
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }

    updateChar(){
        const id = Math.floor(Math.random()*140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }


    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/>: null;
        const content = !(loading||error) ?  <View char={char}/> : null;

        return (
            <RandomCharBlock>
                {errorMessage}
                {spinner}
                {content}
            </RandomCharBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <RandomCharTitle>
                    Random Character: {name}
                </RandomCharTitle>
                <RandomCharLinksList>
                    <RandomCharLinks>
                        <RandomCharLinksTitle>Gender </RandomCharLinksTitle>
                        <span>{gender}</span>
                    </RandomCharLinks>
                    <RandomCharLinks>
                        <RandomCharLinksTitle>Born </RandomCharLinksTitle>
                        <span>{born}</span>
                    </RandomCharLinks>
                    <RandomCharLinks>
                        <RandomCharLinksTitle>Died </RandomCharLinksTitle>
                        <span>{died}</span>
                    </RandomCharLinks>
                    <RandomCharLinks>
                        <RandomCharLinksTitle>Culture </RandomCharLinksTitle>
                        <span>{culture}</span>
                    </RandomCharLinks>
            </RandomCharLinksList>
        </>
    )
}
