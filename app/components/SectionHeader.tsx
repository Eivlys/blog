
import '@/styles/global.css'

export function SectionHeader({ title }
    : { title: string }) {
    return (
        <div className='section-header'>
            <div className='title'>{title}</div>
        </div>
    )
}
