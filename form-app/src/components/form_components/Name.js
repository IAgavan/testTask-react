import React, { Component } from 'react'

export class Name extends Component {
    render() {
        return (
            <div className="name input">
                <label htmlFor="name">Имя</label>
                <input type="text"
                    name="name"
                    required
                    pattern="[А-Яа-я]+"
                    title="Пожалуйста, используйте русские буквы"
                    value={this.props.name}
                    onChange={e => this.props.change(e)}
                />
                <span><p>Пожалуйста, используйте русские буквы</p></span>
            </div>
        )
    }
}

export default Name
