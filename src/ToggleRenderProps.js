import React, { Component } from 'react'

export default class Toggle extends Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        const { fromToggle } = this.props;
        return (
            <div>{fromToggle({
                on: this.state.on,
                toggle: this.toggle
            })}</div>
        )
    }
}
