import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction';
import ButtonInfo from './ButtonInfo';

class ProductCards extends Component {  

    addCart(e){
        const product_id = e.target.value;

        console.log(product_id);
    }

    productInfo(e){
        const product_id = e.target.value;

        console.log(product_id);
    }

    addFavorites(e){
        const product_id = e.target.value;

        console.log(product_id);
    }

    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        const productItems = this.props.posts.map(product => (
                <Card key={product.id} style={{ width: '30%' }}>
                    <Card.Img variant="top" src={product.image_url} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description.substring(0, 100)}</Card.Text>                
                        <Button variant="primary" name={"add-fav-" + product.id} value={product.id} onClick={this.addFavorites}><i class="fas fa-star"></i></Button>
                        &nbsp;
                        <ButtonInfo product_id={product.id} product_name={product.name} product_desc={product.description} product_img={product.image_url} />
                        &nbsp;
                        <Button variant="primary" name={"add-cart-" + product.id} value={product.id} onClick={this.addCart}><i class="fas fa-plus-circle"></i></Button>                               
                    </Card.Body>
                </Card>           
        ));

        return (
            <div>
            {productItems}
            </div>
        )
    }
}

ProductCards.PropTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(ProductCards);