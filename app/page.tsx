'use client'
import '@/styles/main.scss'
import React, { Suspense, useEffect } from "react"
import { ListItem, UnorderedList } from '@chakra-ui/react'
import { Navigator } from '@/app/components/Navigator'

export default function Home({ searchParams }: { searchParams: { [k: string]: string } }) {
	const { locale = 'en' } = searchParams || {};

	const resize = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	useEffect(() => {
		resize();
		window.addEventListener('resize', resize);
	}, [])

	return (
		<Suspense>
			<main className="main">
				<Navigator current='home' locale={locale} />

				<div className="banner">
					<div className='name'>Sylvie Zhang</div>
				</div>
				<div className="content">
					<div className='desc'>
						<p>Hi, I&apos;m Sylvie Zhang.</p>
						{locale === 'en'
							? <UnorderedList spacing={2} className='desc-list'>
								<ListItem>Front-end developer since 2016, using React, Node.js, and Typescript.</ListItem>
								<ListItem>Play kickboxing in my spare time.</ListItem>
								<ListItem>Passionate about philosophy, psychology, and religions.</ListItem>
							</UnorderedList>
							: <UnorderedList spacing={2} className='desc-list'>
								<ListItem>自 2016 年起从事前端开发的工作，日常使用 React, Node.js, 和 Typescript</ListItem>
								<ListItem>闲暇时间练练拳击</ListItem>
								<ListItem>对哲学，心理学和宗教感兴趣</ListItem>
							</UnorderedList>
						}

					</div>
					<div className='recent'></div>
				</div>
			</main >
		</Suspense>
	)
}
