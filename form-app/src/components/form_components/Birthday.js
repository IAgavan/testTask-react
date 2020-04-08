import React, { Component } from 'react'
import axios from 'axios'

export class Birthday extends Component {
    state = {
        day: [],
        month: [],
        year: []
    }

    componentDidMount = () => {
        axios.get("http://localhost:2000/birth-day.json")
            .then(res => this.setState(res.data))
            .then(this.props.setParentState({ isBirthdayDataLoaded: true }))
    }


    addOptions = (param, name) => {
        let options = []
        for (let i = 0; i < param.length; i += 1) {
            const option = React.createElement('option', { value: `${param[i]}`}, `${param[i]}`);
            options[i] = option
        }
        return React.createElement('select', {name:name, required:true,
            value:`${this.props[name]}`,
            onChange:e => this.props.change(e)}, ...options)
    }


    render() {
        return (
            <div className="birthday input">
                <label htmlFor="birthday">Дата рождения </label>
                <div className="select">

                    {this.addOptions(this.state.day, 'birthdayDate')}

                    <span></span>
                    
                    {this.addOptions(this.state.month, 'birthdayMonth')}

                    <span></span>
                    
                    {this.addOptions(this.state.year, 'birthdayYear')}

                    <span><p>Выберете дату</p></span>
                </div>
            </div>
        )
    }
}

export default Birthday
