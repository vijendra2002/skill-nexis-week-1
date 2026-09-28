# Skill Nexis — Week 1 Submission

**Track:** Full Stack Web Developer (MERN) Internship  
**Student:** Vijendra Singh Parmar  
**Week:** 1

This repository contains the Week 1 work organized into three main deliverables and a practice set:

1. **Personal Portfolio** — responsive HTML/CSS website with About, Education, Projects, and Contact sections.
2. **React Components Practice** — reusable Header, Footer, Card, Button, and Form components using props and state.
3. **React Blog UI** — blog cards loaded from a JSON file, with search and category filtering.
4. **Practice Set** — responsive navigation, JavaScript form validation, an e-commerce landing page, and Flexbox/Grid layout examples.

## Repository structure

```text
skill-nexis-week-1/
├── README.md
├── portfolio/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── react-practice/
│   ├── package.json
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── styles.css
│       └── components/
│           ├── Header.jsx
│           ├── Footer.jsx
│           ├── Card.jsx
│           ├── Button.jsx
│           └── Form.jsx
├── react-blog/
│   ├── package.json
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── posts.json
│       └── styles.css
└── practice-set/
    ├── ecommerce/
    │   ├── index.html
    │   └── style.css
    └── flexbox-grid/
        ├── index.html
        └── style.css
```

## Run the projects

### 1. Personal Portfolio
Open `portfolio/index.html` in a browser. No installation is required.

### 2. React Components Practice
Install Node.js (LTS), then run:

```bash
cd react-practice
npm install
npm run dev
```

Open the local URL shown by Vite in the terminal.

### 3. React Blog UI
In a separate terminal:

```bash
cd react-blog
npm install
npm run dev
```

Open the local URL shown by Vite.

### 4. Practice Set
Open `practice-set/ecommerce/index.html` and `practice-set/flexbox-grid/index.html` in a browser.

## Notes
- The portfolio uses the student's stated education and project names. Edit any details that need updating before publishing.
- Contact form validation is client-side demonstration only; it does not send email or store messages.
- Blog posts are sample content stored locally in `src/posts.json`.
- React projects are separate Vite apps, so install and run them independently.

## Suggested GitHub upload

Create a public repository named `skill-nexis-week-1`, extract/copy these files into it, then:

```bash
git init
git add .
git commit -m "Complete Skill Nexis Week 1 assignments"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/skill-nexis-week-1.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.
