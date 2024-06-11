import { SectionHeader } from '@/app/components/SectionHeader'
import { Navigator } from '@/app/components/Navigator'
import React from "react"

export default function Toolbox() {
    return <div className='section'>
        <Navigator current='toolbox' />
        <SectionHeader title='TOOLBOX' />
    </div>
}