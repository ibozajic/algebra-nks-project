import React from 'react';
import { Table } from 'react-bootstrap';
import CartProducts from './CartProducts';


const CartPage = () => (
    <div>
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Bear name</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
        <tbody>
            <CartProducts />
        </tbody>
        </Table>
    </div>
)

export default CartPage;