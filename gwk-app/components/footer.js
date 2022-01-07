import Container from './container'
import styles from "../styles/Footer.module.scss"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className="row">
          <div className="col-lg-3">
          <h3>contact</h3>
          
          </div>
          <div className="col-lg-3">
          <h3>store info</h3>
          <ul>
            <li><Link href="/refunds"><a>Our story</a></Link></li>
            <li><Link href="/termsandconditions"><a>contact us</a></Link></li>
            <li><Link href="/privacy"><a>Privacy policy</a></Link></li>
          </ul>
          </div>
          <div className="col-lg-3">
          <h3>legal</h3>
          <ul>
            <li><Link href="/refunds"><a>refunds</a></Link></li>
            <li><Link href="/termsandconditions"><a>Terms and conditions</a></Link></li>
            <li><Link href="/privacy"><a>Privacy policy</a></Link></li>
          </ul>
          </div>
          <div className="col-lg-3">
          <h3>follow us</h3>
          
          </div>
        </div>
      </Container> 
      <hr />
      <Container>
        <div className='row'>
          <div className='col-lg-6'>
          Copyright @ 2022 - Growingwithkyle.com
          </div>
        </div>
      </Container>
    </footer>
  )
}
