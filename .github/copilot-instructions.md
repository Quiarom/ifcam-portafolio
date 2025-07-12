# Copilot Instructions for IFCAM Portfolio Project

## Project Overview
This project is a portfolio website built using the Astro framework. It showcases various portfolio items, including AI platforms, IoT solutions, and mobile applications. The project uses Tailwind CSS for styling and includes custom components for dynamic functionality.

## Key Files and Directories
- **`src/components/`**: Contains reusable UI components like `Card.astro`, `ContactForm.astro`, and `Header.astro`.
- **`src/pages/`**: Defines the main pages of the website, including `index.astro` (homepage) and `about.astro`.
- **`src/content/portfolio/`**: Markdown files describing portfolio items, such as `ai-chatbot-platform.md` and `healthcare-ai-platform.md`.
- **`public/`**: Static assets like images and the favicon.
- **`tailwind.config.mjs`**: Configuration for Tailwind CSS.
- **`astro.config.mjs`**: Astro project configuration.

## Developer Workflows
### Installation
Run the following command to install dependencies:
```bash
npm install
```

### Development
Start the local development server:
```bash
npm run dev
```
The server runs at `http://localhost:4321` by default.

### Build
Generate the production build:
```bash
npm run build
```
The output is located in the `./dist/` directory.

### Preview
Preview the production build locally:
```bash
npm run preview
```

## Project-Specific Conventions
- **Component Structure**: Components are written in `.astro` files and follow a modular design. Each component is self-contained with its styles and logic.
- **Content Management**: Portfolio items are managed as Markdown files in `src/content/portfolio/`. Each file includes metadata and content for a specific project.
- **Styling**: Tailwind CSS is used for styling. Utility classes are preferred over custom CSS.

## Integration Points
- **Dynamic Search**: The `Search.astro` component provides a search interface for portfolio items. It fetches data from `src/pages/search.json.ts`.
- **Contact Form**: The `ContactForm.astro` component handles user inquiries and sends data to `src/pages/api/contact.ts`.

## External Dependencies
- **Astro Framework**: For building the static site.
- **Tailwind CSS**: For styling.
- **Node.js**: Required for running the development server and building the project.

## Testing and Debugging
- **Debugging**: Use browser developer tools to inspect and debug components.
- **Error Handling**: Check the terminal output for build or runtime errors.

## Examples
### Adding a New Portfolio Item
1. Create a new Markdown file in `src/content/portfolio/`.
2. Include metadata (e.g., `title`, `description`, `date`) and content.
3. The new item will automatically appear in the portfolio list.

### Modifying Styles
1. Update the `tailwind.config.mjs` file for global style changes.
2. Use Tailwind utility classes directly in `.astro` files for component-specific styles.

## Notes
- Follow the existing patterns for consistency.
- Refer to the Astro documentation for advanced features: [Astro Docs](https://docs.astro.build).
