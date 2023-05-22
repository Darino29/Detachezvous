
import '@fortawesome/fontawesome-free/css/all.min.css'
import './global.css'
import { Inter } from 'next/font/google'
import { Navbar } from './components/Navbar/Navbar'



const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Detachez-vous',
  description: 'to do',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      
      <body className={inter.className}>
        {children}
        </body>
      
    </html>
  )
}
