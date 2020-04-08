import React, { Component } from 'react'

export class Tel extends Component {
    render() {
        return (
            <div className="tel input">
                <label htmlFor="tel">Моб.телефон</label>
                <input type="tel"
                    name="tel"
                    required
                    pattern="\+[0-9-]+"
                    value={this.props.tel}
                    onChange={e => this.props.change(e)}
                />
                <span><p>Пожалуйста, используйте формат (+.........)</p></span>
            </div>
        )
    }
}

export default Tel
