# Fernando Ureña Gómez — Online CV

> Personal CV and portfolio built with Angular, Static Site Generation and my own component library, [Ddr-ng](https://github.com/fernandourena/ddr-ng).

🌐 **Live:** [fernando-urena-gomez.es](https://fernando-urena-gomez.es/)

## About the project

This project is the second iteration of my online CV.

Rather than simply redesigning the previous version, I used it as an opportunity to rethink some of the original architectural and UX decisions, focusing on **performance, accessibility, SEO, maintainability and future reuse**.

The previous version was structured around multiple pages. For a CV, this introduced unnecessary navigation and made it harder to get an overview of my profile.

The new version is built around a **single-page experience**, where the different sections can be explored without navigating between multiple routes.

## Key features

### ⚡ Static Site Generation

The application uses **Angular SSG** instead of relying exclusively on a traditional client-rendered SPA.

This allows the main content to be generated statically, reducing the amount of work required by the browser and improving:

* Initial page load
* SEO
* Crawlability
* Perceived performance
* Resilience when JavaScript is still loading

The choice of SSG is intentional: a CV is mostly static content and does not require client-side rendering for the initial experience.

### 📄 Single-page CV

The CV is presented as a single page instead of distributing the information across multiple routes.

The structure is divided into sections such as:

* Professional experience
* Projects
* Technologies
* Skills
* Languages
* Education
* Contact information

The goal is to make the information easy to scan while keeping navigation simple.

### 🧩 Ddr-ng

The project uses my own Angular component library, **Ddr-ng**, for reusable UI components.

Some examples include:

* Accordion components for professional experience
* Badges for technologies
* Dropdowns
* Theme toggle
* Tooltips
* Form components
* Responsive UI elements

Using the CV as a real project also allows me to test and evolve the component library against real-world requirements.

### 🌍 Internationalization

The CV is available in:

* 🇪🇸 Spanish
* 🇬🇧 English

A specific language can also be requested through the `lang` query parameter:

```text
?lang=en
```

For example:

```text
https://fernando-urena-gomez.es/?lang=en
```

The application also updates the document language dynamically through the HTML `lang` attribute, improving accessibility for assistive technologies.

### 📊 Google Analytics

Google Analytics is integrated to understand how the CV is being used.

In addition to page views, custom events are used to measure relevant interactions, such as **CV downloads**.

This makes it possible to evaluate the actual usage of the website instead of relying only on assumptions.

### ♿ Accessibility

Accessibility has been considered throughout the project, including:

* Semantic HTML
* Accessible names for interactive elements
* ARIA attributes where necessary
* Keyboard navigation
* Proper document landmarks
* Language declaration through `html[lang]`
* Accessible form controls
* Color contrast
* Screen reader considerations

The project is also regularly checked using tools such as Lighthouse and accessibility auditing tools.

### 🚀 Performance

Performance has been one of the main considerations of the new version.

The project includes optimizations such as:

* Static Site Generation
* Optimized images with Angular `NgOptimizedImage`
* Responsive image loading
* Lazy loading for non-critical content
* Deferred rendering where appropriate
* Optimized fonts and assets
* Browser caching
* Efficient resource loading

The objective is not to optimize for a benchmark alone, but to reduce the amount of work and data required to present the CV to the user.

## Development

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will be available locally through the Angular development server.

### Build

Create a production build:

```bash
npm run build
```

The project can then be deployed using the generated static output.

## Why this project?

A personal CV is a relatively small project, but it provides a useful environment to experiment with real requirements:

* Performance
* SEO
* Accessibility
* Internationalization
* Analytics
* Component architecture
* Responsive design
* Static generation
* Reusability

The goal is not to demonstrate as many technologies as possible, but to **choose the appropriate solution for each problem**.

---

## License

This project represents my personal CV and portfolio. The source code is publicly available for educational and technical reference, but the personal content, images and professional information should not be reused without permission.

---

**Fernando Ureña Gómez**
Senior Full Stack Developer
