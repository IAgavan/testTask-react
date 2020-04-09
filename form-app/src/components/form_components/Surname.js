import React, { Component } from 'react'

export class Surname extends Component {

    state = { p: false }

    // автозаполнении латинской версии
    toTranslit = (str) => {
        const ru = {
            а: 'a',
            б: 'b',
            в: 'v',
            г: 'g',
            д: 'd',
            е: 'e',
            ё: 'e',
            ж: 'j',
            з: 'z',
            и: 'i',
            к: 'k',
            л: 'l',
            м: 'm',
            н: 'n',
            о: 'o',
            п: 'p',
            р: 'r',
            с: 's',
            т: 't',
            у: 'u',
            ф: 'f',
            х: 'h',
            ц: 'c',
            ч: 'ch',
            ш: 'sh',
            щ: 'shch',
            ы: 'y',
            э: 'e',
            ю: 'u',
            я: 'ya',
        };
        const newStr = [];

        str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');

        for (let i = 0; i < str.length; i += 1) {
            newStr.push(
                ru[str[i]]
                || (ru[str[i].toLowerCase()] === undefined && str[i])
                || ru[str[i].toLowerCase()].replace(/^(.)/, (match) => match.toUpperCase()),
            );
        }

        return newStr.join('');
    }



    render() {
        return (

            <div className="surname input">
                <label htmlFor="surname">Фамилия</label>
                <input
                    type="text"
                    name="surname"
                    required
                    pattern="[А-Яа-я]+"
                    title="Пожалуйста, используйте русские буквы"
                    value={this.props.surname}
                    onChange={e => {
                        this.setState({ p: true })
                        this.props.change(e)
                        this.props.setParentState && this.props.setParentState({ surnameLat: this.toTranslit(e.target.value) })
                    }}
                />
                <span>{this.state.p ? <p>Пожалуйста, используйте русские буквы</p> : null}</span>
            </div>

        )
    }
}

export default Surname

