#!/bin/bash
# Push изменений сайта РСК в GitHub (и далее в Netlify)
# Использование: ./push.sh "описание изменений"
# или: ./push.sh

cd "$(dirname "$0")"
MSG="${1:-Обновление сайта РСК}"

git add . && git status --short
git commit -m "$MSG"
git push

echo "Готово. Netlify задеплоит изменения автоматически."
