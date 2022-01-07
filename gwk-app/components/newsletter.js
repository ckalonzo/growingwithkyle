import styles from "../styles/newsletter.module.scss"
export default function Newsletter (){
    return(<>
    <section className={styles.newsletter}>
        <div className="row">
            <div className="col-lg-3 offset-lg-1">
                <h2>Newsletter</h2>
            </div>
            <div className="col-lg-4">
                <div class="form-floating mb-3">
                <input type="text" class="form-control is-valid" id="email" label="Email" required="" value="" />
                <label for="email">Email</label>
                </div>
            </div>
            <div className="col"><button className={styles.subscribe}>subscribe</button></div>
        </div>
    </section>
    
    </>)
}