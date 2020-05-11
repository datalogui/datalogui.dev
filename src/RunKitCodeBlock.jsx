import React, { Children } from 'react';
import Codeblock from '@theme/CodeBlock';
import styles from './pages/styles.module.css';

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

function RK() {
  const [RunKit, setRunKit] = React.useState(null)
  React.useEffect(() => {
    let stillMounted = true
    if (!RunKit) {
      loadDynamicScript("https://embed.runkit.com").then(() => {
        // Defer until RK loaded in global scope
        const intervalID = setInterval(() => {
          if (typeof RunKit !== undefined) {
            clearInterval(intervalID)
            if (stillMounted) {
              setRunKit(window.RunKit)
            }
          }
        }, 16)
      })
    }

    return () => {
      stillMounted = false
    }
  })

  return RunKit

}

export default function RKCodeBlock(props) {
  const sourceCode = props.sourceCode || props.children
  const RunKit = RK()
  const codePlaygroundRef = React.useRef()
  const staticCodeRef = React.useRef()
  React.useEffect(() => {
    if (RunKit === null) {
      return
    }

    const notebook = RunKit.createNotebook({
      gutterStyle: 'none',
      nodeVersion: '12.x.x',
      // the parent element for the new notebook
      element: codePlaygroundRef.current,
      // specify the source of the notebook
      source: sourceCode,
      theme: "one-dark"
    })
    notebook.onLoad = () => {
      if (staticCodeRef.current) {
        staticCodeRef.current.style.display = "none";
      }
    }

    return () => {
      staticCodeRef.current.style.display = "";
      notebook.destroy()
    }


  })
  return <div ref={codePlaygroundRef} className={styles.helloWorld}>
    <div ref={staticCodeRef}>
      <Codeblock className="language-ts">
        {sourceCode}
      </Codeblock>
    </div>
  </div>
}
