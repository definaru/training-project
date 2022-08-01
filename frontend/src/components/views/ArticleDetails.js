import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchOneArticle, fetchComment } from '../../store/reducers/ActionCreation'
import { AlertMessage } from '../ui/alert/AlertMessage'
import { getDateFormat } from '../helper/datatime/getDateFormat'
import { BlockComment } from '../ui/comment/BlockComment'
import styles from '../../components/css/main.module.css'


export function ArticleDetails() 
{

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const art = params.id
    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const {articles, comments, isLoading, error} = useAppSelector(state => state.articleReducer)

    const { date, title, text, user } = articles

    useEffect(() => {
        dispatch(fetchOneArticle(art))  
        dispatch(fetchComment(art))
    }, [])

    return (
        <MainLayout title={title}>
            <div className={styles.section}>
                <div className={`${styles.flex} ${styles['mt-10']}`}>
                    <div>
                        <button className={styles.back_button} onClick={() => navigate(-1)}>
                            <span className="material-symbols-outlined">keyboard_return</span>
                            {`Go Back`}
                        </button>                          
                    </div>
                    <div className={styles.header}>
                        <div>
                            <h1 className={`${styles.h1} ${styles['m-0']}`}>{title}</h1>
                            <div  className={styles['time-wrapper']}>
                                <span className="material-symbols-outlined">calendar_month</span>
                                {getDateFormat(date)}                                
                            </div>
                        </div>
                    </div>
                    <div className={styles['w-full']}>
                        {error ? 
                        <AlertMessage message={error} /> :
                        <div>
                            <div style={{ display: 'table' }}>
                                {isLoading ? 
                                <p>Loading...</p> :
                                <div className={styles.wrapper}>
                                    <p className={styles.column}>{text}</p>   
                                    <hr />
                                    {user ? <i>--- {user}</i> : ''}   
                                    <>
                                        {Object.keys(comments).length ? 
                                        <div>
                                            <p>Комментарии: ({Object.keys(comments).length})</p>
                                            <button onClick={() => toggle()}>
                                                {isOpen ? 'Закрыть' : 'Открыть'} 
                                            </button>                                            
                                        </div> : ''}

                                        {isOpen ? 
                                        <>
                                            {comments?.map((user, idx) => (
                                                <BlockComment key={idx} comment={user} />
                                            ))}
                                        </> : ''}                                         
                                    </>
           
                                </div>
                                }
                                
                            </div>
                        </div>}
                    </div>
                </div>                
            </div> 
        </MainLayout>
    )
}