## Personal Blog

website: [sylviezhang.com](https://www.sylviezhang.com/)

hosted on [Vercel](https://vercel.com/home)

## File Structure

```tree
.
├── README.md
├── app
│   ├── (pages)
│   │   ├── about
│   │   ├── blog
│   │   ├── layout.tsx
│   │   ├── project
│   │   └── toolbox
│   ├── components
│   │   ├── Footer.tsx
│   │   ├── Navigator.tsx
│   │   └── PageHeader.tsx
│   ├── config
│   │   └── index.ts
│   ├── icon.png
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   └── utils
│       └── index.ts
├── json
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── public
│   ├── bg.jpg
│   └── content
│       ├── blog_name_1
│       ├── blog_name_2
│       └── new_blog
├── scripts
│   ├── create-new-blog.js
│   └── generate-list.js
├── styles
│   ├── fonts
└── tsconfig.json
```

-   app: page and compontent
-   json: constant data
-   public/content: blog content
-   scripts: node script that create blog template file and generate blog list JSON
-   styles: CSS files and font

## How to Run

Local development: `npm run dev`, default port 3000.

Create new blog: `npm run create [SLUG_NAME]`, `SLUG_NAME` must be provided, and will be used as directory name.

Generate bolg list: `npm run list`, generate JSON file according to `slug`, `data`, `title`, and `tag`. The JSON will be used to render the blog list in front end.
