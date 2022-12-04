import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddLine} from 'react-icons/ri'

import ActiveMenuContext from '../../Context/ActiveMenuContext'
import {MenuList, MenuLink, MenuHeading} from './styledComponents'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trading: 'TRADING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const MenuItemsList = () => (
  <ActiveMenuContext.Consumer>
    {activeMenuValue => {
      const {activeMenu, changeActiveMenu} = activeMenuValue

      const iconColor = '#7e858e'
      const iconActive = '#ff0b37'

      return (
        <MenuList>
          <Link to="/" className="link">
            <MenuLink
              isActive={activeMenu === activeMenuConstants.home}
              onClick={() => changeActiveMenu(activeMenuConstants.home)}
              key="HOME"
            >
              <AiFillHome
                size={25}
                color={
                  activeMenu === activeMenuConstants.home
                    ? iconActive
                    : iconColor
                }
              />

              <MenuHeading>Home</MenuHeading>
            </MenuLink>
          </Link>
          <Link to="/trending" className="link">
            <MenuLink
              isActive={activeMenu === activeMenuConstants.trending}
              onClick={() => changeActiveMenu(activeMenuConstants.trending)}
              key="TRENDING"
            >
              <AiFillFire
                size={25}
                color={
                  activeMenu === activeMenuConstants.trending
                    ? iconActive
                    : iconColor
                }
              />

              <MenuHeading>Trending</MenuHeading>
            </MenuLink>
          </Link>
          <Link to="/gaming" className="link">
            <MenuLink
              isActive={activeMenu === activeMenuConstants.gaming}
              onClick={() => changeActiveMenu(activeMenuConstants.gaming)}
              key="GAMING"
            >
              <IoLogoGameControllerB
                size={25}
                color={
                  activeMenu === activeMenuConstants.gaming
                    ? iconActive
                    : iconColor
                }
              />

              <MenuHeading>Gaming</MenuHeading>
            </MenuLink>
          </Link>

          <Link to="/saved-videos" className="link">
            <MenuLink
              isActive={activeMenu === activeMenuConstants.savedVideos}
              onClick={() => changeActiveMenu(activeMenuConstants.savedVideos)}
              key="SAVED_VIDEOS"
            >
              <RiMenuAddLine
                size={25}
                color={
                  activeMenu === activeMenuConstants.savedVideos
                    ? iconActive
                    : iconColor
                }
              />

              <MenuHeading>Saved videos</MenuHeading>
            </MenuLink>
          </Link>
        </MenuList>
      )
    }}
  </ActiveMenuContext.Consumer>
)

export default MenuItemsList
