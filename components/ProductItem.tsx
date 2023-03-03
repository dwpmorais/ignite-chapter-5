import { memo } from 'react'

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

export function ProductItemComponent({ product }: ProductItemProps ) {
  return (
    <div>
      {product.title} = <strong>{product.price}</strong>
    </div>
  )
}

/* Quando usar o memo
* 1. Pure function components (dividir interface)
* 2. Compenentes que renderização demais
* 3. Re-renders com as mesmas props
* 4. Ganho de performace com componentes médios ou grandes
* */
export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})