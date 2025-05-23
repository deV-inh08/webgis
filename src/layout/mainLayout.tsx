import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <div className="container-custom  flex flex-col" >
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default MainLayout