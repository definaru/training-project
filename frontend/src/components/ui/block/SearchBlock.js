
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../css/main.module.css'

export function SearchBlock()
{
    const [search, setSearch] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const insert = watch('search')
    const onSubmit = data => {
        setSearch(data)
    }
    return (
        <div className={styles['w-full']}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.relative}>
                <input 
                    type="search" 
                    {...register('search')}
                    placeholder="Поиск..." 
                    className={`${styles.input} ${styles['mb-1']}`} 
                    style={{paddingLeft: '40px'}}
                    autoComplete="off"
                    autoCorrect="off"
                />
                <span className={`material-symbols-outlined ${styles.absolute} ${styles.search_icon}`}>
                    search
                </span>
            </form>
            {insert ? `Ищем: ${insert}...` : ''}
        </div>
    )
}
