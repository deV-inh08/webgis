import { useRoutes } from 'react-router-dom'
import path from '@/constants/path'
import MainLayout from '@/layout/mainLayout'
import Home from '@/page/Home'
import About from '@/page/About'
import Contact from '@/page/Contact'
import { Explore } from '@/page/Explore'

const useRouteElement = () => {
    const routeElement = useRoutes([
        {
            path: path.home,
            element: (
                <MainLayout>
                    <Home />
                </MainLayout>
            )
        },
        {

            path: path.about,
            element: (
                <MainLayout>
                    <About />
                </MainLayout>
            )
        },
        {
            path: path.explore,
            element: (
                <MainLayout>
                    <Explore />
                </MainLayout>
            )
        },
        {
            path: path.contact,
            element: (
                <MainLayout>
                    <Contact />
                </MainLayout>
            )
        },
    ])

    return routeElement
}

export default useRouteElement