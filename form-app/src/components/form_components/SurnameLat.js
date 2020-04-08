import React, { Component } from 'react'

export class SurnameLat extends Component {
    render() {
        return (
            <div className="surname-lat input">
                <label htmlFor="surnameLat">Фамилия латиницей</label>
                <input type="text"
                    name="surnameLat"
                    required
                    pattern="[A-Za-z]+"
                    title="Пожалуйста, используйте латинские буквы"
                    value={this.props.surnameLat}
                    onChange={e => this.props.change(e)}
                />
                <span><p>Пожалуйста, используйте латинские буквы</p></span>
            </div>
        )
    }
}

export default SurnameLat
