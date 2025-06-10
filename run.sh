#!/bin/bash
git add .
git commit -m "commit from run.sh"
git push
docker-compose up --build