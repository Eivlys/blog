import React from "react"
import Experiences from '@/json/experiences.json';
import Link from 'next/link';
import { PageHeader } from '@/app/components/PageHeader';
import { Navigator } from '@/app/components/Navigator';

export default function About() {
    return <div className='section'>
        <div className="section-content">
            {/* <div>This is my personal blog for sharing thought.</div> */}
            <div className='brief'>This website is hosted on <Link href='https://vercel.com/' target='_blank'>Vercel</Link>, use <Link color="secondary" href='https://nextjs.org/' target='_blank'>Next.js</Link> framework</div>

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