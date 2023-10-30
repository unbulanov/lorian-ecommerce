import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'
import Link from 'next/link'
import { FC } from 'react'
import { FiUser } from 'react-icons/fi'

const HeaderProfile: FC = () => {
  const { isLoggedIn } = useAuth()

  const {logout} = useActions()
  return (
    <Column size={3} className='flex items-center'>
      {isLoggedIn ? <>
      <SquareButton Icon={FiUser} />
      <div className='ml-3'>
        <div className='text-gray text-sm'>Alexander Lyashenko</div>
        <button className='btn-link' onClick={() => logout()}>Logout</button>
      </div>
      </> : <Link href='/auth' className='btn-link'>Go to auth</Link> }
    </Column>
  )
}

export default HeaderProfile