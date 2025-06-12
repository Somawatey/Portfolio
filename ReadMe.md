# Portfolio Website SEO Setup Guide

This guide explains how to optimize the SEO settings for the portfolio website.

## Current SEO Implementation

### Meta Tags
The following meta tags are implemented in [index.html](index.html):

```html
<meta name="title" content="Somawatey Khov - Web Developer Portfolio">
<meta name="description" content="Portfolio of Somawatey Khov - A passionate Web Developer from Cambodia specializing in Flutter, React, and full-stack development. Explore my projects and experience.">
<meta name="keywords" content="Somawatey Khov, Cambodia Developer, Web Developer Cambodia, Flutter Developer, Software Engineer Phnom Penh, CADT Student">
<meta name="author" content="Somawatey Khov">
<meta name="robots" content="index, follow">
<meta name="language" content="English">
```

### Sitemap
The [sitemap.xml](sitemap.xml) file is configured with:
- Homepage URL: `https://khovsomawateyportfolio.netlify.app`
- Update frequency: Weekly
- Priority: 1.0 for homepage, 0.9 for other pages

## Setup Instructions

1. **Verify Meta Tags**
   - Ensure all meta tags in [index.html](index.html) are properly filled
   - Update content regularly to match your current skills and projects

2. **Sitemap Configuration**
   - Keep [sitemap.xml](sitemap.xml) updated with any new pages
   - Update `lastmod` dates when content changes

3. **Image Optimization**
   - Use descriptive file names for images in `assets/`
   - Include alt text for all images
   - Optimize image sizes for web

4. **Content Structure**
   - Maintain proper heading hierarchy (h1, h2, etc.)
   - Use semantic HTML elements
   - Keep content relevant and updated

## Best Practices

- Regularly update project descriptions and skills
- Ensure all links are working
- Maintain mobile responsiveness
- Keep content fresh and relevant
- Monitor website performance

## Deployment

The website is deployed on Netlify with automatic builds from the main branch.

## Additional SEO Tips

1. **Performance Optimization**
   - Minimize CSS/JS files
   - Optimize image loading
   - Implement lazy loading for images

2. **Social Media Integration**
   - Add social media meta tags
   - Keep social links updated

3. **Analytics**
   - Set up Google Analytics
   - Monitor traffic and user behavior
   - Make improvements based on data

## Resources

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [Netlify Documentation](https://docs.netlify.com/)



## to start the project
click on the index.html then click on live server