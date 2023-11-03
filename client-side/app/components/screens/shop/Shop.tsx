import Layout from "@/layout/Layout"
import Row from "@/ui/grid/Row"
import { FC } from "react"
import { IProductsPage } from "../../../../pages"
import ProductItem from "./ProductItem"

const Shop: FC<IProductsPage> = ({ products }) => {
  return (
    <Layout
			title='Shop'
			description='Catalog clothing and accessorize'
		>
			<Row
        className='bg-[##dfdff2]' 
        style={{
				  backgroundBlendMode: 'multiply',
				  backgroundImage: 'url(/images/texture3.jpg'
			}}
      >
        {products.map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            index={index} 
          />
        ))}
			</Row>

		</Layout>
  )
}

export default Shop