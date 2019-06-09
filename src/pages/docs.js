import React from "react";
import Link from "gatsby-link";

import "./docs.css";
import "./highlight.css";

const Docs = () => {
  if (process.env.NODE_ENV === "production" && global.window) {
    throw new Error("Docs can't be rendered in browser");
  }
  return (
    <div className="container docs-container">
      <div className="docs-side-nav">
        <div
          className="sphinxsidebar"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="sphinxsidebarwrapper">
            <h3 className="callout">
              <a href="{{ pathto(master_doc) }}">Table Of Contents</a>
            </h3>
            <div className="sphinxsidebarwrapperlinks">{`{{ toctree() }}`}</div>
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
            {`{% block breadcrumbs %}`}
            <li>
              <a href="{{ pathto(master_doc) }}">Docs</a> &raquo;
            </li>
            {`{% for doc in parents %}`}
            <li>
              <a href="{{ doc.link|e }}">{`{{ doc.title }}`}</a> &raquo;
            </li>
            {`{% endfor %}`}
            <li>{`{{ title }}`}</li>
            {`{% endblock %}`}

            {/* <li className="wy-breadcrumbs-aside">
              <a
                href={`https://{{ github_host|default('github.com') }}/{{ github_user }}/{{ github_repo }}/blob/{{ github_version }}{{ conf_py_path }}{{ pagename }}{{ suffix }}`}
                className="fa fa-github"
              >
                {" "}
                Edit on GitHub
              </a>
            </li> */}
          </ul>
        </div>
        <div className="documentwrapper">
          <div className="bodywrapper">
            <div className="body" role="main">
              {`{{ body }}`}
              <div className="go-buttons">
                {`{% if prev %}`}
                <a href="{{ prev.link|e }}" className="go-previous flat-button">
                  Previous: {`{{ prev.title|striptags|e }}`}
                </a>
                {`{% endif %}{% if next %}`}
                <a
                  href="{{ next.link|e }}"
                  className="go-next flat-button primary"
                >
                  Next: {`{{ next.title|striptags|e }}`}
                </a>
                {`{% endif %}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
