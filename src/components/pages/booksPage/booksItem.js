import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ItemDetails, {Field} from '../../itemDetails';

export default class BooksItem extends Component {
    gotService = new GotService() ;
    state = {
        selectedBook: 3
    }

    render() {
        return (
            <ItemDetails 
            itemId={this.state.selectedBook} 
            getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='numberOfPages'/>
                <Field field='publiser' label='publiser'/>
                <Field field='released' label='released'/>
            </ItemDetails>
        )
    }

}