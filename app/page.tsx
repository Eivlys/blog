import React from "react"
import {Navbar, Divider, NavbarContent, NavbarItem, Link, Card, CardHeader, CardBody, NavbarBrand, Button, PopoverTrigger, Popover, PopoverContent, Snippet, Chip} from "@nextui-org/react";

export default function Home() {
  const items = [{
    corp: "Farfetch",
    year: "08/2020 - 03/2024",
    poi: "Senior Frontend Engineer",
    desc:'descdescdescdescdesc',
    tech:['Typescript','React','AntD','NextJS']
  },
  {
    corp: "Momo Technology Company Limited",
    year: "11/2018 - 08/2020",
    poi: "Web Developer",
    desc:'',
    tech:['Javascript','Vue','Electron','ElementUI','NodeJS']
  },
  {
    corp: "CreditEase",
    year: "03/2016 - 10/2018",
    poi: "Web Developer",    
    desc:'',
    tech:['Javascript','Angular','MaterialUI','NodeJS']
  },
  {
    corp: "Beihang University",
    year: "09/2013 - 06/2016",
    poi: "M.Eng. Interaction Design",
    desc:'',
  },
  {
    corp: "South-Central University for Nationalities",
    year: "09/2009 - 06/2013",
    poi: "BA. E-Commerce",
    desc:'',
  },
  {
    corp: "South-Central University for Nationalities",
    year: "2009 - 2013",
    poi: "BA. E-Commerce",
    desc:'',
  },
  {
    corp: "South-Central University for Nationalities",
    year: "2009 - 2013",
    poi: "BA. E-Commerce",
    desc:'',
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
]

  return (
    <main className="main">
      <div className="pg1 columns-2 h-screen">
        <div className='flex flex-col items-center h-screen'>
          <div className='text-white name'>SYLVIE ZHANG</div>
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
              <div className="position">{x?.poi} ﹫ {x.corp}</div>
              <div className="desc">{x?.desc}</div>
              {(x?.tech||[])?.map(t=> <Chip key={t} className='tag' color="secondary" variant="bordered" size="md">{t}</Chip>)}
            </div>
          </div>
        })}
        </div>
        <div className="title">Tools</div>
        <div className="block"></div>
        <div className="title">Books·Podcasts</div>
        <div className="block"></div>
      </div>
    </main>
  )
}
