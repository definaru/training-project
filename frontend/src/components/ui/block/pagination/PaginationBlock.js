import React, { useState } from 'react'
import styles from '../../block/pagination/css/pagination.module.css'

export function PaginationBlock({page})
{
    const [event, setEvent] = useState(1)
    const isActive = (num) => {
        return num <= 0 ? <span className="material-symbols-outlined">arrow_back</span> :
        num >= page-1 ? <span className="material-symbols-outlined">arrow_forward</span> : num
    }

    const classes = (a) => {return a === event ? [styles.button, styles.active_button] : [styles.button]}

    return (
        <div className={styles.block}>
            {[...Array(page)].map((item, i) => (
                <div key={i} className={classes(i).join(' ')} onClick={() => setEvent(i)}>
                    {isActive(i)}
                </div>
            ))}
            {/* {event} */}
        </div>
    )
}