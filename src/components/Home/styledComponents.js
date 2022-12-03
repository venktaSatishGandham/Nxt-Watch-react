import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  background-color: #f9f9f9f;
`

export const MainBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 90vh;
  }
`

export const SideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const HomeContainer = styled.div`
  height: 100%;
  overflow-x: auto;
  flex-grow: 1;
  padding: 15px;
  @media screen (max-width: 768px) {
    min-height: 90%;
  }
`

export const GetPremium = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`

export const BannerLogo = styled.img`
  width: 150px;
`

export const BannerText = styled.p`
  font-family: Roboto;
  font-size: 20px;
`

export const GetItButton = styled.button`
  color: black;
  border: 1px solid black;
  background-color: transparent;
  width: 100px;
  height: 40px;
  font-weight: 700;
  font-family: Roboto;
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 0px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  height: 30px;
  flex-grow: 1;
  border: 1px solid #181818;
  color: #181818;
  outline: none;
  padding-left: 10px;
  background-color: transparent;
`

export const SearchButton = styled.button`
  background-color: transparent;
  padding: 5px 20px;
  height: 30px;
  border: 1px solid #181818;
`

export const VideosList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const LoaderContainer = styled.div`
  text-align: center;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
`

export const FailureImg = styled.img`
  width: 80%;
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const FailureText = styled.h1`
  margin: 0px;
  padding: 5px;
  color: '#181818';
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
`

export const NoVideosContainer = styled(FailureContainer)``
export const NoVideosImg = styled(FailureImg)``
