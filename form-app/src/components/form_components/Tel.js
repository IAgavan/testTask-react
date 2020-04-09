import React, { Component } from 'react'

export class Tel extends Component {
    state = { p: false }
    render() {
        return (
            <div className="tel input">
                <label htmlFor="tel">Моб.телефон</label>
                <input type="tel"
                    name="tel"
                    required
                    pattern="\+[0-9-]+"
                    value={this.props.tel}
                    onChange={e => {
                        this.setState({ p: true })
                        this.props.change(e)
                    }}
                />
                <span>{this.state.p ? <p>Пожалуйста, используйте формат (+.........)</p> : null}</span>
            </div>
        )
    }
}

export default Tel
