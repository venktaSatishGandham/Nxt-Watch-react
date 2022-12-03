import {Component} from 'react'

import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'

import {Popup} from 'reactjs-popup'
import {Cookies} from 'js-cookie'

import MenuItemsList from '../MenuItemList/index'

import {
  NavMobileContainer,
  HeaderLogoImg,
  NavMobileIcons,
  IconButton,
  CloseButton,
  MenuPopMobile,
  MenuListMobile,
  LogoutPopupContent,
  Button,
  NavLargeContainer,
  NavLargeIcons,
  ProfileIcon,
  LargeLogoutButton,
} from './styledComponents'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const websiteLogo =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <>
        <NavMobileContainer>
          <HeaderLogoImg alt="website logo" src={websiteLogo} />
          <NavMobileIcons>
            <IconButton type="button">
              <FaMoon size={22} />
            </IconButton>
            <Popup
              modal
              className="popup-content"
              trigger={
                <IconButton type="button">
                  <GiHamburgerMenu size={22} />
                </IconButton>
              }
            >
              {close => (
                <MenuPopMobile>
                  <CloseButton>
                    <IconButton type="button" onClick={() => close()}>
                      <IoMdClose size={20} />
                    </IconButton>
                  </CloseButton>
                  <MenuListMobile>
                    <MenuItemsList />
                  </MenuListMobile>
                </MenuPopMobile>
              )}
            </Popup>
            <Popup
              modal
              className="logout-popup"
              trigger={
                <IconButton type="button">
                  <FiLogOut size={22} />
                </IconButton>
              }
            >
              {close => (
                <LogoutPopupContent>
                  <p>Are you sure, you want to logout</p>
                  <div>
                    <Button outline type="button" onClick={() => close()}>
                      Cancel
                    </Button>
                    <Button
                      bgColor="blue"
                      color="white"
                      type="button"
                      onClick={this.onClickLogout}
                    >
                      Confirm
                    </Button>
                  </div>
                </LogoutPopupContent>
              )}
            </Popup>
          </NavMobileIcons>
        </NavMobileContainer>
        <NavLargeContainer>
          <HeaderLogoImg alt="website logo" src={websiteLogo} />
          <NavLargeIcons>
            <IconButton type="button">
              <FaMoon size={22} />
            </IconButton>

            <ProfileIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              className="logout-popup"
              trigger={<LargeLogoutButton outline>Logout</LargeLogoutButton>}
            >
              {close => (
                <LogoutPopupContent>
                  <p>Are you sure, you want to logout</p>
                  <div>
                    <Button outline type="button" onClick={() => close()}>
                      Cancel
                    </Button>
                    <Button
                      bgColor="blue"
                      color="white"
                      type="button"
                      onClick={this.onClickLogout}
                    >
                      Confirm
                    </Button>
                  </div>
                </LogoutPopupContent>
              )}
            </Popup>
          </NavLargeIcons>
        </NavLargeContainer>
      </>
    )
  }
}

export default Header
