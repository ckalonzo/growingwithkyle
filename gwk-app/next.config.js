module.exports = {
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
     // "/menu": { page: "/menu" },
     // "/about": { page: "/about" }
    };
  },
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "imgix",
    path: "https://growingwithkyle.imgix.net/",
    domains: ['1.gravatar.com','localhost','lh3.googleusercontent.com','fashionledge.com'],
  }
}
