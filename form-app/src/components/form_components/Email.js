import React, { Component } from 'react'

export class Email extends Component {
    render() {
        return (
            <div className="email input">
                <label htmlFor="email">Электронная почта</label>
                <input type="email" name="email" required
                    value={this.props.email}
                    onChange={e => this.props.change(e)}
                />
                <span><p>Введите адрес в формате "ex@mp.le"</p></span>
            </div>
        )
    }
}

export default Email
