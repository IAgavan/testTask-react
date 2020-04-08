import React, { Component } from 'react'

export class OldSurnameToggle extends Component {
    render() {
        return (
            <div className="checkbox">
                <input type="checkbox"
                    id="old-surname"
                    name="checkbox"
                    checked={this.props.oldSurname.isHidden ? false : true}
                    onChange={() => {
                        this.props.setState({
                            oldSurname: {
                                value: this.props.oldSurname.value,
                                isHidden: !this.props.oldSurname.isHidden
                            }

                        })
                    }}
                />
                <span>ранее менялась</span>
            </div>
        )
    }
}

export default OldSurnameToggle
