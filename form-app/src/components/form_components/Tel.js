import React, { useState } from 'react'

function Tel({ tel, change }) {
    const [p, setP] = useState(false);

    return (
        <div className="tel input">
            <label htmlFor="tel">Моб.телефон</label>
            <input type="tel"
                name="tel"
                required
                pattern="\+[0-9-]+"
                value={tel}
                onChange={e => {
                    setP(true)
                    change(e)
                }}
            />
            <span>{p ? <p>Пожалуйста, используйте формат (+.........)</p> : null}</span>
        </div>
    )

}

export default Tel
