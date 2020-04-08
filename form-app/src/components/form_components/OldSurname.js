import React, { Component } from 'react'

export class OldSurname extends Component {
    render() {
        return (
            <div className={this.props.oldSurname.isHidden ? 'hidden' : ''}>
                        <label htmlFor="oldSurname">Старая фамилия</label>
                        <input type="text"
                            name="oldSurname"
                            pattern="[А-Яа-я]+"
                            title="Пожалуйста, используйте русские буквы"
                            value={this.props.oldSurname.value}
                            onChange={e => this.props.setState({
                                oldSurname: {
                                    ...this.props.oldSurname,
                                    value: e.target.value
                                }
                            })}
                        />
                        <span><p>Пожалуйста, используйте русские буквы</p></span>
                    </div>
        )
    }
}

export default OldSurname
