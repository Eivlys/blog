
import '@/styles/global.css'
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image'
import icon from '@/app/icon.png'

export function Navigator({ current }: { current: string }) {
    const menus = [
        {
            slug: 'about',
            route: 'about',
            icon: '👩‍💻'
        },
        // 	{
        // 	slug: 'blog',
        // 	icon: '📝'
        // },
        {
            slug: 'toolbox',
            route: 'toolbox',
            icon: '🧰'
        }];

    return (
        <div className='navigator'>
            <Link key={'home'} href={`/`} className='home'>
                <Button colorScheme='gray' variant='link' className={`nav-item ${current === 'home' ? 'active' : null}`}>
                    <Image src={icon} className='icon' width={20} height={20} alt='icon' /><span className='nav-item-name'>SZ</span>
                </Button>
            </Link>
            {menus?.map((m =>
                <Link key={m?.slug} href={`/${m?.route}`}>
                    <Button colorScheme='gray' variant='link' className={`nav-item ${current === m?.slug ? 'active' : null}`}>
                        {m?.icon}<span className='nav-item-name'>{m?.slug?.toUpperCase()}</span>
                    </Button>
                </Link>
            ))}
        </div>
    )
}
