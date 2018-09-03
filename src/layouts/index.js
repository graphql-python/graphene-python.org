import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import GrapheneLogo from "./graphene-logo.svg";
import Arrow from "./arrow.svg";
import LogoOnWhite from "./logo-on-white.svg";
import GrapheneLogoWhite from "./graphene-logo-white.svg";

import docsearch from "docsearch.js/dist/cdn/docsearch.min";

import "docsearch.js/dist/cdn/docsearch.min.css";
import "./index.css";

class Header extends React.Component {
  componentDidMount() {
    docsearch({
      apiKey: "25626fae796133dc1e734c6bcaaeac3c",
      inputSelector: "#search-docs",
      indexName: "docsearch"
      // debug: true
    });
  }
  render() {
    let { docs } = this.props;
    return (
      <div>
        <header className="graphene-header">
          <div className="container">
            <a href="http://graphene-python.org/">
              <GrapheneLogo className="graphene-logo" />
            </a>
            <a className="tagline" href="//graphene.tools/">
              Learn how Graphene-Python fits into the <b>Graphene family</b>
              <Arrow className="arrow" />
            </a>
          </div>
        </header>
        <header
          className={`navbar-header  ${docs ? "navbar-header-contrast" : ""}`}
        >
          <div className="container">
            <a href="http://graphene-python.org/" className="logo-link">
              {docs ? <GrapheneLogoWhite /> : <LogoOnWhite />}
            </a>
            <nav>
              <input
                id="search-docs"
                type="text"
                placeholder="Search the docs..."
              />
              <a href="http://docs.graphene-python.org/">Documentation</a>
              <a href="/team">Team</a>
              <a href="https://github.com/graphql-python/graphene">Github</a>
            </nav>
          </div>
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
          :global(#search-docs) {
            padding: 5px 5px 5px 29px;
            margin-top: -2px;
            vertical-align: middle;
            font-size: 16px;
            width: 180px;
            background: transparent;
            border: none;
            background-image: url("/search.svg");
            background-size: 16px 16px;
            background-repeat: no-repeat;
            background-position-y: center;
            background-position-x: 5px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          }
          :global(#search-docs):focus {
            outline: none;
            border-bottom-color: rgba(0, 0, 0, 0.8);
          }
          .navbar-header-contrast :global(#search-docs) {
            background-image: url("/search-white.svg");
            color: white;
            border-bottom-color: rgba(255, 255, 255, 0.5);
          }
          .navbar-header-contrast :global(#search-docs):focus {
            border-bottom-color: #ffffff;
          }
          .navbar-header-contrast :global(#search-docs)::placeholder {
            color: rgba(255, 255, 255, 0.6);
          }
          .navbar-header-contrast {
            background-image: linear-gradient(
              -180deg,
              #f67049 0%,
              #e14b2e 100%
            );
          }

          .navbar-header {
            height: 94px;
          }
          .navbar-header :global(.container) {
            display: flex;
            align-items: center;
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
          .navbar-header-contrast nav a {
            color: white;
          }
          .navbar-header-contrast nav a:hover {
            color: #eee;
          }

          @import url("https://fonts.googleapis.com/css?family=Fira+Mono|Open+Sans:400,600");
        `}</style>
      </div>
    );
  }
}

const TemplateWrapper = ({ children, ...otherProps }) => {
  const docs = otherProps.location.pathname.indexOf("/docs") > -1;
  return (
    <div>
      <Helmet
        title="Graphene-Python"
        meta={[
          { name: "description", content: "Graphene framework for Python" },
          { name: "keywords", content: "graphene, graphql, python, framework" }
        ]}
      />
      <Header docs={docs} />
      <div>{children()}</div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
