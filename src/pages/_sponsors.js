import React from "react";
import GenericLogo from "./sponsors/generic-logo.png";

const Sponsors = ({ active }) => {
  return (
    <div className={`sponsors ${active ? "active" : ""}`}>
      <a
        onClick={e => {
          alert("This link will open your company website");
          e.preventDefault();
          e.stopPropagation();
        }}
        href="#"
        className="sponsor"
      >
        <img src={GenericLogo} width="160" />
      </a>
      <style jsx>{`
        .sponsors {
          text-align: center;
          margin-bottom: 10px;
        }
        .sponsor {
          margin: 10px;
          display: inline-block;
          vertical-align: middle;
          transition: all 0.3s ease;
          filter: grayscale(100%);
          opacity: 0.66;
        }
        .sponsors.active .sponsor,
        .sponsor:hover {
          opacity: 1;
          filter: none;
        }
      `}</style>
    </div>
  );
};

export default Sponsors;
