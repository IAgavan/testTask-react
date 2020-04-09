import React, { Component } from 'react'
import Surname from './form_components/Surname'
import Name from './form_components/Name';
import FatherName from './form_components/FatherName';
import SurnameLat from './form_components/SurnameLat';
import NameLat from './form_components/NameLat';
import Tel from './form_components/Tel';
import Email from './form_components/Email';
import OldSurname from './form_components/OldSurname';
import OldSurnameToggle from './form_components/OldSurnameToggle';
import FormFooter from './form_components/FormFooter';
import Birthday from './form_components/Birthday';
import FamilyStatus from './form_components/FamilyStatus';
import Education from './form_components/Education';

export class Form extends Component {
    getStateFromStorage() {
        let form
        try {
            form = JSON.parse(window.sessionStorage.getItem('state'));
        } catch (e) {
            form = null;
        }
        return form

    }

    state = this.getStateFromStorage() || {
        surname: '',
        oldSurname: {
            value: '',
            isHidden: true
        },
        name: '',
        fatherName: '',
        surnameLat: '',
        nameLat: '',
        birthdayDate: '',
        birthdayMonth: '',
        birthdayYear: '',
        familyStatus: '',
        education: '',
        tel: '',
        email: '',

        isSurnameLatChanged: false,
        isNameLatChanged: false,

        isBirthdayDataLoaded: false,
        isEducationDataLoaded: false,
        isFamilyStatusDataLoaded: false,

        isValid: false
    }



    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            isValid: this.formEl.checkValidity()
        }, () => { window.sessionStorage.setItem('state', JSON.stringify(this.state)) })

    }



    render() {
        return (
            <form className="paper-effect"
                ref={form => this.formEl = form}
                onSubmit={() => {
                    window.sessionStorage.clear();
                    this.setState(this.state)
                }}
            >
                <div className="form-main ">
                    <Surname
                        change={this.change}
                        surname={this.state.surname}
                        setParentState={this.state.isSurnameLatChanged ? null : e => this.setState(e)}
                    />
                    <OldSurnameToggle
                        oldSurname={this.state.oldSurname}
                        setState={p => this.setState(p)}
                    />
                    <OldSurname oldSurname={this.state.oldSurname} setState={p => this.setState(p)} />
                    <Name
                        change={this.change}
                        name={this.state.name}
                        setParentState={this.state.isNameLatChanged ? null : e => this.setState(e)}
                    />
                    <FatherName change={this.change} fatherName={this.state.fatherName} />
                    <SurnameLat
                        change={this.change}
                        surnameLat={this.state.surnameLat}
                        setState={p => this.setState(p)}
                    />
                    <NameLat
                        change={this.change}
                        nameLat={this.state.nameLat}
                        setState={p => this.setState(p)}
                    />
                    <Birthday
                        change={this.change}
                        birthdayDate={this.state.birthdayDate}
                        birthdayMonth={this.state.birthdayMonth}
                        birthdayYear={this.state.birthdayYear}
                        setParentState={e => this.setState(e)}
                    />
                    <FamilyStatus
                        change={this.change}
                        setParentState={e => this.setState(e)}
                        familyStatus={this.state.familyStatus}
                    />
                    <Education
                        change={this.change}
                        setParentState={e => this.setState(e)}
                        education={this.state.education}
                    />
                    <div className="contacts-header">Контактная информация</div>
                    <Tel tel={this.state.tel} change={this.change} />
                    <Email email={this.state.email} change={this.change} />
                </div>
                <FormFooter change={this.change} isValid={this.state.isValid} />
            </form>
        )
    }
}

export default Form
