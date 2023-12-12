import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, clickThumbnailItem} = props
  const {thumbnailUrl} = thumbnailDetails

  const onMatchThumbnail = () => {
    clickThumbnailItem(thumbnailUrl)
  }

  return (
    <li className="thumbnail-list-items">
      <button type="button" className="thumbnail-image-button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
          onClick={onMatchThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
