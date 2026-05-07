---
title: Reduce Supply Chain Risk With Recul
date: "2026-05-07"
published: true
tags: [Security, Dependencies, Supply Chain]
---

Recently I released **[Recul](https://github.com/CRBroughton/recul)**, a CLI tool for npm and pnpm repositories that helps reduce supply chain risk by keeping your dependencies deliberately behind the latest release.

**Recul** is not a replacement for `npm audit` or any third-party security tooling, it's a complementary layer on top of them, one that reduces your attack surface without requiring active attention. Drop it into CI, commit the configuration file, and your team now has a clear, auditable policy with a pass/fail signal on every pipeline run.

### What Recul gives you

- **Auditable, Configuration-based lag policy**: define how many versions behind latest you want to stay, committed to your repository, giving team alignment and an auditable policy
- **Pass/fail CI integration**: ships as a GitHub Action; fails the build when anything drifts ahead of the lag target
- **Exact install commands**: any violating package comes with the precise command to bring it back in line
- **Defence-in-depth controls**: combine version lag with a minimum release age so even fast-releasing packages have to wait
- **pnpm monorepo & catalog support**: audits each workspace package separately, with `--fix` to apply catalog updates in one go
- **Lockfile-aware**: reads installed versions from your lockfile for accurate results on packages declared with `^` or `~`

## Getting started

First generate the Recul policy configuration file, then run your first audit:


```bash
# Create a config file in the current directory
recul init

# Audit your dependencies
recul
```

Once run, you'll get a clear table of where each dependency stands against your lag target:

```
recul  staying 2 versions behind latest

settings
setting    value   description
──────────────────────────────────────────────────────────────────
lag        2       stay 2 versions behind latest
pm         pnpm    the chosen package manager
behind     ignore  ignore packages behind target
range      exact   pin exact versions
minAge     3       skip versions published within the last 3 days
sameMajor  true    restrict candidates to current major

package    declared  → target  installed  latest  gap  status
────────────────────────────────────────────────────────────────
express    ^4.19.2   4.17.3    4.17.3     4.19.2  2    ↓ will pin back
react      ^18.3.1   18.1.0    18.0.0     18.3.1  2    ↓ will pin back
typescript 5.4.5     5.4.5     5.4.5      5.4.5   0    ✓ ok

to pin back:
  pnpm add express@4.17.3 react@18.1.0
```

Any package ahead of your lag target gets flagged, and Recul generates the exact install command to bring it back in line.

## Configuration

Commit a `recul.config.jsonc` to standardise the policy across your team:

```jsonc
{
  // How many versions to stay behind the latest published release.
  // Counted in releases, not semver increments.
  //
  //   1  →  days to weeks   (fast-moving projects, minimal buffer)
  //   2  →  weeks           (balanced default, recommended)
  //   3  →  weeks to months (cautious teams, slower release cadences)
  //   5+ →  months          (regulated environments, high-security contexts)
  "lag": 2,

  // Package manager: "npm" | "pnpm"
  "packageManager": "pnpm",

  // Path to the package.json to audit, relative to this config file.
  "packageFile": "package.json",

  // How to handle packages already older than the lag target.
  //   "ignore"  →  treat as ok, no output (default)
  //   "report"  →  surface them with a safe upgrade-to-target command
  "behindBehavior": "ignore",

  // Version prefix used in generated install commands.
  //   "exact"  →  1.3.4    (recommended; audits are reliable)
  //   "caret"  →  ^1.3.4   (allows minor/patch drift)
  //   "tilde"  →  ~1.3.4   (allows patch drift only)
  "rangeSpecifier": "exact",

  // Packages to skip entirely.
  "ignore": [],

  // Minimum days a version must have been published before it is eligible
  // as a lag target. Combines with "lag" for defence-in-depth.
  "minimumReleaseAge": 3,

  // Pre-release identifiers to exclude from the candidate list.
  "preReleaseFilter": ["-alpha", "-beta", "-rc", "-next", "-canary", "-dev"],

  // Restrict candidates to the same major as the currently declared version.
  "sameMajor": true
}
```

The `lag` value is the core of the policy. A lag of `2` means you're always targeting the second-most-recent stable release, in practice, a buffer of days to weeks depending on how actively a package is maintained. Push it higher for regulated or high-security environments where a months-long buffer makes more sense.

`minimumReleaseAge` adds another layer on top: even if a version technically satisfies your lag count, it won't be selected as a target if it was published too recently.

## CI integration

**Recul** also ships as a GitHub Action, so you can wire it into your pipeline with no additional setup:

```yaml
- uses: actions/checkout@v4
- uses: actions/setup-node@v4
  with:
    node-version: 20
- uses: CRBroughton/recul@v1
```

It writes a markdown summary directly to the Actions job summary automatically, a readable table per pipeline run, with no extra configuration required.

## Try Recul

**Recul** is open source under the MIT licence and available on [GitHub](https://github.com/CRBroughton/recul).

```bash
npm i -D @crbroughton/recul
# or
pnpm add -D @crbroughton/recul
```
