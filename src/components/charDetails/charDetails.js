import React, {Component} from 'react';
import styled from 'styled-components';
// import './charDetails.css';

const CharsDetails = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
`;

const CharsDetailsTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const CharsDetailsLinksList = styled.ul`
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

const CharsDetailsLinks = styled.ul`
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

const CharsDetailsLinksTitle = styled.span`
    font-weight: bold;  
`;


export default class CharDetails extends Component {

    render() {
        return (
            <CharsDetails>
                <CharsDetailsTitle>John Snow

                </CharsDetailsTitle>
                <CharsDetailsLinksList>
                    <CharsDetailsLinks>
                        <CharsDetailsLinksTitle>Gender</CharsDetailsLinksTitle>
                        <span>male</span>
                    </CharsDetailsLinks>
                    <CharsDetailsLinks>
                        <CharsDetailsLinksTitle>Born</CharsDetailsLinksTitle>
                        <span>1783</span>
                    </CharsDetailsLinks>
                    <CharsDetailsLinks>
                        <CharsDetailsLinksTitle>Died</CharsDetailsLinksTitle>
                        <span>1820</span>
                    </CharsDetailsLinks>
                    <CharsDetailsLinks>
                        <CharsDetailsLinksTitle>Culture</CharsDetailsLinksTitle>
                        <span>First</span>
                    </CharsDetailsLinks>
                </CharsDetailsLinksList>
            </CharsDetails>
        );
    }
}