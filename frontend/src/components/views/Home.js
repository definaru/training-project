import { useEffect } from 'react'
import { MainLayout } from '../layout/MainLayout'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchAllArticles } from '../../store/reducers/ActionCreation'
import { AlertMessage } from '../ui/alert/AlertMessage'
import { ItemCard } from '../ui/card/ItemCard'
import { LoadingCard } from '../ui/loader/LoadingCard'
import { AddBlock } from '../ui/block/AddBlock'
import { TitleBlock } from '../ui/block/TitleBlock'
import { SearchBlock } from '../ui/block/SearchBlock'
import styles from '../../components/css/main.module.css'
import { PaginationBlock } from '../ui/block/pagination/PaginationBlock'


export function Home() 
{
    const Title = 'Список статей'
    
    const {articles, isLoading, error} = useAppSelector(state => state.articleReducer)
    const TotalCount = Object.keys(articles).length
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllArticles())
    }, [])
    

    return (
        <MainLayout title={Title}>
            <div className={styles.section}>
                <div className={`${styles.flex} ${styles['mt-10']}`}>
                    {error ? 
                    <AlertMessage message={error} /> : 
                    <>
                        <TitleBlock title={Title} totalCount={TotalCount} />
                        <SearchBlock />
                        <div className={styles['w-full']}>
                            <div>
                                {isLoading ? 
                                    <LoadingCard /> :
                                    <div className={styles.wrapper}>
                                        {TotalCount === 0 ?
                                        <AddBlock /> : 
                                        <>
                                            {articles.length ? articles?.map((item, i) => (
                                                <ItemCard key={i} item={item} />
                                            )) : 'Loading...'}
                                        </>}
                                    </div>
                                }
                            </div>
                        </div> 
                        <PaginationBlock page={TotalCount} />                                          
                    </>} 
                </div>                
            </div>
        </MainLayout>
    )
}