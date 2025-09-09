import '@/styles/main.scss'
import Contact from '@/json/contact.json';
import { Link } from '@chakra-ui/next-js';
import { Tooltip } from '@chakra-ui/react';

export function Footer() {
    return (
        <div className="global-footer">
            <div className="word">© 2024 Sylvie Zhang</div>
            <div className='link'>
                {Contact.map(c => {
                    return <div key={c?.slug} className="mx-1">
                        <Link href={c?.link} target="_blank">
                            {c?.slug === 'linkedin'
                                ? <Tooltip
                                    label="the LinkedIn icon is not available 🫥"
                                    size="xs"
                                    hasArrow
                                    placement="top">
                                    <span className='link-item text-xs'>LinkedIn</span>
                                </Tooltip>
                                : <img height="24" width="24" className='link-item' alt={c?.slug} src={`https://cdn.simpleicons.org/${c?.slug}/454545`} />}
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}
