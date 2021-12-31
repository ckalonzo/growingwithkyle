import Container from '../components/container'
//import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Nav.module.scss"
const myLoader = ({ src, width, quality }) => {
  return `https://fashionledge.com/dashboard/wp-content/uploads/2021/12/${src}?w=${width}&q=${quality || 75}`
}
export default function Nav() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Container>
  <Link href="/" classNameName="navbar-brand">
      {/* <Image
      loader={myLoader}
          src='/logo.png'
           width={275}
        height={36}
          className={styles.logo}
           alt="logo"
        />  */}
        GROWING WITH KYLE
         </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
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
</nav>
  </>)
}
