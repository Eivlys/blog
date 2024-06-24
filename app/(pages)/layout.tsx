'use client'

import '@/styles/main.scss'
import { PageHeader } from '@/app/components/PageHeader'
import { Navigator } from '@/app/components/Navigator'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

export default function PageLayout({
  children,
}: {
  children: React.ReactElement,
}) {
  const pathname = usePathname()?.replace('/', '') as string;
  const searchParams = useSearchParams()
  const locale = searchParams.get('locale') || '';

  return (
    <div className='page'>
      <Navigator current={pathname} locale={locale} />
      <PageHeader title={pathname?.toUpperCase()} />
      {children}
    </div>
  )
}
