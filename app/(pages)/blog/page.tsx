import React from "react"
import List from '@/json/blogList.json'
import Link from 'next/link'

export default function BlogList() {
    return <div style={{ height: '100vh' }}>
        BlogList

        {List?.map(l => <div key={l?.slug}>
            <Link href={`/blog/${l?.slug}`}>{l?.title}</Link></div>)}
    </div>
}