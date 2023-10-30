import { useCart } from '@/hooks/useCart'
import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { formatToCurrency } from '@/utils/format-to-currency'

import { useOutside } from '@/hooks/useOutside'
import { PaymentService } from '@/services/PaymentService'
import SquareButton from '@/ui/square-button/SquareButton'
import { FiShoppingCart } from 'react-icons/fi'
import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const { cart, total } = useCart()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create payment'],
		() => PaymentService.createPayment(total),
		{
			onSuccess(data) {
				push(data.confirmation.confirmation_url)
			}
		}
	)

	return (
		<div className='relative'
			ref={ref}>

			<SquareButton
				Icon={FiShoppingCart}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={cart.length} />

			<div className={cn('absolute top-[4.2rem] w-[315px] bg-[#131313] px-5 py-3 -left-[204px] text-sm menu z-10',
					isShow ? 'open-menu' : 'close-menu'
			)}
			>
				
				<div className='font-normal text-lg mb-5 mt-5'>My cart</div>

				<div className={styles.cart}>
					{cart.length ? (
						cart.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light text-lg'>Cart is empty!</div>
					)}
				</div>

			<div className={styles.footer}>
				<div>Total:</div>
				<div>{formatToCurrency(total)}</div>
			</div>

			<div className='text-center mb-2 mt-5'>
			<button onClick={()=>mutate()} className='btn-link mt-5 mb-2'>Payment</button>

			</div>
			</div>
		</div>
	)
}

export default Cart
