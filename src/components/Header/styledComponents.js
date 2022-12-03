import styled from 'styled-components'

export const NavMobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavLargeContainer = styled(NavMobileContainer)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const HeaderLogoImg = styled.img`
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const NavMobileIcons = styled.div`
  color: black;
`
export const NavLargeIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0px 5px;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`

export const LogoutPopupContent = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 50%;
  height: 100%;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #0f0f0f;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const Button = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  width: 80px;
  height: 35px;
  margin: 5px;
  color: #0f0f0f;
  border-radius: 5px;
  outline: none;
  border: 1px solid #3b82f6;
`
export const ProfileIcon = styled.img`
  width: 25px;
  margin-left: 15px;
  margin-right: 15px;
`
export const LargeLogoutButton = styled(Button)`
  font-weight: bold;
  margin: 0px;
  margin-left: 15px;
  margin-right: 15px;
  height: 25px;
  color: #3b82f6;
  border-color: #3b82f6;
`

export const MenuPopMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  background-color: '#f9f9f9';
  color: white;
`
export const MenuListMobile = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
