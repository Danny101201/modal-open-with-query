import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className='text-center text-3xl'>Home</h1>
      <div className='flex gap-5 flex-col'>
        <Link href={'/products?showDialog=y'} className='underline text-3xl'>Go To Product With Modal</Link>
        <Link href={'/products'} className='underline text-3xl'>Go To Product Without Modal</Link>
      </div>
    </>
  )
}
