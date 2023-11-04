import type { PropsWithChildren } from 'react'
import Navbar from '@/components/Navbar'

const Layout = (props: PropsWithChildren) => {
  return (
    <div className={`w-full min-h-screen`}>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout
