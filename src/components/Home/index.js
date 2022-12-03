import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import Header from '../Header/index'
import HomeBody from '../HomeBody/index'

import {
  HomeMainContainer,
  MainBody,
  SideBarContainer,
  HomeContainer,
  CloseButton,
  GetPremium,
  BannerLogo,
  BannerText,
  GetItButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  NoVideosContainer,
  VideosList,
  FailureText,
  NoVideosImg,
  RetryButton,
  FailureContainer,
  FailureImg,
} from './styledComponents'
import Sidebar from '../Sidebar/index'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    isPopup: true,
    searchValue: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchValue} = this.state

    const url = `https://apis.ccbp.in/videos/all?${searchValue}`
    const jwtToken = Cookies.get('satishToken')
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        title: eachVideo.title,
      }))

      this.setState({
        videosList: updatedVideosList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickCloseBanner = () => {
    this.setState({
      isPopup: false,
    })
  }

  onUpdateSearchValue = e => {
    this.setState({searchValue: e.target.value})
  }

  adPopup = () => (
    <GetPremium>
      <CloseButton type="button" onClick={this.onClickCloseBanner}>
        <IoMdClose size={20} />
      </CloseButton>
      <BannerLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      <GetItButton>GET IT NOW </GetItButton>
    </GetPremium>
  )

  checkApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.loading:
        return this.loaderView()
      default:
        return null
    }
  }

  loaderView = () => (
    <LoaderContainer className="loader-container">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoaderContainer>
  )

  noVideosView = () => (
    <NoVideosContainer>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureText>No search results found</FailureText>
      <FailureText as="p">
        Try different key words or remove search filter
      </FailureText>
      <RetryButton type="button" onClick={this.getApiData}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  successView = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.noVideosView()
    }
    return (
      <VideosList>
        {videosList.map(eachVideo => (
          <HomeBody key={eachVideo.id} singleVideos={eachVideo} />
        ))}
      </VideosList>
    )
  }

  failureView = () => {
    const imageUrl =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureContainer>
        <FailureImg src={imageUrl} alt="no videos" />
        <FailureText>Oops! Something Went Wrong</FailureText>
        <FailureText as="p">
          We are having some trouble to complete your request. Please try again
        </FailureText>
        <RetryButton type="button" onClick={this.getApiData}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  render() {
    const {isPopup, searchValue} = this.state

    return (
      <HomeMainContainer>
        <Header />
        <MainBody>
          <SideBarContainer>
            <Sidebar />
          </SideBarContainer>
          <HomeContainer>
            {isPopup && this.adPopup()}
            <SearchContainer>
              <SearchInput
                type="search"
                placeholder="search"
                value={searchValue}
                onChange={this.onUpdateSearchValue}
              />
              <SearchButton type="button">
                <BsSearch size={15} />
              </SearchButton>
            </SearchContainer>
            {this.checkApiStatus()}
          </HomeContainer>
        </MainBody>
      </HomeMainContainer>
    )
  }
}

export default Home
