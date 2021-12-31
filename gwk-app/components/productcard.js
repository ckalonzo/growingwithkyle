export default function ProductCard() {
  return (
    <>
    <div class="card" style={{"width": "18rem"}}>
    {/* <Carousel /> */}
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <hr />
    <div className="d-flex">
      <div class="p-2 d-inline">Price: $9, 99</div>
<button  class="btn btn-primary shadow lift me-1">Add to Cart</button>
    </div>
  </div>
</div>
    </>
  )
}
