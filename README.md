# Zaycoding Portfolio

A responsive portfolio inspired by the visual style of the screenshots you provided.

## Files

- `index.html` — page structure and your text/content
- `style.css` — all design, layout, colors, spacing and responsive styling
- `script.js` — mobile menu, project filters, services accordion and animations

## Run it

### Easiest
Open `index.html` in Chrome.

### VS Code
1. Open this folder in VS Code.
2. Install the "Live Server" extension.
3. Right-click `index.html`.
4. Select "Open with Live Server".

## What to change first

### 1. Your name / brand
Open `index.html` and search for:
- `ZAYCODING`
- `ZAY`
- `CODING`

Change those to your preferred name/brand.

### 2. Hero text
Search for:
`AI & Data Science Learner / Builder`

Replace it with your title.

### 3. Social links
Search for:
`CHANGE YOUR LINKS HERE`

Replace the GitHub, Instagram, LinkedIn and YouTube URLs.

### 4. Email
Search for:
`hello@zaycoding.com`

Replace it with your real email.

### 5. Projects
In `index.html`, search for:
`CHANGE THESE PROJECTS`

Each `.project-card` is one portfolio project. Change:
- project title
- description
- category
- tags

Categories currently are:
- `real`
- `exploration`

### 6. Experience
Search for:
`CHANGE THESE`

Edit the company/project name, role and dates.

### 7. Colors
Open `style.css` and edit the variables near the top:

`--bg` = page background
`--black` = main text
`--dark` = dark cards
`--line` = borders

### 8. Add your real profile image
The current hero uses a CSS avatar placeholder so the project works immediately.

Replace the `<div class="avatar-placeholder">...</div>` in `index.html`
with an `<img>` element, for example:

<img class="profile-image" src="assets/profile.jpg" alt="Your Name">

Then add this to `style.css`:

.profile-image {
  width: 330px;
  height: 400px;
  object-fit: cover;
  border-radius: 48% 48% 20% 20%;
}

Put your photo at:
`assets/profile.jpg`

## Recommended next step

Once you have your real project screenshots, replace each `.project-image` block with:

<div class="project-image">
  <img src="assets/project-1.jpg" alt="Project name">
</div>

and add:

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

The layout and JavaScript will continue to work.
