import React from 'react'
import { NavLink } from 'react-router-dom'
import { getDateFormat } from '../../helper/datatime/getDateFormat'
import { remoteArticle } from '../../../store/reducers/DataSlice'
import { useAppDispatch } from '../../../hooks/redux'
import styles from '../card/css/card.module.css'


export function ItemCard({item})
{
    const dispatch = useAppDispatch()
    const { id, title, date } = item
    return (
        <div className={styles.card}>
            <div className={styles.article_header}>
                <NavLink to={`/article/${id}`} className={styles.link}>
                    <h4 className={styles['m-0']}>{title}</h4>
                </NavLink> 
                <span 
                    onClick={() => dispatch(remoteArticle({id}))}
                    className={`material-symbols-outlined ${styles.close}`}
                >
                    close
                </span>                                           
            </div>
            <hr />
            <div className={styles['time-wrapper']}>
                <span className="material-symbols-outlined">calendar_month</span>
                {getDateFormat(`${String(date)}`)}
            </div>
        </div>
    )
}