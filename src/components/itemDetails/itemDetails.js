import React, {Component} from 'react';
import GotService from '../../services/gotService';
import styled from 'styled-components';


const ItemsDetails = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
`;

const ItemsDetailsTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const ItemsDetailsLinksList = styled.ul`
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

const ItemsDetailsLinks = styled.ul`
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

const ItemsDetailsLinksTitle = styled.span`
    font-weight: bold;  
`;

const SelectError = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`

const Field = ({item, field, label}) => {
    return (
        <ItemsDetailsLinks>
            <ItemsDetailsLinksTitle>{label}</ItemsDetailsLinksTitle>
            <span>{item[field]}</span>
        </ItemsDetailsLinks>
    )
} 

export {Field};
export default class ItemDetails extends Component {

    gotService = new GotService() ;
    state = {
        item: null
    }

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if (this.props.itemId !== prevProps.itemId){
            this.updateItem()
        }

    }

    updateItem(){
        const {itemId} = this.props;

        if (!itemId){
            return;
        }
        
        const{getData} = this.props;

        getData (itemId)
            .then((item) => {
                this.setState({item})
            })

        // this.gotService.getCharacter(itemId)
        //     .then((item) => {
        //         this.setState({item})
        //     })
    }


    render() {

        if(!this.state.item){
            return <SelectError> Please select a character</SelectError>
        }
        const {item} = this.state;
        const {name} = item;

        return (
            <ItemsDetails>
                <ItemsDetailsTitle>
                    {name}
                </ItemsDetailsTitle>
                <ItemsDetailsLinksList>
                    {/* {this.props.children} */}
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ItemsDetailsLinksList>
            </ItemsDetails>
        );
    }
}