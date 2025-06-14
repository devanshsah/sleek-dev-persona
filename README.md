
# design dost

A sleek, modern developer portfolio website built with React, TypeScript, and Tailwind CSS.

## Project Overview

This is a responsive, modern developer portfolio website showcasing skills, projects, and contact information. The site features a clean design with smooth animations and a mobile-friendly interface.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion
- shadcn/ui components

## Development

To run this project locally:

```sh
# Clone the repository
git clone https://github.com/devanshsah/sleek-dev-persona.git

# Navigate to the project directory
cd sleek-dev-persona

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deployment with GitHub Pages

To deploy this site using GitHub Pages:

1. In your GitHub repository, go to Settings > Pages
2. Set the source to your main branch
3. Configure your custom domain if you have one
4. Save your settings

### Custom Domain Configuration (GoDaddy)

To point your GoDaddy domain to GitHub Pages:

1. Add the following A records pointing to GitHub Pages IP addresses:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

2. Add a CNAME record:
   - Type: CNAME
   - Name: www
   - Value: devanshsah.github.io

3. In your GitHub repository settings, add your custom domain in the Pages section

## Building for Production

```sh
# Generate a production build
npm run build

# Preview the production build locally
npm run preview
```

## License

MIT
