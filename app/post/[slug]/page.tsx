import '@/styles/main.scss'
import { extractProperties } from '@/app/utils';
import { Tag } from '@chakra-ui/react';
import { headers } from 'next/headers';
import React from "react"
import Markdown from 'react-markdown';


export default async function Blog({
    params,
    // searchParams,
}: {
    params?: { slug: string };
    // searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const headersList = headers();
    const domain = headersList.get('host') || "";

    if (!params) return null;

    const response = await fetch(`http://${domain}/content/${params?.slug}/index.md`)
    const mdxText = await response.text();
    const property = extractProperties(mdxText);
    const frontMatterRegex = /^---\n[\s\S]*?\n---\n/;
    const filteredMdx = mdxText.replace(frontMatterRegex, '');

    return <div className='post'>
        <div className='post-title'>{property?.title}</div>
        <div className='post-info'>
            <div className='post-date'>{property?.date}</div>
            <div className='post-tags'>{(property?.tag?.split(',') || [])?.map(t => <Tag key={t} size={'sm'} className='post-tag'>{t}</Tag>)}</div>
        </div>
        <div className='post-content'>
            {filteredMdx ? <Markdown>{filteredMdx}</Markdown> : null}

        </div>
    </div>
}