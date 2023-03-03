import { ProductItem } from './ProductItem'
import { useMemo } from 'react'

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResults({ results }: SearchResultsProps) {

  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [results])

  return (
    <div>
      <h2>Total: {totalPrice}</h2>
      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} />
        )
      })}
    </div>
  )
}