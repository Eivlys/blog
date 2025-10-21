import React, { Suspense } from "react"
import Experiences from '@/json/experiences.json';
import Link from 'next/link';

// test deploy

export default function About({ searchParams }: { searchParams: { [k: string]: string } }) {
    const { locale = 'en' } = searchParams || {};
    const content = locale === 'en' ? Experiences?.en : Experiences?.zh; //TODO:add type
    //TODO: Suspense boundary 
    return <div className='section'>
        <div className="section-content">
            {/* <div>This is my personal blog for sharing thought.</div> */}
            {locale === 'en'
                ? <div className='brief'>This website is hosted on <Link href='https://vercel.com/' target='_blank'>Vercel</Link>, use <Link color="secondary" href='https://nextjs.org/' target='_blank'>Next.js</Link> framework</div>
                : <div className='brief'>本站部署于<Link href='https://vercel.com/' target='_blank'>Vercel</Link>, 使用<Link color="secondary" href='https://nextjs.org/' target='_blank'>Next.js</Link>搭建</div>
            }

            <div className="section-title">{locale === 'en' ? 'Work' : '工作经历'}</div>
            <div className="block">
                {content?.map((x, idx) => {
                    return <div key={idx} className="block-item">
                        <div className="subtitle">
                            <div className="icon">
                                {x?.icon ? <img height="20" width="20" alt={x?.icon} src={`https://cdn.simpleicons.org/${x?.icon}/66666699`} /> : <div className="text-center text-xs">❤</div>}
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