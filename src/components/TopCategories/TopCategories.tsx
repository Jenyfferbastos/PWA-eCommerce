import { Link } from 'react-router-dom'
import { ModelCategoriesCard } from './ModelCategoriesCard'
import './TopCategoriesStyle'
import { TopCategoriesStyle } from './TopCategoriesStyle'

export function TopCategories(){
  return(
    <TopCategoriesStyle>
      <ModelCategoriesCard iconProduct={'skincare'} nameProduct={'Skincare'} />
      <ModelCategoriesCard iconProduct={'jewellery'} nameProduct={'Jewellery'} />
      <Link to='/Handbags'><ModelCategoriesCard iconProduct={'handBags'} nameProduct={'HandBags'} /></Link>
      <ModelCategoriesCard iconProduct={'watch'} nameProduct={'Watches'} />
      <ModelCategoriesCard iconProduct={'skincare'} nameProduct={'Eyewear'} />
    </TopCategoriesStyle>
  )
}