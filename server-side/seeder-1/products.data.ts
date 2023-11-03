import { Product } from '@prisma/client'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProductPart extends Pick<Product, 'name' | 'images'> {}

export const products: IProductPart[] = [
	{
		name: 'Short beanie',
		images: [
			'/uploads/images/products/cap.png',
		]
	},
	{
		name: 'Comfort jeans with side vent',
		images: ['/uploads/images/products/jeans-2.png']
	},
	{
		name: 'Ripped Mom jeans',
		images: ['/uploads/images/products/jeans.png']
	},
	{
		name: 'Short puffer',
		images: ['/uploads/images/products/sleeveless-jacket.png']
	},
	{
		name: 'Contrast trainers',
		images: ['/uploads/images/products/trainers.png']
	},
	{
		name: 'Fur slippers',
		images: ['/uploads/images/products/slippers.png']
	},
	{
		name: 'Rabbit Slippers',
		images: ['/uploads/images/products/slippers2.png']
	},
	{
		name: 'Blue trainers',
		images: ['/uploads/images/products/trainers2.png']
	},
	{
		name: 'Dark blue trainers',
		images: ['/uploads/images/products/trainers3.png']
	},
	{
		name: 'Sports trainers',
		images: ['/uploads/images/products/trainers4.png']
	},
	{
		name: 'Black sports trainers',
		images: ['/uploads/images/products/trainers5.png']
	},
]
