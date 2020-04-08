import React, { Component } from 'react'

export class Surname extends Component {
    render() {
        return (

            <div className="surname input">
                <label htmlFor="surname">Фамилия</label>
                <input
                    type="text"
                    name="surname"
                    required
                    pattern="[А-Яа-я]+"
                    title="Пожалуйста, используйте русские буквы"
                    value={this.props.surname}
                    onChange={e => this.props.change(e)}
                />
                <span><p>Пожалуйста, используйте русские буквы</p></span>
            </div>

        )
    }
}

export default Surname

