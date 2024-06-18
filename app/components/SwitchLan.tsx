'use client'

import '@/styles/main.scss'
import { useState } from 'react';
import { getLanguage } from '../utils';

export function SwitchLan() {
    const [lan, setLan] = useState<boolean>(getLanguage() === 'en');

    return <div className='switch_lan'>
        <div className='btn' onClick={() => setLan(lan => !lan)}></div>
        {lan
            ? <div className='lan'>EN</div>
            : <div className='lan'>CH</div>
        }
    </div>

}