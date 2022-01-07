import Container from '../components/container'
import styles from "../styles/LeadIntro.module.scss"
import Image from 'next/image'
export default function LeadIntro() {
    return(<section className={styles.intro}>
     <div className='container'>
     <div className='row'>
         <div className='col-12 col-lg-4 offset-1'>
             <h1>Growing with Kyle</h1>
             <p>Our store has a curated list of products that are recommended for kids like kyle</p>
             <button className={styles.shopNow + " btn btn-secondary"}>Shop now</button>
         </div>
         <div className={styles.leadImage + 'col-12 offset-lg-3 col-lg-4'} style={{
         minHeight:"450px",
         backgroundRepeat:"no-repeat",
         backgroundPosition:"50% 40%",
         backgroundSize:"contain",
         background:`url(/images/kyle1.png)`}}>
             
         </div>
     </div>
     </div>
  </section>)
}