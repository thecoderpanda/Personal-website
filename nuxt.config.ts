export default defineNuxtConfig({
  extends: 'content-wind',

  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://blog.thecoderpanda.com/blog/",
      },
      {
        source: "/blog/(.*?)([.]\\w{2,5})(\\?[^/]+)?",
        destination: "https://blog.thecoderpanda.com/blog/$1$2$3",
      },
      {
        source: "/blog/([\\S\\s]+)",
        destination: "https://blog.thecoderpanda.com/blog/$1/",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/blog/:path*",
        headers: [
          { key: "X-Forwarded-Proto", value: "https" },
          { key: "X-Forwarded-Host", value: thecoderpanda },
          // { key: "X-Forwarded-For", value: "" },
        ],
      },
    ];
  },
});
