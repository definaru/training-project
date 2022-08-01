import { MainLayout } from '../layout/MainLayout'
import styles from '../../components/css/main.module.css'


export function About() 
{
    return (
        <MainLayout title="About">
            <div className={styles.section}>
                <div className={`${styles.flex} ${styles['mt-10']}`}>
                    <h1 className={styles.h1}>About</h1>
                    <hr />
                    <div className={styles['w-full']}>
                        <div>
                            <div className={styles.wrapper}>
                                <p className={styles.column}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.</p>                        
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </MainLayout>
    )
}