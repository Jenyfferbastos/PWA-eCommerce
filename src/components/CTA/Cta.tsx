import { Icons } from '../Icons/Icons'
import './CtaStyle'
import { ContainerStyle, CtaStyle, ImagePhone } from './CtaStyle'
import Phone from '../../assets/img/Group 124.png'

export function Cta(){
  return(
    <CtaStyle>
      <ImagePhone ><img src={Phone} /></ImagePhone>
      <ContainerStyle>
      <p>Discover your favrouite <br></br>products faster with CORA’L<br></br> web app.</p>
      <button>
      Add Shortcut
      <Icons icon={'ArrowWhite'} />
      </button>
      </ContainerStyle>
    </CtaStyle>
  )
}