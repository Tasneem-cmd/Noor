# Noor's Birthday Website

Plain HTML, CSS and JavaScript. No build step, no dependencies, no tracking.

```
noor-birthday/
├── index.html   (text and structure)
├── style.css    (colors at the top, in :root)
├── script.js    (gift lines, confetti, transitions)
└── README.md
```

## Run locally
Double-click `index.html`. It works straight from the file, no server needed.

## Publish free on GitHub Pages
1. On GitHub, create a new public repository named `noor-birthday`.
2. Click **Add file → Upload files**, drag in `index.html`, `style.css`, `script.js` (README is optional), then **Commit changes**.
3. Open the repository **Settings**.
4. Click **Pages** in the left sidebar.
5. Under **Build and deployment**, set Source to **Deploy from a branch**, choose branch **main** and folder **/ (root)**.
6. Click **Save** and wait 1–3 minutes.
7. Your link will be `https://YOUR-GITHUB-USERNAME.github.io/noor-birthday/`. Open it on your phone and test it.
8. Share that link on WhatsApp. (Do this on 23 October. 😉)

All paths are relative, so it works inside the repository subfolder.

## Testing checklist
- [ ] "Let's see" moves to the cake
- [ ] Tapping the cake blows out candles + confetti, then "Keep going" appears
- [ ] Free Fire screen shows, "Okay" continues
- [ ] Gift opens, 3 lines appear one by one, "One last thing" appears
- [ ] Final screen shows, "Celebrate" fires confetti
- [ ] No sideways scrolling on a phone; works in portrait and landscape

## Changing things later
- **Messages:** page text is in `index.html`; the three gift-card lines are the `lines` array in `script.js`; the cake wish message is in the cake click handler in `script.js`.
- **Colors:** the variables at the top of `style.css` (`--purple`, `--pink`, `--black`, ...).
- **"Aunty" nickname:** used once, in the last gift line. Delete it there if you prefer.
- **Sign-off:** the `.sign` line in `index.html`.
