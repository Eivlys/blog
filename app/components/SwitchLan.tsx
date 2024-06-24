'use client'

import '@/styles/main.scss'
import { useState } from 'react';
import { getLanguage } from '../utils';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

export function SwitchLan({ locale }: { locale: string }) {
    const router = useRouter();
    const pathname = usePathname();

    const [lan, setLan] = useState<string>(locale || getLanguage());

    const handleAddParam = () => {
        const _locale = lan === 'en' ? 'zh' : 'en';
        setLan(_locale)
        router.replace(`${pathname}?locale=${_locale}`);
    };

    return <div className={`switch_lan ${lan ? '' : 'reverse'}`} onClick={handleAddParam}>
        <div className='btn' ></div>
        {lan === 'en'
            ? <div className='lan'>EN</div>
            : <div className='lan'>中</div>
        }
    </div>

}