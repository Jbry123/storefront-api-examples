import React, { Component } from 'react';
import Product from './Product';
import '../App.css';

class Products extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          checkout={this.props.checkout}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return (
      <div className="ProductWrapper">
        {products}
      </div>
    );
  }
}

export default Products;
