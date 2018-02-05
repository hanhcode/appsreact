import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    componentDidMount() {
        var WooCommerceAPI = require('woocommerce-api');

        var WooCommerce = new WooCommerceAPI({
            url: 'http://ssshop.io',
            consumerKey: 'ck_3e560bfce76dec52dc674cc247c89fbf994c952d',
            consumerSecret: 'cs_3e8f2781474eec3476895b621d223f05e48bdfa3',
            version: 'v3'
        });
        // WooCommerce.get('products', function(err, data, res) {
        //     var obj = JSON.parse(res);
        //     console.log(obj.store);
        // });
        WooCommerce.get('products/400', function(err, data, res) {
            var obj = JSON.parse(res);
            console.log(obj.product);
        });

    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
