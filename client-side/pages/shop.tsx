import Shop from '@/screens/shop/Shop'
import { ProductService } from '@/services/ProductService'
import { GetStaticProps, NextPage } from 'next'
import { IProductsPage } from '.'

const ShopPage: NextPage<IProductsPage> = ({ products }) => {
  return <Shop products={products} />
}

export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
	const products = await ProductService.getProducts()

	return {
		props: {
			products
		}
	}
}

export default ShopPage