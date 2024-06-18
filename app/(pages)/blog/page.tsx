import '@/styles/main.scss'
import React from "react"
import List from '@/json/blogList.json'
import Link from 'next/link'
import { Tag } from '@chakra-ui/react'

export default function BlogList() {
    return <div className='blog-list'>
        {List?.map(l => <div key={l?.slug} className='blog-list-item'>
            <Link key={l?.slug} href={`/post/${l?.slug}`} className='list-title'>{l?.title}</Link>
            <div className='list-date'>{l?.date}</div>
            <div className='list-footer'>
                <div className='list-tag'>{(l?.tag?.split(',') || [])?.map(t => <Tag key={t} className='list-tag-item'>{t}</Tag>)}</div>
                {/* <div>{'>>'}</div> */}
            </div>

        </div>)}
    </div>
}