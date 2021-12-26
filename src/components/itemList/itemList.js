import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import {Link} from 'react-router-dom'


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


    state ={
        itemList: null
    }

    componentDidMount() {
        
        const{getData} = this.props;

        getData ()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })

    }

    // }
    
    renderItems(arr) {
        return arr.map((item, i) => {
            const{id} = item;
            const label = this.props.renderItem(item);
            return (
                <ItemsListItem 
                key={id}
                onClick={() => this.props.onItemSelected(id)}
                >
                        {label} 
    
                </ItemsListItem>
            )
        })
    }

    render() {
        const{itemList} = this.state;


        if(!itemList){
            return <Spinner/>;
        }
        
        const items = this.renderItems(itemList);

        return (
            <ItemsList >
                {items}
            </ItemsList>
        );
    }
}

ItemList.defaultProps ={
    onItemSelected: () => {},
    getData: () => {}
}