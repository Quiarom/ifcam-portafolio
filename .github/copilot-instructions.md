# Copilot Instructions for IFCAM Portfolio Project

## Project Overview
This project is a portfolio website built with the Astro framework. It showcases various portfolio items, including AI platforms, IoT solutions, and mobile applications. The project uses Tailwind CSS for styling and includes a mix of Astro (`.astro`) and React (`.jsx`) components for dynamic functionality.

## Key Files and Directories
- **`src/components/`**: Contains reusable UI components. Note the mix of component types, such as `Card.astro` and the React-based `ProjectGrid.jsx`.
- **`src/pages/`**: Defines the site's routes. This includes standard pages like `index.astro`, API endpoints like `api/contact.ts`, and data endpoints like `search.json.ts`.
- **`src/content/portfolio/`**: Astro Content Collections are used here. Each Markdown file represents a portfolio item and includes frontmatter metadata.
- **`src/styles/`**: Contains CSS files organized by scope: `global.css`, component-specific styles in `components/`, and page-specific styles in `pages/`.
- **`public/`**: Static assets like images, fonts, and the favicon.
- **`astro.config.mjs`**: Astro project configuration, including integrations for React, MDX, and Sitemap generation.

## Developer Workflows
This project uses `pnpm` for package management.

### Installation
Run the following command to install dependencies:
```bash
pnpm install
```

### Development
Start the local development server:
```bash
pnpm run dev
```
The server runs at `http://localhost:4321` by default.

### Build
Generate the production build:
```bash
pnpm run build
```
The output is located in the `./dist/` directory.

### Preview
Preview the production build locally:
```bash
pnpm run preview
```

## Project-Specific Conventions
- **Component Structure**: The project uses both `.astro` components for static content and `.jsx` (React) components for interactive UI, like in `src/components/Accordion/`. Client-side interactivity is explicitly enabled with `client:load` directives in Astro files.
- **Content Management**: Portfolio items are managed as Markdown files in `src/content/portfolio/`. Adding a new `.md` file here will automatically add it to the portfolio.
- **Styling**: A hybrid approach is used. Tailwind CSS utility classes are preferred for most styling, but the project also uses dedicated CSS files in `src/styles/` for global styles, component-specific styles, and page-specific styles.
- **Data Fetching**: Data for dynamic features is exposed via dedicated endpoints in `src/pages/`. For example, the search functionality relies on `search.json.ts`.

## Integration Points
- **Dynamic Search**: The `Search.astro` component provides a search interface that fetches data from `src/pages/search.json.ts`, which uses `fuse.js` for fuzzy searching.
- **Contact Form**: The `ContactForm.astro` component handles user inquiries by sending data to the API endpoint at `src/pages/api/contact.ts`, which uses the `resend` library to send emails.

## External Dependencies
- **Astro**: The core framework.
- **React**: Used for interactive components.
- **Tailwind CSS**: For styling.
- **Fuse.js**: For implementing search functionality.
- **Resend**: For handling email submissions from the contact form.

## Examples
### Adding a New Portfolio Item
1. Create a new Markdown file in `src/content/portfolio/` (e.g., `new-project.md`).
2. Add frontmatter metadata (e.g., `title`, `description`, `date`, `image`).
3. Write the content for the portfolio page in Markdown.
4. The new item will automatically appear on the portfolio page.

### Creating a New React Component
1. Create a new `.jsx` file in `src/components/`.
2. Import and use the component in an `.astro` file, making sure to add a `client:*` directive (e.g., `client:load`) to enable JavaScript.
