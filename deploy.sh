if [ -z $1 ]
then
 echo "branch name is empty. assuming master branch."
 branch="master"
else
 branch=$1
fi

if [ -z $2 ]
then 
 echo "install location is empty. assuming /var/www/html"
 dir="/var/www/html"
else
 dir=$2
fi

systemctl stop httpd

cd /var/git/svayam-public
git checkout -f $1
git pull

sed -i=bkup -e "2s/^.*/ production: true, /" /var/git/svayam-public/src/environments/environment.prod.ts
sed -i=bkup -e "2 a branch: 'master' " /var/git/svayam-public/src/environments/environment.prod.ts
ng build --prod

rm -fr $dir/assets
rm -fr $dir/*.*
cp -r /var/git/svayam-public/dist/svayam-public/* /var/www/html
systemctl start httpd
