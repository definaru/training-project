import React from 'react'
import { getRandomNumber } from '../../helper/counter/getRandomNumber'  
import css from '../../ui/comment/css/comments.module.css'

export function BlockComment({comment})
{
    const { id, user, text } = comment

    return (
        <div className={css.flex}>
            <img src={`https://randomuser.me/api/portraits/men/${id}.jpg`} />
            <div>
                <h4>{user}</h4>
                <small>{text}</small>   
                <div className={css.footer}>
                    <div className={css.block}>
                        <div className={css.block_button}>
                            <span className="material-symbols-outlined">favorite</span> {getRandomNumber()}
                        </div>
                        <div className={css.block_button}>
                            <span className="material-symbols-outlined">visibility</span> {getRandomNumber()}
                        </div>               
                    </div>
                    <div className={css.block}>
                        <div className={css.block_button}>
                            <span className="material-symbols-outlined">chat</span> <strong>Ответить</strong>
                        </div>
                        <div className={css.block_button}>
                            <span className="material-symbols-outlined">share</span> <strong>Поделиться</strong>
                        </div>                        
                    </div>
                </div>                                             
            </div>
        </div>
    )
}