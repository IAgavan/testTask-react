import React, { Component } from 'react'

export class Form extends Component {
    state = {
        surname: '',
        oldSurname: {
            value: '',
            isHidden: false
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
        email: ''

    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form className="paper-effect">
                <div className="form-main ">
                    <div className="surname input">
                        <label htmlFor="surname">Фамилия</label>
                        <input
                            type="text"
                            name="surname"
                            required
                            pattern="[А-Яа-я]+"
                            title="Пожалуйста, используйте русские буквы"
                            value={this.state.surname}
                            onChange={e => this.change(e)}
                        />
                        <span><p>Пожалуйста, используйте русские буквы</p></span>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox"
                            id="old-surname"
                            name="checkbox"
                            checked={this.state.oldSurname.isHidden? false: true}
                            onChange={() => {
                                this.setState({
                                    oldSurname: {
                                        value: this.state.oldSurname.value,
                                        isHidden: !this.state.oldSurname.isHidden
                                    }

                                })
                            }}
                        />
                        <span>ранее менялась</span>
                    </div>
                    <div className={this.state.oldSurname.isHidden ? 'hidden' : ''}>
                        <label htmlFor="oldSurname">Старая фамилия</label>
                        <input type="text"
                            name="oldSurname"
                            pattern="[А-Яа-я]+"
                            title="Пожалуйста, используйте русские буквы"
                            value={this.state.oldSurname.value}
                            onChange={e =>  this.setState({
                                oldSurname:{
                                    ...this.state.oldSurname,
                                    value: e.target.value
                            }})}
                        />
                        <span><p>Пожалуйста, используйте русские буквы</p></span>
                    </div>
                    <div className="name input">
                        <label htmlFor="name">Имя</label>
                        <input type="text"
                            name="name"
                            required
                            pattern="[А-Яа-я]+"
                            title="Пожалуйста, используйте русские буквы"
                            value={this.state.name}
                            onChange={e => this.change(e)}
                        />
                        <span><p>Пожалуйста, используйте русские буквы</p></span>
                    </div>
                    <div className="father-name input">
                        <label htmlFor="fatherName">Отчество</label>
                        <input type="text"
                            name="fatherName"
                            required
                            pattern="[А-Яа-я]+"
                            title="Пожалуйста, используйте русские буквы"
                            value={this.state.fatherName}
                            onChange={e => this.change(e)}
                        />
                        <span><p>Пожалуйста, используйте русские буквы</p></span>
                    </div>
                    <div className="surname-lat input">
                        <label htmlFor="surnameLat">Фамилия латиницей</label>
                        <input type="text"
                            name="surnameLat"
                            required
                            pattern="[A-Za-z]+"
                            title="Пожалуйста, используйте латинские буквы"
                            value={this.state.surnameLat}
                            onChange={e => this.change(e)}
                        />
                        <span><p>Пожалуйста, используйте латинские буквы</p></span>
                    </div>
                    <div className="name-lat input">
                        <label htmlFor="nameLat">Имя латиницей</label>
                        <input type="text"
                            name="nameLat"
                            required
                            pattern="[A-Za-z]+"
                            title="Пожалуйста, используйте латинские буквы"
                            value={this.state.nameLat}
                            onChange={e => this.change(e)}
                        />
                        <span><p>Пожалуйста, используйте латиниские буквы</p></span>
                    </div>
                    <div className="birthday input">
                        <label htmlFor="birthday">Дата рождения </label>
                        <div className="select">
                            <select name="birthdayDate" required
                                value={this.state.birthdayDate}
                                onChange={e => this.change(e)}
                            >

                            </select>
                            <span></span>
                            <select name="birthdayMonth" required
                                value={this.state.birthdayMonth}
                                onChange={e => this.change(e)}
                            >

                            </select>
                            <span></span>
                            <select name="birthdayYear" required
                                value={this.state.birthdayYear}
                                onChange={e => this.change(e)}
                            >

                            </select>
                            <span><p>Выберете дату</p></span>
                        </div>
                    </div>
                    <div className="family-status input" >
                        <label htmlFor="familyStatus">Семейное положение </label>
                        <select name="familyStatus" required
                            value={this.state.familyStatus}
                            onChange={e => this.change(e)}>

                        </select>
                        <span><p>Выбери из списка</p></span>
                    </div>
                    <div className="education input">
                        <label htmlFor="education">Образование </label>
                        <select name="education" required
                            value={this.state.education}
                            onChange={e => this.change(e)}
                        >

                        </select>
                        <span><p>Выбери из списка</p></span>
                    </div>
                    <div className="contacts-header">Контактная информация</div>
                    <div className="tel input">
                        <label htmlFor="tel">Моб.телефон</label>
                        <input type="tel"
                            name="tel"
                            required
                            pattern="\+[0-9-]+"
                            value={this.state.tel}
                            onChange={e => this.change(e)}
                        />
                        <span><p>Пожалуйста, используйте формат (+.........)</p></span>
                    </div>
                    <div className="email input">
                        <label htmlFor="email">Электронная почта</label>
                        <input type="email" name="email" required
                            value={this.state.email}
                            onChange={e => this.change(e)}
                        />
                        <span><p>Введите адрес в формате "ex@mp.le"</p></span>
                    </div>
                </div>
                <div className="form-footer">
                    <div className="checkbox">
                        <input type="checkbox" required /> <span>Ставя эту галочку, я подтверждаю, что поставил ее в трезвом уме
                        и
                            твердой памяти.</span>
                    </div>
                    <button className="button" disabled>Полететь на Марс</button>

                </div>
            </form>
        )
    }
}

export default Form
