import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import RowBlock from '../../rowBlock';
import { BooksItem } from '.';
import { Link } from 'react-router-dom';


export default class BooksPage extends Component {

    gotService = new GotService() ;
    state = {
        selectedBook: null,
        error: false
    }

    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    render () {
        const {selectedBook, error} = this.state;

        
        if(error){
            return<ErrorMessage/>
        } 

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({name, numberOfPages, id}) => (
                <><span>{name} ({numberOfPages})</span>
                    <button>
                        <Link
                        key={id}
                        to={`/books/${id}`}
                        >     go to: {id} {name}</Link> 
                    </button>
                </>
                )}/>
        )

        const bookDetails =(
            <ItemDetails itemId={selectedBook} getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='numberOfPages'/>
                <Field field='publiser' label='publiser'/>
                <Field field='released' label='released'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }

}