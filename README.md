# practice

# github

**clone**
git clone https://github.com/arpan8/practice.git

**To push code in github**
git add .
git status
git commit -m "your message"
git push origin <branch_name> (in my case it is main)

**To pull code in github**
git add .
git status
git commit -m "your message"
git pull origin <branch_name> (in my case it is main)

# vscode

Open vscode by right clicking and open with vs code

In vscode open terminal using ctrl+`

# node

To create a node js project (using express) first you need to write (in terminal) 

**npm init**

then one by one like **package name, description, entry point, test command, git repository, keywords, author, license** etc.

After that a full object will show in terminal with the question is this ok then you need to write y then hit enter.
After this **package.json** file will create. You can see all the properties you have answered before.

You can also write **npm init -y** it will create package.json and you don't have the answer the questions, it will take by default answer.

Now you have to install some packages like **express, mysql2, sequelize, morgan**

**npm i express mysql2 sequelize morgan** write this in terminal and packages will be installed then in package.json under the dependencies object you can see the package name and it's version. 

**package.json** -> *The package.json file is core to the Node.js ecosystem and is a fundamental part of understanding and working with Node.js, npm, and even modern JavaScript. This file is used as a manifest, storing information about applications, modules, packages, and more.It lists the required dependencies and their version ranges, but not the exact versions to be installed.*

**package-lock.json** -> *It is a lockfile that provides an exact, deterministic list of all the installed packages and their dependencies, including their exact version numbers.It is automatically generated by npm and updated whenever you install or update packages.It is used to ensure that the same dependencies are installed consistently across different environments and prevent conflicts due to different versions being installed.It is not meant to be manually modified and should be committed to the version control system to ensure consistency across all team members.*

**REMEMBER TO ADD .gitignore file and in that file add node_modules/ and .env**
node_module folder don't need to sent in github it is a big file after cloning the repo you can write **npm install** in terminal. It will autometically install the packages with node_modules. The packages mentioned in package.json file under dependencies object will only install.


