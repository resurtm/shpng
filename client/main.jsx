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
                if (
                    (this.props.inStockOnly && product.stocked || !this.props.inStockOnly) &&
                    (
                        this.props.filterText.trim().length === 0 ||
                        this.props.filterText.trim().length > 0 && product.name.indexOf(this.props.filterText.trim()) !== -1)
                ) {
                    rows.push(<ProductRow key={'product' + product.name} product={product}/>);
                }
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
                    <input type="text" className="form-control" name="query" placeholder="Search phrase"
                           value={this.props.filterText} onChange={this.props.onFilterTextChange}/>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value={this.props.inStockOnly}
                               onChange={this.props.onInStockOnlyChange}/>
                        Only show products in stock
                    </label>
                </div>
            </div>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor() {
        super();

        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.onFilterTextChange = this.onFilterTextChange.bind(this);
        this.onInStockOnlyChange = this.onInStockOnlyChange.bind(this);
    }

    onFilterTextChange(event) {
        this.setState({filterText: event.target.value});
    }

    onInStockOnlyChange(event) {
        this.setState({inStockOnly: event.target.checked});
    }

    render() {
        return (
            <div id="FilterableProductTable">
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}
                           onFilterTextChange={this.onFilterTextChange}
                           onInStockOnlyChange={this.onInStockOnlyChange}/>
                <ProductTable products={this.props.products} filterText={this.state.filterText}
                              inStockOnly={this.state.inStockOnly}/>
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
