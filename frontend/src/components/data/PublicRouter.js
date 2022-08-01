import { Home } from '../views/Home'
import { About } from '../views/About'
import { Added } from '../views/Added'
import { ArticleDetails } from '../views/ArticleDetails'
import { NoMatch } from '../views/NoMatch'


export function PublicRouter()
{
    return [
        {
            path: '/',
            element: Home
        },
        {
            path: '/about',
            element: About
        },
        {
            path: '/add',
            element: Added
        },
        {
            path: '/article/:id',
            element: ArticleDetails
        },
        {
            path: '*',
            element: NoMatch
        },
    ]
}