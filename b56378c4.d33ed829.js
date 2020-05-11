(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return m}));var o=t(1),r=t(9),a=(t(0),t(177)),c=(t(181),{id:"bacon-numbers",title:"Bacon Numbers"}),i={id:"examples/bacon-numbers",title:"Bacon Numbers",description:"import '../../src/globalDatalog'",source:"@site/docs/examples/bacon-numbers.md",permalink:"/docs/examples/bacon-numbers",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/examples/bacon-numbers.md",sidebar:"docs",previous:{title:"Recursive Queries",permalink:"/docs/examples/recursive-queries"},next:{title:"Terminology",permalink:"/docs/terminology"}},u=[],s={rightToc:u};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,'Now for a more practical example. Bacon Numbers are the degrees of separation\nfrom a given actor to Kevin Bacon. For example, if Elvis Presley was in "Change\nof Habit" with Edward Asner who was in "JFK" with Kevin Bacon, then Elvis\nPresley has a Bacon Number of 2. Let\'s see how we would use datalog to solve\nthis problem:'),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:"live noInline",live:!0,noInline:!0}),'const InMovie = datalog.intoTable([\n  { MovieName: "Change of Habit", Actor: "Elvis Presley" },\n  { MovieName: "Change of Habit", Actor: "Edward Asner" },\n  { MovieName: "Change of Habit", Actor: "Mary Tyler Moore" },\n  { MovieName: "Wild Things", Actor: "Robert Wagner" },\n  { MovieName: "JFK", Actor: "Edward Asner" },\n  { MovieName: "JFK", Actor: "Kevin Bacon" },\n  { MovieName: "Wild Things", Actor: "Kevin Bacon" },\n  // ... More Movies\n])\nconst BaconNumbers = datalog.intoTable([\n  { Actor: "Kevin Bacon", number: 0 },\n])\n\n// Initialize all actors with a bacon number of infinity\ndatalog.query(({ BaconNumber, Actor, NextActor, MovieName }) => {\n  InMovie({ Actor })\n  BaconNumbers.not({ Actor })\n}).view().readAllData().map(({ Actor }) => {\n  BaconNumbers.assert({ Actor, number: Infinity })\n})\n\nconst BaconNumberQuery = datalog.query(({ BaconNumber, Actor, NextActor, CurrentBaconNumber, MovieName }) => {\n  InMovie({ Actor, MovieName })\n  InMovie({ MovieName, Actor: NextActor })\n  BaconNumbers({ Actor, number: BaconNumber })\n  BaconNumbers({ Actor: NextActor, number: CurrentBaconNumber })\n})\n\nBaconNumberQuery.viewExt()\n  .mapEffect((recentDatum) => {\n    // If it\'s a join on the same actor, we\'ll pass\n    if (recentDatum.datum.Actor === recentDatum.datum.NextActor) {\n      return\n    }\n    switch (recentDatum.kind) {\n      case datalog.Added: {\n        const {\n          NextActor: Actor,\n          BaconNumber,\n          CurrentBaconNumber,\n        } = recentDatum.datum\n\n        if (CurrentBaconNumber > BaconNumber + 1) {\n          // We found a smaller bacon number. Let\'s swap out the datum\n          BaconNumbers.retract({ Actor, number: CurrentBaconNumber })\n          BaconNumbers.assert({ Actor, number: BaconNumber + 1 })\n        }\n        break\n      }\n      // Ignoring this for now\n      case datalog.Removed:\n        break;\n      case datalog.Modified:\n        throw new Error(\n          "Unhandled. We don\'t expect queries to give us a modified change."\n        )\n    }\n  })\n  .onChange(() => {\n    // After we\'ve mapped the effect, we\'ll run the query again to\n    // update our results\n    BaconNumberQuery.runQuery()\n  })\n\n// A simple component to show off our data\nconst BaconNumbersComponent = () => {\n  const baconNumbersView = useMemo(() => BaconNumbers.view(), [])\n  const [baconNumbers, updateBaconNumbers] = useState(baconNumbersView.readAllData())\n\n  // Update our local react state if the query changes\n  useEffect(() => {\n    return baconNumbersView.onChange(() => updateBaconNumbers(baconNumbersView.readAllData()))\n  }, [baconNumbersView])\n\n  return <pre>\n    {JSON.stringify(baconNumbers, null, 2)}\n  </pre>\n }\n\nrender(<BaconNumbersComponent />)\n')),Object(a.b)("p",null,"The gist is that we use this query:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"const BaconNumberQuery = datalog.query(({ BaconNumber, Actor, NextActor, CurrentBaconNumber, MovieName }) => {\n  InMovie({ Actor, MovieName })\n  InMovie({ MovieName, Actor: NextActor })\n  BaconNumbers({ Actor, number: BaconNumber })\n  BaconNumbers({ Actor: NextActor, number: CurrentBaconNumber })\n})\n")),Object(a.b)("p",null,"to find a link between an ",Object(a.b)("inlineCode",{parentName:"p"},"Actor")," and a ",Object(a.b)("inlineCode",{parentName:"p"},"NextActor"),". We also pull in their Bacon\nNumbers so we can compare if using the link to ",Object(a.b)("inlineCode",{parentName:"p"},"Actor")," is better than using the\n",Object(a.b)("inlineCode",{parentName:"p"},"NextActor"),"'s ",Object(a.b)("inlineCode",{parentName:"p"},"CurrentBaconNumber"),". The comparison is done in ",Object(a.b)("inlineCode",{parentName:"p"},"mapEffect"),". If\nthe link through ",Object(a.b)("inlineCode",{parentName:"p"},"Actor")," is a better Bacon Number then we change ",Object(a.b)("inlineCode",{parentName:"p"},"NextActor"),"'s\nBacon Number to be that."),Object(a.b)("p",null,"As an exercise for the reader, try changing this so that it shows the trail of\nmovies too."))}m.isMDXComponent=!0},181:function(e,n,t){"use strict";(function(e){var n=t(183),o=t(186);try{"undefined"!=typeof window&&(window.datalog=n,window.useQuery=o.useQuery),void 0!==e&&(e.datalog=n,e.useQuery=o.useQuery)}catch(r){}console.log("Datalog is available in the console:",n)}).call(this,t(75))}}]);