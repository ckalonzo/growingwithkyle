import Container from '../components/container'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Nav.module.scss"
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
export default function Nav() {
  return (<><div className={styles.navContainer}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Container>
    
  <Link href="/" classNameName="navbar-brand">
      <Image
      loader={myLoader}
          src='/logo-1.png'
           width={225}
        height={55}
          className={styles.logo}
           alt="logo"
        /> 
         </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a className="nav-link" href="#">shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contact</a>
        </li>
      </ul>
    </div>
    <div className={styles.topNav}>
            <div>
                <ul>
                    <li className="nav-item"><Link href="/account">login</Link></li>
                    <li className="nav-item"><Link href="/cart">cart (0)</Link></li>
                </ul>
            </div>
      </div>
   
  </Container>
</nav> </div>
  </>)
}
