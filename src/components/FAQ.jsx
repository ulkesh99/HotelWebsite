



const FAQ = () => {
  return (
    <>
      <section id="FAQ">
        <div className="container-fluid faqContainer ">
      <h1 className="my-3 d-flex align-items-center justify-content-center" style={{textDecoration: 'underline'}}>FAQ</h1>
      <div className="accordion  aco container" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Which is the nearest station?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
            >
              We are near <strong>XYZ</strong> station.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header accordionQues" id="headingTwo">
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Does XYZ have any parking space?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
            >
              Yes,<strong>XYZ</strong> has a free parking facility.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Does your package includes Veg and non veg options?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse style={arrowUp}"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
            >
              Yes, we do provide both options in th buffet
            </div>
          </div>
        </div>
      </div>
        </div>
        </section>
      {/* <div className="container my-3"></div> */}
      </>
    )
}

export default FAQ;