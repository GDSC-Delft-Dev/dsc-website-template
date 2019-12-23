import React from 'react'
import Img from 'gatsby-image'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

export default ({ name, role, descs, img, social }) => (
  <Col xs={12} md={6} className="col-md-4 col-15 mt-20">
    <Card className="card event-card h-100">
      <Card className="hovercard h-100">
        <Card.Header />
        <div className="avatar">
          <Img fixed={img.childImageSharp.fixed} alt={`${role} avatar`} />
        </div>
        <div className="info">
          <div className="title">
            <h5>{name}</h5>
            <p>{role}</p>
          </div>
          {descs.map(desc => (
            <div key={desc} className="desc">
              {desc}
            </div>
          ))}
        </div>
        <div className="bottom">
          <ul className="social-list__inline mt-10">
            {Object.entries({
              linkedin: faLinkedin,
              github: faGithub,
              facebook: faFacebook,
              twitter: faTwitter,
            })
              .filter(([socialName]) => social[socialName] != null)
              .map(([socialName, icon]) => (
                <li key={socialName}>
                  <a
                    href={social[socialName]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </Card>
    </Card>
  </Col>
)
