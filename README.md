# gatsby-plugin-cloudflare-web-analytics

Add Cloudflare Web Analytics to your Gatsby site.

*Not affiliated with or supported by Cloudflare.*

## Config
```javascript
module.exports = {
  plugins: [
    // Add to your gatsby-config.js file.
    {
      resolve: `gatsby-plugin-cloudflare-web-analytics`,
      options: {
        // You need to provide your site token. You get this from the Cloudflare dashboard
        token: YOUR_CF_TOKEN,
      }
    },
  ],
}
```

## License
This project is licensed under the BSD 3 Clause license.