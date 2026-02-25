# Christina Tyagi — Academic Website

A minimal single-page academic portfolio. One HTML file — no build tools, no dependencies.

## Deploy to GitHub Pages

1. Create a repo named `yourusername.github.io`
2. Upload `index.html`
3. Go to **Settings → Pages → Deploy from branch → main**
4. Live at `https://yourusername.github.io`

To update later: open the file on GitHub → pencil icon → edit → commit. Done in ~30 seconds.

## Edit Content

Everything is in `index.html`. Sections are marked with `<!-- COMMENTS -->`.

**Colors** — edit these lines near the top:
```css
--green:   #3d6b50;   /* accent color */
--bg:      #f9f8f6;   /* page background */
--ink:     #1a1a18;   /* text */
```

**Add a publication** — copy any `.pub` div and update the text. Badge classes: `b-prep` · `b-pre` · `b-jnl`

**Add a presentation** — copy any `.pres` div and update the text.
