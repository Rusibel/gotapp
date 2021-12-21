import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import RowBlock from '../../rowBlock';


export default class HousesPage extends Component {

    gotService = new GotService() ;
    state = {
        selectedHouse: 12,
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
            selectedHouse: id
        })
    }

    render () {
        const {selectedHouse, error} = this.state;

        
        if(error){
            return<ErrorMessage/>
        } 

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({name, region}) => `${name} (${region})`}/>
        )

        const bookDetails =(
            <ItemDetails itemId={selectedHouse} getData={this.gotService.getHouse}>
                <Field field='region' label='region'/>
                <Field field='words' label='words'/>
                <Field field='titles' label='titles'/>
                <Field field='overlord' label='overlord'/>
                <Field field='ancestralWeapon' label='ancestralWeapon'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }

}