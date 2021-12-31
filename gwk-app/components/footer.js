import Container from './container'
import styles from "../styles/Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.black}>
      <Container>
        <div className="row">
          <div className="col-lg-3">
          <h3>contact</h3>
          Join over 1 million followers on instagram © fashionledge.com 2020
          </div>
          <div className="col-lg-3">
            <h3>Info</h3>
          </div>
          <div className="col-lg-3">
          <h3>shop</h3>
          </div>
          <div className="col-lg-3">
          <h3>blog</h3>
          </div>
        </div>
      </Container> 
      <hr />
      <Container>
        <div className='row'>
          <div className='col-lg-6'>
          Copyright @ 2021 - FashionLedge
          </div>
        </div>
      </Container>
    </footer>
  )
}
