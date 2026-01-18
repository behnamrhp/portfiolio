import type { Skills } from "./types";

export const skills: Skills = {
  // Software engineering principles - no logos, text only
  principles: [
    "Microservices, Monolith, Modular Monolith",
    "MV* architectural pattern",
    "System Design",
    "Clean-Architecture",
    "Design Patterns",
    "OOP, Functional and Reactive programming",
    "Event-driven Architecture",
    "SOLID, DRY, KISS, YAGNI, etc Principles",
    "UML Diagrams",
    "Agile Methodologies",
    "TDD/BDD",
    "Unit-testing, Integration test and e2e test",
  ],

  categories: [
    {
      title: "Languages",
      skills: [
        {
          title: "Golang",
          image: "/assets/images/logos/golang.webp",
          documentLink: "https://go.dev/doc/",
        },
        {
          title: "TypeScript",
          image: "/assets/images/logos/typescript.webp",
          documentLink: "https://www.typescriptlang.org/docs/",
        },
        {
          title: "Dart",
          image: "/assets/images/logos/dart.webp",
          documentLink: "https://dart.dev/guides",
        },
        {
          title: "Python",
          image: "/assets/images/logos/python.webp",
          documentLink: "https://docs.python.org/",
        },
        {
          title: "Bash",
          image: "/assets/images/logos/bash.webp",
          documentLink: "https://www.gnu.org/software/bash/manual/",
        },
        {
          title: "PHP",
          image: "/assets/images/logos/php.webp",
          documentLink: "https://www.php.net/docs.php",
        },
      ],
    },
    {
      title: "Automation and Infrastructure",
      skills: [
        {
          title: "Docker",
          image: "/assets/images/logos/docker.webp",
          documentLink: "https://docs.docker.com/",
        },
        {
          title: "AWS",
          image: "/assets/images/logos/aws.webp",
          documentLink: "https://docs.aws.amazon.com/",
        },
        {
          title: "Kubernetes",
          image: "/assets/images/logos/kubernetes.webp",
          documentLink: "https://kubernetes.io/docs/",
        },
        {
          title: "Terraform",
          image: "/assets/images/logos/terraform.webp",
          documentLink: "https://www.terraform.io/docs",
        },
        {
          title: "Ansible",
          image: "/assets/images/logos/ansible.webp",
          documentLink: "https://docs.ansible.com/",
        },
        {
          title: "Fluxcd",
          image: "/assets/images/logos/fluxcd.webp",
          documentLink: "https://fluxcd.io/docs/",
        },
        {
          title: "Jenkins",
          image: "/assets/images/logos/jenkins.webp",
          documentLink: "https://www.jenkins.io/doc/",
        },
        {
          title: "Github Actions",
          image: "/assets/images/logos/github-actions.webp",
          documentLink: "https://docs.github.com/en/actions",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          title: "Nest.js",
          image: "/assets/images/logos/nestjs.webp",
          documentLink: "https://docs.nestjs.com/",
        },
        {
          title: "MongoDB",
          image: "/assets/images/logos/mongodb.webp",
          documentLink: "https://docs.mongodb.com/",
        },
        {
          title: "Redis",
          image: "/assets/images/logos/redis.webp",
          documentLink: "https://redis.io/documentation",
        },
        {
          title: "Kafka",
          image: "/assets/images/logos/kafka.webp",
          documentLink: "https://kafka.apache.org/documentation/",
        },
        {
          title: "RabbitMQ",
          image: "/assets/images/logos/rabbitmq.webp",
          documentLink: "https://www.rabbitmq.com/documentation.html",
        },
        {
          title: "Nats",
          image: "/assets/images/logos/nats.webp",
          documentLink: "https://docs.nats.io/",
        },
        {
          title: "PostgreSQL",
          image: "/assets/images/logos/postgresql.webp",
          documentLink: "https://www.postgresql.org/docs/",
        },
        {
          title: "Keycloak",
          image: "/assets/images/logos/keycloak.webp",
          documentLink: "https://www.keycloak.org/documentation",
        },
        {
          title: "OAuth2",
          image: "/assets/images/logos/oauth.webp",
          documentLink: "https://oauth.net/2/",
        },
        {
          title: "ELK",
          image: "/assets/images/logos/elk.webp",
          documentLink: "https://www.elastic.co/guide/",
        },
        {
          title: "Prometheus",
          image: "/assets/images/logos/prometheus.webp",
          documentLink: "https://prometheus.io/docs/",
        },
        {
          title: "Grafana",
          image: "/assets/images/logos/grafana.webp",
          documentLink: "https://grafana.com/docs/",
        },
        {
          title: "Promtail, Loki",
          image: "/assets/images/logos/loki.webp",
          documentLink: "https://grafana.com/docs/loki/",
        },
        {
          title: "GraphQL",
          image: "/assets/images/logos/graphql.webp",
          documentLink: "https://graphql.org/learn/",
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          title: "React",
          image: "/assets/images/logos/react.webp",
          documentLink: "https://react.dev/",
        },
        {
          title: "Next.js",
          image: "/assets/images/logos/nextjs.webp",
          documentLink: "https://nextjs.org/docs",
        },
        {
          title: "Flutter",
          image: "/assets/images/logos/flutter.webp",
          documentLink: "https://docs.flutter.dev/",
        },
        {
          title: "React-Query",
          image: "/assets/images/logos/react-query.webp",
          documentLink: "https://tanstack.com/query/latest/docs/react/overview",
        },
        {
          title: "Redux",
          image: "/assets/images/logos/redux.webp",
          documentLink: "https://redux.js.org/",
        },
        {
          title: "I18n",
          image: "/assets/images/logos/i18n.webp",
          documentLink: "https://www.i18next.com/",
        },
        {
          title: "RxJS",
          image: "/assets/images/logos/rxjs.webp",
          documentLink: "https://rxjs.dev/guide/overview",
        },
        {
          title: "Storybook",
          image: "/assets/images/logos/storybook.webp",
          documentLink: "https://storybook.js.org/docs",
        },
        {
          title: "Tailwind",
          image: "/assets/images/logos/tailwind.webp",
          documentLink: "https://tailwindcss.com/docs",
        },
        {
          title: "Shadcn",
          image: "/assets/images/logos/shadcn.webp",
          documentLink: "https://ui.shadcn.com/",
        },
        {
          title: "MUI",
          image: "/assets/images/logos/mui.webp",
          documentLink: "https://mui.com/material-ui/getting-started/",
        },
      ],
    },
  ],
};

