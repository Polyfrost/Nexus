---
title: 🌐 i18n and Translation
description: How to help translate the Polyfrost documentation.
---

Thanks for your interest in helping us translate [docs.polyfrost.org](https://docs.polyfrost.org/)!

Currently, we are aiming to translate the Polyfrost documentation into the following languages:

- Brazilian Portuguese
- Chinese (Simplified/Traditional)
- English
- French
- German
- Italian
- Russian
- Spanish

Unfortunately, we cannot support all languages at this time, and must prioritize based on available community members and their needs. Adding a language means allocating additional resources to attracting new contributors, and maintaining changes to our code base in multiple languages, as well as adding new moderators for new languages in our community servers.. **We cannot add any new languages that we haven't approved beforehand**, and we cannot approve a new language without a group of people prepared to undertake significant work to translate all our projects.

:::tip
Don't see your language in the list? Just reach out to a developer via a GitHub issue or [our discord server](https://polyfrost.org/discord)!
:::

## How can I contribute?

If you're a beginner when it comes to GitHub, we got you covered in our [First time contributor guide](/firt-time).

## Join our Community on Discord

Before making any contribution, we **highly recommend** [joining our Discord chat](https://polyfrost.org/chat) first.

:::tip[Can't access Discord?]
We still want you to participate! Please open a discussion on GitHub to ask any questions you may have.
:::

## Getting started

Visit our [translation tracking system](https://i18n.docs.polyfrost.org/), where the current status of all pages can be seen, including what needs to be updated in them and the open PRs waiting for reviews.

## Translation Process

To start working on translating a part of our docs, the first step is to figure out where the content lives in this repo:

1. Is the text in the navigation menu (left sidebar on desktop, hamburger menu on mobile)?

   ➤ Go to `src/i18n/{language}/nav.ts`

2. Is the text in the search box or modal?

   ➤ Go to `src/i18n/{language}/docsearch.ts`

3. Is the text reused on several pages (e.g. right sidebar, article navigation, tutorial, etc.)

   ➤ Go to `src/i18n/{language}/ui.ts`

4. Is the text specific to one page (page title, main content, etc.)?

   ➤ Go to `src/content/docs/{language}/{page-slug}.mdx`

:::caution
Not all of our pages are ready for translation, do not translate any page that doesn't include a "Translate this page" button in the "Contribute" section of the right sidebar.
:::

### Adding a new language

:::caution
Please don’t add a new language without first consulting with the team in [the `#i18n` channel on Discord](https://polyfrost.org/discord).
:::

#### Prerequisites

To get started adding a language, you’ll need:

1. **Its BCP 47 tag**

   Examples: `en` / `pt-BR` / `ar`

   This will be used for the HTML `lang` attribute and as the base for URLs for this language, e.g. `/{tag}/start`. These tags can encode script-type and regions as well as language, but most often we will only need the language part unless we want to distinguish regional variants (as in the `pt-BR` example above).

##### Resources:

- [Choosing a Language Tag](https://www.w3.org/International/questions/qa-choosing-language-tags) (in-depth guide)
- [Subtag lookup web app](https://r12a.github.io/app-subtags/)
- [IANA subtag registry](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)

2. **Its name as written in the language**

   Examples: `English` / `Português do Brasil` / `العربية`

   This will be used to label this language in the site’s language switcher and potentially elsewhere. The best way to get this is probably to ask the person leading translation work for this language.

#### Scaffold files for a new language

To scaffold the basic files for a new language, use the `language` script from your terminal:

```bash
pnpm run language
```
