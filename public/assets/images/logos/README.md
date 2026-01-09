# Technology Logos

This directory should contain logos for all technologies listed in the skills section.

## Required Logos (55 total)

### Languages (6)
- `golang.svg` - https://go.dev
- `typescript.svg` - https://www.typescriptlang.org
- `dart.svg` - https://dart.dev
- `python.svg` - https://www.python.org
- `bash.svg` - GNU Bash
- `php.svg` - https://www.php.net

### Automation & Infrastructure (9)
- `docker.svg` - https://www.docker.com
- `aws.svg` - https://aws.amazon.com
- `kubernetes.svg` - https://kubernetes.io
- `docker-swarm.svg` - Docker Swarm
- `terraform.svg` - https://www.terraform.io
- `ansible.svg` - https://www.ansible.com
- `fluxcd.svg` - https://fluxcd.io
- `jenkins.svg` - https://www.jenkins.io
- `github-actions.svg` - GitHub Actions

### Backend (15)
- `nestjs.svg` - https://nestjs.com
- `mongodb.svg` - https://www.mongodb.com
- `redis.svg` - https://redis.io
- `kafka.svg` - https://kafka.apache.org
- `rabbitmq.svg` - https://www.rabbitmq.com
- `nats.svg` - https://nats.io
- `postgresql.svg` - https://www.postgresql.org
- `mysql.svg` - https://www.mysql.com
- `keycloak.svg` - https://www.keycloak.org
- `oauth.svg` - OAuth 2.0
- `elk.svg` - Elastic Stack
- `prometheus.svg` - https://prometheus.io
- `grafana.svg` - https://grafana.com
- `loki.svg` - Grafana Loki
- `graphql.svg` - https://graphql.org

### Frontend (12)
- `react.svg` - https://react.dev
- `nextjs.svg` - https://nextjs.org
- `flutter.svg` - https://flutter.dev
- `angular.svg` - https://angular.io
- `react-query.svg` - TanStack Query
- `redux.svg` - https://redux.js.org
- `i18n.svg` - i18next
- `rxjs.svg` - https://rxjs.dev
- `storybook.svg` - https://storybook.js.org
- `tailwind.svg` - https://tailwindcss.com
- `shadcn.svg` - https://ui.shadcn.com
- `mui.svg` - Material-UI

## How to Download Logos

### Option 1: Simple Icons (Recommended)
Visit https://simpleicons.org/ - Has most tech logos as SVG

### Option 2: Official Websites
Download from each technology's official website

### Option 3: GitHub CDN
Many logos available at: https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/

## File Format
- **Format**: SVG (preferred) or PNG
- **Size**: Square (1:1 aspect ratio)
- **Color**: Original brand colors or monochrome
- **Naming**: Lowercase, hyphen-separated

## Quick Download Script

You can use this as a reference for downloading logos:

```bash
# Example using curl for some logos
cd public/assets/images/logos

# Simple Icons CDN examples
curl -o react.svg https://cdn.simpleicons.org/react
curl -o nextdotjs.svg https://cdn.simpleicons.org/nextdotjs
curl -o typescript.svg https://cdn.simpleicons.org/typescript
curl -o docker.svg https://cdn.simpleicons.org/docker
curl -o kubernetes.svg https://cdn.simpleicons.org/kubernetes

# Rename nextdotjs to nextjs
mv nextdotjs.svg nextjs.svg
```

## Fallback

If you can't find a specific logo, you can:
1. Use a text-based placeholder
2. Create a simple icon with the first letter
3. Use a generic tech icon

The SkillIcon component will handle missing images gracefully.


