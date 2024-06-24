import Link from 'next/link';
import { Navigator } from '@/app/components/Navigator'
import { Suspense } from 'react';

export default function NotFound() {
    return (
        <Suspense fallback={<div></div>}>
            <Navigator current='' locale='en' />
            <div className='not_found'>
                <div className='title'>Sorry, this page can&lsquo;t be found</div>
                <div className='back'><Link href={'/'}>👉 Go to homepage</Link></div>
            </div>
        </Suspense>
    )
}