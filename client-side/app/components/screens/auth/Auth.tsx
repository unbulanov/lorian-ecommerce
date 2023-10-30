import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import Layout from '@/layout/Layout'
import { IEmailPassword } from '@/store/auth/auth.types'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

const Auth: FC = () => {
  const { isLoggedIn } = useAuth()

  const { push } = useRouter()
   useEffect(() => {
    if (isLoggedIn) push('/')
   }, [isLoggedIn])

  const [inputData, setInputData] = useState<IEmailPassword>({
    email:'',
    password:'',
  })

  const {login, register} = useActions()

  return (
    <Layout title='Auth'>
			<div className='flex flex-col justify-center items-center mt-32'>
				<h1 className='mb-10 font-semibold text-2xl'>Auth</h1>
				<form>
					<input
						placeholder='Enter your email'
						onChange={e =>
							setInputData({ ...inputData, email: e.target.value })
						}
						className='px-4 py-2 bg-dark-gray block mb-3 outline-none'
						value={inputData.email}
					/>
					<input
						placeholder='Enter your password'
						type='password'
						onChange={e =>
							setInputData({ ...inputData, password: e.target.value })
						}
						className='px-4 py-2 bg-dark-gray block mb-5 outline-none'
						value={inputData.password}
					/>
					<div className='flex items-center justify-center'>
						<button onClick={() => login(inputData)} className='btn-link mr-5'>Login</button>
						<button onClick={() => register(inputData)} className='btn-link '>Register</button>
					</div>
				</form>
			</div>
		</Layout>
  )
}

export default Auth