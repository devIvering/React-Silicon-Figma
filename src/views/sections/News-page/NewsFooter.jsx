import React from 'react'
import ArrowIcon from '../../../images/news-page/arrows.svg'
import EmailForm from '../../components/EmailValidationInput'

const NewsFooter = () => {
  return (
    <footer>
       <section id="subscribe-section">
        <div className="signup-container">
            <div className="footer-head">
                    <h1>Don't Want to Miss Anything?</h1>
                    <img src={ArrowIcon} alt="Arrow" />
                </div>
            <div className="checkbox-holder">
                    <h5 id="sign-up-newsletter-text">
                        Sign up for Newsletters
                    </h5>
                <div className="checkboxes">
                    <div className="checkbox-item" id="checkbox1">
                        <input type="checkbox" />
                        <label forHtml="checkbox1">Daily Newsletter</label>
                      </div>
                      <div className="checkbox-item" id="checkbox2">
                        <input type="checkbox" />
                        <label forHtml="checkbox2">Advertising Updates</label>
                      </div>
                      <div className="checkbox-item" id="checkbox3">
                        <input type="checkbox" />
                        <label forHtml="checkbox3">Week in Review</label>
                      </div>
                      <div className="checkbox-item" id="checkbox4">
                        <input type="checkbox" />
                        <label forHtml="checkbox4">Event Updates</label>
                      </div>
                      <div className="checkbox-item" id="checkbox5">
                        <input type="checkbox" />
                        <label forHtml="checkbox5">Startups Weekly</label>
                      </div>
                      <div className="checkbox-item" id="checkbox6">
                        <input type="checkbox" />
                        <label forHtml="checkbox6">Podcasts</label>
                      </div>
                </div>
                </div>
            <div className="subscribe-box">
              <div>
                    <EmailForm />
              </div>
                    <button className="btn-theme">Subscribe *</button>
            </div>
            <div className="agree-box">
                <p>* Yes, I agree to the <a href="#">terms</a> and <a href="">privacy policy</a>.</p>
            </div>
        </div>
            

    </section>
   </footer>
  )
}

export default NewsFooter