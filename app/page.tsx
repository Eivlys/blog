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
  }];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar isBordered>
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
          <div className="text-tiny"><Link href='https://www.linkedin.com/in/sylvie-zhang-17ba4726/'>LinkedIn</Link></div>
        </div>
      </PopoverContent>
    </Popover>
    </NavbarItem>
      </NavbarContent>
      </Navbar>
      <div>
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
