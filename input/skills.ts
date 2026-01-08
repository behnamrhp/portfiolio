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
          image: "/assets/images/logos/golang.svg",
          documentLink: "https://go.dev/doc/",
        },
        {
          title: "TypeScript",
          image: "/assets/images/logos/typescript.svg",
          documentLink: "https://www.typescriptlang.org/docs/",
        },
        {
          title: "Dart",
          image: "/assets/images/logos/dart.svg",
          documentLink: "https://dart.dev/guides",
        },
        {
          title: "Python",
          image: "/assets/images/logos/python.svg",
          documentLink: "https://docs.python.org/",
        },
        {
          title: "Bash",
          image: "/assets/images/logos/bash.svg",
          documentLink: "https://www.gnu.org/software/bash/manual/",
        },
        {
          title: "PHP",
          image: "/assets/images/logos/php.svg",
          documentLink: "https://www.php.net/docs.php",
        },
      ],
    },
    {
      title: "Automation and Infrastructure",
      skills: [
        {
          title: "Docker",
          image: "/assets/images/logos/docker.svg",
          documentLink: "https://docs.docker.com/",
        },
        {
          title: "AWS",
          image: "/assets/images/logos/aws.svg",
          documentLink: "https://docs.aws.amazon.com/",
        },
        {
          title: "Kubernetes",
          image: "/assets/images/logos/kubernetes.svg",
          documentLink: "https://kubernetes.io/docs/",
        },
        {
          title: "Docker-Swarm",
          image: "/assets/images/logos/docker-swarm.svg",
          documentLink: "https://docs.docker.com/engine/swarm/",
        },
        {
          title: "Terraform",
          image: "/assets/images/logos/terraform.svg",
          documentLink: "https://www.terraform.io/docs",
        },
        {
          title: "Ansible",
          image: "/assets/images/logos/ansible.svg",
          documentLink: "https://docs.ansible.com/",
        },
        {
          title: "Fluxcd",
          image: "/assets/images/logos/fluxcd.svg",
          documentLink: "https://fluxcd.io/docs/",
        },
        {
          title: "Jenkins",
          image: "/assets/images/logos/jenkins.svg",
          documentLink: "https://www.jenkins.io/doc/",
        },
        {
          title: "Github Actions",
          image: "/assets/images/logos/github-actions.svg",
          documentLink: "https://docs.github.com/en/actions",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          title: "Nest.js",
          image: "/assets/images/logos/nestjs.svg",
          documentLink: "https://docs.nestjs.com/",
        },
        {
          title: "MongoDB",
          image: "/assets/images/logos/mongodb.svg",
          documentLink: "https://docs.mongodb.com/",
        },
        {
          title: "Redis",
          image: "/assets/images/logos/redis.svg",
          documentLink: "https://redis.io/documentation",
        },
        {
          title: "Kafka",
          image: "/assets/images/logos/kafka.svg",
          documentLink: "https://kafka.apache.org/documentation/",
        },
        {
          title: "RabbitMQ",
          image: "/assets/images/logos/rabbitmq.svg",
          documentLink: "https://www.rabbitmq.com/documentation.html",
        },
        {
          title: "Nats",
          image: "/assets/images/logos/nats.svg",
          documentLink: "https://docs.nats.io/",
        },
        {
          title: "PostgreSQL",
          image: "/assets/images/logos/postgresql.svg",
          documentLink: "https://www.postgresql.org/docs/",
        },
        {
          title: "MySQL",
          image: "/assets/images/logos/mysql.svg",
          documentLink: "https://dev.mysql.com/doc/",
        },
        {
          title: "Keycloak",
          image: "/assets/images/logos/keycloak.svg",
          documentLink: "https://www.keycloak.org/documentation",
        },
        {
          title: "OAuth2 + OIDC",
          image: "/assets/images/logos/oauth.svg",
          documentLink: "https://oauth.net/2/",
        },
        {
          title: "ELK",
          image: "/assets/images/logos/elk.svg",
          documentLink: "https://www.elastic.co/guide/",
        },
        {
          title: "Prometheus",
          image: "/assets/images/logos/prometheus.svg",
          documentLink: "https://prometheus.io/docs/",
        },
        {
          title: "Grafana",
          image: "/assets/images/logos/grafana.svg",
          documentLink: "https://grafana.com/docs/",
        },
        {
          title: "Promtail, Loki",
          image: "/assets/images/logos/loki.svg",
          documentLink: "https://grafana.com/docs/loki/",
        },
        {
          title: "GraphQL",
          image: "/assets/images/logos/graphql.svg",
          documentLink: "https://graphql.org/learn/",
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          title: "React",
          image: "/assets/images/logos/react.svg",
          documentLink: "https://react.dev/",
        },
        {
          title: "Next.js",
          image: "/assets/images/logos/nextjs.svg",
          documentLink: "https://nextjs.org/docs",
        },
        {
          title: "Flutter",
          image: "/assets/images/logos/flutter.svg",
          documentLink: "https://docs.flutter.dev/",
        },
        {
          title: "Angular",
          image: "/assets/images/logos/angular.svg",
          documentLink: "https://angular.io/docs",
        },
        {
          title: "React-Query",
          image: "/assets/images/logos/react-query.svg",
          documentLink: "https://tanstack.com/query/latest/docs/react/overview",
        },
        {
          title: "Redux",
          image: "/assets/images/logos/redux.svg",
          documentLink: "https://redux.js.org/",
        },
        {
          title: "I18n",
          image: "/assets/images/logos/i18n.svg",
          documentLink: "https://www.i18next.com/",
        },
        {
          title: "RxJS",
          image: "/assets/images/logos/rxjs.svg",
          documentLink: "https://rxjs.dev/guide/overview",
        },
        {
          title: "Storybook",
          image: "/assets/images/logos/storybook.svg",
          documentLink: "https://storybook.js.org/docs",
        },
        {
          title: "Tailwind",
          image: "/assets/images/logos/tailwind.svg",
          documentLink: "https://tailwindcss.com/docs",
        },
        {
          title: "Shadcn",
          image: "/assets/images/logos/shadcn.svg",
          documentLink: "https://ui.shadcn.com/",
        },
        {
          title: "MUI",
          image: "/assets/images/logos/mui.svg",
          documentLink: "https://mui.com/material-ui/getting-started/",
        },
      ],
    },
  ],
};

