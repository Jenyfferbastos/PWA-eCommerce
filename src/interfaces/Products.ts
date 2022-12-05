export interface ProductCategories {
  length?: string;
  color?: string;
  brand?: string;
  pricingBefore: number;
  pricingAfter: number;
  discount?: number;
  rate?: string;
}

export class Product {
  name!: string;
  description!: string;
  pricingBefore!: number;
  pricingAfter!: number;
  discount!: number;
  categories!: ProductCategories;
  imgLink!: string;
  pathUrl!: string;
  ratings!: string;
  quantity?: number;
}
