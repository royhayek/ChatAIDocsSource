import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Smart Conversations",
    image: "/img/smart-conversations.png",
    description: (
      <>
        Engage in natural, dynamic, and context-aware conversations with our
        cutting-edge AI chatbot. Whether you need answers, companionship, or
        just want to chat, ChatAI is here for you 24/7.
      </>
    ),
  },
  {
    title: "Chat History",
    image: "/img/chat-history.png",
    description: (
      <>
        Easily access and review your past conversations with ChatAI, ensuring
        you never miss important information or insights shared during your
        chats
      </>
    ),
  },
  {
    title: "Assistants",
    image: "/img/assistants.png",
    description: (
      <>
        Discover a range of specialized assistants within ChatAI, each tailored
        to assist you with specific tasks or provide information on various
        topics. From weather updates to language translation, our assistants are
        here to help.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--center"> */}
      {/* <img
          src={image}
          style={{
            width: 230,
            height: 480,
            border: "1px solid lightgray",
            borderRadius: 8,
            marginBottom: 10,
          }}
        /> */}
      {/* </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
