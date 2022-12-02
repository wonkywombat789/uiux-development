import React, { Component } from 'react';
import data from './data.json'
import Products from './components/Products'
import Filter from './components/Filter'
import Cart from './components/Cart'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      products: data.products,
      cartItems: [],
      types: "",
      flavor: "",
      sort: "",
    };
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        if (item.count > 1) {
          product.count--;
          cartItems.length--;
          this.setState({ product }) //setState to the new product count 
        }
        else if (product.count === 1) { //completely remove from cart if there is only one
          console.log(product._id)
          this.setState({
            cartItems: cartItems.filter((item) => item._id !== product._id)
          })
        }

      }
    })
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    console.log(cartItems)
    let inCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) { //item already in cart so just update the amount
        item.count++;
        inCart = true;
        cartItems.length++;
      }
    });
    if (!inCart) { //item not in cart so have to add a completely new item
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };

  filter = (type, flavor) => {
    let filteredProducts = data.products;
    if (type !== "") {
      filteredProducts = filteredProducts.filter((product) => product.type.indexOf(type) >= 0)
    }

    if (flavor !== "") {
      filteredProducts = filteredProducts.filter((product) => product.flavor.indexOf(flavor) >= 0)
    }

    this.setState({ products: this.sort(filteredProducts, this.state.sort), types: type, flavor: flavor });
  };

  sort = (products, sortMethod) => {
    if (sortMethod === "") {
      return products;
    }
    return products.slice().sort((a, b) => { // sort based on price
      if (sortMethod === "lowest") {
        return a.price > b.price ? 1 : -1;
      } else if (sortMethod === "highest") {
        return a.price < b.price ? 1 : -1;
      }
    })
  };


  typeFilter = (event) => {
    this.filter(event.target.value, this.state.flavor) //filter based on type
  };

  flavorFilter = (event) => {
    this.filter(this.state.types, event.target.value); //filter based on flavor
  };

  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({ //sort from highest or lowest
      sort: sort,
      products: this.sort(this.state.products, sort)
    }));
  };

  render() {
    return (
      <div className="gridContainer">
        <header>
          <h1>The Sweet Exchange</h1>
          <h3 className="phrase">Have a sweet tooth? We've got you covered.</h3>
        </header>
        <main>
          <div className="content">
            <div className="cart">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
            </div>
            <div className="main">
              <Filter
                count={this.state.products.length}
                types={this.state.types}
                sort={this.state.sort}
                typeFilter={this.typeFilter}
                flavorFilter={this.flavorFilter}
                sortProducts={this.sortProducts} />
              <Products products={this.state.products} addToCart={this.addToCart} />
            </div>



          </div>
        </main>

      </div>
    );
  }
}

export default App;