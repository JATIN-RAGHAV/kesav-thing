export interface product {
	id: string,
	storeId: string,
	categoryId: string,
	brandId: string,
	name: string,
	description: string,
	mPrice: string,
	gstRate: string,
	price: string,
	isFeatured: boolean,
	isArchived: boolean,
	currentRatingId: string,
	polesId: string,
	createdAt: string,
	updatedAt: string,
	images: {
		id: string,
		productsId: string,
		url: string,
		createdAt: string,
		updatedAt: string
	}[],
	category: {
		id: string,
		storeId: string,
		billboardId: string,
		name: string,
		createdAt: string,
		updatedAt: string
	},
	currentRating: {
		id: string,
		storeId: string,
		name: string,
		values: string,
		createdAt: string,
		updatedAt: string
	},
	poles: {
		id: string,
		storeId: string,
		name: string,
		value: string,
		createdAt: string,
		updatedAt: string
	},
	brand: {
		id: string,
		storeId: string,
		billboardId: string,
		name: string,
		createAt: string,
		updatedAt: string
	}
}
