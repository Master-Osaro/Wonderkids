import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FAQ_List from './components/FAQ_List'
import readingImage from "./assets/reading.png"
import laptopImage from "./assets/laptop.png"
import handsUpImage from "./assets/hands_up.png"
import standingImage from "./assets/standing.png"

import amenitiesImage from "./assets/home/amenities.jpg"
import amenitiesImage2 from "./assets/home/amenities2.jpg"
import kidsImage from "./assets/home/kids.jpg"

function App() {

  return (
    <>
      <header>
        <nav>
          <div className="logo">Wonder Kids Academy</div>
          <i class="bi bi-list"></i>
          <ul className="nav-list">
            <li><a href="#programs"><i class="bi bi-map"></i>Programs</a></li>
            <li><a href="#admissions"><i class="bi bi-arrows-move"></i>Admissions</a></li>
            <li><a href="#resources"><i class="bi bi-journal-richtext"></i>Parent Resources</a></li>
            <li><a href="#contact"><i class="bi bi-chat-square"></i>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="section section-intro">
          <div className="section-inner">
            <h1>Start your child's educational journey with us</h1>
            <p>Welcome to Wonder Kids Academy where children's curiousity and imagination are encouraged to blossom through a creative and engaging environment</p>
            <div className="action-btns">
              <button className="btn btn-primary"><i class="bi bi-arrow-right-circle"></i>Enroll your child now</button>
              <button className="btn btn-secondary"><i class="bi bi-calendar2-event"></i>Schedule a Tour today</button>
            </div>
          </div>
        </section>

        <section className="section section-features bg-grey">
          <div className="section-inner">
            <h2 className="feature-title">Discover the range of enriching programs and curriculum offered at our kindergarten</h2>
            <div className="feature-list">
              <div className="feature-item puzzle">
                <div className="feature-icon"><i className="bi bi-puzzle"></i></div>
                <div className="feature-content">
                  <h3>Play-Based Learning</h3>
                  <p>Our play-based curriculum fosters children's natural curiousity, creativity and love of learning</p>
                </div>
              </div>

              <div className="feature-item journal">
                <div className="feature-icon"><i className="bi bi-journal-text"></i></div>
                <div className="feature-content">
                  <h3>Language and Literacy</h3>
                  <p>Our language and literacy program introduces children to the joys of reading, writing and communication</p>
                </div>
              </div>

              <div className="feature-item palette">
                <div className="feature-icon"><i className="bi bi-palette"></i></div>
                <div className="feature-content">
                  <h3>Arts and Culture</h3>
                  <p>We celebrate creativity by introducing children to various forms of art, music and culture from around the world</p>
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <section className="section section-staff">
          <div className="section-inner">
            <h2>Meet the staff</h2>
            <div className="staff-list">
              <div className="staff">
                <div className="staff__image"><div></div></div>
                <h4 className="staff__name">Ms. Sarah</h4>
                <h5 className="staff__role">Director</h5>
                <p className="staff__intro">Oversees the daily operations of the programme, ensures compliance with safety regulations and manage staff parent and child relationships</p>
              </div>

              <div className="staff">
                <div className="staff__image"><div></div></div>
                <h4 className="staff__name">Ms. Lily</h4>
                <h5 className="staff__role">Head Teacher</h5>
                <p className="staff__intro">Leads the curriculum development and implementation, supervises the teaching staff, and conducts assessments to track student progress </p>
              </div>

              <div className="staff">
                <div className="staff__image"><div></div></div>
                <h4 className="staff__name">Mr. John</h4>
                <h5 className="staff__role">Physical Education Teacher</h5>
                <p className="staff__intro">Designs and delivers physical education programs that promote gross motor skills, coordination, and fitness. Develops games and activities that encourage teamwork </p>
              </div>

              <div className="staff">
                <div className="staff__image"><div></div></div>
                <h4 className="staff__name">Ms Anna</h4>
                <h5 className="staff__role">Art Teacher</h5>
                <p className="staff__intro">Inspires children to express their creative imagination through a variety of mediums including painting sculpture and mixed media</p>
              </div>
            </div>
          </div>
          
        </section>

        <section className="section section-value">
          <div className="section-inner">
            <div className="content">
              <h2>Your Child's Learning Journey</h2>
              <p>Wonder Kids Academy boasts modern and well-equipped facilities designed to provide your child with a safe and nurturing environment to learn, explore, and grw. With spacious classrooms, a playground, a library, an art room, a music room a science lab and a cafeteria, we offer a wide range of amenities that foster creativity and imagination</p>
              <div className="action-btns">
                <button className="btn btn-secondary"><i class="bi bi-calendar2-event"></i>Schedule a Tour today</button>
              </div>
            </div>
            <div className="image">
              <div className="image-grid">
                <img src={kidsImage} alt="" className='img-1' />
                <img src={amenitiesImage} alt="" className='img-2'/>
                <img src={amenitiesImage2}  alt="" className='img-3'/>
              </div>
            </div>
            
          </div>
          
        </section>

        <section className="section section-enroll">
          <div className="section-inner">
            <h2>Enroll Your Child Today</h2>
              <p>At Wonder Kids Academy, We believe that every child deserves a quality education in a safe and nurturing environment We are committed to providing a stimulating  and supportive learning experience that helps children develop academically, socially and emotionally</p>
              <div className="action-btns">
                <button className="btn btn-white"><i class="bi bi-arrow-right-circle"></i>Enroll your child now</button>
              </div>
        </div>
        </section>

        <section className="section section-process">
          <div className="section-inner">
          <h2>Enrolling your child is a simple and straightforward process: </h2>
          <div className='process'>
              <div className="content">
                <h4>Schedule a tour</h4>
                <p>We invite you to come and see our facilities and meet our teachers. Schedule a tour by contacting our office</p>
                <div className="action-btns">
                  <button className="btn btn-secondary"><i class="bi bi-calendar2-event"></i>Schedule a Tour today</button>
                </div>
              </div>
              <div className="image"><img src={readingImage} alt="clay illustration of child studying with adult on laptop" /></div>
              <div className="number left">1</div> 
            </div>

            <div className='process'>
            <div className="image"><img src={handsUpImage} alt="clay illustration of child with hands up to answer a question" /></div>
              <div className="content">
                <h4>Submit an Application</h4>
                <p>Once you have decided to enroll your child, please complete our online application form. You'll be asked to provide some basic information about your child, as well as any special needs or requirements</p>
                <div className="action-btns">
                  <button className="btn btn-primary"><i class="bi bi-arrow-right-circle"></i>Submit Application</button>
                </div>
              </div>
              <div className="number right">2</div> 
            </div>

            <div className='process'>
              <div className="content">
                <h4>Wait for Acceptance</h4>
                <p>After we receive your application fee, we will review your child's information and contact you with an admissions decision within 24 hours</p>
                
              </div>
              <div className="image"><img src={laptopImage} alt="clay illustration of child learning on laptop" /></div>
              <div className="number left">3</div> 
            </div>

            <div className='process'>
              <div className="image"><img src={standingImage} alt="clay illustration of girl standing" /></div>
              <div className="content">
                <h4>Complete enrollment</h4>
                <p>If your child is accepted, you will be asked to complete the enrolment process by submitting additional paperwork and paying the enrollment fee. We will provide you with all the necessary information and guidance to make the process as smooth as possible</p>
                
              </div>
              <div className="number right bottom">4</div> 
            </div>
          </div>
          
        </section>

        <section className="section section-testimonials">
          <div className="section-inner">
          <h2>What parents are saying about us</h2>

            <div className="testimonial">
              <div className="testimonial__quote"><i class="bi bi-quote"></i></div>
              <div className="testimonial__stars"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
              <div className="testimonial__text">My daughter started attending Wonder Kids Academy this year, and we have been blown away by the quality attention and care he's receiving. The teachers are attentive, patient and skilled at working with young children </div>
              <h4 className="testimonial__name">John Smith</h4>
              <div className="testimonial__image"><div></div></div>
            </div>

            <div className="testimonial">
              <div className="testimonial__quote"><i class="bi bi-quote"></i></div>
              <div className="testimonial__stars"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
              <div className="testimonial__text">My son has been attending Wonder Kids Academy for two years, and we have been impresed  away by the quality attention and care he's receiving. The teachers are attentive, patient and skilled at working with young children </div>
              <h4 className="testimonial__name">Emily Rodriguez</h4>
              <div className="testimonial__image"><div></div></div>
            </div>
            <div className="testimonial">
              <div className="testimonial__quote"><i class="bi bi-quote"></i></div>
              <div className="testimonial__stars"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
              <div className="testimonial__text">We have been sending our children to Wonder Kids Academy for the past three years, and we couldn't be happier with the experience. The curriculum is challenging and appropriate. And the teachers are knowledgeable and passionate about teaching </div>
              <h4 className="testimonial__name">Emily Rodriguez</h4>
              <div className="testimonial__image"><div></div></div>
            </div>

            <div className="testimonial">
              <div className="testimonial__quote"><i class="bi bi-quote"></i></div>
              <div className="testimonial__stars"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
              <div className="testimonial__text">As a parent, I was nervous about sending my child to school for the first time, but Wonder Kids Academy has exceeded all our expectations. The staff are friendly supportive, and always available to answer our questions</div>
              <h4 className="testimonial__name">David Lee</h4>
              <div className="testimonial__image"><div></div></div>
            </div>
          </div>


        </section>


        <section className="section section__parental-resource bg-grey">
          <div className="section-inner">
            <h2>Parental Resource Center</h2>
            <p>At Wonder Kids Academy, we believe in supporting parents as partners in their child's education. That's why we have created a Parental Resource Center, a hub of information and resources to help you support your child's learning and development</p>
            <div className="action-btns">
              <input className='input-email' type="text" name="" id="" placeholder='Email Address'/>
              <button className="btn btn-primary"><i class="bi bi-arrow-right-circle"></i>Join our newsletter</button>
            </div>
          </div>
          
        </section>

    <FAQ_List />

      </main>
      <footer>
        <div className="section-inner">
          <div className="logo">Wonder Kids Academy</div>
          <ul className="nav-list">
            <li><a href="#programs"><i></i>Programs</a></li>
            <li><a href="#admissions"><i></i>Admissions</a></li>
            <li><a href="#resources"><i></i>Resources</a></li>
            <li><a href="#contact"><i></i>Contact</a></li>
          </ul>
        </div>
        </footer>
    </>
  )
}

export default App
