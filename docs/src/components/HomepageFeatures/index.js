import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import ReactPlayer from "react-player";

const FeatureList = [
  {
    title: "Protection for every stage of your software supply chain",
    image: "/secure-software-supply-chain-guide/img/full_flow.png",
    description: (
      <div>
        <p>
          After completing this guide, you'll have an understanding of some
          simple security techniques that can be used to harden the security
          around your application's development environment.
        </p>
        <p>
          Often times these techniques are overlooked as they're seen to add
          friction to the developer experience. With Yubico's tools, you never
          have to sacrifice security for ease of use. By the end of this guide
          you'll understand how a one time setup can provide both a secure, and
          easy to use development environment.
        </p>
        <p>
          The graph below shows what a secure environment looks like between an
          organization's administrators, developers, and infrastructure that are
          all equipped with Yubico's security devices.
        </p>
      </div>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx("col col--12")} style={{ marginBottom: "3em" }}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
      <div>
        <img
          src={image}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <div className={clsx("col col--12")}>
            <div className="text--center padding-horiz--md">
              <h3>Set up your YubiKey for Git signing with FIDO2</h3>
              <p>
                One of the topics included in this guide is git signing with a
                YubiKey. See the video below to learn how easy it is to sign a
                commit with FIDO2. This guide includes a script that
                automatically generates and configures a signing key directly on
                your YubiKey
              </p>
            </div>
          </div>
        </div>
        <div
          className="row row--align-center"
          style={{ justifyContent: "center" }}>
          <ReactPlayer
            controls
            className="react-player"
            url="https://www.youtube-nocookie.com/embed/2M2vKQwbCDk"
          />
        </div>
      </div>
    </section>
  );
}
