'use client'
import '@/styles/main.scss'
import Link from 'next/link'
import React, { useEffect } from "react"
import { Button, List, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react'

export default function Home() {
	const resize = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	useEffect(() => {
		resize();
		window.addEventListener('resize', resize);
	}, [])

	const menus = [{
		slug: 'about',
		icon: '👩‍💻'
	},
	// 	{
	// 	slug: 'blog',
	// 	icon: '📝'
	// },
	{
		slug: 'toolbox',
		icon: '🧰'
	}];

	return (
		<main className="main">
			<div className="banner">
				<div className='name'>Sylvie Zhang</div>
			</div>
			<div className="content">
				<div className='desc'>
					<p>Hi, I&apos;m Sylvie Zhang.</p>
					<UnorderedList spacing={2} className='desc-list'>
						<ListItem>Front-end developer since 2016, using React, Node.js, and Typescript.</ListItem>
						<ListItem>Play kickboxing in my spare time.</ListItem>
						<ListItem>Passionate about philosophy, psychology, and religions.</ListItem>
					</UnorderedList>
				</div>
				<div className='nav'>
					{menus?.map((m =>
						<Link key={m?.slug} href={`/${m?.slug}`}>
							<Button colorScheme='purple' variant='outline' className='nav-item'>{m?.icon}{' '}{m?.slug?.toUpperCase()}</Button>
						</Link>
					))}
				</div>
				<div className='recent'></div>
			</div>
		</main >
	)
}
