'use client'
import '@/styles/main.scss'
import Link from 'next/link'
import React, { useEffect } from "react"
import { Button } from '@chakra-ui/react'

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
	}, {
		slug: 'blog',
		icon: '📝'
	},
	{
		slug: 'toolbox',
		icon: '🧰'
	}];

	return (
		<main className="main">
			<div className="banner">
				<div className='name'>Hi, I&apos;m Sylvie Zhang</div>
			</div>
			<div className="content">
				{/* <div className=''>
					<div>Front-end Developer since 2016</div>
					<div className="hidden md:block"> ｜ </div>
					<div>Passionate about philosophy and psychology</div>
					<div className="hidden md:block"> ｜ </div>
					<div>Boxing player</div>
				</div> */}
				<div className='nav'>
					{menus?.map((m => <Button key={m?.slug} colorScheme='purple' variant='outline' className='nav-item' >
						<Link href={`/${m?.slug}`}>{m?.icon}{' '}{m?.slug?.toUpperCase()}</Link>
					</Button>))}
				</div>
				<div className='recent'></div>
			</div>
		</main >
	)
}
