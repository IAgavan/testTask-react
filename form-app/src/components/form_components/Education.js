import React, { Component } from 'react'
import axios from 'axios'

export class Education extends Component {
    state = {
        education: ''
    }

    componentDidMount = () => {
        axios.get("http://localhost:2000/education.json")
            .then(res => this.setState(res.data))
            .then(this.props.setParentState({ isEducationDataLoaded: true }))
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
            <div className="education input">
                <label htmlFor="education">Образование </label>
                {this.addOptions(this.state.education, 'education')}
                <span><p>Выбери из списка</p></span>
            </div>

        )
    }
}

export default Education
