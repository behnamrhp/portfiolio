import type { Projects } from "./types";

export const projects: Projects = {
  list: [
    {
      title: "Golang OTP Dynamic Modular Monolith",
      description:
        "This is a multitenant OTP boilerplate project built on industry best practices for backend development. It guides you from the definition of business functional and non-functional requirements through system design and implementation. The core idea is a dynamic modular monolith, which allows you to transform a standard monolith into a modular one simply by configuring environment variables. The project also comprehensively covers OAuth 2.0 and OpenID Connect (OIDC), a broker adapter supporting both push-based and pull-based messaging (with implementations for NATS and RabbitMQ), circuit breaker pattern, distributed locking, and stateless memoization.",
      links: [
        {
          title: "GitHub",
          url: "https://github.com/behnamrhp/golang-modular-monolith-multi-tenant-otp",
        },
      ],
    },
    {
      title: "Reactive-Query",
      description:
        "A new way of automating requests and updating data in the frontend based on CQS, MVVM, and Reactive programming. The team, with his management, reached this approach and decided to make it open source to be accessible for everyone.",
      links: [
        {
          title: "GitHub",
          url: "https://github.com/Reactive-Query-Lab/reactive-query",
        },
      ],
    },
    {
      title: "ReactVVM",
      description:
        "A lightweight library that provides a reliable MVVM-based architecture to minimize unnecessary re-renders and enhance code maintainability.",
      links: [
        {
          title: "GitHub",
          url: "https://github.com/behnamrhp/React-VVM",
        },
      ],
    },
    {
      title: "Next Clean Boilerplate",
      description:
        "A full-featured Next.js boilerplate, designed as there was no good resource for the new Next.js SSR approach while considering best practices for large-scale maintainable projects, based on clean architecture, MVVM, and functional programming paradigm.",
      links: [
        {
          title: "GitHub",
          url: "https://github.com/behnamrhp/Next-clean-boilerplate",
        },
      ],
    },
    {
      title: "Teaching Whiteboard",
      description:
        "One of his projects which he made after two years of development for teachers, allowing them to have an online board with all drawing tools, adding any PDF or image, highlighting on them, and also recording themselves.",
      links: [
        {
          title: "Netlify",
          url: "https://teaching-whiteboard.netlify.app/",
        },
      ],
    },
  ],
};

