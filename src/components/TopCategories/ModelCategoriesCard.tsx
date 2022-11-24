import { Icons } from '../Icons/Icons';
import { ModelCategoriesCardStyle } from './ModelCategoriesCardStyle'

export interface ModelCategoriesCardProps{
  iconProduct: string;
  nameProduct: string;
}

export function ModelCategoriesCard({iconProduct, nameProduct}: ModelCategoriesCardProps){
  return(
    <ModelCategoriesCardStyle>
      <Icons icon={iconProduct} />
      <h2>{nameProduct}</h2>
    </ModelCategoriesCardStyle>
  )
}