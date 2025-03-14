import type { PropsWithChildren } from 'react'

import { LayoutProvider } from '@/contexts/LayoutContext'
import Header from '@/layouts/components/Header'

export default function GeneralLayout({
  children,
  ...rest
}: PropsWithChildren) {
  return (
    <LayoutProvider>
      <main className="min-h-screen bg-gray-50" {...rest}>
        <Header />

        <div>{children}</div>
      </main>
    </LayoutProvider>
  )
}
