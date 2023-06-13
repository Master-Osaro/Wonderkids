import React from 'react'

function FAQ_List() {
  return (
    <section className="section section__parental-resource">
      <div className="section-inner">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq">
          <div className="faq__titlebar">
            <div className="question-icon"></div>
            <div className="faq__title">What is the age range for attending the kindergarten</div>
            <div className="arrowdown-icon"></div>
          </div>
          <div className="faq__content"></div>
        </div>
        <div className="faq">
          <div className="faq__titlebar">
            <div className="question-icon"></div>
            <div className="faq__title">What is the hours of Operation for the kindergarten</div>
            <div className="arrowdown-icon"></div>
          </div>
          <div className="faq__content"></div>
        </div>
        <div className="faq">
          <div className="faq__titlebar">
            <div className="question-icon"></div>
            <div className="faq__title">What is the curriculum like at the kindergarten</div>
            <div className="arrowdown-icon"></div>
          </div>
          <div className="faq__content"></div>
        </div>
        <div className="faq">
          <div className="faq__titlebar">
            <div className="question-icon"></div>
            <div className="faq__title">Is the kindergarten accredited</div>
            <div className="arrowdown-icon"></div>
          </div>
          <div className="faq__content"></div>
        </div>
        <div className="faq">
          <div className="faq__titlebar">
            <div className="question-icon"></div>
            <div className="faq__title">Is there a before and after school program available</div>
            <div className="arrowdown-icon"></div>
          </div>
          <div className="faq__content"></div>
        </div>
      </div>
      </div>
  </section>
  )
}

export default FAQ_List