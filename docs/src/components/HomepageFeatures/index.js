import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Protection for every person',
    image: "/secure-software-supply-chain-guide/img/full_flow.png",
    description: (
      <>
        Note how Yubico's products can be used to protect each actor present in building, maintaining, and using an application. 
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
      <img src={image} style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }} />
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
      </div>
    </section>
  );
}
