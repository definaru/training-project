import React from 'react'
import load from '../loader/css/loader.module.css'

export function LoadingCard()
{
    return (
        <>
            {[...Array(3)].map((item, i) => (
                <div key={i} className={load.container}>
                    <div className={`${load.skeleton} ${load.header}`}></div>
                    <hr />
                    <div className={`${load.skeleton} ${load.date}`}></div>
                </div>            
            ))}
        </>
    )
}