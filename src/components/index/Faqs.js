import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default ({ register }) => (
  <section id="faqs" className="section-spacer section-faq">
    <Container>
      <header className="section-header text-center">
        <h2 className="section-title">Frequently Asked Questions</h2>
      </header>
      <Row className="row">
        <Col sm={6}>
          <Card body>
            <h5 className="card-title">Who can become a member?</h5>
            <p>
              The clubs is open to any student, ranging from novice developers
              who are just starting, to advanced developers who want to further
              their skills.
            </p>
          </Card>
        </Col>
        <Col sm={6}>
          <Card body>
            <h5 className="card-title">
              How frequently do events and workshops occur?
            </h5>
            <p>
              We hold our workshops and meetups on regular basis; around once or twice per month.
              For more information on upcoming events follow us in social networks.
            </p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Card body>
            <h5 className="card-title">
              What should I carry when attending a workshop?
            </h5>
            <p>
              The must-have is a healthy dose of curiosity and
              enthusiasm. If any other appliances are needed, such as notebooks or laptops,
              it will be mentioned in the event's description.
            </p>
          </Card>
        </Col>
        <Col sm={6}>
          <Card body>
            <h5 className="card-title">
              Who should I reach out to if I have any questions?
            </h5>
            <p>
              If you have any questions or comments, please don't hesitate to
              contact us by sending a letter to email or message us on social networks.
            </p>
          </Card>
        </Col>
      </Row>
      {/* <div className="mt-40 text-center">
        <a href="" className="hero-button">
          Send us an email
        </a>
      </div> */}
    </Container>
  </section>
)
