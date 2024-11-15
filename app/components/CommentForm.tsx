import React from 'react'

type Props = {}

const CommentForm = (props: Props) => {
  return (
    <div className="respond">

    <h3>Leave a Comment</h3>

    <form name="contactForm" id="contactForm" method="post" action="">
      <fieldset>

        <div className="form-field">
          <input name="cName" type="text" id="cName" className="full-width" placeholder="Your Name" defaultValue="" />
        </div>

        <div className="form-field">
          <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email" defaultValue="" />
        </div>

        <div className="form-field">
          <input name="cWebsite" type="text" id="cWebsite" className="full-width" placeholder="Website" defaultValue="" />
        </div>

        <div className="message form-field">
          <textarea name="cMessage" id="cMessage" className="full-width" placeholder="Your Message" ></textarea>
        </div>

        <button type="submit" className="submit button button-primary">Submit</button>

      </fieldset>
    </form>

  </div>
  )
}

export default CommentForm