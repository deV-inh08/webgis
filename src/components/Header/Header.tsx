import { Link } from 'react-router'
import { Button } from '@/components/ui/button'

export const Header = () => {
    return (
        <nav className='flex justify-between p-4'>
            <Link to='/' className='flex items-center text-black text-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.146 13.6667C13.146 13.6667 11.0248 10.3013 12.7231 7C14.6208 3.3112 13.0693 0.333333 13.0693 0.333333H1.33711C1.33711 0.333333 2.8859 3.31067 0.989707 6.99897C-0.707909 10.301 1.42365 13.6667 1.42365 13.6667H13.146Z" fill="#0D171C" />
                </svg>
                <p>Travel</p>
            </Link>
            <div className='flex items-center gap-5'>
                <ul className='flex gap-4'>
                    <Link to='/' className='text-md'>Home</Link>
                    <Link to='/about' className='text-md'>About</Link>
                    <Link to='/explore' className='text-md'>Explore</Link>
                    <Link to='/contact' className='text-md'>Contact</Link>
                </ul>
                <div className='flex gap-3'>
                    <Button className='bg-[#2BA6ED] rounded-md'>Log in</Button>
                    <Button className=''>Sign in</Button>
                </div>
            </div>
        </nav>
    )
}
