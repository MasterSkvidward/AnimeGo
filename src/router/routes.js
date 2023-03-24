import Animego from "../pages/Animego"
import Anime from "../pages/Anime"
import Error from "../pages/Error"
import AnimeIdPage from '../pages/AnimeIdPage';

export const publicRoutes = [
    {path: '/', element: <Animego/>},
    {path: '/animego', element: <Animego/>},
    {path: '/error', element: <Error/>},
    {path: '/anime', element: <Anime/> },
    {path: '/anime/:id', element: <AnimeIdPage/>},
]

// export const privateRoutes = [
//     {path: '', element: ''},
// ]