import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Navbar from './navbar/Navbar'
import Footer from './component/Footer'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'CuteCuddles',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">    
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"/>
    <link rel="shortcut icon" href="./favicon-32x32.png" type="image/x-icon" />
      </head> 
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Footer/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </body>
    </html>
  )
}
