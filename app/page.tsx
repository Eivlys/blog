'use client'
import '@/styles/main.scss'
import React, { useEffect } from "react"

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
		<main className="main w-full">
			<div className="pg1 h-svh w-full fixed top-0">
				<div className='header'>
					{/* <div>About</div>
					<div>Toolbox</div> */}
				</div>
				<div className='text-white text-center name'>Hi, I&apos;m Sylvie Zhang</div>
				<div className='flex flex-col md:flex-row justify-center text-white text-center w-4/5 text-lg font-arial mx-auto'>
					<div>Front-end Developer since 2016</div>
					<div className="hidden md:block"> ｜ </div>
					<div>Passionate about philosophy and psychology</div>
					<div className="hidden md:block"> ｜ </div>
					<div>Boxing player</div>
				</div>
			</div>
			<div className="wrapper">

			</div>
		</main>
	)
}
