import { headers } from 'next/headers';
import React from "react"
import Markdown from 'react-markdown';


export default async function Blog({
    params,
    searchParams,
}: {
    params?: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const headersList = headers();
    const domain = headersList.get('host') || "";

    if (!params) return null; //TODO: 404 Comp

    const response = await fetch(`http://${domain}/content/${params?.slug}/index.md`)
    const mdxText = await response.text();
    const frontMatterRegex = /^---\n[\s\S]*?\n---\n/;
    const filteredMdx = mdxText.replace(frontMatterRegex, '');

    return <div className='section' style={{ height: '100vh' }}>
        Blog Detail
        {filteredMdx ? <Markdown>{filteredMdx}</Markdown> : null}
    </div>
}