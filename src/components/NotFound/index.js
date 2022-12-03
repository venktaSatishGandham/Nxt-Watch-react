import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  MainBody,
  SidebarContainer,
  NotFoundImage,
  NotFoundContainer,
  NotFoundText,
} from './styledComponents'

const NotFound = () => {
  const imgUrl =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

  return (
    <div>
      <Header />
      <MainBody>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <NotFoundContainer>
          <NotFoundImage src={imgUrl} alt="not found" />
          <NotFoundText>Page Not Found</NotFoundText>
          <NotFoundText as="p">
            we are sorry, the page you requested could not be found.
          </NotFoundText>
        </NotFoundContainer>
      </MainBody>
    </div>
  )
}

export default NotFound
