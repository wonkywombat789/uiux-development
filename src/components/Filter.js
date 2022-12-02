import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div>{this.props.count} Products</div>
                <div>Order{" "}<select className="filterName" value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="">All</option>
                    <option value="lowest">lowest</option>
                    <option value="highest">highest</option>
                </select></div>
                <div>Type{" "}<select className="filterName" value={this.props.type} onChange={this.props.typeFilter}>
                    <option value="">All</option>
                    <option value="Cake ">Cake</option>
                    <option value="Pie ">Pie</option>
                    <option value="Cookie ">Cookie</option>
                    <option value="Cupcake ">Cupcake</option>
                    <option value="Slice ">Slice</option>
                </select></div>
                <div>Flavor{" "}<select className="filterName" value={this.props.flavor} onChange={this.props.flavorFilter}>
                    <option value="">All</option>
                    <option value="Fall ">Fall</option>
                    <option value="Vanilla ">Vanilla</option>
                    <option value="Chocolate ">Chocolate</option>
                    <option value="Special ">Special</option>
                </select></div>
            </div>
        );
    }
}