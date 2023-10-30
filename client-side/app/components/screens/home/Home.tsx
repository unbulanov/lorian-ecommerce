import { FC } from 'react'

import Layout from '@/layout/Layout'

import { IProductsPage } from '@/../pages'
import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import Image from 'next/image'
import HomeInformation from './home-information/HomeInformation'
import HotSale from './hot-sale/HotSale'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Row className='bg-dark-primary' style={{
				backgroundBlendMode: 'multiply',
				backgroundImage: 'url(/images/texture3.jpg'
			}}>
				<Column size={7} isPadding={false}>
					<Image src='/images/main-4x.png' alt='' width={833} height={727} />
				</Column>
				<Column
					size={5}
					isPadding={false}
					isCenter={false}
					className='flex-col'
				>
					<HotSale />
					<HomeInformation />
				</Column>
			</Row>

		</Layout>
	)
}

export default Home
