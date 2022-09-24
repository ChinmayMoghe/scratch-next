# scratch-next

A repo that contains a next JS project created from scratch (no create-next-app used here).

Steps to reproduce this project from scratch:

1. Initialize a git repo and add .gitignore to ignore node_modules/, build folders

2.Run npm init to setup npm package.json initial setup (yes to all)

3.Install dependencies (react,react-dom,next) via a commandline.

```bash
npm install next react react-dom
```

4.Update package.json with following scripts

```JSON
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}

```

5.Add following folder structure to your project

📦pages - Associated with route based on their file names
📦public - stores static assets like images, font, etc.  
