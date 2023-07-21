import './index.css'

const ActiveEventDetails = props => {
  const {registrationDetails} = props

  const yetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />

      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )

  const registered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const closed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const defaultEvent = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const isRegistered = () => {
    switch (registrationDetails) {
      case 'YET_TO_REGISTER':
        return yetToRegister()
      case 'REGISTERED':
        return registered()
      case 'REGISTRATIONS_CLOSED':
        return closed()
      case 'DEFAULT':
        return defaultEvent()
      default:
        return null
    }
  }
  return <div>{isRegistered()}</div>
}

export default ActiveEventDetails
