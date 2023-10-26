<template>
  <div>
    <div>
      <nav
        class="uk-navbar-container uk-margin-medium-top uk-margin-medium-bottom"
        style="background: none !important"
      >
        <div class="uk-container">
          <div uk-navbar>
            <div class="uk-navbar-left">
              <a
                class="uk-navbar-item uk-logo"
                href="#"
                aria-label="Back to Home"
                >Logo</a
              >
              <!-- <ul class="uk-navbar-nav">
                <li>
                  <a href="#">
                    <span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                    Features
                  </a>
                </li>
              </ul> -->
            </div>
            <div class="uk-navbar-center">
              <div class="uk-inline">
                <span
                  class="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: search"
                ></span>
                <input
                  class="uk-input uk-form-width-large uk-border-pill"
                  type="text"
                  placeholder="Search by name"
                />
              </div>
            </div>
            <div class="uk-navbar-right">
              <ul class="uk-navbar-nav">
                <!-- <li>
                  <img class="uk-border-circle" width="40" height="40" src="https://i.pravatar.cc/100" alt="Avatar">
                </li> -->
                <li>
                  <a href="#">
                    <span
                      class="uk-icon uk-margin-small-right"
                      uk-icon="icon: heart"
                    ></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="uk-margin-small-right">EN</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- <div class="uk-grid uk-grid-collapse" uk-grid>

    </div> -->
    <div>
      <div class="uk-flex-center uk-text-center" uk-grid>
        <div v-for="category in categories" :key="category">
          <button class="uk-button uk-button-default uk-border-pill">
            {{ category }}
          </button>
        </div>
      </div>
    </div>

    <div class="uk-container uk-margin-medium-top">
      <div
        class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
        data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"
        uk-img
        style="border-radius: 15px"
      >
        <h1>Background Image</h1>
      </div>
    </div>

    <div class="uk-container uk-margin-medium-top uk-margin-small-bottom">
      <div class="uk-grid" uk-grid>
        <h3 class="uk-width-1-5 uk-text-bold">Popular Now</h3>
        <div class="uk-width-expand"></div>
        <h3
          class="uk-width-1-5 uk-button uk-button-default uk-border-pill uk-text-right"
        >
          View All
        </h3>
      </div>
    </div>

    <div class="uk-container uk-margin-small-top">
      <div class="uk-grid uk-grid-match" uk-grid>
        <div v-for="book in books" :key="book?.title" class="uk-width-1-5">
          <div class="uk-card uk-card-default" style="border-radius: 15px">
            <div class="uk-card-media-top">
              <img
                :src="book.thumbnail"
                style="
                  width: 100%;
                  height: 240px;
                  object-fit: cover;
                  border-radius: 15px;
                "
                :alt="`${book?.title} Thumbnail's`"
              />
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{ book?.title }}</h3>
              <p>{{ book?.author }}</p>
              <p>{{ book?.ratings }}/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="uk-text-center uk-grid-collapse" uk-grid>
    <div class="uk-width-1-4">

    </div>
    <div class="uk-width-expand">
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input class="uk-input" type="text" aria-label="Not clickable icon">
      </div>
    </div>
    <div class="uk-width-1-4">
      <div class="uk-card uk-card-default uk-card-body">Expand</div>
    </div>
  </div> -->
</template>

