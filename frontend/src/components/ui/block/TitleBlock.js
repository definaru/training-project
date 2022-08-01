import React, { useState } from 'react'
import { Counter } from '../../helper/counter/Counter'
import styles from '../../css/main.module.css'

export function TitleBlock({title, totalCount})
{
    const [sort, setSort] = useState(true)
    const toggle = () => setSort(!sort)
    return (
        <div className={styles.header}>
            <h1 className={`${styles.h1} ${styles['m-0']}`}>{title}</h1>
            <div className={`${styles.sort} ${styles['flex-center']} ${styles['m-0']}`}>
                <p className={styles['m-0']}>
                    {totalCount !== 0 ? `Всего ${totalCount}` : 'Нет'} 
                    {Counter(totalCount, 'статья', 'статьи', 'статей')}                     
                </p>
                <div className={`${styles.sort} ${styles['font-bold']} ${styles.cp}`} onClick={() => toggle()}>
                    <span className="material-symbols-outlined">sort</span>
                    {sort ? 'По убыванию' : 'По возрастанию'}
                </div>
            </div>                        
        </div> 
    )
}
