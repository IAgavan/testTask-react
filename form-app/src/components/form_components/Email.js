import React, { useState } from 'react'

function Email({ email, change }) {
    const [p, setP] = useState(false);

    return (
        <div className="email input">
            <label htmlFor="email">Электронная почта</label>
            <input type="email" name="email" required
                value={email}
                onChange={e => {
                    setP(true);
                    change(e)
                }
                }
            />
            <span>{p ? <p>Введите адрес в формате "ex@mp.le"</p> : null}</span>
        </div>

    )
}

export default Email
