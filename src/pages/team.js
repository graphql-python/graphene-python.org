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

const minimizeLink = link => {
  return link
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "")
    .replace(/^mailto:/, "");
};
const githubUrl = (handle, repo) => {
  if (repo && repo.url) {
    return repo.url;
  }
  if (repo && repo.indexOf("/") !== -1) {
    // If the repo name has a slash, it must be an organization repo.
    // In such a case, we discard the (personal) handle.
    return "https://github.com/" + repo.replace(/\/\*$/, "");
  }
  return "https://github.com/" + handle + "/" + (repo || "");
};

const Member = ({
  github,
  title,
  name,
  reposOfficial,
  reposPersonal,
  work,
  distanceInKm,
  city,
  languages,
  links,
  twitter
}) => {
  return (
    <div className="member">
      <div className="avatar">
        {github ? (
          <img
            src={`https://github.com/${github}.png`}
            alt={name}
            width="80"
            height="80"
          />
        ) : null}
      </div>
      <div className="profile">
        <h3 data-official-titl={title}>
          {name}
          {title ? <sup>{title}</sup> : null}
        </h3>
        <dl>
          {reposOfficial ? (
            <div>
              <dt>Core focus</dt>
              <dd>
                <ul>
                  {reposOfficial.map(repo => {
                    return (
                      <li>
                        <a
                          href={githubUrl("graphql-python", repo)}
                          target="_blank"
                        >
                          {repo.name || repo}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          ) : null}
          {github && reposPersonal ? (
            <div>
              <dt>Ecosystem</dt>
              <dd>
                <ul>
                  {reposPersonal.map(repo => {
                    return (
                      <li>
                        <a href={githubUrl(github, repo)} target="_blank">
                          {repo.name || repo}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          ) : null}
          {work ? (
            <div>
              <dt>
                <FaBriefcase size="1.2em" />
                <span className="sr-only">Work</span>
              </dt>
              <dd>{work}</dd>
            </div>
          ) : null}
          {distanceInKm ? (
            <span className="distance">
              <dt>
                <FaMapMarker size="1.2em" />
                <span className="sr-only">Distance</span>
              </dt>
              <dd>
                About
                {distanceInKm <= 150 ? (
                  <span
                    title={`${name} is close enough to commute to your location.`}
                    className="user-match"
                  >
                    {distanceInKm} km away
                  </span>
                ) : (
                  <span>{distanceInKm} km away</span>
                )}
                in {city}
              </dd>
            </span>
          ) : null}
          {city ? (
            <div>
              <dt>
                <FaMapMarker size="1.2em" />
                <span className="sr-only">City</span>
              </dt>
              <dd>{city}</dd>
            </div>
          ) : null}
          {languages ? (
            <div>
              <dt>
                <FaGlobe size="1.2em" />
                <span className="sr-only">Languages</span>
              </dt>
              <dd className="language-list">
                <ul>
                  {languages.map(lang => (
                    <li>
                      <span
                        title={`${name} can give technical talks in your preferred language`}
                        className="user-match"
                      >
                        {languageNames[lang]}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ) : null}
          {links ? (
            <div>
              <dt>
                <FaLink size="1.2em" />
                <span className="sr-only">Links</span>
              </dt>
              <dd>
                <ul>
                  {links.map(link => (
                    <li>
                      <a href={link} target="_blank">
                        {minimizeLink(link)}
                      </a>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ) : null}
          {github || twitter ? (
            <footer className="social">
              {github ? (
                <a className="github" href={githubUrl(github)}>
                  <FaGithub size="1.2em" />
                  <span className="sr-only">Github</span>
                </a>
              ) : null}
              {twitter ? (
                <a className="twitter" href={`https://twitter.com/${twitter}`}>
                  <FaTwitter size="1.2em" />
                  <span className="sr-only">Twitter</span>
                </a>
              ) : null}
            </footer>
          ) : null}
        </dl>
      </div>
      <style jsx>{`
        .sort-by-distance-button {
          display: inline-block;
          padding: 0.4em 0.7em 0.45em;
          font-weight: bold;
          font-size: 0.5em;
          text-transform: uppercase;
          line-height: 1;
          border: none;
          background: #34495e;
          color: #fff;
          border-radius: 3px;
          position: relative;
          cursor: pointer;
          float: right;
          margin-top: 0.3em;
        }
        .sort-by-distance-button i {
          margin-right: 0.25em;
        }
        .sort-by-distance-button i:last-child {
          margin-right: 0;
        }
        .sort-by-distance-button[disabled] {
          opacity: 0.7;
          cursor: default;
        }
        .member {
          display: flex;
          padding: 25px 0;
          border-bottom: 1px dotted #ddd;
        }
        .member:first-of-type {
          margin-top: 15px;
        }
        .member:last-of-type {
          border-bottom: none;
        }
        .member .avatar {
          flex: 0 0 80px;
        }
        .member .avatar img {
          border-radius: 50%;
        }
        .member .profile {
          padding-left: 26px;
          flex: 1;
        }
        .member .profile h3 {
          margin: 0;
          font-size: 1.3em;
        }
        .member .profile h3::before,
        .member .profile h3::after {
          display: none;
        }
        .member .profile h3 > sup {
          text-transform: uppercase;
          font-size: 0.7em;
          letter-spacing: 0.3px;
          padding: 2px 5px;
          margin-left: 10px;
          color: rgba(0, 0, 0, 0.6);
          background: #f9f7f5;
          border-radius: 5px;
        }
        .member .profile .user-match {
          cursor: help;
          color: #4682b4;
        }
        .member .profile .user-match:after {
          font-size: 0.75em;
          vertical-align: super;
          margin-left: 4px;
          margin-right: 2px;
          position: relative;
        }
        .member .profile dl {
          margin: 0.6em 0 0;
        }
        .member .profile dt,
        .member .profile dd,
        .member .profile ul,
        .member .profile li {
          display: inline;
          padding: 0;
          margin: 0;
          line-height: 1.3;
        }
        .member .profile dt {
          text-transform: uppercase;
          font-size: 0.84em;
          font-weight: 600;
        }
        .member .profile dt::after {
          content: "";
          margin-right: 7px;
        }
        .member .profile dt i {
          width: 14px;
          text-align: center;
        }
        .member .profile dt i.fa-map-marker {
          font-size: 1.15em;
        }
        .member .profile dt i.fa-globe {
          font-size: 1.2em;
        }
        .member .profile dt i.fa-link {
          font-size: 1.05em;
        }
        .member .profile dd {
          font-weight: 600;
        }
        .member .profile dd::after {
          display: block;
          content: " ";
          margin-top: 0.6em;
        }
        .member .profile li {
          display: inline-block;
        }
        .member .profile li::after {
          display: inline-block;
          content: "·";
          margin: 0 8px;
        }
        .member .profile li:last-child::after {
          content: "";
        }
        .member .profile .social a {
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
          margin-right: 4px;
        }
        .member .profile .social a.github,
        .member .profile .social a.codepen {
          color: #000;
        }
        .member .profile .social a.twitter {
          color: #1da1f3;
        }
        .member .profile .social i {
          vertical-align: text-bottom;
          font-size: 1.3em;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        @media (max-width: 640px) {
          .member .profile h3 sup {
            display: inline-block;
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

const members = [
  {
    name: "Syrus Akbary",
    github: "syrusakbary",
    twitter: "syrusakbary",
    reposOfficial: ["graphene-python/*", "graphql-quiver/*"],
    languages: ["es", "en"],
    work: "Creator @ Graphene",
    city: "San Francisco, US",
    links: ["https://syrusakbary.com/", "https://www.patreon.com/syrusakbary"]
  },
  {
    name: "Jonathan Kim",
    github: "jkimbo",
    twitter: "jonnykim",
    city: "London, UK",
    reposOfficial: ["graphene", "graphene-django"],
    languages: ["en"],
    links: ["http://jkimbo.co.uk"]
  },
  {
    name: "Christoph Zwerschke",
    github: "Cito",
    work: "CTO @ CWA Compact Web Applications GmbH",
    city: "Heidelberg, Germany",
    twitter: "citozwer",
    reposOfficial: ["graphql-core-next"],
    languages: ["de", "en"],
    links: ["https://cito.github.io/"]
  },
  {
    name: "Devin Fee",
    github: "dfee",
    twitter: "dfee",
    city: "San Diego, US",
    reposOfficial: ["graphene", "graphql-core"],
    languages: ["en"],
    links: ["http://devinfee.com"]
  },
  {
    name: "Jacob Foster",
    github: "spockNinja",
    reposOfficial: ["graphene-django"],
    languages: ["en"]
  },
  {
    name: "Patrick Arminio",
    twitter: "patrick91",
    github: "patrick91",
    work: "Full Stack Developer @ Stink Studios",
    reposOfficial: ["graphene-django"],
    languages: ["en", "it"],
    links: ["https://patrick.wtf/"]
  },
  {
    name: "Eran Kampf",
    twitter: "ekampf",
    github: "ekampf",
    city: "Mountain View, US",
    work: "Tech Lead Manager @ Ebates",
    reposOfficial: ["graphene", "graphene-gae"],
    languages: ["en"],
    links: ["http://www.developerzen.com"]
  }
];
const languageNames = {
  en: "English",
  zh: "中文",
  vi: "Tiếng Việt",
  pl: "Polski",
  pt: "Português",
  ru: "Русский",
  jp: "日本語",
  fr: "Français",
  de: "Deutsch",
  el: "Ελληνικά",
  es: "Español",
  hi: "हिंदी",
  fa: "فارسی",
  ko: "한국어",
  ro: "Română"
};

const Team = () => {
  return (
    <div className="small-container">
      <h1>Meet the Team</h1>
      <p>
        The development of Graphene and its ecosystem is guided by an
        international team, some of whom have chosen to be featured below.
      </p>
      {members.map(member => <Member key={member.name} {...member} />)}
    </div>
  );
};

export default Team;
