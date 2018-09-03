import React from "react";
import Link from "gatsby-link";
import FullLogoOnWhite from "./full-logo-on-white.svg";
import AffirmLogo from "./logos/affirm.svg";
import YelpLogo from "./logos/yelp.svg";
import TryLogo from "./logos/try.svg";
import DailymotionLogo from "./logos/dailymotion.svg";
import MozillaLogo from "./logos/mozilla.svg";
import Puzzle from "./puzzle.svg";

const onSelectorChange = () => {
  document.location = "http://graphene-js.org/";
};

const IndexPage = () => (
  <div>
    <div className="hero container">
      <FullLogoOnWhite />
      <h1>
        GraphQL in{" "}
        <label className="hero-selector">
          <select onChange={onSelectorChange}>
            <option selected>Python</option>
            <option>Javascript</option>
          </select>
        </label>{" "}
        Made Easy
      </h1>
      <a className="button primary" href="http://docs.graphene-python.org">
        Get Started
      </a>
      <a className="button" href="https://pypi.python.org/pypi/graphene">
        Download 2.1
      </a>
    </div>

    <section className="main">
      <div className="container">
        <div className="half">
          <span className="callout">PS. Your API is a User Interface</span>
          <h1>Simple yet Powerful</h1>
          <p>
            Graphene-Python is a library for building GraphQL APIs in Python
            easily, its main goal is to provide a simple but extendable API for
            making developers' lives easier.
          </p>
          <p>
            But, what is GraphQL? GraphQL is a data query language developed
            internally by Facebook in 2012 before being publicly released in
            2015. It provides an alternative to REST and ad-hoc webservice
            architectures.
          </p>
          <p>
            We believe that GraphQL is the next big thing after peanut butter
            and REST.
          </p>
        </div>
        <div className="half">
          <pre
            className="code"
            dangerouslySetInnerHTML={{
              __html: `import <b>graphene</b>

class <b>Query</b>(graphene.<b>ObjectType</b>):
    <b>hello</b> = graphene.<b>String</b>()
    
    def <b>resolve_hello</b>(self, info):
        return 'World'


schema = graphene.<b>Schema</b>(query=Query)

schema.<b>execute</b>('''
  query {
    hello
  }
''')`
            }}
          />
        </div>
      </div>
    </section>
    <section className="pluggable">
      <div className="container">
        <div className="half">
          <Puzzle className="puzzle" />
        </div>
        <div className="half">
          <span className="callout">Pluggable</span>
          <h1>Extensible Framework</h1>
          <p>
            Graphene-Python will work out of the box with your current stack.
          </p>
          <p>
            For being able to have a fast development process, is essential to
            reuse as much code as possible.
          </p>

          <p>
            We offer integrations with different frameworks that will get you up
            to speed in the blink of an eye.<br />This integrations include:
            <ul>
              <li>
                <b>Django</b>:{" "}
                <a href="https://docs.graphene-python.org/projects/django/en/latest/">
                  Graphene-Django
                </a>
              </li>
              <li>
                <b>SQLAlchemy</b>:{" "}
                <a href="https://docs.graphene-python.org/projects/sqlalchemy/en/latest/">
                  Graphene-SQLAlchemy
                </a>
              </li>
              <li>
                <b>Google App Engine</b>:{" "}
                <a href="https://docs.graphene-python.org/projects/gae/en/latest/">
                  Graphene-GAE
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
    <section className="trustedby">
      <div className="container">
        <span className="callout inverse">Trusted At Scale</span>
        <h1>Trusted By</h1>
        <p>
          Graphene is trusted by thousands of individual developers and
          companies everyday. Here are just a few of the organizations that
          choose Graphene to use GraphQL in their stacks.
        </p>
        <div className="logos">
          <YelpLogo />
          <MozillaLogo />
          <AffirmLogo />
          <DailymotionLogo />
          <TryLogo />
        </div>
      </div>
    </section>
    <style jsx>{`
      /* Rectangle 5: */
      :global(.puzzle) {
        margin: 100px;
      }
      .main {
        position: relative;
        padding: 140px 0;
        color: white;
      }
      .hero {
        margin: 140px auto;
        display: block;
        text-align: center;
      }
      section h1 {
        font-size: 36px;
      }
      .hero h1 {
        font-weight: 400;
        font-size: 36px;
        color: #555555;
      }
      .hero select {
        width: 164px;
        position: relative;
        border: none;
        box-shadow: none;
        background: #ffffff;
        padding: 7px 14px;
        padding-right: 40px;
        border: 1px solid #979797;
        box-shadow: 4px 5px 0 0 #e5e5e5;
        color: #555555;
        font-family: "klavika-web", Helvetica, sans-serif;

        background: transparent;
        background-image: none;
        font-size: 36px;
        border-radius: 0;
        margin: 0 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .hero .hero-selector {
        position: relative;
      }
      .hero .hero-selector:after {
        content: "▼";
        font-size: 26px;
        position: absolute;
        right: 21px;
        top: 7px;
        pointer-events: none;
      }
      .hero .button {
        margin: 5px;
      }
      @media (max-width: 768px) {
        .hero .button {
          display: block;
          margin-top: 10px;
          text-align: center;
        }
      }
      .main .code {
        /* Rectangle 7: */
        background: #000000;
        border: 1px solid #ffffff;
        padding: 24px;
        box-shadow: 3px 4px 0 0 rgba(28, 28, 28, 0.17);
        font-family: "Fira Mono";
        font-size: 16px;
        color: #a3b1b2;
        letter-spacing: 0;
        overflow: auto;
      }
      .main .code :global(b) {
        color: white;
        font-weight: inherit;
      }
      section p {
        font-weight: 300;
        font-size: 16px;
        letter-spacing: 0.01em;
        line-height: 1.8;
        margin: 0 0 10px;
      }

      .main:before {
        content: "";
        display: block;
        position: absolute;
        transform: skew(0, -3deg);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-image: linear-gradient(-183deg, #f67049 0%, #e14b2e 99%);
      }
      .pluggable {
        padding: 140px 0;
        color: black;
      }
      .trustedby {
        padding-bottom: 80px;
        margin-top: -80px;
        padding-top: 140px;
        color: white;
        position: relative;
        overflow: hidden;
      }
      .trustedby:before {
        content: "";
        display: block;
        position: absolute;
        transform: skew(0, 3deg);
        top: 50px;
        left: 0;
        bottom: -50px;
        right: 0;
        z-index: -1;
        background: black;
      }
      .trustedby .logos {
        display: flex;
        justify-content: space-between;
        padding-top: 40px;
      }
      :global(.trustedby .logos svg) {
        height: 90px;
        margin: 0 15px;
      }
      :global(.trustedby .logos svg g) {
        fill: #eee;
      }
      .logos svg {
        display: none;
      }
      .main h1 {
        color: white;
      }
    `}</style>
  </div>
);

export default IndexPage;
