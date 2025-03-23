import { Logo as SimbaLogo } from '@simbashrd/ui'

const Logo = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
      <div className='flex h-52 w-full items-center justify-center rounded-lg bg-white transition-transform duration-300 hover:scale-110 hover:shadow-xl'>
        <SimbaLogo className='text-black' width={92} height={92} />
      </div>
      <div className='flex h-52 w-full items-center justify-center rounded-lg bg-black transition-transform duration-300 hover:scale-110 hover:shadow-xl'>
        <SimbaLogo className='text-white' width={92} height={92} />
      </div>
    </div>
  )
}

export default Logo
