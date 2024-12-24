export default async function(
	{ params }: {
		params: Promise<{ productId: string }>
	}
) {
	const { productId } = await params
	return (
		<div>
			productId:{productId}
		</div>
	)
}
