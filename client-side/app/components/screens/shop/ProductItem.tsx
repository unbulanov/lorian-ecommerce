import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';
import { IProduct } from '@/types/product.interface';
import Column from '@/ui/grid/Column';
import { formatToCurrency } from '@/utils/format-to-currency';
import Image from 'next/image';
import { FC } from 'react';

interface IProductItem {
  product: IProduct
  index: number
}

const ProductItem: FC<IProductItem> = ({ index, product }) => {

  const { cart } = useCart()
  const { addToCart, removeFromCart } = useActions()

  const currentElement = cart.find(
    cartItem => 
      cartItem.product.id === product.id
  )

  return (
    <Column size={index === 0 ? 3 : index === 4 ? 3 : 2} isBorder={false}>
      <div className='text-white text-center border-solid border rounded-md border-dark-primary'>
        <div
        className='flex items-center justify-center mb-4'
          style={{
            height: 283
          }}
        >
        <Image
          alt={product.name}
          src={product.images[0]}
          width={220}
          height={220}
      
        />

        </div>
        <div className='bg-[#131313] py-3 px-3 rounded-md'>
          <h2 className='font-serif mb-2 text-lg'>{product.name}</h2>
          <div className='mb-3'>{formatToCurrency(product.price)}</div>
          <button
            className='btn-link'
            onClick={() => {
              currentElement
                ? removeFromCart({ id: currentElement.id })
                : addToCart({
                  product,
                  quantity: 1,
                })
          }}
          >
            {currentElement ? 'Remove from cart' : 'Add to cart'}
            </button>
        </div>
      </div>
    </Column>
  )
}

export default ProductItem;
