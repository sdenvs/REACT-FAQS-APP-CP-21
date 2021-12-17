import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    const newList = faqsList.map(eachItem => ({...eachItem, hidden: true}))
    this.state = {faqsList: newList}
  }

  toggleAnsFun = id => {
    this.setState(prev => ({
      faqsList: prev.faqsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, hidden: !eachItem.hidden}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="d-flex flex-column align-items-center">
        <h1 className="heading">FAQs</h1>
        <ul className="ulist p-3">
          {faqsList.map(eachItem => (
            <FaqItem
              toggleAnsFun={this.toggleAnsFun}
              key={eachItem.id}
              details={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
