import './index.css'

const BannerCardItem = props => {
  const {Banner} = props
  const {headerText, description, className} = Banner
  return (
    <li className={className}>
      <div className="bb">
        <h1 className="h">{headerText}</h1>
        <p className="p">{description}</p>
        <button type="button" className="bt">
          Show More
        </button>
      </div>
    </li>
  )
