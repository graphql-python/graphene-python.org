import React from "react";
import Link from "gatsby-link";
import {
  FaBriefcase,
  FaMapMarker,
  FaGlobe,
  FaGithub,
  FaLink,
  FaTwitter
} from "react-icons/fa";
import paypal from "./support/paypal.png";
import Sponsors from "./_sponsors";

const Support = () => {
  return (
    <div className="small-container">
      <h1>Support Graphene Development</h1>
      <p>
        Graphene is an MIT licensed open source project and completely free to
        use. However, the amount of effort needed to maintain and develop new
        features for the project is not sustainable without proper financial
        backing. You can support Graphene development via the following methods:
      </p>
      <div>
        <h2>One-time donations</h2>
        <p>We accept donations through these channels:</p>
        <a href="https://www.paypal.me/syrusakbary" target="_blank">
          <img src={paypal} width="100" />
        </a>
      </div>
      <div>
        <h2>Recurring Pledges</h2>
        <p>
          Recurring pledges come with <b>exclusive perks</b>, e.g. having your
          name listed in the Graphene GitHub repository, or have your{" "}
          <b>company logo</b>
          placed on this website.
        </p>
        <ul>
          <li>
            <a href="https://www.patreon.com/syrusakbary" target="_blank">
              Become a backer or sponsor via Patreon
            </a>{" "}
            (goes directly to support Syrus Akbary's full-time work on Graphene)
          </li>
        </ul>
      </div>
      <div>
        <h2>Current Premium Sponsors: </h2>
        <Sponsors active />
      </div>
      <p>
        Signing up for a paid plan will:
        <ul>
          <li>
            Directly contribute to <b>faster releases, more features</b>, and
            higher quality software.
          </li>
          <li>
            Allow more time to be invested in <b>documentation</b>, issue
            triage, and community support.
          </li>
          <li>Safeguard the future development of Graphene.</li>
        </ul>
      </p>

      <p>
        If you run a business and are using Graphene in a revenue-generating
        product, it makes business sense to sponsor Graphene development:{" "}
        <b>
          it ensures the project that your product relies on stays healthy and
          actively maintained
        </b>. It can also help your exposure in the Graphene community and makes
        it easier to attract Graphene developers.
      </p>
      <p>
        If you are an individual user and have enjoyed the productivity of using
        Graphene, consider donating as a sign of appreciation - like buying me
        coffee once in a while 😊
      </p>
    </div>
  );
};

export default Support;
