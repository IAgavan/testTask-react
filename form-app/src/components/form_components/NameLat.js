import React, { Component } from 'react'

export class NameLat extends Component {
    state = { p:false }
    render() {
        return (
            <div className="name-lat input">
                <label htmlFor="nameLat">Имя латиницей</label>
                <input type="text"
                    name="nameLat"
                    required
                    pattern="[A-Za-z]+"
                    title="Пожалуйста, используйте латинские буквы"
                    value={this.props.nameLat}
                    onChange={e => {
                        this.setState({ p: true })
                        this.props.change(e)
                        this.props.setState({ isNameLatChanged: true })
                    }}
                />
                <span>{this.state.p? <p>Пожалуйста, используйте латинские буквы</p>: null}</span>
            </div>
        )
    }
}

export default NameLat
