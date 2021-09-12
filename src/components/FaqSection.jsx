import React from 'react'

const FaqSection = () => {
  return (
    <div>
      <div className="faq">
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        {/* ========= Question 1 ========= */}
        <div className="question">
          <h4>How Do I Start?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, at.
            </p>
          </div>
        </div>

        {/* ========= Question 2 ========= */}
        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, at.
            </p>
          </div>
        </div>

        {/* ========= Question 3 ========= */}
        <div className="question">
          <h4>Different Payment Methods</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, at.
            </p>
          </div>
        </div>

        {/* ========= Question 4 ========= */}
        <div className="question">
          <h4>What products do you offer.</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, at.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqSection
