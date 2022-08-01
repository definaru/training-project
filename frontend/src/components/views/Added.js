import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addArticle } from '../../store/reducers/DataSlice'
import { MainLayout } from '../layout/MainLayout'
import { fetchAddArticle } from '../../store/reducers/ActionCreation'
import styles from '../../components/css/main.module.css'


export function Added()
{
    const Title = 'Добавить статью'
    //const { error } = useAppSelector(state => state.articleReducer)
    const dispatch = useAppDispatch()

    const [post, setPost] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm()

    const classes = (isTrue) => isTrue ? [styles.input, styles.input_error] : [styles.input]

    useEffect(() => {
        if (post.length) dispatch(addArticle(post))
    }, [])

    const onSubmit = data => {
        setPost(data)
        dispatch(fetchAddArticle(data))
    }



    return (
        <MainLayout title={Title}>
            <div className={styles.section}>
                <div className={`${styles.flex} ${styles['mt-10']}`}>
                    <h1 className={`${styles.h1} ${styles['m-0']}`}>{Title}</h1>
                    <div className={styles['w-full']}>
                        <div>
                            <div className={styles.wrapper}>
                                <div className={`${styles.card} ${styles.card_form}`}>
                                    {post  ? 
                                        <h2>Статья успешно добавлена</h2> :
                                        <form style={{width: '60%'}} onSubmit={handleSubmit(onSubmit)}>
                                            <div>
                                                <input 
                                                    type="text"
                                                    placeholder="Заголовок" 
                                                    className={classes(errors.title).join(' ')} 
                                                    {...register(
                                                        "title", 
                                                        { required: true }
                                                    )}
                                                />  
                                                {
                                                    errors.title &&
                                                    <>
                                                        {errors.title.type === 'required' && 
                                                            <label className={styles.text_error}>Напишите заголовок</label>
                                                        }
                                                    </>
                                                }                                              
                                            </div>
                                            <div>
                                                <input 
                                                    type="text"
                                                    placeholder="Автор" 
                                                    className={classes(errors.title).join(' ')} 
                                                    {...register(
                                                        "user", 
                                                        { required: true }
                                                    )}
                                                />  
                                                {
                                                    errors.user &&
                                                    <>
                                                        {errors.user.type === 'required' && 
                                                            <label className={styles.text_error}>Укажите автора</label>
                                                        }
                                                    </>
                                                } 
                                            </div>
                                            <div>
                                                <textarea
                                                    placeholder="Текст статьи..." 
                                                    rows={'10'} 
                                                    className={classes(errors.title).join(' ')}
                                                    {...register(
                                                        "text", 
                                                        { required: true }
                                                    )}
                                                />
                                                {
                                                    errors.text &&
                                                    <>
                                                        {errors.text.type === 'required' && 
                                                            <label className={styles.text_error}>Напишите пожалуйста статью</label>
                                                        }
                                                    </>
                                                } 
                                            </div>
                                            <div>
                                                <button type="submit" className={`${styles.add_button} ${styles['mt-1']}`}>
                                                    Добавить
                                                </button>
                                            </div>                               
                                        </form>
                                    }
                                </div>
                                {/* <pre style={{width: '60%', overflowY: 'hidden'}}>{JSON.stringify(post, null, 4)}</pre> */}
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </MainLayout>
    )
}