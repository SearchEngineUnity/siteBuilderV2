/* eslint-disable react/no-unknown-property */
import React from 'react';
import Container from '@mui/material/Container';
import MyLayout from '../containers/layout';

function CookiePolicy() {
  return (
    <MyLayout>
      <Container
        component="main"
        maxWidth="lg"
        ez-policy=""
        ez-policy-mode="cookies"
        sx={{ marginBottom: '40px' }}
      >
        <h1 ez-title="">Cookie Policy</h1>
        <h2>
          <span ez-m="LABEL_PRIVACY2_HTML_COOKIES_TITLE">What are Cookies?</span>
        </h2>
        <p>
          <span ez-m="LABEL_PRIVACY2_HTML_COOKIES_BODY">
            A cookie is a small file with information that your browser stores on your device.
            Information in this file is typically shared with the owner of the site in addition to
            potential partners and third parties to that business. The collection of this
            information may be used in the function of the site and/or to improve your experience.
          </span>
        </p>
        <h2>
          <span ez-m="LABEL_PRIVACY2_HTML_COOKIES_GENERATED_TITLE">
            How was this cookie policy generated?
          </span>
        </h2>
        <p>
          <span ez-m="LABEL_PRIVACY2_HTML_COOKIES_GENERATED_BODY">
            The software runs a deep scan of our website to uncover existing cookies, places each in
            the categories listed below, and provides visitors with a list for them to consent to
            tracking or opt out.
          </span>
        </p>
        <h2>
          <span ez-m="LABEL_PRIVACY2_HTML_COOKIES_HOW">How we use cookies</span>
        </h2>
        <ul>
          <li>
            <span ez-m="LABEL_PRIVACY2_HTML_COOKIES_BEST_EXP">
              To give you the best experience possible, we use the following types of cookies:
            </span>
          </li>
          <li>
            <span ez-m="LABEL_PRIVACY2_HTML_COOKIES_NECESSARY">
              Strictly Necessary. As a web application, we require certain necessary cookies to run
              our service.
            </span>
          </li>
          <li>
            <span ez-m="LABEL_PRIVACY2_HTML_COOKIES_ANALYTICS">
              Analytics. We collect analytics about the types of people who visit our site to
              improve our service and product.
            </span>
          </li>
          <li>
            <span ez-m="LABEL_PRIVACY2_HTML_COOKIES_MARKETING">
              Marketing. We share cookies with third party advertisers and/or partners to help
              provide you with a personalized marketing experience.
            </span>
          </li>
          <li>
            <span ez-m="LABEL_PRIVACY2_HTML_COOKIES_THIRD_PARTIES">
              We also allow third party partners to put their own cookies on our website.
            </span>
          </li>
        </ul>
        <p>Last Updated: 6/28/2024</p>
      </Container>
    </MyLayout>
  );
}

export default CookiePolicy;
