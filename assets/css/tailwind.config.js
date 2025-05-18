const themeDir = __dirname + "/../../";

module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
      themeDir + "layouts/**/*.html",
      themeDir + "content/**/*.html",
      "layouts/**/*.html",
      "content/**/*.html",
      "exampleSite/layouts/**/*.html",
      "exampleSite/content/**/*.html",
    ],
    // Safelist für Modal-Popup
    options: {
      safelist: [
        'fixed', 'hidden', 'z-50', 'inset-0', 'flex', 'items-center', 'justify-center',
        'bg-black', 'bg-opacity-50', 'bg-white', 'dark:bg-gray-900', 'rounded-lg', 'shadow-lg',
        'max-w-2xl', 'w-full', 'mx-4', 'p-6', 'relative', 'animate-fade-in',
        'absolute', 'top-2', 'right-2', 'text-gray-400', 'hover:text-gray-700',
        'dark:hover:text-gray-200', 'text-2xl', 'font-bold', 'text-gray-900', 'dark:text-gray-100'
      ]
    }
  },
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: [
            {
              color: theme("colors.gray.400"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
