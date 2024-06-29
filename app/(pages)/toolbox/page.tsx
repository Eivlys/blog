import React from "react"
import Tools from '@/json/tools.json'
import Health from '@/json/health.json'
import Language from '@/json/language.json'
import Podcast from '@/json/podcast.json'
import Link from 'next/link'
import { ListItem, UnorderedList } from '@chakra-ui/react'

export default function Toolbox() {
    return <div className='section'>
        <div className="section-content toolbox">
            <div className="section-title">Dev Tools</div>
            <div className="block">
                <UnorderedList spacing={2}>
                    {Tools.map((t: { type: string; link: string; name: string; desc: string; }) => {
                        return <ListItem key={t?.type}>
                            <Link target='_blank' href={t?.link}>{t?.name}</Link>
                            {': '}
                            {t?.desc}
                        </ListItem>
                    })}
                </UnorderedList>
            </div>

            <div className="section-title">Fitness & Health</div>
            <div className="block">
                <UnorderedList spacing={2}>
                    {Health.map((t: { type: string; link: string; name: string; desc: string; }) => {
                        return <ListItem key={t?.type}>
                            {t?.link
                                ? <Link target='_blank' href={t?.link}>{t?.name}</Link>
                                : t?.name}
                            {': '}
                            {t?.desc}
                        </ListItem>
                    })}
                </UnorderedList>
            </div>

            <div className="section-title">Language</div>
            <div className="block">
                <UnorderedList spacing={2}>
                    {Language.map((t: { slug: string; link: string; name: string; desc: string; }) => {
                        return <ListItem key={t?.slug}>
                            {t?.link
                                ? <Link target='_blank' href={t?.link}>{t?.name}</Link>
                                : t?.name}
                            {': '}
                            {t?.desc}
                        </ListItem>
                    })}
                </UnorderedList>
            </div>

            <div className="section-title">Podcast</div>
            <div className="block">
                <UnorderedList spacing={2}>
                    {Podcast.map((t: { slug: string; link: string; name: string; desc: string; }) => {
                        return <ListItem key={t?.slug}>
                            {t?.link
                                ? <Link target='_blank' href={t?.link}>{t?.name}</Link>
                                : t?.name}
                            {t?.desc ? ': ' : ''}
                            {t?.desc}
                        </ListItem>
                    })}
                </UnorderedList>
            </div>
        </div>
    </div >
}