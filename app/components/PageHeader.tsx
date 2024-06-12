
import '@/styles/global.css'

export function PageHeader({ title }
    : { title: string }) {
    return (
        <div className='page-header'>
            <div className='title'>{title}</div>
        </div>
    )
}
