npm run build
cd dist && cp index.html 404.html && cd ..
git add .            
git commit -m "deploy" 
git push origin --delete gh-pages