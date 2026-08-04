# suyashsapre.github.io

Personal site for Suyash Sapre — a single page listing projects and research.

## Files

```
index.html         The whole site. Self-contained: inline CSS, no JS, no build step.
projects.html      Redirect to index.html (kept so old links resolve).
research.html      Redirect to index.html#research.
brand-playbook.md  Positioning notes. Not published.
assets/            Images. Currently unreferenced by index.html.
```

## Editing

Open `index.html` and edit it. There is no build, no dependency, and no framework.

Entries live in three `<section class="group">` blocks — Research, Projects, Tools — plus a closing
"Where this is going" section. To add an entry:

1. Add an `<article id="your-slug">` to the right section, following the shape of the ones around
   it: a `.head` row (number, title, `.status`), a `.problem` paragraph, then `<h4>` subheads.
2. Add a matching row to the `<nav class="index">` at the top so it shows up in the index.

Status labels are `<span class="status">` for finished work and `<span class="status open">` for
anything unfinished — the dashed border is the signal.

## Deploying

Push to `main`. GitHub Pages serves it at
<https://suyashh77.github.io/suyashsapre_portfolio/>.
