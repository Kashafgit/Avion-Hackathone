import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
import { Category } from './categories'
import orderSchema from './order'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, Category, orderSchema],
}
