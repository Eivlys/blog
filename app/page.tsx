'use client'
import '@/styles/main.scss'
import React, { useEffect } from "react"
import { ListItem, UnorderedList } from '@chakra-ui/react'
import { Navigator } from '@/app/components/Navigator'

export default function Home() {
	const resize = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	useEffect(() => {
		resize();
		window.addEventListener('resize', resize);
	}, [])

	return (
		<main className="main">
			<Navigator current='sylvie.zhang' />

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
				<div className='recent'></div>
			</div>
		</main >
	)
}
