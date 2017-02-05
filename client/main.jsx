import React from 'react';
import ReactDOM from 'react-dom';

class ProductRow extends React.Component {
    render() {
        return (
            <tr className="ProductRow" style={{color: this.props.product.stocked ? 'black' : 'red'}}>
                <td>{this.props.product.name}</td>
                <td>${this.props.product.price}</td>
            </tr>
        );
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr className="ProductCategoryRow">
                <td colSpan="2">{this.props.name}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        let products = {};
        this.props.products.forEach(product => {
            if (!(product.category in products)) {
                products[product.category] = [];
            }
            products[product.category].push(product);
        });

        let rows = [];
        Object.keys(products).forEach(categoryName => {
            rows.push(<ProductCategoryRow key={'category' + categoryName} name={categoryName}/>);
            products[categoryName].forEach(product => {
                rows.push(<ProductRow key={'product' + product.name} product={product}/>);
            });
        });

        return (
            <table id="ProductTable" className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <div id="SearchBar">
                <div className="form-group">
                    <input type="text" className="form-control" name="query" placeholder="Search phrase"/>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox"/> Only show products in stock
                    </label>
                </div>
            </div>
        );
    }
}

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div id="FilterableProductTable">
                <SearchBar/>
                <ProductTable products={this.props.products}/>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        const products = [
            {category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football'},
            {category: 'Sporting Goods', price: 9.99, stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: 99.99, stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: 399.99, stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: 199.99, stocked: true, name: 'Nexus 7'}
        ];

        return (
            <FilterableProductTable products={products}/>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
);
