import { FC } from 'react'

import spinnerImage from './Spin.svg'

const Loader: FC = () => {
	return (
		<img src={spinnerImage.src} alt='loader' width={200} height={200} />
	)
}

export default Loader
