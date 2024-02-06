export const filteredProducts=(products)=>{
  let relevantProds = [3,4,6,7]
  const filter=(products.filter(prod=>relevantProds.includes(prod.id)))
  return filter
}