<script>
import { v4 as uuid } from 'uuid'
import Cookie from 'js-cookie'
export default {
  name: 'IndexPage',
  data() {
    return {
      userId: Cookie.get('userId') || null,
      categories: [
        'Art',
        'Biography',
        'Computers',
        'History',
        'Medical',
        'Poetry',
      ],
      books: [
        {
          category: 'Computers',
          title: 'T-SQL Querying',
          description:
            "T-SQL insiders help you tackle your toughest queries and query-tuning problems Squeeze maximum performance and efficiency from every T-SQL query you write or tune. Four leading experts take an in-depth look at T-SQL's internal architecture and offer advanced practical techniques for optimizing response time and resource usage. Emphasizing a correct understanding of the language and its foundations, the authors present unique solutions they have spent years developing and refining. All code and techniques are fully updated to reflect new T-SQL enhancements in Microsoft SQL Server 2014 and SQL Server 2012. Write faster, more efficient T-SQL code: Move from procedural programming to the language of sets and logic Master an efficient top-down tuning methodology Assess algorithmic complexity to predict performance Compare data aggregation techniques, including new grouping sets Efficiently perform data-analysis calculations Make the most of T-SQL's optimized bulk import tools Avoid date/time pitfalls that lead to buggy, poorly performing code Create optimized BI statistical queries without additional software Use programmable objects to accelerate queries Unlock major performance improvements with In-Memory OLTP Master useful and elegant approaches to manipulating graphs About This Book For experienced T-SQL practitioners Includes coverage updated from Inside Microsoft SQL Server 2008 T-SQL Querying and Inside Microsoft SQL Server 2008 T-SQL Programming Valuable to developers, DBAs, BI professionals, and data scientists Covers many MCSE 70-464 and MCSA/MCSE 70-461 exam topics",
          language: 'en',
          author: 'Itzik Ben-Gan',
          thumbnail:
            'http://books.google.com/books/content?id=uUIFCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          ratings: 0,
        },
        {
          category: 'Computers',
          title: 'Power Query for Power BI and Excel',
          description:
            'Power Query for Power BI and Excel is a book for people who are tired of copying and pasting data into Excel worksheets. Power Query, part of the Microsoft Power BI suite, is a tool that automates the process of getting data into Excel and will save you hours of dull, repetitive, and error-prone work! Power Query makes it easy to extract data from many different data sources, filter that data, aggregate it, clean it and perform calculations on it, finally loading that data into either your worksheet or directly into the new Excel 2013 Data Model used by Power Pivot. This concise, practical book provides a complete guide to Power Query and how to use it to solve all of your Excel data-loading problems. Power Query for Power BI and Excel goes well beyond the surface of what Power Query can do. The book goes deep into the underlying M language, showing you how to do amazing things that aren’t going to be possible from just the GUI interface that is covered in most other books. You’ll have full command of the GUI, and you’ll be able to drop into the M language to go beyond what the GUI provides. The depth in this book makes it a must-have item for anyone who is pushing Power BI and Excel to their limits in the pursuit of business intelligence from data analysis. Teaches the basics of using Power Query to load data into Excel Helps you solve common, data-related problems with Power Query Shows how to write your own solutions in the powerful M language',
          language: 'en',
          author: 'Christopher Webb',
          thumbnail:
            'http://books.google.com/books/content?id=rXDMoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          ratings: 0,
        },
        {
          category: 'Computers',
          title:
            'Collect, Transform and Combine Data Using Power Bi and Power Query in Excel',
          description:
            'Did you know that there is a technology inside Excel, and Power BI, that allows you to create magic in your data, avoid repetitive manual work, and save you time and money? Using Excel and Power BI, you can: Save time by eliminating the pain of copying and pasting data into workbooks and then manually cleaning that data. Gain productivity by properly preparing data yourself, rather than relying on others to do it. Gain effiiciency by reducing the time it takes to prepare data for analysis, and make informed decisions more quickly. With the data connectivity and transformative technology found in Excel and Power BI, users with basic Excel skills import data and then easily reshape and cleanse that data, using simple intuitive user interfaces. Known as "Get & Transform" in Excel 2016, as the "Power Query" separate add-in in Excel 2013 and 2010, and included in Power BI, you\'ll use this technology to tackle common data challenges, resolving them with simple mouse clicks and lightweight formula editing. With your new data transformation skills acquired through this book, you will be able to create an automated transformation of virtually any type of data set to mine its hidden insights.',
          language: 'en',
          author: 'Gil Raviv',
          thumbnail:
            'http://books.google.com/books/content?id=gzmDswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          ratings: 0,
        },
        {
          category: 'Language Arts & Disciplines',
          title: "The Writer's Digest Guide To Query Letters",
          description:
            "Make That Crucial, Positive First Impression Anyone who's researched the marketplace knows: The path to publication begins with your query letter. If your query is weak, unfocused, or uninspired, an editor or agent won't even bother to request your article, novel manuscript, or nonfiction book proposal. But a well-crafted, compelling query sent to the right editor or agent is an essential sales tool for fiction writers and the most effective way for nonfiction writers to pre-sell your idea. In this book, professional freelance writer and magazine editor Wendy Burt-Thomas shares practical advice on how to craft persuasive letters that connect with editors and agents and ultimately generate sales for you. You'll learn how to: • Conduct targeted research to find suitable editors and agents • Hook an editor with a tantalizing lead and shape a summary that compels editors to buy • Select the strongest slant for your book or article • Use research and interview shortcuts that keep your query prep profitable • Make your query rejection-proof by weeding out subtle mistakes that can sabotage your project • Communicate your author platform and sell yourself as the best writer for the subject Complete with dozens of sample queries–some that landed article assignments, agents, or book deals, and others that never stood a chance–this book offers you a comprehensive strategy for presenting your writing ideas in a way that will increase your chances of publication. Though the title may lead some to believe it's strictly to be shelved as a reference manual, The Writer's Digest Guide to Query Letters is a smooth read from cover to cover.",
          language: 'en',
          author: 'Wendy Burt-Thomas',
          thumbnail:
            'http://books.google.com/books/content?id=tiBjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          ratings: 0,
        },
        {
          category: 'Computers',
          title: 'Flexible Query Answering Systems',
          description:
            'This book constitutes the refereed proceeding of the 7th International Conference on Flexible Query Answering Systems, FQAS 2006, held in Milan, Italy in June 2006. The 60 revised full papers presented were carefully reviewed and selected from numerous submissions. The papers are organized in topical sections on flexibility in database management and quering, vagueness and uncertainty in XML quering and retrieval, information retrieval and filtering, multimedia information access, user modeling and personalization, knowledge and data extraction, intelligent information extraction from text, and knowledge representation and reasoning.',
          language: 'en',
          author: 'Henrik Legind Larsen',
          thumbnail:
            'http://books.google.com/books/content?id=g7YNeVDDbVgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          ratings: 0,
        },
        {
          category: 'Computers',
          title: 'Deep Web Query Interface Understanding and Integration',
          description:
            'There are millions of searchable data sources on the Web and to a large extent their contents can only be reached through their own query interfaces. There is an enormous interest in making the data in these sources easily accessible. There are primarily two general approaches to achieve this objective. The first is to surface the contents of these sources from the deep Web and add the contents to the index of regular search engines. The second is to integrate the searching capabilities of these sources and support integrated access to them. In this book, we introduce the state-of-the-art techniques for extracting, understanding, and integrating the query interfaces of deep Web data sources. These techniques are critical for producing an integrated query interface for each domain. The interface serves as the mediator for searching all data sources in the concerned domain. While query interface integration is only relevant for the deep Web integration approach, the extraction and understanding of query interfaces are critical for both deep Web exploration approaches. This book aims to provide in-depth and comprehensive coverage of the key technologies needed to create high quality integrated query interfaces automatically. The following technical issues are discussed in detail in this book: query interface modeling, query interface extraction, query interface clustering, query interface matching, query interface attribute integration, and query interface integration. Table of Contents: Introduction / Query Interface Representation and Extraction / Query Interface Clustering and Categorization / Query Interface Matching / Query Interface Attribute Integration / Query Interface Integration / Summary and Future Research',
          language: 'en',
          author: 'Eduard C. Dragut',
          thumbnail:
            'http://books.google.com/books/content?id=L0rrrfE0bOsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          ratings: 0,
        },
        {
          category: 'Computers',
          title: 'Query Processing in Database Systems',
          description:
            'This book is an anthology of the results of research and development in database query processing during the past decade. The relational model of data provided tremendous impetus for research into query processing. Since a relational query does not specify access paths to the stored data, the database management system (DBMS) must provide an intelligent query-processing subsystem which will evaluate a number of potentially efficient strategies for processing the query and select the one that optimizes a given performance measure. The degree of sophistication of this subsystem, often called the optimizer, critically affects the performance of the DBMS. Research into query processing thus started has taken off in several directions during the past decade. The emergence of research into distributed databases has enormously complicated the tasks of the optimizer. In a distributed environment, the database may be partitioned into horizontal or vertical fragments of relations. Replicas of the fragments may be stored in different sites of a network and even migrate to other sites. The measure of performance of a query in a distributed system must include the communication cost between sites. To minimize communication costs for-queries involving multiple relations across multiple sites, optimizers may also have to consider semi-join techniques.',
          language: 'en',
          author: 'W. Kim',
          thumbnail:
            'http://books.google.com/books/content?id=AOGpCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          ratings: 0,
        },
        {
          category: 'Computers',
          title: 'Power Query for Power BI and Excel',
          description:
            'Power Query for Power BI and Excel is a book for people who are tired of copying and pasting data into Excel worksheets. Power Query, part of the Microsoft Power BI suite, is a tool that automates the process of getting data into Excel and will save you hours of dull, repetitive, and error-prone work! Power Query makes it easy to extract data from many different data sources, filter that data, aggregate it, clean it and perform calculations on it, finally loading that data into either your worksheet or directly into the new Excel 2013 Data Model used by Power Pivot. This concise, practical book provides a complete guide to Power Query and how to use it to solve all of your Excel data-loading problems. Power Query for Power BI and Excel goes well beyond the surface of what Power Query can do. The book goes deep into the underlying M language, showing you how to do amazing things that aren’t going to be possible from just the GUI interface that is covered in most other books. You’ll have full command of the GUI, and you’ll be able to drop into the M language to go beyond what the GUI provides. The depth in this book makes it a must-have item for anyone who is pushing Power BI and Excel to their limits in the pursuit of business intelligence from data analysis. Teaches the basics of using Power Query to load data into Excel Helps you solve common, data-related problems with Power Query Shows how to write your own solutions in the powerful M language',
          language: 'en',
          author: 'Christopher Webb',
          thumbnail:
            'http://books.google.com/books/content?id=ZAH1AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          ratings: 0,
        },
        {
          category: 'Computers',
          title: 'Query Store for SQL Server 2019',
          description:
            "Apply the new Query Store feature to identify and fix poorly performing queries in SQL Server. Query Store is an important and recent feature in SQL Server that provides insight into the details of query execution and how that execution has changed over time. Query Store helps to identify queries that aren’t performing well, or that have regressed in their performance. Query Store provides detailed information such as wait stats that you need to resolve root causes, and it allows you to force the use of a known good execution plan. With SQL Server 2017 and later you can automate the correction of regressions in performance. Query Store for SQL Server 2019 helps you protect your database’s performance during upgrades of applications or version of SQL Server. The book provides fundamental information on how Query Store works and best practices for implementation and use. You will learn to run and interpret built-in reports, configure automatic plan correction, and troubleshoot queries using Query Store when needed. Query Store for SQL Server 2019 helps you master Query Store and bring value to your organization through consistent query execution times and automate correction of regressions. What You'll LearnApply best practices in implementing Query Store on production servers Detect and correct regressions in query performanceLower the risk of performance degradation following an upgradeUse tools and techniques to get the most from Query StoreAutomate regression correction and other uses of Query Store Who This Book Is For SQL Server developers and administrators responsible for query performance on SQL Server. Anyone responsible for identifying poorly performing queries will be able to use Query Store to find these queries and resolve the underlying issues.",
          language: 'en',
          author: 'Tracy Boggiano',
          thumbnail:
            'http://books.google.com/books/content?id=dkqzDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          ratings: 0,
        },
        {
          category: 'Computers',
          title: 'Excel Power Pivot & Power Query For Dummies',
          description:
            "A guide to PowerPivot and Power Query no data cruncher should be without! Want to familiarize yourself with the rich set of Microsoft Excel tools and reporting capabilities available from PowerPivot and Power Query? Look no further! Excel PowerPivot & Power Query For Dummies shows you how this powerful new set of tools can be leveraged to more effectively source and incorporate 'big data' Business Intelligence and Dashboard reports. You'll discover how PowerPivot and Power Query not only allow you to save time and simplify your processes, but also enable you to substantially enhance your data analysis and reporting capabilities. Gone are the days of relatively small amounts of data—today's data environment demands more from business analysts than ever before. Now, with the help of this friendly, hands-on guide, you'll learn to use PowerPivot and Power Query to expand your skill-set from the one-dimensional spreadsheet to new territories, like relational databases, data integration, and multi-dimensional reporting. Demonstrates how Power Query is used to discover, connect to, and import your data Shows you how to use PowerPivot to model data once it's been imported Offers guidance on using these tools to make analyzing data easier Written by a Microsoft MVP in the lighthearted, fun style you've come to expect from the For Dummies brand If you spend your days analyzing data, Excel PowerPivot & Power Query For Dummies will get you up and running with the rich set of Excel tools and reporting capabilities that will make your life—and work—easier.",
          language: 'en',
          author: 'Michael Alexander',
          thumbnail:
            'http://books.google.com/books/content?id=B1rGCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          ratings: 0,
        },
      ],
    }
  },
  created() {
    if (this.userId === null) {
      const id = uuid()
      Cookie.set('userId', id, { expires: 30 })
      this.userId = id
    }
  },
}
</script>
