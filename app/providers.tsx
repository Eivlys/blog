'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from './components/Footer'

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider>
        {children}
        <Footer />
    </ChakraProvider>
}