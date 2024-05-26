'use client'
import React, { useEffect } from "react"
import { Link, Chip } from "@nextui-org/react";
import Experiences from './content/experiences.json';
import Contact from './content/contact.json';

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
				<div className="flex-col items-center justify-center py-10 after">
					<div className="title">Experiences</div>
					<div className="block">
						{Experiences.map((x, idx) => {
							return <div key={idx} className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start my-20 block-item">
								<div className="date">{x?.year?.toUpperCase()}</div>
								<div className="link">
									{x?.icon ? <img height="20" width="20" src={`https://cdn.simpleicons.org/${x?.icon}/66666699`} /> : <div className="text-center text-xs">❤</div>}
								</div>
								<div className="content">
									<div className="subtitle">{x?.poi}﹫{x.corp}</div>
									<div className="desc">{x?.desc}</div>
									{(x?.tech || [])?.map(t => <Chip key={t} className='tag' color="secondary" variant="bordered" size="md">{t}</Chip>)}
								</div>
							</div>
						})}
					</div>
					{/* <div className="title">Tools</div>
          <div className="block">
            <div className="w-1/2 mx-auto">
              <div className="subtitle">Dev Tools</div>
              <div className="desc">VS Code · Iterm2 · Chrome Dev Tools</div>
            </div>
            <div className="w-1/2 mx-auto">
              <div className="subtitle">Productive</div>
              <div className="desc">Notion · Figma · Typora</div>
            </div>
          </div> */}

					{/* <div className="title">Projects</div>
        <div className="block"></div> */}
					<div className="flex flex-col md:flex-row items-center justify-center md:justify-between fixed w-full bottom-0 py-3 px-5 bg-white/70">
						<div className="text-sm font-arial text-slate-500	mb-3 md:mb-0">© 2024 Sylvie Zhang all rights reserved</div>
						<div className='flex flex-row items-center justify-center'>
							{Contact.map(c => {
								return <div key={c?.slug} className="mx-1">
									<Link href={c?.link} target="_blank" className='flex items-center justify-center'>
										<img height="24" width="24" src={`https://cdn.simpleicons.org/${c?.slug}/black`} />
									</Link>
								</div>
							})}
						</div>
					</div>

				</div>
			</div>
		</main>
	)
}
