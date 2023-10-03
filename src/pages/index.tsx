import Image from 'next/image'
import { Inter } from 'next/font/google'
import Products from '@/components/products'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Products/>
    </main>
  )
}
