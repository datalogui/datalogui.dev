import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Codeblock from '@theme/CodeBlock';
import classnames from 'classnames';
import React from 'react';
import RunKitCodeBlock from '../RunKitCodeBlock'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import styles from './styles.module.css';

async function loadDynamicScript(url, libraryName) {
  const existingScript = document.getElementById(libraryName);

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = url; // URL for the third-party library being loaded.
    script.id = libraryName; // e.g., googleMaps or stripe
    document.body.appendChild(script);

    return new Promise(resolve => {
      script.onload = resolve
    })
  } else {
    return Promise.resolve()
  }
};

const features = [
  {
    title: <>Change Matters</>,
    imageUrl: 'img/undraw_convert.svg',
    description: (
      <>
        DatalogUI queries work off of differences. They keep track of changes
        in your data and only run on those changes. Does your current
        state management library do that?
      </>
    ),
  },
  {
    title: <>Minimize Re-Renders</>,
    imageUrl: 'img/undraw_file_analysis.svg',
    description: (
      <>
        You shouldn't have to remember what needs to be rerendered when some part
        of your state changes. And you shouldn't have to re-render the world in
        response to a small change. With DatalogUI, query the data you want and
        it'll notify you when the results for that query change.
      </>
    ),
  },
  {
    title: <>Already works with your favorite UI framework</>,
    imageUrl: 'img/undraw_JavaScript_frameworks.svg',
    description: (
      <>
        <code>@datalogui/datalog</code> is the core database. It works with React, React
        Native, and most other frameworks. Let DatalogUI manage the state, and use
        your favorite framework to draw.
      </>
    ),
  },
];

function RKEmbedLibrary({ onLoad }) {
  const [libraryLoaded, setLibraryLoaded] = React.useState(false)
  React.useEffect(() => {
    if (!libraryLoaded) {
      loadDynamicScript("https://embed.runkit.com").then(() => {
        setLibraryLoaded(true)
        if (typeof RunKit !== "undefined") {
          onLoad()
        }
      })
    }
  })
  return null
}

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={
            title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const exampleCode = `
const datalog = require('@datalogui/datalog')

// Build our data tables
const Greetings = datalog.intoTable([
  { language: "en", greeting: "Hello" },
  { language: "es", greeting: "Hola" }
  // ...
])
const Nouns = datalog.intoTable([
  { language: "en", noun: "world" },
  { language: "es", noun: "todos" }
  // ...
])

// Query our data for English Greetings
const GreetingQuery = datalog.query(({ greeting, noun }) => {
  Greetings({ language: 'en', greeting })
  Nouns({ language: 'en', noun })
})

GreetingQuery.view().readAllData()
`

function RKEmbed() {

}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`} description=
      'Description will go into a meta tag in <head />' >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <RunKitCodeBlock sourceCode={exampleCode} />
          <div className={styles.buttons}>< Link
            className={classnames(
              'button button--secondary button--lg',
              styles.getStarted,
            )} to={useBaseUrl('docs/usage')} >
            Get Started</Link>
          </div>
        </div>
      </header><main> {features && features.length && (
        <section className={styles.features}>
          <div className='container'>
            <div className='row'>
              {features.map((props, idx) => (
                <Feature key={idx} {
                  ...props} />
              ))}
            </div>
          </div>
        </section>
      )}
      </main>
    </Layout >
  );
}

export default Home;
