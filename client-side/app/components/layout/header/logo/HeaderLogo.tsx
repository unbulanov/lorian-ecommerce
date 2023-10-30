import Column from '@/ui/grid/Column'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const HeaderLogo: FC = () => {
  return (
    <Column size={3}>
      <Link href='/' className='flex items-center pl-14'>
				<Image
					src='/images/logo.svg'
					width={100}
					height={100}
					alt='Lorian store'
          className='-mr-3'
				/>
        <span>
          <span className='text-white block font-light tracking-[0.13em]'>LORIAN</span>
          <span className='text-sm tracking-[0.4em] text-dark-gray block font-extralight'>STORE</span>
        </span>
			</Link>
    </Column>
  )
}

export default HeaderLogo