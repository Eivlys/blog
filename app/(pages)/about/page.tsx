import React from "react"
import Experiences from '@/json/experiences.json';
import Link from 'next/link';
import { SectionHeader } from '@/app/components/SectionHeader';
import { Navigator } from '@/app/components/Navigator';

export default function About() {
    return <div className='section'>
        <Navigator current='about' />
        <SectionHeader title='ABOUT' />
        <div className="section-content">
            {/* <div>This is my personal blog for sharing thought.</div> */}
            <div className='brief'>This website is hosted on <Link href='https://vercel.com/' target='_blank'>Vercel</Link>, use <Link color="secondary" href='https://nextjs.org/' target='_blank'>Next.js</Link> framework</div>

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

            <div className="section-title">Work</div>
            <div className="block">
                {Experiences.map((x, idx) => {
                    return <div key={idx} className="block-item">
                        <div className="subtitle">
                            <div className="icon">
                                {x?.icon ? <img height="20" width="20" src={`https://cdn.simpleicons.org/${x?.icon}/66666699`} /> : <div className="text-center text-xs">❤</div>}
                            </div>
                            {x?.year?.toUpperCase()}
                        </div>
                        <div className="block-content">
                            <div className="title">{x?.poi}﹫{x.corp}</div>
                            <div className="desc">{x?.desc}</div>
                            <div className='tags'>{(x?.tech || [])?.map(t => <div key={t} className='tag-item'>{t}</div>)}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}