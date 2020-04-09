import React, { Component } from 'react'

export class Email extends Component {
    state = { p: false }
    render() {
        return (
            <div className="email input">
                <label htmlFor="email">Электронная почта</label>
                <input type="email" name="email" required
                    value={this.props.email}
                    onChange={e => {
                        this.setState({ p: true })
                        this.props.change(e)
                    }
                    }
                />
                <span>{this.state.p ? <p>Введите адрес в формате "ex@mp.le"</p> : null}</span>
            </div>
        )
    }
}

export default Email
