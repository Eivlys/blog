import React from "react"
import { Navbar, Divider, NavbarContent, NavbarItem, Link, Card, CardHeader, CardBody, NavbarBrand, Button, PopoverTrigger, Popover, PopoverContent, Snippet, Chip } from "@nextui-org/react";

export default function Home() {
  const items = [{
    corp: "Farfetch",
    year: "08/2020 - 03/2024",
    poi: "Senior Frontend Engineer",
    desc: "Provided technical support for luxury brands by developing web apps based on the WeChat platform using React and Typescript. Developed and maintained web components, and frameworks, and helped to establish standardized deployment processes to increase development efficiency. Conducted technical interviews in both English and Chinese for the front-end positions.",
    tech: ['Typescript', 'React', 'AntD', 'NextJS', 'Elasticsearch'],
    icon: 'react'
  },
  {
    corp: "Momo Technology Company Limited",
    year: "11/2018 - 08/2020",
    poi: "Web Developer",
    desc: "Developed and maintained the front-end deployment platform using NodeJS, providing deployment support for all front-end projects of the department. Established a log aggregate platform utilizing Elasticsearch based on the user's lifetime.Optimized web page performance by developing a web app using Vue and WEEX.",
    tech: ['Javascript', 'Vue', 'ElementUI', 'NodeJS', 'Elasticsearch', 'Electron'],
    icon: 'vuedotjs',
  },
  {
    corp: "CreditEase",
    year: "03/2016 - 10/2018",
    poi: "Web Developer",
    desc: 'Developed and maintained both the front-end and back-end of the Requirements Management System using AngularJS and NodeJS. Cooperated with API teams to develop web pages of the Security Flaw Report Platform that helps maintain the security and stability of each online service of the company.',
    tech: ['Javascript', 'Angular', 'MaterialUI', 'NodeJS'],
    icon: 'angular',
  },
  {
    corp: "Siemens Technology China (Intern)",
    year: "08/2015 - 02/2016",
    poi: "Data Visualization Design Intern",
    desc: 'Utilized D3 and eCharts to design and implement the visualization of energy data',
    tech: ['D3js', 'eCharts'],
    icon: 'd3dotjs'
  },
  {
    corp: "Beijing Yunjiang Technology Ltd. (Intern)",
    year: "12/2014 - 07/2015",
    poi: "Web Development Intern",
    desc: "Developed the front end for the company's operational system and quiz system using the Django Template and Bootstrap from zero to one",
    tech: ['Javascript', 'Django Template'],
    icon: 'django'
  },
  {
    corp: "Baidu Inc. Music Department (Intern)",
    year: "04/2014 - 11/2014",
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
      <div className="pg1 h-screen w-full">
        <div className='items-center'>
          <div className='text-white name'>Hi, I'm Sylvie Zhang</div>
        </div>
        <div className='text-white text-center w-full'>
          About
        </div>
      </div>

      <div className="flex-col items-center justify-center py-20 after">
        <div className="title">Experiences</div>
        <div className="block">
          {items.map((x, idx) => {
            return <div key={idx} className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start my-20">
              <div className="date">{x?.year?.toUpperCase()}</div>
              <div className="link">
                <img height="26" width="26" src={`https://cdn.simpleicons.org/${x?.icon}/66666699`} />
              </div>
              <div className="content">
                <div className="position">{x?.poi}﹫{x.corp}</div>
                <div className="desc">{x?.desc}</div>
                {(x?.tech || [])?.map(t => <Chip key={t} className='tag' color="secondary" variant="bordered" size="md">{t}</Chip>)}
              </div>
            </div>
          })}
        </div>
        {/* <div className="title">Skills</div>
        <div className="block"></div> */}
        <div className="title">Tools</div>
        <div className="block"></div>
        {/* <div className="title">Projects</div>
        <div className="block"></div> */}
        <div className="flex flex-row items-center justify-between absolute w-full">
          <div>Desc...</div>
          <div className='flex flex-row items-center justify-center'>
            {contact.map(c => {
              return <div key={c?.slug} className="m-2">
                <Link href={c?.link} target="_blank">
                  <img height="28" width="28" src={`https://cdn.simpleicons.org/${c?.slug}/white`} />
                </Link>
              </div>
            })}
          </div>
        </div>

      </div>
    </main>
  )
}
