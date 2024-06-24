'use client'
import '@/styles/global.css'
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image'
import icon from '@/app/icon.png'
import { SwitchLan } from './SwitchLan';

export function Navigator({ current, locale }: {
    current: string;
    locale: string;
}) {
    const menus = [
        {
            slug: 'about',
            slugZh: '关于',
            route: 'about',
            icon: '👩‍💻'
        },
        // {
        //     slug: 'blog',
        //     route: 'blog',
        //     icon: '📝'
        // },
        {
            slug: 'toolbox',
            slugZh: '工具箱',
            route: 'toolbox',
            icon: '🧰'
        }];

    return (
        <div className={`navigator ${current === 'home' ? 'homepage' : ''}`}>
            <Link key={'home'} href={`/${locale ? '?locale=' + locale : ''}`} className='home'>
                <Button colorScheme='gray' variant='link' className={`nav-item ${current === 'home' ? 'active' : null}`}>
                    <Image src={icon} className='icon' width={20} height={20} alt='icon' /><span className='nav-item-name'>SZ</span>
                </Button>
            </Link>
            {menus?.map((m =>
                <Link key={m?.slug} href={`/${m?.route}${locale ? '?locale=' + locale : ''}`}>
                    <Button colorScheme='gray' variant='link' className={`nav-item ${current === m?.slug ? 'active' : null}`}>
                        {m?.icon}<span className='nav-item-name'>{locale === 'zh' ? m?.slugZh : m?.slug?.toUpperCase()}</span>
                    </Button>
                </Link>
            ))}
            <SwitchLan locale={locale} />
        </div>
    )
}
