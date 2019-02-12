import React, {Component} from 'react';

class CartProducts extends Component {  

    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    render() {
        const productItems = this.state.products.map(product => (
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>         
        ));
    
        return (
            <div>
            {productItems}
            </div>
        )
    }
}

export default CartProducts;