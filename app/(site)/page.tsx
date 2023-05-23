import Image from 'next/image'

export default function Home() {
  return (
    <div
      className="
      flex
      min-h-full
      flex-col
      justify-center
      py-12
      sm:px-6
      lg:px-8
      bg-zinc-900
      text-slate-50
    ">
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Image 
          alt = 'logo'
          height = '48'
          width = '48'
          className = 'mx-auto w-auto'
          src = '/img/oslogo.png'
        />
      </div>
    </div>
  )
}
