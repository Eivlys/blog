import React from "react"
import {Navbar, Divider, NavbarContent, NavbarItem, Link, Card, CardHeader, CardBody, NavbarBrand, Button, PopoverTrigger, Popover, PopoverContent, Snippet, Chip} from "@nextui-org/react";

export default function Home() {
  const items = [{
    corp: "Farfetch",
    year: "08/2020 - 03/2024",
    poi: "Senior Frontend Engineer",
    desc:"Provided technical support for luxury brands by developing web apps based on the WeChat platform using React and Typescript. Developed and maintain web components, frameworks, and help to establish standardized deployment processes to increase development efficiency. Conducted technical interviews in both English and Chinese for the front-end positions.",
    tech:['Typescript','React','AntD','NextJS','Elasticsearch']
  },
  {
    corp: "Momo Technology Company Limited",
    year: "11/2018 - 08/2020",
    poi: "Web Developer",
    desc:"Developed and maintained the front-end deployment platform using NodeJS, providing deployment support for all front-end projects of the department. Established a log aggregate platform utilizing Elasticsearch based on the user's lifetime.Optimized web page performance by developing a web app using Vue and WEEX.",
    tech:['Javascript','Vue','ElementUI','NodeJS','Elasticsearch','Electron']
  },
  {
    corp: "CreditEase",
    year: "03/2016 - 10/2018",
    poi: "Web Developer",    
    desc:'Developed and maintained both the front-end and back-end of the Requirements Management System using AngularJS and NodeJS. Cooperated with API teams to develop web pages of the Security Flaw Report Platform that helps maintain the security and stability of each online service of the company.',
    tech:['Javascript','Angular','MaterialUI','NodeJS']
  },
  {
    corp: "Siemens Technology China",
    year: "08/2015 - 02/2016",
    poi: "Data Visualization Design Intern",
    desc:'Utilized D3 and eCharts to design and implement the visualization of energy data',
    tech:['D3js','eCharts']
  },
  {
    corp: "Beijing Yunjiang Technology Ltd.",
    year: "12/2014 - 07/2015",
    poi: "Web Development Intern",
    desc:"Developed the front end for the company's operational system and quiz system using the Django Template and Bootstrap from zero to one",
    tech:['Javascript','Django Template']
  },
  {
    corp: "Baidu Inc. Music Department",
    year: "04/2014 - 11/2014",
    poi: "Product Intern",
    desc:'Formulated and wrote product and interaction strategies for the Baidu Music iOS platform, launched more than 3 versions within the internship. Analyzed and categorized user feedbacks.',
  }
];

const contact = [
  {
    slug:'github',
    link:'https://github.com/Eivlys'
  },
  {
    slug:'linkedin',
    link:'https://www.linkedin.com/in/17ba4726/'
  },
  {
    slug:'gmail',
    link:'mailto:vamcheryl@gmail.com'
  }
];

  return (
    <main className="main">
      <div className="pg1 columns-2 h-screen">
        <div className='flex flex-col items-center h-screen'>
          <div className='text-white name'>Sylvie Zhang</div>
          <div className='contact flex flex-row items-center'>
            {contact.map(c=>{
              return <div key={c?.slug} className="m-3">
              <Link className="mx-15"  href={c?.link} target="_blank">
                <img height="32" width="32" src={`https://cdn.simpleicons.org/${c?.slug}/white`} />
                </Link>
                </div>
            })}
          </div>
        </div>
        <div className='flex flex-row justiify-center items-center h-screen text-white about'>
          About
         
        </div>
      </div>
     
      <div className="flex-col items-center justify-center py-20 after">
        <div className="title">Experiences</div>
        <div className="block">
        {items.map((x, idx)=>{
          return <div key={idx} className="flex flex-row flex-wrap justify-center align-center my-10">
            <div className="date">{x?.year?.toUpperCase()}</div>
            <div className="link"></div>
            <div className="content">
              <div className="position">{x?.poi}﹫{x.corp}</div>
              <div className="desc">{x?.desc}</div>
              {(x?.tech||[])?.map(t=> <Chip key={t} className='tag' color="secondary" variant="bordered" size="md">{t}</Chip>)}
            </div>
          </div>
        })}
        </div>
        <div className="title">Skills</div>
        <div className="block"></div>
        <div className="title">Tools</div>
        <div className="block"></div>
        <div className="title">Books·Podcasts</div>
        <div className="block"></div>
      </div>
    </main>
  )
}
