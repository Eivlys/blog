
import '@/styles/global.css'
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

export function Navigator({ current }: { current: string }) {
    const menus = [
        {
            slug: 'sylvie.zhang',
            route: '/',
            icon: ''
        },
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
            {menus?.map((m =>
                <Link key={m?.slug} href={`/${m?.route}`}>
                    <Button colorScheme='gray' variant='link' className={`nav-item ${current === m?.slug ? 'active' : null}`}>
                        {m?.icon}{' '}{m?.slug?.toUpperCase()}
                    </Button>
                </Link>
            ))}
        </div>
    )
}
