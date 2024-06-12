import Link from 'next/link';
import { Navigator } from '@/app/components/Navigator'

export default function NotFound() {
    return (
        <div className=''>
            <Navigator current='home' />
            <div className='not_found'>
                <div className='title'>Sorry, this page can&lsquo;t be found</div>
                <div className='back'><Link href={'/'}>👉 Go to homepage</Link></div>
            </div>

        </div>
    )
}