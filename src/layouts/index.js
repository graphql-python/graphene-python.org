import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import GrapheneLogo from "./graphene-logo.svg";
import Arrow from "./arrow.svg";
import LogoOnWhite from "./logo-on-white.svg";

import "./index.css";

const Header = () => (
  <div>
    <header className="graphene-header">
      <div className="container">
        <Link to="/">
          <GrapheneLogo className="graphene-logo" />
        </Link>
        <a className="tagline" href="//graphene.tools/">
          Learn how Graphene-Python fits into the <b>Graphene family</b>
          <Arrow className="arrow" />
        </a>
      </div>
    </header>
    <header className="container navbar-header">
      <Link to="/">
        <LogoOnWhite />
      </Link>
      <nav>
        <a href="//docs.graphene-python.org/">Documentation</a>
        <a href="/blog">Blog</a>
        <a href="https://github.com/graphql-python/graphene">Github</a>
      </nav>
    </header>
    <style jsx>{`
      .graphene-header {
        background: #000000;
        width: 100%;
        /* Graphene: */
        font-family: "klavika-web";
        font-weight: 300;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0;
      }
      :global(.graphene-logo) {
        vertical-align: middle;
      }
      .graphene-header {
      }
      .graphene-header .container {
        height: 48px;
        align-items: center;
        display: flex;
      }
      .tagline {
        margin-left: auto;
        color: #a4b1b2;
        font-size: 14px;
        letter-spacing: 0;
        margin-bottom: 0;
        margin-top: 0;
        text-transform: none;
      }
      .tagline b {
        font-weight: 400;
        letter-spacing: 0.3px;
        color: white;
      }
      :global(svg.arrow) {
        /*vertical-align: middle;*/
        margin-left: 8px;
        position: relative;
        top: 2px;
      }
      .navbar-header {
        height: 94px;
        align-items: center;
        display: flex;
      }
      .navbar-header nav {
        height: 100%;
        display: block;
        margin-left: auto;
      }
      .navbar-header nav a {
        height: 100%;
        align-items: center;
        color: #555555;
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        height: 94px;
        line-height: 94px;
        padding: 0 10px;
        margin: 0;
        text-decoration: none;
        font-weight: 600;
      }
      .navbar-header nav a:hover {
        color: black;
      }
      @import url("https://fonts.googleapis.com/css?family=Fira+Mono|Open+Sans:400,600");
    `}</style>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Graphene-Python"
      meta={[
        { name: "description", content: "Graphene framework for Python" },
        { name: "keywords", content: "graphene, graphql, python, framework" }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
