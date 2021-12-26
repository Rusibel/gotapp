import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ItemDetails, {Field} from '../../itemDetails';
import { useParams } from "react-router-dom";


export default function BooksItem() {
    const gotService = new GotService() ;

    let params = useParams();
    return (

            <ItemDetails 
            itemId={params.bookId} 
            getData={gotService.getBook}>
                <Field field='numberOfPages' label='numberOfPages'/>
                <Field field='publiser' label='publiser'/>
                <Field field='released' label='released'/>
            </ItemDetails>
       
    );
  }