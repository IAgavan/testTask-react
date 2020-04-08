import React, { Component } from 'react'

export class FatherName extends Component {
    render() {
        return (
            <div>
                <div className="father-name input">
                        <label htmlFor="fatherName">Отчество</label>
                        <input type="text"
                            name="fatherName"
                            required
                            pattern="[А-Яа-я]+"
                            title="Пожалуйста, используйте русские буквы"
                            value={this.props.fatherName}
                            onChange={e => this.props.change(e)}
                        />
                        <span><p>Пожалуйста, используйте русские буквы</p></span>
                    </div>
            </div>
        )
    }
}

export default FatherName
