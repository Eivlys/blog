'use client'
import React, { useEffect } from "react"
import { Link, Chip } from "@nextui-org/react";

export default function Home() {
	const resize = () => {
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	useEffect(() => {
		resize();
		window.addEventListener('resize', resize);
	}, [])

	const items = [{
		corp: "Farfetch",
		year: "Aug 2020 - Mar 2024",
		poi: "Senior Frontend Engineer",
		desc: "Provided technical support for luxury brands by developing web apps based on the WeChat platform using React and Typescript. Developed and maintained web components, and frameworks, and helped to establish standardized deployment processes to increase development efficiency. Conducted technical interviews in both English and Chinese for the front-end positions.",
		tech: ['Typescript', 'React', 'AntD', 'NextJS', 'Elasticsearch'],
		icon: 'react'
	},
	{
		corp: "Momo Technology Company Limited",
		year: "Nov 2018 - Aug 2020",
		poi: "Web Developer",
		desc: "Developed and maintained the front-end deployment platform using NodeJS, providing deployment support for all front-end projects of the department. Established a log aggregate platform utilizing Elasticsearch based on the user's lifetime.Optimized web page performance by developing a web app using Vue and WEEX.",
		tech: ['Javascript', 'Vue', 'ElementUI', 'NodeJS', 'Elasticsearch', 'Electron'],
		icon: 'vuedotjs',
	},
	{
		corp: "CreditEase",
		year: "Mar 2016 - Oct 2018",
		poi: "Web Developer",
		desc: 'Developed and maintained both the front-end and back-end of the Requirements Management System using AngularJS and NodeJS. Cooperated with API teams to develop web pages of the Security Flaw Report Platform that helps maintain the security and stability of each online service of the company.',
		tech: ['Javascript', 'Angular', 'MaterialUI', 'NodeJS'],
		icon: 'angular',
	},
	{
		corp: "Siemens Technology China (Intern)",
		year: "Aug 2015 - Feb 2016",
		poi: "Data Visualization Design Intern",
		desc: 'Designed and implemented energy data visualization utilizing D3.js and eCharts, helping to improve data readability and data analysis efficiency.',
		tech: ['D3js', 'eCharts'],
		icon: 'd3dotjs'
	},
	{
		corp: "Beijing Yunjiang Technology Ltd. (Intern)",
		year: "Dec 2014 - Jul 2015",
		poi: "Web Development Intern",
		desc: "Developed the front end for the company's operational system and quiz system using the Django Template and Bootstrap from zero to one.",
		tech: ['Javascript', 'Django Template'],
		icon: 'django'
	},
	{
		corp: "Baidu Inc. Music Department (Intern)",
		year: "April 2014 - Nov 2014",
		poi: "Product Intern",
		desc: 'Formulated and wrote product and interaction strategies for the Baidu Music iOS platform, launched more than 3 versions within the internship. Analyzed and categorized user feedbacks.',
		icon: ''
	}
	];

	const contact = [
		{
			slug: 'github',
			link: 'https://github.com/Eivlys'
		},
		{
			slug: 'linkedin',
			link: 'https://www.linkedin.com/in/17ba4726/'
		},
		// {
		//   slug: 'gmail',
		//   link: 'mailto:vamcheryl@gmail.com'
		// }
	];

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
						{items.map((x, idx) => {
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
							{contact.map(c => {
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
