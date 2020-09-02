import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      name: author.name,
      twitter: author.twitter,
      github: author.github,
      linkedin: author.linkedin,
      rss: author.rss,
    }

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`${links.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-github-circled" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`${links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-linkedin-squared" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`${links.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-twitter" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`${links.rss}`} rel="noopener noreferrer">
              <i className="icon-rss" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links
