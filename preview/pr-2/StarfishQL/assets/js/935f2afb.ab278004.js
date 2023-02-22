"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Index","href":"/preview/pr-2/StarfishQL/docs/index","docId":"index"},{"type":"category","label":"Introduction","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"What is a Graph Query Engine","href":"/preview/pr-2/StarfishQL/docs/introduction/graph-query-engine","docId":"introduction/graph-query-engine"},{"type":"link","label":"The Objective","href":"/preview/pr-2/StarfishQL/docs/introduction/objective","docId":"introduction/objective"},{"type":"link","label":"StarfishQL Concepts","href":"/preview/pr-2/StarfishQL/docs/introduction/starfish-ql","docId":"introduction/starfish-ql"}]},{"type":"category","label":"Installation & Configuration","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Set up the Graph Query Engine","href":"/preview/pr-2/StarfishQL/docs/install-and-config/setup-graph-queery-engine","docId":"install-and-config/setup-graph-queery-engine"},{"type":"link","label":"Crawling crates.io Data","href":"/preview/pr-2/StarfishQL/docs/install-and-config/crawling-crates-io-data","docId":"install-and-config/crawling-crates-io-data"},{"type":"link","label":"Visualizing Dependency Graph","href":"/preview/pr-2/StarfishQL/docs/install-and-config/visualizing-dependency-graph","docId":"install-and-config/visualizing-dependency-graph"}]},{"type":"category","label":"Architecture of Graph Query Engine","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/preview/pr-2/StarfishQL/docs/architecture-of-graph-query-engine/overview","docId":"architecture-of-graph-query-engine/overview"},{"type":"link","label":"Defining Graph Schema","href":"/preview/pr-2/StarfishQL/docs/architecture-of-graph-query-engine/defining-graph-schema","docId":"architecture-of-graph-query-engine/defining-graph-schema"},{"type":"link","label":"Data Storage","href":"/preview/pr-2/StarfishQL/docs/architecture-of-graph-query-engine/data-storage","docId":"architecture-of-graph-query-engine/data-storage"},{"type":"link","label":"Mutate Operations","href":"/preview/pr-2/StarfishQL/docs/architecture-of-graph-query-engine/mutate-operations","docId":"architecture-of-graph-query-engine/mutate-operations"},{"type":"link","label":"Calculating Node Connectivity","href":"/preview/pr-2/StarfishQL/docs/architecture-of-graph-query-engine/calculating-node-connectivity","docId":"architecture-of-graph-query-engine/calculating-node-connectivity"},{"type":"link","label":"Querying Graph Data","href":"/preview/pr-2/StarfishQL/docs/architecture-of-graph-query-engine/querying-graph-data","docId":"architecture-of-graph-query-engine/querying-graph-data"},{"type":"link","label":"Web API Layer","href":"/preview/pr-2/StarfishQL/docs/architecture-of-graph-query-engine/web-api-layer","docId":"architecture-of-graph-query-engine/web-api-layer"}]},{"type":"category","label":"Architecture of crates.io Crawler","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/preview/pr-2/StarfishQL/docs/architecture-of-crates-io-crawler/overview","docId":"architecture-of-crates-io-crawler/overview"}]},{"type":"category","label":"Architecture of Graph Visualization","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/preview/pr-2/StarfishQL/docs/architecture-of-graph-visualization/overview","docId":"architecture-of-graph-visualization/overview"}]}]},"docs":{"architecture-of-crates-io-crawler/overview":{"id":"architecture-of-crates-io-crawler/overview","title":"Overview","description":"We need to obtain the crate data from crates.io in order to insert them into the database.","sidebar":"tutorialSidebar"},"architecture-of-graph-query-engine/calculating-node-connectivity":{"id":"architecture-of-graph-query-engine/calculating-node-connectivity","title":"Calculating Node Connectivity","description":"In the most trivial sense, node connectivity can be approached by investigating the numbers of in-connections and out-connections at each node. Existing metrics in graph theory include the in-degree and out-degree in directed graphs, as well as the degree in undirected graphs.","sidebar":"tutorialSidebar"},"architecture-of-graph-query-engine/data-storage":{"id":"architecture-of-graph-query-engine/data-storage","title":"Data Storage","description":"Storage of Entities","sidebar":"tutorialSidebar"},"architecture-of-graph-query-engine/defining-graph-schema":{"id":"architecture-of-graph-query-engine/defining-graph-schema","title":"Defining Graph Schema","description":"The schema defines the formats of the entities and the relations to be processed by StarfishQL.","sidebar":"tutorialSidebar"},"architecture-of-graph-query-engine/mutate-operations":{"id":"architecture-of-graph-query-engine/mutate-operations","title":"Mutate Operations","description":"StarfishQL supports the following mutate operations:","sidebar":"tutorialSidebar"},"architecture-of-graph-query-engine/overview":{"id":"architecture-of-graph-query-engine/overview","title":"Overview","description":"The graph query engine is a Rust backend application powered by the rocket web framework and the SeaQL ecosystem.","sidebar":"tutorialSidebar"},"architecture-of-graph-query-engine/querying-graph-data":{"id":"architecture-of-graph-query-engine/querying-graph-data","title":"Querying Graph Data","description":"StarfishQL allows the user to perform queries for graphs and vectors of nodes with highly customizable parameters.","sidebar":"tutorialSidebar"},"architecture-of-graph-query-engine/web-api-layer":{"id":"architecture-of-graph-query-engine/web-api-layer","title":"Web API Layer","description":"The current implementation of the StarfishQL query engine handle requests with the rocket(crates.io) web framework.","sidebar":"tutorialSidebar"},"architecture-of-graph-visualization/overview":{"id":"architecture-of-graph-visualization/overview","title":"Overview","description":"The visualization is a force-directed graph (example on Observable), in which the crate nodes are laid out and connected with depends edges.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Index","description":"Introduction","sidebar":"tutorialSidebar"},"install-and-config/crawling-crates-io-data":{"id":"install-and-config/crawling-crates-io-data","title":"Crawling crates.io Data","description":"Once the database and query engine are up and running, the next step is to prepare the data to fill the database up with.","sidebar":"tutorialSidebar"},"install-and-config/setup-graph-queery-engine":{"id":"install-and-config/setup-graph-queery-engine","title":"Set up the Graph Query Engine","description":"Set up the database","sidebar":"tutorialSidebar"},"install-and-config/visualizing-dependency-graph":{"id":"install-and-config/visualizing-dependency-graph","title":"Visualizing Dependency Graph","description":"With a populated database and a working query engine, it\'s time for some visualization.","sidebar":"tutorialSidebar"},"introduction/graph-query-engine":{"id":"introduction/graph-query-engine","title":"What is a Graph Query Engine","description":"A query engine takes input queries written in a specific query language (e.g. SQL statements), performs the necessary operations in the database, and then outputs the data of interest to the user application. You may also view a query engine as an abstraction layer such that the user can design queries simply in the supported query language and let the query engine do the rest.","sidebar":"tutorialSidebar"},"introduction/objective":{"id":"introduction/objective","title":"The Objective","description":"StarfishQL is a framework for providing a graph database and a graph query engine that interacts with it.","sidebar":"tutorialSidebar"},"introduction/starfish-ql":{"id":"introduction/starfish-ql","title":"StarfishQL Concepts","description":"Before diving into the details, it\'s important to grasp the following fundamental concepts in a high-level sense:","sidebar":"tutorialSidebar"}}}')}}]);