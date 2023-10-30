import { Product } from '@prisma/client'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProductPart extends Pick<Product, 'name' | 'images'> {}

export const products: IProductPart[] = [
	{
		name: 'Midnight Mint Mocha Frappuccino',
		images: [
			'/uploads/images/products/cap.png',
		]
	},
	{
		name: 'Peppermint Mocha Starbucks',
		images: ['/uploads/images/products/jeans-2.png']
	},
	{
		name: 'Matcha Crème Frappuccino® Blended Beverage',
		images: ['/uploads/images/products/jeans.png']
	},
	{
		name: 'Irish Cream Cold Brew Starbucks',
		images: ['/uploads/images/products/sleeveless-jacket.png']
	},
	{
		name: 'Mango Dragonfruit Lemonade Starbucks Refreshers® Beverage',
		images: ['/uploads/images/products/trainers.png']
	}
]
