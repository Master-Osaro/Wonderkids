import React from 'react'

function FAQ_List() {
  return (
    <section className="section section__faq">
      <div className="section-inner">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq">
          <div className="faq__titlebar">
            <div className='titlebar-group'>
              <div className="question-icon"><i class="bi bi-question-circle-fill"></i></div>
              <div className="faq__title">What is the age range for attending the kindergarten</div>
            </div>
            <div className="arrowdown-icon"><i class="bi bi-caret-down-fill"></i></div>
          </div>
          <div className="faq__content"></div>
        </div>
        <div className="faq">
          <div className="faq__titlebar">
            <div className='titlebar-group'>
              <div className="question-icon"><i class="bi bi-question-circle-fill"></i></div>
              <div className="faq__title">What is the hours of Operation for the kindergarten</div>
            </div>
            <div className="arrowdown-icon"><i class="bi bi-caret-down-fill"></i></div>
          </div>
          <div className="faq__content"></div>
        </div>
        <div className="faq">
          <div className="faq__titlebar">
            <div className='titlebar-group'>
              <div className="question-icon"><i class="bi bi-question-circle-fill"></i></div>
              <div className="faq__title">What is the curriculum like at the kindergarten</div>
            </div>
            <div className="arrowdown-icon"><i class="bi bi-caret-down-fill"></i></div>
          </div>
          <div className="faq__content"></div>
        </div>
        <div className="faq">
          <div className="faq__titlebar">
            <div className='titlebar-group'>
              <div className="question-icon"><i class="bi bi-question-circle-fill"></i></div>
              <div className="faq__title">Is the kindergarten accredited</div>
            </div>
            
            <div className="arrowdown-icon"><i class="bi bi-caret-down-fill"></i></div>
          </div>
          <div className="faq__content"></div>
        </div>
        <div className="faq">
          <div className="faq__titlebar">
            <div className='titlebar-group'>
              <div className="question-icon"><i class="bi bi-question-circle-fill"></i></div>
              <div className="faq__title">Is there a before and after school program available</div>
            </div>
            
            <div className="arrowdown-icon"><i class="bi bi-caret-down-fill"></i></div>
          </div>
          <div className="faq__content"></div>
        </div>
      </div>
      </div>
  </section>
  )
}

export default FAQ_List