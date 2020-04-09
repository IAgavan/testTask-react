import React, { Component } from 'react'

export class SurnameLat extends Component {
    state = { p:false }
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
                    onChange={e => {
                        this.setState({ p: true })
                        this.props.change(e)
                        this.props.setState({ isSurnameLatChanged: true })
                    }
                    }
                />
                <span>{this.state.p? <p>Пожалуйста, используйте латинские буквы</p>: null}</span>
            </div>
        )
    }
}

export default SurnameLat
