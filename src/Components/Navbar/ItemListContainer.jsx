import React, { Component } from "react";

class Item extends Component {
    render() {
        return (
            <li>
                {this.props.valor.producto}-$
                {this.props.valor.precio}
            </li>
        )
    }
}

export default Item;