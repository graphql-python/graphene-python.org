import React from "react";
import Link from "gatsby-link";

import "./docs.css";
import "./highlight.css";

const SecondPage = () => (
  <div className="container docs-container">
    <div className="docs-side-nav">
      <div
        className="sphinxsidebar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="sphinxsidebarwrapper">
          <h3 className="callout">Table Of Contents</h3>
          <div className="sphinxsidebarwrapperlinks">
            <ul>
              <li className="toctree-l1">
                <a
                  className="reference internal current"
                  href="quickstart.html"
                >
                  Getting started
                </a>
              </li>
              <li className="toctree-l1">
                <a
                  className="reference internal"
                  href="incremental-adoption.html"
                >
                  Incremental adoption
                </a>
              </li>
              <li className="toctree-l1">
                <a className="reference internal" href="types/index.html">
                  Types Reference
                </a>
              </li>
              <li className="toctree-l1">
                <a className="reference internal" href="relay/index.html">
                  Relay
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
    <div className="docs-main">
      <div
        className="docs-breadcrumbs"
        role="navigation"
        aria-label="breadcrumbs navigation"
      >
        <ul className="wy-breadcrumbs">
          <li>
            <a href="index.html">Docs</a> »
          </li>

          <li>Using sphinx-git</li>

          <li className="wy-breadcrumbs-aside">
            <a
              href="https://github.com/OddBloke/sphinx-git/blob/466cd7026133fc22f2b0fb15e1a25bd2f9c0b68a/docs/using.rst"
              className="fa fa-github"
            >
              {" "}
              Edit on GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="documentwrapper">
        <div className="bodywrapper">
          <div className="body" role="main">
            <div className="section" id="getting-started">
              <h1>
                Getting started<a
                  className="headerlink"
                  href="#getting-started"
                  title="Permalink to this headline"
                >
                  ¶
                </a>
              </h1>
              <div className="section" id="what-is-graphql">
                <p>
                  For an introduction to GraphQL and an overview of its
                  concepts, please refer to{" "}
                  <a
                    className="reference external"
                    href="http://graphql.org/learn/"
                  >
                    the official introduction
                  </a>.
                </p>
                <p>Let’s build a basic GraphQL schema from scratch.</p>
              </div>
              <div className="section" id="requirements">
                <h2>
                  Requirements<a
                    className="headerlink"
                    href="#requirements"
                    title="Permalink to this headline"
                  >
                    ¶
                  </a>
                </h2>
                <ul className="simple">
                  <li>Node or Typescript(any)</li>
                  <li>Graphene-JS</li>
                </ul>
              </div>
              <div className="section" id="project-setup">
                <h2>
                  Project setup<a
                    className="headerlink"
                    href="#project-setup"
                    title="Permalink to this headline"
                  >
                    ¶
                  </a>
                </h2>
                <div className="code bash highlight-default">
                  <div className="highlight">
                    <pre>
                      <span />
                      <span className="n">yarn</span>{" "}
                      <span className="n">add</span>{" "}
                      <span className="n">graphene</span>
                      <span className="o">-</span>
                      <span className="n">js</span>
                      <span className="o">//</span>{" "}
                      <span className="ow">or</span>
                      <span className="n">npm</span>{" "}
                      <span className="n">install</span>{" "}
                      <span className="n">graphene</span>
                      <span className="o">-</span>
                      <span className="n">js</span>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="section" id="creating-a-basic-schema">
                <h2>
                  Creating a basic Schema<a
                    className="headerlink"
                    href="#creating-a-basic-schema"
                    title="Permalink to this headline"
                  >
                    ¶
                  </a>
                </h2>
                <p>
                  A GraphQL schema describes your data model, and provides a
                  GraphQL server with an associated set of resolve methods that
                  know how to fetch data.
                </p>
                <p>
                  We are going to create a very simple schema, with a{" "}
                  <code className="docutils literal">
                    <span className="pre">Query</span>
                  </code>{" "}
                  with only one field:{" "}
                  <code className="docutils literal">
                    <span className="pre">hello</span>
                  </code>{" "}
                  and an input name. And when we query it, it should return{" "}
                  <code className="docutils literal">
                    <span className="pre">"Hello</span>{" "}
                    <span className="pre">{`{name}`}</span>
                  </code>.
                </p>
                <div className="code typescript highlight-default">
                  <div className="highlight" />
                </div>
              </div>
              <div className="section" id="querying">
                <h2>
                  Querying<a
                    className="headerlink"
                    href="#querying"
                    title="Permalink to this headline"
                  >
                    ¶
                  </a>
                </h2>
                <p>Then we can start querying our schema:</p>
                <div className="code typescript highlight-default">
                  <div className="highlight">
                    <pre>
                      <span />
                      <span className="n">var</span>{" "}
                      <span className="n">result</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="k">await</span>{" "}
                      <span className="n">schema</span>
                      <span className="o">.</span>
                      <span className="n">execute</span>
                      <span className="p">(</span>
                      <span className="s1">
                        '{"{"}hello{"}"}'
                      </span>
                      <span className="p">)</span>
                      <span className="n">console</span>
                      <span className="o">.</span>
                      <span className="n">log</span>
                      <span className="p">(</span>
                      <span className="n">result</span>
                      <span className="o">.</span>
                      <span className="n">data</span>
                      <span className="o">.</span>
                      <span className="n">hello</span>
                      <span className="p">)</span>{" "}
                      <span className="c1"># "Hello stranger"</span>
                    </pre>
                  </div>
                </div>
                <p>Congrats! You got your first graphene schema working!</p>
              </div>
            </div>
            <div className="go-buttons">
              <a href="index.html" className="go-previous flat-button">
                Previous: Graphene
              </a>
              <a
                href="incremental-adoption.html"
                className="go-next flat-button primary"
              >
                Next: Incremental adoption
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default SecondPage;
