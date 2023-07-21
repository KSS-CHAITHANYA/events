import './index.css'

const EventItem = props => {
  const {itemDetails, isRegistered} = props
  const {registrationStatus, imageUrl, name, location} = itemDetails
  const selectedItemDetails = () => {
    isRegistered(registrationStatus)
  }
  return (
    <li className="list-container">
      <button type="button" className="button">
        <img
          src={imageUrl}
          alt="event"
          className="item-image"
          onClick={selectedItemDetails}
        />
      </button>

      <p className="name-heading">{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
