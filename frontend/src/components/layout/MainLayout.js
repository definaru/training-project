import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import contents from '../styles/MainLayout.module.css'


export function MainLayout({children, title = 'Loading...'}) 
{

    useEffect(() => {
        document.title = title
    }, [title])

    const pages = [
        {
            slug: 'Главная',
            href: '/',
            icon: ''
        },
        {
            slug: 'О платформе',
            href: '/about',
            icon: ''
        },
        {
            slug: 'Добавить статью',
            href: '/add',
            icon: 'add'
        }
    ]

    return (
        <>
            <header className={contents.nav}>
                <div>
                    <span className="material-symbols-outlined">menu</span>
                    <ul>
                        {pages.map((item, i) => (
                            <li key={i}>
                                <NavLink to={item.href}>
                                    {item.icon && <span className="material-symbols-outlined">{`${item.icon}`}</span>}
                                    {item.slug}
                                </NavLink>
                            </li>
                        ))}
                    </ul>   
                    <span className="material-symbols-outlined" style={{fontSize: '40px'}}>account_circle</span>                    
                </div>
            </header>                
            <article className={contents.header}>
                <div>
                    <div>
                        {children}
                    </div>
                </div>                
            </article>
            <footer>
                <p>&copy; Авторскими правами не защищено / тестовое задание</p> 
            </footer>
        </>
    )
}