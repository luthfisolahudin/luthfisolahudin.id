deploy:
  #! /usr/bin/env bash
  pnpm run build
  cd dist
  git add -A
  git commit -m "deploy"
  git push origin main
