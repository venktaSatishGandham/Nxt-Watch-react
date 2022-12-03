import {formatDistanceToNow} from 'date-fns'

import {
  VideoCardContainer,
  Thumbnail,
  ThumbnailText,
  ChannelLogo,
  VideoDetailsContainer,
  VideoDetailsText,
  VideoTextContainer,
  VideoTitle,
  VideoDetailsContainer2,
} from './styledComponents'

const HomeBody = props => {
  const {singleVideos} = props
  const {publishedAt, channel, thumbnailUrl, viewCount, title} = singleVideos
  const {name, profileImageUrl} = channel
  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  console.log(postedAt)
  return (
    <VideoCardContainer>
      <Thumbnail alt="video thumbnail" src={thumbnailUrl} />
      <ThumbnailText>
        <div>
          <ChannelLogo alt="channel logo" src={profileImageUrl} />
        </div>
        <VideoTextContainer>
          <VideoTitle>{title}</VideoTitle>
          <VideoDetailsContainer>
            <VideoDetailsText>{name}</VideoDetailsText>
            <VideoDetailsContainer2>
              <VideoDetailsText>{viewCount} views</VideoDetailsText>
              <VideoDetailsText>{postedAtList} ago</VideoDetailsText>
            </VideoDetailsContainer2>
          </VideoDetailsContainer>
        </VideoTextContainer>
      </ThumbnailText>
    </VideoCardContainer>
  )
}
export default HomeBody
