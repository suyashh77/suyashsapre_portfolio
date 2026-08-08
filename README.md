# suyashsapre_portfolio

Personal site for Suyash Sapre — a single page listing projects and research.

## Files

```
index.html         The whole site. Self-contained: inline CSS, no JS, no build step.
projects.html      Redirect to index.html (kept so old links resolve).
research.html      Redirect to index.html#research.
assets/            profile.jpg, used as the og:image for link previews.
```

## Editing

Open `index.html` and edit it. There is no build, no dependency, and no framework.

The page is a header block — name, positioning, availability, contact links, then a
`<nav class="index">` — followed by four `<section class="group">` blocks: Research,
Supply Chain, Other fun projects, Tools.

To add an entry:

1. Add an `<article id="your-slug">` to the right section, following the shape of the ones
   around it: a `.head` row (number + title), then `<h4>` subheads.
2. Add a matching `<li>` to the `<nav class="index">` at the top so it shows up in the index.
   The index lists titles only — no descriptions.

Every article uses the same three subheads, in this order:

```
Why             the problem, and why it was worth doing
How it works    the method — what was actually built
What it found   results. Omit for projects with nothing measured yet.
```

Close each article with a `.meta` block. Conventional rows are `Runs` (how often the thing
executes, which sets the runtime budget), `Stack`, `Scale`, `Links`, and `Good for` / `Not for`
where the limits are worth stating up front.

## Deploying

Push to `main`. GitHub Pages serves it at
<https://suyashh77.github.io/suyashsapre_portfolio/>.
