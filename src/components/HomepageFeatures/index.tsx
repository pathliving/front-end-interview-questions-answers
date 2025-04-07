import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Boost Efficiency and Save Time",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Having your front-end Q&A documented eliminates the need to search
        online or repeat explanations. This saves you and your colleagues
        valuable time during development and troubleshooting.
      </>
    ),
  },
  {
    title: "Enhance Consistency and Accuracy",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Documentation provides a single source of truth for front-end best
        practices and solutions. This reduces the risk of errors caused by
        relying on individual interpretations or outdated information.
      </>
    ),
  },
  {
    title: "Foster a Learning Environment",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        A well-documented Q&A list serves as a valuable resource for new
        developers. They can quickly learn key concepts and find answers to
        common challenges, accelerating their onboarding process and fostering a
        culture of knowledge sharing.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
