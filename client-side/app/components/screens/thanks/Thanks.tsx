import { FC, useEffect } from 'react'

import Layout from '@/layout/Layout'

import { useActions } from '@/hooks/useActions'

const Thanks: FC = () => {
	const { reset } = useActions()

	useEffect(() => {
		reset()
	}, [])

	return (
		<Layout title='Thanks'>
			Thanks for payment!
		</Layout>
	)
}

export default Thanks
