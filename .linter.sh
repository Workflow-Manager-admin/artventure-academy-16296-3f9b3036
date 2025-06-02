#!/bin/bash
cd /home/kavia/workspace/code-generation/artventure-academy-16296-3f9b3036/artventure_academy
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

