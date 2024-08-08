import { Provider } from '@/components/Provider'
import SideBar from '@/components/SideBar'

import './globals.css'

export const metadata = {
  title: 'Next Train App',
  description: 'Generated by Apple',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="flex min-h-screen">
            <SideBar />
            {children}
          </div>
        </Provider>
      </body>
      
    </html>
  )
}
