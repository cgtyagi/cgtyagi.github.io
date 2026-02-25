# Christina Tyagi — Academic Website

A clean, minimal personal academic portfolio. Pure HTML, CSS, and JavaScript — no build tools, no dependencies, no frameworks. Just open `index.html` in a browser.

---

## 🗂 File Structure

```
/
├── index.html       ← All content lives here
├── style.css        ← All styling and colors
├── script.js        ← Nav, animations, scroll behavior
├── Tyagi_CV.pdf     ← Place your CV PDF here
└── README.md
```

---

## 🚀 Deploy to GitHub Pages

### Option A — Personal site (`username.github.io`)

1. Create a repo named exactly `yourusername.github.io`
2. Upload all files to the `main` branch
3. Your site is live at `https://yourusername.github.io`

### Option B — Project repo

1. Create any repo (e.g. `academic-site`)
2. Upload all files to `main`
3. Go to **Settings → Pages → Source → Deploy from branch → main / (root)**
4. Site is live at `https://yourusername.github.io/academic-site/`

### Updating later
Go to the file in GitHub → click the pencil ✏️ → edit → **Commit changes**. The site updates in ~30 seconds.

---

## ✏️ How to Edit Content

**All content is in `index.html`.** Each section has a clear `<!-- COMMENT -->` marking it.

### Change colors
Open `style.css` and edit the `:root` block at the top:
```css
:root {
  --sage: #4a7c59;      /* primary accent — try #2a6496 for blue */
  --rose: #c0625a;      /* secondary accent */
  --bg:   #fafaf8;      /* page background */
  --ink:  #1c1c1a;      /* main text */
}
```

### Add a publication
Copy any `.pub-item` div in the Publications section:
```html
<div class="pub-item">
  <span class="badge bjnl">Journal Name</span>
  <div class="pub-body">
    <p class="pub-au">Author, A., <strong>Tyagi, C.</strong>, et al.</p>
    <p class="pub-ti">Your paper title here.</p>
    <a href="https://doi.org/..." target="_blank" class="pub-doi">doi... ↗</a>
  </div>
</div>
```
Badge classes: `bprep` (in prep) · `bpre` (preprint) · `bjnl` (journal)

### Add a presentation
Copy any `.pres-item` div in the Presentations section.

### Add a research position
Copy any `.tl-item` div in the Research Experience section.

### Update CV download
Replace `Tyagi_CV.pdf` in the same folder. Keep the filename the same, or update this line in `index.html`:
```html
<a href="Tyagi_CV.pdf" download class="btn btn-primary">
```

### Change fonts
1. Pick new fonts at [fonts.google.com](https://fonts.google.com)
2. Replace the `<link>` in `index.html`
3. Update in `style.css`:
```css
--f-serif: 'Your Display Font', serif;
--f-sans:  'Your Body Font', sans-serif;
```

---

## 🎨 Design Notes

- **Palette:** Warm ivory background + soft sage green accent
- **Typography:** Lora (serif, headings) + Inter (sans, body) + JetBrains Mono (labels/code)
- **Animations:** Scroll-triggered fade-up reveals, hover transitions
- **Responsive:** Mobile nav drawer, fluid grids, stacked layouts on small screens
