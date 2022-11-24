import { ModelCategoriesCard } from './ModelCategoriesCard'
import './TopCategoriesStyle'
import { TopCategoriesStyle } from './TopCategoriesStyle'

export function TopCategories(){
  return(
    <TopCategoriesStyle>
      <ModelCategoriesCard iconProduct={'skincare'} nameProduct={'Skincare'} />
      <ModelCategoriesCard iconProduct={'jewellery'} nameProduct={'Jewellery'} />
      <ModelCategoriesCard iconProduct={'handBags'} nameProduct={'HandBags'} />
      <ModelCategoriesCard iconProduct={'watch'} nameProduct={'Watches'} />
      <ModelCategoriesCard iconProduct={'skincare'} nameProduct={'Eyewear'} />
    </TopCategoriesStyle>
  )
}