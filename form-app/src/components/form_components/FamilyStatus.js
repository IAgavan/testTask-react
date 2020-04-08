import React, { Component } from 'react'
import axios from 'axios'

export class FamilyStatus extends Component {
    state = {
        familyStatus: ''
    }

    componentDidMount = () => {
        axios.get("http://localhost:2000/marital-status.json")
            .then(res => this.setState(res.data))
            .then(this.props.setParentState({ isFamilyStatusDataLoaded: true }))
    }


    addOptions = (param, name) => {
        let options = []
        for (let i = 0; i < param.length; i += 1) {
            const option = React.createElement('option', { value: `${param[i]}` }, `${param[i]}`);
            options[i] = option
        }
        return React.createElement('select', {
            name: name, required: true,
            value: `${this.props[name]}`,
            onChange: e => this.props.change(e)
        }, ...options)
    }


    render() {
        return (
            <div className="family-status input" >
                <label htmlFor="familyStatus">Семейное положение </label>
                
                {this.addOptions(this.state.familyStatus, 'familyStatus')}
                
                <span><p>Выбери из списка</p></span>
            </div>
        )
    }
}

export default FamilyStatus
