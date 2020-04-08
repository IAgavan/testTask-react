import React, { Component } from 'react'

export class FormFooter extends Component {
    render() {
        return (
            <div className="form-footer">
            <div className="checkbox">
                <input type="checkbox" required  onChange={ e => this.props.change(e)} /> <span>Ставя эту галочку, я подтверждаю, что поставил ее в трезвом уме
                и
                твердой памяти.</span>
            </div>
            <button className="button" disabled={ !this.props.isValid } >Полететь на Марс</button>

        </div>
        )
    }
}

export default FormFooter
