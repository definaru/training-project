import React from 'react'
import styles from '../alert/css/alert.module.css'

export function AlertMessage({message, color = 'error'})
{
    return (
        <div className={styles['alert-box']}>
            <strong className={`${styles.error} ${color}`}>
                <span className="material-symbols-outlined">warning</span>
                {message}
            </strong>
        </div>
    )
}