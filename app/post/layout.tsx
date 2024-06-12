'use client'

import '@/styles/main.scss'
import { Navigator } from '@/app/components/Navigator'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <div className='page'>
      <Navigator current={'blog'} />
      {children}
    </div>
  )
}
