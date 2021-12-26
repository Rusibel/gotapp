import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';


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
export default function ItemList ({getData, onItemSelected,renderItem}){

    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData ()
            .then((data) => {
                updateList(data)
            })
    }, [])

    
    function renderItems(arr) {
        return arr.map((item, i) => {
            const{id} = item;
            const label = renderItem(item);
            return (
                <ItemsListItem 
                key={id}
                onClick={() => onItemSelected(id)}
                >
                        {label} 
    
                </ItemsListItem>
            )
        })
    }

    if(!itemList){
        return <Spinner/>;
    }
    
    const items = renderItems(itemList);

    return (
        <ItemsList >
            {items}
        </ItemsList>
    );
}

