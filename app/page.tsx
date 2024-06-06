'use client'
import React, { useEffect } from "react"
import { Link, Chip } from "@nextui-org/react";
import Experiences from './constant/experiences.json';
import Contact from './constant/contact.json';
import Equipment from './constant/equipment.json';
import Tools from './constant/tools.json';

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
				<div className="flex-col items-center justify-center py-10 after">
					{/* <div className="title">About</div> */}
					<div className="block text-center">
						{/* <div>This is my personal blog for sharing thought.</div> */}
						<div>This website is hosted on <Link color="secondary" href='https://vercel.com/' target='_blank'>Vercel</Link>, use <Link color="secondary" href='https://nextjs.org/' target='_blank'>Next.js</Link> framework</div>
					</div>
					<div className="title">Dev Tools</div>
					<div className="block">
						{Tools.map(t => {
							return <div key={t?.type} className="flex flex-col md:flex-row flex-wrap justify-center items-center my-5 md:my-3 block-item">
								<div className='font-arial font-semibold w-48 text-center md:text-right text-slate-900'>{t?.type}:</div>
								<Link target='_blank' href={t?.link} color='secondary'><div className='font-arial w-60 md:pl-3 text-center md:text-left'>{t?.name}</div></Link>
							</div>
						})}
					</div>
					<div className="title">Boxing Equipment</div>
					<div className="block">
						{Equipment.map(t => {
							return <div key={t?.type} className="flex flex-col md:flex-row flex-wrap justify-center items-center my-5 md:my-3 block-item">
								<div className='font-arial font-semibold w-48 text-center md:text-right text-slate-900'>{t?.type}:</div>
								<div className='font-arial w-60 pl-3 text-center md:text-left'>{t?.name}</div>
							</div>
						})}
					</div>

					<div className="title">Experiences</div>
					<div className="block">
						{Experiences.map((x, idx) => {
							return <div key={idx} className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start mb-20 block-item">
								<div className="left">{x?.year?.toUpperCase()}</div>
								<div className="link">
									{x?.icon ? <img height="20" width="20" src={`https://cdn.simpleicons.org/${x?.icon}/66666699`} /> : <div className="text-center text-xs">❤</div>}
								</div>
								<div className="content">
									<div className="subtitle">{x?.poi}﹫{x.corp}</div>
									<div className="desc">{x?.desc}</div>
									<div className='flex flex-row flex-wrap'>{(x?.tech || [])?.map(t => <div key={t} className='min-w-20 min-h-5 rounded-full px-3 py-1 text-center mr-1 mb-2 bg-white/50 text-slate-600'>{t}</div>)}</div>
								</div>
							</div>
						})}
					</div>

					{/* <div className="title">Projects</div>
        <div className="block"></div> */}
					<div className="flex flex-col md:flex-row items-center justify-center md:justify-between fixed w-full bottom-0 py-3 px-5 bg-white/70">
						<div className="text-sm font-arial text-slate-500 mb-3 md:mb-0">© 2024 Sylvie Zhang all rights reserved</div>
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
