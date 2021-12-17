import './index.css'

const FaqItem = props => {
  const {details, toggleAnsFun} = props
  const {questionText, answerText, id, hidden} = details
  const toggleAns = () => {
    toggleAnsFun(id)
  }
  const imgSrc = hidden
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

  const imgAlt = hidden ? 'plus' : 'minus'
  return (
    <li className="border border-dark listItem p-3 mb-3">
      <div className="d-flex justify-content-between">
        <h1 className="h5">{questionText}</h1>
        <button onClick={toggleAns} className="bg-transparent border-0">
          <img className="image" src={imgSrc} alt={imgAlt} />
        </button>
      </div>
      {hidden ? (
        ''
      ) : (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
