import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div>{this.props.count} Products</div>
                {/* adds a dropdown button for the sort method */}
                <div>Order{" "}<select className="filterName" value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="">All</option>
                    <option value="lowest">lowest</option>
                    <option value="highest">highest</option>
                </select></div>
                {/* adds a dropdown button for the type filter method */}
                <div>Type{" "}<select className="filterName" value={this.props.type} onChange={this.props.typeFilter}>
                    <option value="">All</option>
                    <option value="Bug ">Bug</option>
                    <option value="Dark ">Dark</option>
                    <option value="Dragon ">Dragon</option>
                    <option value="Electric ">Electric</option>
                    <option value="Fire ">Fire</option>
                    <option value="Fairy ">Fairy</option>
                    <option value="Flying ">Flying</option>
                    <option value="Grass ">Grass</option>
                    <option value="Ice ">Ice</option>
                    <option value="Poison ">Poison</option>
                    <option value="Psychic ">Psychic</option>
                    <option value="Water ">Water</option>
                </select></div>
                {/* adds a dropdown button for the evolution filter method */}
                <div>Evolution{" "}<select className="filterName" value={this.props.evolution} onChange={this.props.evolutionFilter}>
                    <option value="">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select></div>
            </div>
        );
    }
}