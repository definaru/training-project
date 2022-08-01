import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../css/main.module.css'

export function AddBlock()
{
    return (
        <div className={`${styles.card} ${styles.card_form}`}>
            <div style={{width: '60%'}}>
                <div>
                    <h3>Нет статей</h3> 
                    <div style={{display: 'flex'}}>
                        <NavLink to={'/add'} className={styles.add_button}>
                            Добавить
                        </NavLink>                                                          
                    </div>
                </div>
            </div>
        </div>
    )
}