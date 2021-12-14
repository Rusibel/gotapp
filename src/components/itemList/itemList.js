import React, {Component} from 'react';
import styled from 'styled-components';
import './itemList.css';

const ItemsList = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    cursor: pointer;
`;

const ItemsListItem = styled.div`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);    
    border-right: 0;
    border-left: 0;
    border-radius: 0;
    cursor: pointer;
`;
export default class ItemList extends Component {

    render() {
        return (
            <ItemsList >
                <ItemsListItem>
                    John Snow
                </ItemsListItem>
                <ItemsListItem>
                    Brandon Stark
                </ItemsListItem>
                <ItemsListItem>
                    Geremy
                </ItemsListItem>
            </ItemsList>
        );
    }
}