import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showContact, setContact] = useState(false);
  const [showCancellation, setCancellation] = useState(false);
  const [showPrivacy, setPrivacy] = useState(false);

  const subt = {
    fontFamily: "Outfit",
  };
  const toggleTerms = () => {
    setShowTerms(!showTerms);
    setContact(false);
    setCancellation(false);
    setPrivacy(false);
  };
  const toggleContact = () => {
    setShowTerms(false);
    setContact(!showContact);
    setCancellation(false);
    setPrivacy(false);
  };
  const toggleCancellation = () => {
    setShowTerms(false);
    setContact(false);
    setCancellation(!showCancellation);
    setPrivacy(false);
  };
  const togglePrivacy = () => {
    setShowTerms(false);
    setContact(false);
    setCancellation(false);
    setPrivacy(!showPrivacy);
  };
  return (
    <>
      <footer className="footer">
        <div className="row p-0 m-0">
          <div className="copyright col-md-12 p-0 text-center">
            Copyright © 2023 All rights reserved by SIMCA &amp; MCA Department
            <div className="p-0 text-center gap-3 tt" style={{ color: "#fff" }}>
              <a onClick={() => toggleTerms()} style={subt}>
                Terms & Conditions{" "}
              </a>
              <a onClick={() => toggleContact()} style={subt}>
                {" "}
                | Contact us |
              </a>
              <a onClick={() => toggleCancellation()} style={subt}>
                {" "}
                Cancellation & Refund Policy{" "}
              </a>
              <a onClick={() => togglePrivacy()} style={subt}>
                {" "}
                | Privacy Policy
              </a>
            </div>
          </div>

          {showTerms && (
            <div
              className="terms-content  col-md-12 p-3"
              style={{ color: "#fff" }}>
              <i
                className="fa-solid fa-xmark"
                style={{ color: "#fff" }}
                onClick={() => setShowTerms(!showTerms)}></i>
              <h2>Terms & Conditions</h2>
              <p>Last updated on Oct 12th, 2023</p>
              <p>
                The Website Owner, including subsidiaries and affiliates
                (“Website” or “Website Owner” or “we” or “us” or “our”) provides
                the information contained on the website or any of the pages
                comprising the website (“website”) to visitors (“visitors”)
                (cumulatively referred to as “you” or “your” hereinafter)
                subject to the terms and conditions set out in these website
                terms and conditions, the privacy policy and any other relevant
                terms and conditions, policies, and notices which may be
                applicable to a specific section or module of the website.
              </p>
              <p>
                Welcome to our website. If you continue to browse and use this
                website you are agreeing to comply with and be bound by the
                following terms and conditions of use, which together with our
                privacy policy govern Logica By SIMCA''s relationship with you
                in relation to this website.
              </p>
              <p>
                The term 'Logica By SIMCA' or 'us' or 'we' refers to the owner
                of the website whose registered/operational office is Sinhgad
                Institute of Management And Computer Application Narhe Pune
                MAHARASHTRA 411041. The term 'you' refers to the user or viewer
                of our website.
              </p>
              <p>
                <b>
                  The use of this website is subject to the following terms of
                  use:
                </b>
                <br />
                <ul>
                  <li>
                    The content of the pages of this website is for your general
                    information and use only. It is subject to change without
                    notice.
                    <br />
                  </li>
                  <li>
                    Neither we nor any third parties provide any warranty or
                    guarantee as to the accuracy, timeliness, performance,
                    completeness or suitability of the information and materials
                    found or offered on this website for any particular purpose.
                    You acknowledge that such information and materials may
                    contain inaccuracies or errors and we expressly exclude
                    liability for any such inaccuracies or errors to the fullest
                    extent permitted by law.
                  </li>
                  <li>
                    Your use of any information or materials on this website is
                    entirely at your own risk, for which we shall not be liable.
                    It shall be your own responsibility to ensure that any
                    products, services or information available through this
                    website meet your specific requirements.
                  </li>
                  <li>
                    This website contains material which is owned by or licensed
                    to us. This material includes, but is not limited to, the
                    design, layout, look, appearance and graphics. Reproduction
                    is prohibited other than in accordance with the copyright
                    notice, which forms part of these terms and conditions.
                  </li>
                  <li>
                    All trademarks reproduced in this website which are not the
                    property of, or licensed to, the operator are acknowledged
                    on the website.
                  </li>
                  <li>
                    Unauthorized use of this website may give rise to a claim
                    for damages and/or be a criminal offense.
                  </li>
                  <li>
                    From time to time this website may also include links to
                    other websites. These links are provided for your
                    convenience to provide further information.
                  </li>
                  <li>
                    You may not create a link to this website from another
                    website or document without Logica By SIMCA’s prior written
                    consent.
                  </li>
                  <li>
                    Your use of this website and any dispute arising out of such
                    use of the website is subject to the laws of India or other
                    regulatory authority.
                  </li>
                </ul>
                <br />
                We as a merchant shall be under no liability whatsoever in
                respect of any loss or damage arising directly or indirectly out
                of the decline of authorization for any Transaction, on Account
                of the Cardholder having exceeded the preset limit mutually
                agreed by us with our acquiring bank from time to time
              </p>
            </div>
          )}

          {showContact && (
            <div
              className="terms-content  col-md-12 p-3"
              style={{ color: "#fff" }}>
              <i
                className="fa-solid fa-xmark"
                style={{ color: "#fff" }}
                onClick={() => setContact(!showContact)}></i>
              <h2>Contact us</h2>
              <p>Last updated on Oct 12th, 2023</p>
              <p>
                You may contact us using the information below:
                <br />
                Merchant Legal entity name: Logica By SIMCA
                <br />
                Registered Address: Sinhgad Institute of Management And Computer
                Application Narhe Pune Maharashtra 411041 <br />
                Operational Address: Sinhgad Institute of Management And
                Computer Application Narhe Pune Maharashtra 411041
                <br />
                E-Mail ID: logica.simca@gmail.com
                <br />
                Contact No.: 9834178825
                <br />
              </p>
            </div>
          )}

          {showCancellation && (
            <div
              className="terms-content  col-md-12 p-3"
              style={{ color: "#fff" }}>
              <i
                className="fa-solid fa-xmark"
                style={{ color: "#fff" }}
                onClick={() => setCancellation(!showCancellation)}></i>
              <h2>Cancellation & Refund Policy</h2>
              <p>Last updated on Oct 12th, 2023</p>
              <p>No cancellations & Refunds are entertained</p>
            </div>
          )}
          {showPrivacy && (
            <div
              className="terms-content  col-md-12 p-3"
              style={{ color: "#fff" }}>
              <i
                className="fa-solid fa-xmark"
                style={{ color: "#fff" }}
                onClick={() => setPrivacy(!showPrivacy)}></i>
              <h2>Privacy Policy</h2>
              <p>Last updated on Oct 12th, 2023</p>
              <p>
                This privacy policy sets out how Logica By SIMCA uses and
                protects any information that you give Logica By SIMCA when you
                use this website.
              </p>
              <p>
                Logica By SIMCA is committed to ensuring that your privacy is
                protected. Should we ask you to provide certain information by
                which you can be identified when using this website, and then
                you can be assured that it will only be used in accordance with
                this privacy statement.
              </p>
              <p>
                Logica By SIMCA may change this policy from time to time by
                updating this page. You should check this page from time to time
                to ensure that you are happy with any changes.
              </p>
              <p>
                <b>We may collect the following information:</b>
                <br />
                <ul>
                  <li>Name and job title</li>

                  <li>Contact information including email address</li>

                  <li>
                    Demographic information such as postcode, preferences and
                    interests
                  </li>

                  <li>
                    Other information relevant to customer surveys and/or offers
                  </li>
                </ul>
              </p>
              <p>
                <b>What we do with the information we gather</b>
                <br />
                We require this information to understand your needs and provide
                you with a better service, and in particular for the following
                reasons:
                <br />
                <ul>
                  <li>Internal record keeping.</li>
                  <li>
                    We may use the information to improve our products and
                    services.
                  </li>
                  <li>
                    We may periodically send promotional emails about new
                    products, special offers or other information which we think
                    you may find interesting using the email address which you
                    have provided.
                  </li>
                  <li>
                    From time to time, we may also use your information to
                    contact you for market research purposes. We may contact you
                    by email, phone, fax or mail. We may use the information to
                    customise the website according to your interests.
                  </li>
                </ul>
                <br />
                We are committed to ensuring that your information is secure. In
                order to prevent unauthorised access or disclosure we have put
                in suitable measures.
              </p>
              <p>
                <b>How we use cookies</b>
                A cookie is a small file which asks permission to be placed on
                your computer's hard drive. Once you agree, the file is added
                and the cookie helps analyses web traffic or lets you know when
                you visit a particular site. Cookies allow web applications to
                respond to you as an individual. The web application can tailor
                its operations to your needs, likes and dislikes by gathering
                and remembering information about your preferences.
                <br />
                We use traffic log cookies to identify which pages are being
                used. This helps us analyses data about webpage traffic and
                improve our website in order to tailor it to customer needs. We
                only use this information for statistical analysis purposes and
                then the data is removed from the system.
                <br />
                Overall, cookies help us provide you with a better website, by
                enabling us to monitor which pages you find useful and which you
                do not. A cookie in no way gives us access to your computer or
                any information about you, other than the data you choose to
                share with us.
                <br />
                You can choose to accept or decline cookies. Most web browsers
                automatically accept cookies, but you can usually modify your
                browser setting to decline cookies if you prefer. This may
                prevent you from taking full advantage of the website.
              </p>
              <p>
                <b>Controlling your personal information</b>
                <br />
                You may choose to restrict the collection or use of your
                personal information in the following ways:
                <br />
                <ul>
                  <li>
                    whenever you are asked to fill in a form on the website,
                    look for the box that you can click to indicate that you do
                    not want the information to be used by anybody for direct
                    marketing purposes
                  </li>
                  <li>
                    if you have previously agreed to us using your personal
                    information for direct marketing purposes, you may change
                    your mind at any time by writing to or emailing us at
                    logica.simca@gmail.com<br/>Contact No.: 9834178825<br/>Alternate No.: 9518751324
                  </li>
                </ul>
              </p>
              <p>
                We will not sell, distribute or lease your personal information
                to third parties unless we have your permission or are required
                by law to do so. We may use your personal information to send
                you promotional information about third parties which we think
                you may find interesting if you tell us that you wish this to
                happen.
                <br />
                If you believe that any information we are holding on you is
                incorrect or incomplete, please write to or email us as soon as
                possible, at the above address. We will promptly correct any
                information found to be incorrect.
              </p>
            </div>
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
