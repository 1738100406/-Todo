#一键部署
git init &&
git add . &&
git commit -m 'update' &&
git remote add origin git@github.com:1738100406/-Todo.git &&

git push -f -u origin master &&

echo 部署成功 地址是
