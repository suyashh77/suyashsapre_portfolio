# suyashsapre_portfolio

Personal site for Suyash Sapre — a single page listing data stories, projects, and research.

## Files

```
index.html         The whole site. Self-contained: inline CSS, no JS, no build step.
projects.html      Redirect to index.html (kept so old links resolve).
research.html      Redirect to index.html#research.
assets/            profile.jpg (og:image), img/ (WebP figures), video/ (short MP4s).
smartpull/         Public SmartPull demo. Example data only: Lenovo figures are removed (NDA).
                   Rebuild it from the private copy with the scrub script, never copy it raw.
```

## Editing

Open `index.html` and edit it. There is no build, no dependency, and no framework.

The page is a header block — name, positioning, availability, contact links, then a
`<nav class="index">` — followed by five `<section class="group">` blocks: Work & industry projects, Research,
Supply chain & operations, Data stories & forecasting, Other projects.

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

Close each article with a `.meta` block. Conventional rows are `Evidence` (measured on real data
or modeled on synthetic data), `Runs` (how often the thing
executes, which sets the runtime budget), `Stack`, `Scale`, `Links`, and `Good for` / `Not for`
where the limits are worth stating up front.

## Deploying

Push to `main`. GitHub Pages serves it at
<https://suyashh77.github.io/suyashsapre_portfolio/>.

## TimesFM study

`timesfm-retail/index.html` contains the full Situation, Task, Analysis and Result account. `timesfm-retail/forecasts.html` explores the saved experiment outputs. The article links to exact methods, evidence review, code and saved results in [retail-demand-timesfm](https://github.com/suyashh77/retail-demand-timesfm). Both pages are static and need no server-side inference or model weights.


## TabFM spending study

`tabfm-spending/index.html` gives the STAR research answer and controlled header/information tests. `tabfm-spending/methods.html` contains the full methods and aggregate tables. Its three local chart assets contain aggregate comparisons only. Private financial inputs and row-level predictions are not part of the site. The code-only research repository is [tabfm-spending-categories](https://github.com/suyashh77/tabfm-spending-categories).
