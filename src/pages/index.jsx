import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import usePrismTheme from '@theme/hooks/usePrismTheme';
import classnames from 'classnames';
import React from 'react';
import { Editor as CodeEditor } from 'react-live';
import * as datalog from '@datalogui/datalog';

import styles from './styles.module.css';

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

const exampleCode = `// Already in the browser's scope
// import * as datalog from '@datalogui/datalog'

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
`;

function stringifyValue(value) {
  if (value === undefined) {
    return 'undefined';
  }

  if (typeof value === 'string') {
    return value;
  }

  return JSON.stringify(value, (_, nestedValue) => {
    if (typeof nestedValue === 'symbol') {
      return nestedValue.toString();
    }

    if (typeof nestedValue === 'function') {
      return `[Function ${nestedValue.name || 'anonymous'}]`;
    }

    return nestedValue;
  }, 2);
}

function runExample(sourceCode) {
  const logs = [];
  const scopedConsole = {
    log: (...args) => logs.push(args.map(stringifyValue).join(' ')),
    info: (...args) => logs.push(args.map(stringifyValue).join(' ')),
    warn: (...args) => logs.push(args.map(stringifyValue).join(' ')),
    error: (...args) => logs.push(args.map(stringifyValue).join(' ')),
  };
  const execute = new Function('datalog', 'console', 'sourceCode', (
    '"use strict";\nreturn eval(sourceCode);'
  ));

  const runnableSource = sourceCode.replace(
    /^\s*import\s+\*\s+as\s+datalog\s+from\s+['"]@datalogui\/datalog['"];?\s*$/gm,
    '',
  );

  return {
    logs,
    value: execute(datalog, scopedConsole, runnableSource),
  };
}

function InlineExampleRunner({ sourceCode }) {
  const prismTheme = usePrismTheme();
  const [editableCode, setEditableCode] = React.useState(sourceCode);
  const [result, setResult] = React.useState(null);
  const executeSource = React.useCallback((code) => {
    try {
      setResult({
        ok: true,
        ...runExample(code),
      });
    } catch (error) {
      setResult({
        ok: false,
        error,
      });
    }
  }, []);
  const executeCode = React.useCallback(() => {
    executeSource(editableCode);
  }, [editableCode, executeSource]);

  React.useEffect(() => {
    executeSource(sourceCode);
  }, [executeSource, sourceCode]);

  const output = React.useMemo(() => {
    if (result === null) {
      return 'Click Run example to see the result.';
    }

    if (!result.ok) {
      return result.error.stack || result.error.message;
    }

    const outputParts = [...result.logs];
    if (result.value !== undefined) {
      outputParts.push(stringifyValue(result.value));
    }

    return outputParts.join('\n') || 'undefined';
  }, [result]);

  return (
    <div className={styles.helloWorld}>
      <div className={styles.inlineRunner}>
        <CodeEditor
          className={styles.runnerEditor}
          code={editableCode}
          language="tsx"
          onChange={setEditableCode}
          style={{
            fontFamily: 'var(--ifm-font-family-monospace)',
            fontSize: 'var(--ifm-code-font-size)',
            lineHeight: 'var(--ifm-pre-line-height)',
          }}
          tabSize={2}
          textareaId="homepage-example-editor"
          theme={prismTheme}
        />
        <label
          className={styles.runnerEditorLabel}
          htmlFor="homepage-example-editor">
          Editable example code
        </label>
        <div className={styles.runnerActions}>
          <button
            className="button button--secondary button--sm"
            type="button"
            onClick={() => {
              setEditableCode(sourceCode);
              executeSource(sourceCode);
            }}>
            Reset
          </button>
          <button
            className="button button--secondary button--sm"
            type="button"
            onClick={executeCode}>
            Run example
          </button>
        </div>
        <div className={styles.runnerOutput}>
          <div className={styles.runnerOutputLabel}>Output</div>
          <pre
            aria-live="polite"
            className={classnames(
              styles.runnerOutputValue,
              !result || result.ok ? null : styles.runnerOutputError,
            )}>
            {output}
          </pre>
        </div>
      </div>
    </div>
  );

}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`} description=
      'Description will go into a meta tag in <head />' >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <h3 className={styles.talkLink}>
            Watch the talk from{' '}
            <a href="https://www.hytradboi.com/2022/datalogui-rubbing-datalog-on-uis/">
              <i>Have you Tried Rubbing A Database On It?</i>
            </a>
          </h3>
          <InlineExampleRunner sourceCode={exampleCode} />
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
