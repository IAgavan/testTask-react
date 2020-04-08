import React, { Component } from 'react'

export class NameLat extends Component {
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
                    onChange={e => this.props.change(e)}
                />
                <span><p>Пожалуйста, используйте латиниские буквы</p></span>
            </div>
        )
    }
}

export default NameLat
