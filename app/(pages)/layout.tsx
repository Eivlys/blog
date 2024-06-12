'use client'

import '@/styles/main.scss'
import { PageHeader } from '@/app/components/PageHeader'
import { Navigator } from '@/app/components/Navigator'
import { usePathname } from 'next/navigation'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const pathname = usePathname()?.replace('/', '') as string;

  return (
    <div className='page'>
      <Navigator current={pathname} />
      <PageHeader title={pathname?.toUpperCase()} />
      {children}
    </div>
  )
}
