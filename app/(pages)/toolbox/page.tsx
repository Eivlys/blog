import { SectionHeader } from '@/app/components/SectionHeader'
import { Navigator } from '@/app/components/Navigator'
import React from "react"
import Tools from '@/json/tools.json'
import Sport from '@/json/sport.json'
import Language from '@/json/language.json'
import Podcast from '@/json/podcast.json'
import Link from 'next/link'
import { ListItem, UnorderedList } from '@chakra-ui/react'

export default function Toolbox() {
    return <div className='section'>
        <Navigator current='toolbox' />
        <SectionHeader title='TOOLBOX' />
        <div className="section-content toolbox">
            {/* <div>This is my personal blog for sharing thought.</div> */}

            {/* <div className="section-title">Dev Tools</div>
            <div className="block">
                {Tools.map(t => {
                    return <div key={t?.type} className="flex flex-col md:flex-row flex-wrap justify-center items-center my-5 md:my-3 block-item">
                        <div className='font-arial font-semibold w-48 text-center md:text-right text-slate-900'>{t?.type}:</div>
                        <Link target='_blank' href={t?.link} color='secondary'><div className='font-arial w-60 md:pl-3 text-center md:text-left'>{t?.name}</div></Link>
                    </div>
                })}
            </div>
            <div className="section-title">Boxing Equipment</div>
            <div className="block">
                {Equipment.map(t => {
                    return <div key={t?.type} className="flex flex-col md:flex-row flex-wrap justify-center items-center my-5 md:my-3 block-item">
                        <div className='font-arial font-semibold w-48 text-center md:text-right text-slate-900'>{t?.type}:</div>
                        <div className='font-arial w-60 pl-3 text-center md:text-left'>{t?.name}</div>
                    </div>
                })}
            </div> */}

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

            <div className="section-title">Sport</div>
            <div className="block">
                <UnorderedList spacing={2}>
                    {Sport.map((t: { type: string; link: string; name: string; desc: string; }) => {
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
                    {Language.map((t: { type: string; link: string; name: string; desc: string; }) => {
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

            <div className="section-title">Podcast</div>
            <div className="block">
                <UnorderedList spacing={2}>
                    {Podcast.map((t: { type: string; link: string; name: string; desc: string; }) => {
                        return <ListItem key={t?.type}>
                            {t?.link
                                ? <Link target='_blank' href={t?.link}>{t?.name}</Link>
                                : t?.name}
                            {t?.desc}
                        </ListItem>
                    })}
                </UnorderedList>
            </div>
        </div>
    </div >
}