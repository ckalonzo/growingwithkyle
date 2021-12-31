import Container from '../components/container'
//import Image from 'next/image'
import Link from 'next/link'
const myLoader = ({ src, width, quality }) => {
  return `https://fashionledge.com/dashboard/wp-content/uploads/2021/12/${src}?w=${width}&q=${quality || 75}`
}
export default function Intro() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <Link href="/" classNameName="navbar-brand">
      {/* <Image
          loader={myLoader}
          src='/logo.png'
           width={350}
        height={50}
          classNameName="rounded-full"
           alt="logo"
        />  */}
        Growing with kyle
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
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  //   <nav className="navbar  navbar-expand-lg navbar-light bg-light">
  //     <Container>
  //       <Link href="/" classNameName="navbar-brand">
  //     <Image
  //         src='/logo.png'
  //         width={350}
  //       height={50}
  //         classNameName="rounded-full"
  //         alt="logo"
  //       /> 
  //       </Link>
  //       <button classNameName="navbar-toggler" type="button" data-toggle="collapse" 
  //       data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //       <span classNameName="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarNav">
  //   <ul className="navbar-nav">
  //     <li className="nav-item active">
  //       <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
  //     </li>
  //     <li className="nav-item">
  //       <a className="nav-link" href="#">Features</a>
  //     </li>
  //     <li className="nav-item">
  //       <a className="nav-link" href="#">Pricing</a>
  //     </li>
  //     <li className="nav-item">
  //       <a className="nav-link disabled" href="#">Disabled</a>
  //     </li>
  //   </ul>
  // </div>
  //     </Container>
      
  //   </nav>
  )
}
