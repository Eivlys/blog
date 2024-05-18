import React from "react"
import {Navbar, Divider, NavbarContent, NavbarItem, Link, Card, CardHeader, CardBody, NavbarBrand, Button, PopoverTrigger, Popover, PopoverContent, Snippet} from "@nextui-org/react";

export default function Home() {
  const items = [{
    com: "Farfetch",
    year: "2020 - Present",
    content: "Senior Frontend Engineer",
  },
  {
    com: "Momo Technology Company Limited",
    year: "2018 - 2020",
    content: "Web Developer",
  },
  {
    com: "CreditEase",
    year: "2016 - 2018",
    content: "Web Developer",
  },
  {
    com: "Beihang University",
    year: "2013 - 2016",
    content: "M.Eng. Interaction Design",
  },
  {
    com: "South-Central University for Nationalities",
    year: "2009 - 2013",
    content: "BA. E-Commerce",
  },
  {
    com: "South-Central University for Nationalities",
    year: "2009 - 2013",
    content: "BA. E-Commerce",
  },
  {
    com: "South-Central University for Nationalities",
    year: "2009 - 2013",
    content: "BA. E-Commerce",
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
              return <Button isIconOnly>
              <Link className="mx-15" key={c?.slug} href={c?.link}>
                <img height="32" width="32" src={`https://cdn.simpleicons.org/${c?.slug}/white`} />
                </Link>
                </Button>
            })}
          </div>
        </div>
        <div className='h-screen about'>
          About
         
        </div>
        {/* <Navbar isBordered>
      <NavbarBrand>
        <h3>Sylvie.Zhang</h3>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
        <Popover placement="bottom" offset={20} showArrow>
      <PopoverTrigger>
        <Button style={{color: '#fff',background:'#000'}}>Contact</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">     
          <Link href="mailto:vamcheryl@gmail.com">Email</Link></div>
          <div className="text-tiny"><Link href='https://www.linkedin.com/in/17ba4726/'>LinkedIn</Link></div>
        </div>
      </PopoverContent>
    </Popover>
    </NavbarItem>
      </NavbarContent>
      </Navbar> */}

      </div>

     
      <div className="flex-col items-center justify-between p-24 after">
        {items.map((x, idx)=>{
          return <Card className="max-w-[400px]" style={{margin:'20px'}} key={idx}>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">{x.com}</p>
              <p className="text-small text-default-500">{x.year}</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>{x.content}</p>
          </CardBody>
          <Divider/>
        </Card>
        })}
      
      </div>
    </main>
  )
}
