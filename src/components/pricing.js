import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing.css'

const Pricing = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing-pricing23 thq-section-padding">
      <div className="pricing-max-width thq-section-max-width">
        <div className="pricing-section-title">
          <span className="pricing-text10 thq-body-small">
            {props.content1}
          </span>
          <div className="pricing-content">
            <h2 className="pricing-text11 thq-heading-2">{props.heading1}</h2>
            <p className="pricing-text12 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="pricing-tabs">
          {isMonthly === true && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing-button10 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {isMonthly === false && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing-button11 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {isMonthly === false && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing-button12 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {isMonthly === true && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing-button13 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly === true && (
          <div className="pricing-container1">
            <div className="pricing-column1 thq-card">
              <div className="pricing-price10">
                <div className="pricing-price11">
                  <p className="pricing-text17 thq-body-large">{props.plan1}</p>
                  <h3 className="pricing-text18 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing-list1">
                  <div className="pricing-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button14 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action}</span>
              </button>
            </div>
            <div className="pricing-column2 thq-card">
              <div className="pricing-price12">
                <div className="pricing-price13">
                  <p className="pricing-text24 thq-body-large">{props.plan2}</p>
                  <h3 className="pricing-text25 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="thq-body-large">{props.plan2Yearly}</p>
                </div>
                <div className="pricing-list2">
                  <div className="pricing-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                  <div className="pricing-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button15 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
            </div>
            <div className="pricing-column3 thq-card">
              <div className="pricing-price14">
                <div className="pricing-price15">
                  <p className="pricing-text32 thq-body-large">{props.plan3}</p>
                  <h3 className="pricing-text33 thq-heading-3">
                    {props.plan3Price}
                  </h3>
                  <p className="thq-body-large">{props.plan3Yearly}</p>
                </div>
                <div className="pricing-list3">
                  <div className="pricing-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3}
                    </span>
                  </div>
                  <div className="pricing-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4}
                    </span>
                  </div>
                  <div className="pricing-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature5}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button16 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action}</span>
              </button>
            </div>
          </div>
        )}
        {isMonthly === false && (
          <div className="pricing-container2">
            <div className="pricing-column4 thq-card">
              <div className="pricing-price16">
                <div className="pricing-price17">
                  <span className="pricing-text41 thq-body-large">
                    {props.plan11}
                  </span>
                  <h3 className="pricing-text42 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly1}</span>
                </div>
                <div className="pricing-list4">
                  <div className="pricing-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button17 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
            </div>
            <div className="pricing-column5 thq-card">
              <div className="pricing-price18">
                <div className="pricing-price19">
                  <span className="pricing-text48 thq-body-large">
                    {props.plan21}
                  </span>
                  <h3 className="pricing-text49 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly1}</span>
                </div>
                <div className="pricing-list5">
                  <div className="pricing-list-item25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing-list-item28">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button18 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
            </div>
            <div className="pricing-column6 thq-card">
              <div className="pricing-price20">
                <div className="pricing-price21">
                  <span className="pricing-text56 thq-body-large">
                    {props.plan31}
                  </span>
                  <h3 className="pricing-text57 thq-heading-3">
                    {props.plan3Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan3Yearly1}</span>
                </div>
                <div className="pricing-list6">
                  <div className="pricing-list-item29">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item30">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item31">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31}
                    </span>
                  </div>
                  <div className="pricing-list-item32">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41}
                    </span>
                  </div>
                  <div className="pricing-list-item33">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button19 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action1}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing.defaultProps = {
  plan3Price: '$29.99/month',
  plan3Action: 'Sign Up Now',
  plan11: 'Basic plan',
  plan1Action: 'Sign Up Now',
  plan31: 'Enterprise plan',
  plan3Feature41: 'Feature text goes here',
  plan1Feature2: 'Feature 2 included',
  plan2Feature11: 'Additional feature for Plan 2',
  plan3Feature51: 'Feature text goes here',
  plan2Feature41: 'Feature text goes here',
  plan2Feature2: 'Feature 2 included',
  plan3Feature21: 'Feature text goes here',
  plan2Feature4: 'Feature 4 included',
  plan2Yearly: 'Save 20% with annual billing',
  plan1Action1: 'Get Started',
  plan2Action: 'Sign Up Now',
  plan3Feature1: 'Feature text goes here',
  plan2Feature3: 'Feature 3 included',
  plan1Price1: '$99.99/year',
  plan2: 'Pro Plan',
  plan2Feature21: 'Another additional feature for Plan 2',
  plan2Action1: 'Get Started',
  plan3Feature2: 'Feature text goes here',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  plan2Feature1: 'Feature 1 included',
  heading1: 'Our Pricing Plans',
  plan3Feature31: 'Feature text goes here',
  plan1: 'Basic Plan',
  plan21: 'Business plan',
  plan1Feature11: 'Additional feature for Plan 1',
  plan1Feature21: 'Another additional feature for Plan 1',
  plan3Feature5: 'Feature text goes here',
  plan2Yearly1: 'Save $40 with annual billing',
  plan2Price: '$19.99/month',
  plan3Yearly1: 'Save $60 with annual billing',
  plan2Feature31: 'Yet another additional feature for Plan 2',
  plan3Feature11: 'Feature text goes here',
  plan1Yearly1: 'Save $20 with annual billing',
  plan2Price1: '$199.99/year',
  plan3Yearly: 'Save 20% with annual billing',
  plan3Feature4: 'Feature text goes here',
  plan3Price1: '$299.99/year',
  plan1Feature31: 'Feature text goes here',
  plan1Feature3: 'Feature 3 included',
  plan1Yearly: 'Save 20% with annual billing',
  plan1Feature1: 'Feature 1 included',
  plan3Feature3: 'Feature text goes here',
  content2:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  plan3Action1: 'Get Started',
  plan1Price: '$9.99/month',
  plan3: 'Premium Plan',
}

Pricing.propTypes = {
  plan3Price: PropTypes.string,
  plan3Action: PropTypes.string,
  plan11: PropTypes.string,
  plan1Action: PropTypes.string,
  plan31: PropTypes.string,
  plan3Feature41: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan3Feature51: PropTypes.string,
  plan2Feature41: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan2Feature4: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan2Action: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan2Feature3: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan2: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan3Feature2: PropTypes.string,
  content1: PropTypes.string,
  plan2Feature1: PropTypes.string,
  heading1: PropTypes.string,
  plan3Feature31: PropTypes.string,
  plan1: PropTypes.string,
  plan21: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan3Feature5: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan2Price: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan3Feature11: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  plan2Price1: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan1Yearly: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan3Feature3: PropTypes.string,
  content2: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan1Price: PropTypes.string,
  plan3: PropTypes.string,
}

export default Pricing
