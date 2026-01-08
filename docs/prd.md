# **Prd** **Goal**

personal portfolio website for a persian software engineer to show my abilities, skills and philosophy.

## FR

- The whole portfolio should be a book in a style of Persian ancient books with a Persian empire theme.  
- You shouldn’t just copy paste the description that I say in this prd and you should fix them grammatically then put them in the project.  
- All fonts shouldn’t be loaded dynamically and should load from the project assets and should use nextjs tools for loading fonts.  
- This page should use github pages so you should handle all configurations and workflows to deploy to github pages with the same remote.  
- Cover and all titles font should be Cormorant and other content should be \`eb garamond  font.  
- The palette should follow these rules:

  ## Persian Ancient Manuscript Palette — “Lapis & Gold”

  ### Primary — Aged Manuscript Paper

  Hex: \#EFE3C6  
   This is your page. Warm, slightly yellowed, never white. It should feel fibrous and matte.

  Use it for:

* main backgrounds

* content surfaces

* “page” layers during page-turn animations

  ---

  ### Secondary — Night Ink (Calligraphy Black)

  Hex: \#1F1B17  
   This is not pure black. It’s the ink of poetry and geometry.

  Use it for:

* body text

* headings

* outlines and fine details

  ---

  ### Tertiary — Lapis Lazuli Blue

  Hex: \#1F4E79  
   This is historically accurate and symbolically loaded. Lapis was expensive, sacred, and deliberate.

  Use it for:

* links

* chapter markers

* ornamental lines

* interactive focus states

**Technologies**

- Should use turn.js library for this book which you can find its documents from these websites:  
  - [https://github.com/blasten/turn.js/wiki/Reference](https://github.com/blasten/turn.js/wiki/Reference)  
  - [http://turnjs.com/docs/Option:\_pages](http://turnjs.com/docs/Option:_pages)  
- This website should use nextjs and should be ssg.  
- Should use typescript as language.  
- For styling you should use tailwindcss.  
- For images should use nextjs image component with considering best practices of image optimizations.

**Architecture**

- The project should follow mvvm architecture.  
- In the view, it should follow atomic design which covers folder and file structure as well.  
- UI logic should be defined in a custom hook as view model and viewmodel and call models inside of them.  
- Should define all fetch and data logics inside of the model layer.

**I18n**

- This website should now just work with 1 language English.  
- All contents should come from an object which is in input/dict.ts so if i wanna add any more languages or any more content I can edit all from here.

**UI and Responsive**

- The project should be responsive, on mobile or tablets, the book should be one page and on a laptop and a bigger screen should be a two page book and for all screens, the book's size should cover more than 90% of the screen.  
- All borders of the project should be same and small

**Main use cases**

- Each page of the book should be attached to one path in the url.  
- Users on scroll should turn the page and the path should be changed without refreshing the page. (On to many scroll shouldn’t make too many turning page and consider technique as deferred or throttle for many scroll)  
- Users should be able to turn the page with back and forward buttons on the keyboard.  
- Users on the screen should have buttons on sides of the screen to turn the page which is flesh in the style of ancient persian style.  
- Above each page should have a bookmark which overflowed from top of the book and on this bookmark, written name of the page and it’s clickable and clicking on each bookmark should turn the page to that bookmark.  
- All bookmarks should cover each other so based on the width of each bookmark after each page should have bookmarks next to each other.  
- Bookmarks should overflow with the book and if all pages are finished just attach the rest of the bookmarks at the end of book width.  
- The height and width of the screen shouldn’t get scrolled and just the inside of the book can be scrolled.  
- Portfolio should have all these pages:  
  - Cover of the book which is image and title of the book which is root of the project  
  - Who is he? Which has about him and which one of your problems he can solve  
  - His skills  
  - His projects  
  - His articles

**Per page use cases**

- **Root page which is book cover**  
  - Cover page should be hard book not like other project to fill hard fancy thick cover and its image should come from assets/images/cover-page.png
  - Cover should contain my image at its center and should be loaded from assets folder and uses nextjs image component which is assets/images/me.jpg.  
  - Cover should contain title as: A Persian Engineer and its font should be Cormorant.

- **Who is he page**  
  - This page should have these sections:  
    - Who is he? This is the title and content should be grammar correct version of this for both language which can be switched: Behnam rahimpour, a Persian musician with national awards in classical music which in his early 20’th ages through his military service, turned to (should be bold) a software engineer and now he has over 8 years of experience (number of the years should be minus of current year and 2018 to be dynamic) in building software which can help companies and team in defining business requirements, technical and system design, development, tests, maintenance, observability and infrastructure of softwares. He has experiences with developing and leading in several international agile based cross-functional teams during his career in frontend and backend part. Also he has many stories about his challenges with team management in several agile based atmospheres on several different industries, that’s why he has confidence on solving team managements and problems of teams about designing team and development process based on each business challenges and emphasising on leveraging ownership of team members not just theoretical agile methodologies. His main philosophy about success in the software teams is having ownership by defining automated learning loops and leveraging AI to automate the repetitive processes and achieve better qualities.  
    - Which parts can he help you with?  
      - If you have a team whose performance decreases or their development pace decreases but you don’t know why?  
      - If you have a product whose performance is low or your business entered to another level but your product cannot handle more users.  
      - If you want to create a product but you care about performance of your future product and want someone to help you design your product system, manage a team and develop your product.  
      - If you wanna leverage ai in your application.  
      - If on your production product, getting trouble but cannot address the issue or it takes too much time to find the issue.  
    - At the end of this page should have a link of his cv which is a constant inside of input/contanst.ts which is inside of it’s CV\_LINK so I can find it fast and update it whenever I want.  
- **His skills Page**  
  - This page should have these categorized sections and skills:  
    - Languages  
      - Golang  
      - Typescript  
      - Dart  
      - Python  
      - Bash  
      - PHP  
    - Software engineering practices and architectures  
      - Microservices, Monolith, Modular Monolith  
      - MV\* architectural pattern  
      - System Design  
      - Clean-Architecture  
      - Design Patterns  
      - OOP, Functional and Reactive programming  
      - Event-driven Architecture  
      - SOLID, DRY, KISS, YAGNI, etc Principles.  
      - UML Diagrams  
      - Agile Methodologies  
      - TDD/BDD  
      - Unit-testing, Integration test and e2e test.  
    - Automation and infrastructure:  
      - Docker  
      - AWS  
      - Kubernetes  
      - Docker-Swarm  
      - Terraform  
      - Ansible  
      - Fluxcd  
      - Jenkins  
      - Github Actions  
    - Backend  
      - [Nest.js](http://Nest.js)  
      - MongoDB  
      - Redis  
      - Kafka  
      - RabbitMQ  
      - Nats  
      - Postgresql  
      - Mysql  
      - Keycloak  
      - OAuth2 \+ OIDC  
      - ELK  
      - Prometheus   
      - Grafana  
      - Promtail, Loki  
      - GraphQL  
      - Websocket  
    - Frontend  
      - React  
      - Next.js  
      - Flutter  
      - Anguar  
      - React-Query  
      - Redux  
      - I18n  
      - Rxjs  
      - Rendering patterns (CSR, SSG, SSR, ISR, Resumability)  
      - Storybook  
      - CSS-in-JS (generation 1, 2, 3\)  
      - Tailwind  
      - Shadcn  
      - MUI  
      - PWA  
      - Core web vitals  
    - Each tools should search and if each technology has logo should download it and use it with image component of nextjs with logo and bottom of logo should be its title.  
    - Software engineer principles and architecture doesn’t need logo and should be separated at first.  
    - Logos should be pointer cursor and should be draggable by this library and on leave each icon should return to its own place: [https://all-drag.netlify.app/](https://all-drag.netlify.app/)  
    - Top of the page should write that you can drag each logo which is my first library which I wrote this library after first year of learning programming with vanilla js.  
    - On click each title should lead to document of technology.  
    - Each logo should be square with a small border radius like other borders with same variable.  
    - List of technologies should be an object in input folder as skills.ts and should be object with key value and separated by categories so in future I can easily update the list.  
    - Each skill object in side of category object should have, title, image and document link.  
    -   
- **His opensource projects Page**  
  - In this page each row should define one project and each project should have title, description, optional screenshot image and list of links which each item should be title of link and url of link.  
  - This object should be in input folder as project.ts so I can update it later whenever I want.  
  - This page should have these projects:  
    - Golang OTP dynamic modular monolith:   
      - Link:   
        - Title: github  
        - Url: [https://github.com/behnamrhp/golang-modular-monolith-multi-tenant-otp](https://github.com/behnamrhp/golang-modular-monolith-multi-tenant-otp)  
      - Description: This is a multitenant OTP boilerplate project built on industry best practices for backend development. It guides you from the definition of business functional and non-functional requirements through system design and implementation. His core idea is a dynamic modular monolith, which allows you to transform a standard monolith into a modular one simply by configuring environment variables.

        The project also comprehensively covers:

* OAuth 2.0 and OpenID Connect (OIDC)  
* A broker adapter supporting both push-based and pull-based messaging (with implementations for NATS and RabbitMQ)  
* Circuit breaker pattern  
* Distributed locking  
* Stateless memoization  
  - Reactive-query:   
    - Link:  
      - Title: github  
        - [https://github.com/Reactive-Query-Lab/reactive-query](https://github.com/Reactive-Query-Lab/reactive-query)  
      - Description:  New way of automating requests and updating data in frontend based on CQS, MVVM and Reactive programming which his team with his management reached to this approach and they decided to make it open source to be accessible for everyone.  
    - Reactvvm  
      - Link  
        - Title: github  
        - Url: https://github.com/behnamrhp/React-VVM  
      - Description: A lightweight library that provides a reliable MVVM-based architecture to minimize unnecessary re-renders and enhance code maintainability.  
    - Next clean boilerplate  
      - Link  
        - Title: github  
        - URL: [https://github.com/behnamrhp/Next-clean-boilerplate](https://github.com/behnamrhp/Next-clean-boilerplate)  
      - Description: A Full featured nextjs boilerplate, which he designed as there was no good resource for new Nextjs SSR approach with considering best practices for large scale maintainable project, based on clean architecture, mvvm and functional programming paradigm.   
    - Teaching Whiteboard  
      - Link:  
        - Title: Nelify  
        - URL: [https://teaching-whiteboard.netlify.app/](https://teaching-whiteboard.netlify.app/)  
      - Description: One of his projects which he made after two years of development which he made for teachers to let them have an online board with all drawing tools, adding any pdf or image and highlight on them and also record themselves.  
- Articles page  
  - In this page, we should get the articles list from [dev.to](http://dev.to) website based on this doc :[https://developers.forem.com/api/v0\#tag/articles/operation/getArticles](https://developers.forem.com/api/v0#tag/articles/operation/getArticles)  
  - For each row should show on article which shows number view of each article, title and image and on click this row should another tab lead user to article link.  
  - Articles list shouldn’t be prerendered and should on ui each time after load the page from frontend fetch the article so alway can have last updates not one time rendered results.  
  - On loading info to get articles should show skeleton loading and on error should show message that we got issue on connecting to [dev.t](http://dev.to)o as our articles center, please try again later.  
  - This list should be paginated and at most should show 8 articles.  
  - You should api key from env as ARTICLE\_API\_KEY