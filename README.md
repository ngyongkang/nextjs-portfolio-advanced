## Introduction
This is a Next JS application which uses <b>React</b> for it's frontend and <b>Typescript</b> for backend routes. I will be using <b>Vercel</b> for deployment and <b>Sanity</b> for backend features. Both of them will be on cloud therefore, the final repo will not contain any data.

## Overview of Project Structure
The following is a overview of the project folder structure
```
|- public
|   |-> projectImages
|   |      |-> about.PNG
|   |      |-> contact.PNG
|   |      |-> experience.PNG
|   |      |-> hero.PNG
|   |      |-> project.PNG
|   |      |-> skill.PNG
|   |-> hero.png
|   |-> next.svg
|   |-> vercel.svg
|- sanity
|   |- lib
|   |   |-> client.ts
|   |   |-> image.ts
|   |- schemas
|   |   |-> experience.ts
|   |   |-> pageInfo.ts
|   |   |-> project.ts
|   |   |-> skill.ts
|   |   |-> social.ts
|   |- env.ts
|   |- schema.ts
|- src
|   |-> api
|   |    |-> experience
|   |    |      |-> route.js
|   |    |-> pageinfo
|   |    |      |-> route.js
|   |    |-> project
|   |    |      |-> route.js
|   |    |-> skill
|   |    |      |-> route.js
|   |    |-> social
|   |    |      |-> route.js
|   |-> components
|   |    |-> About.tsx
|   |    |-> BackgroundCircles.tsx
|   |    |-> Contact.tsx
|   |    |-> EmailTemplate.tsx
|   |    |-> ExperienceCard.tsx
|   |    |-> Experiences.tsx
|   |    |-> Footer.tsx
|   |    |-> Header.tsx
|   |    |-> Hero.tsx
|   |    |-> Projects.tsx
|   |    |-> Skill.tsx
|   |    |-> Skills.tsx
|   |-> fonts
|   |    |-> devicon.eot
|   |    |-> devicon.svg
|   |    |-> devicon.ttf
|   |    |-> devicon.woff
|   |-> studio
|   |    |-> [[...index]]
|   |            |-> page.tsx
|   |-> utils
|   |    |-> fetchData.ts
|   |-> actions.ts
|   |-> devicon.min.css
|   |-> favicon.ico
|   |-> globals.css
|   |-> Homepage.tsx
|   |-> layout.tsx
|   |-> middleware.ts
|   |-> page.tsx
|- .env.example
|- .eslintrc.json
|- .gitignore
|- customColors.js
|- next.config.js
|- package-lock.json
|- package.json
|- postcss.config.js
|- README.md
|- sanity.cli.ts
|- sanity.config.ts
|- tailwind.config.ts
|- tsconfig.json
|- typings.d.ts
```

## Screens of the Project

The following shows the different screens on the project.

<b>Hero.tsx</b>
![alt text](https://github.com/ngyongkang/nextjs-portfolio-advanced/blob/1.0.0-full-application/public/projectImages/hero.PNG)

<b>About.tsx</b>
![alt text](https://github.com/ngyongkang/nextjs-portfolio-advanced/blob/1.0.0-full-application/public/projectImages/about.PNG)

<b>Experiences.tsx</b>
![alt text](https://github.com/ngyongkang/nextjs-portfolio-advanced/blob/1.0.0-full-application/public/projectImages/experience.PNG)

<b>Skills.tsx</b>
![alt text](https://github.com/ngyongkang/nextjs-portfolio-advanced/blob/1.0.0-full-application/public/projectImages/skill.PNG)

<b>Projects.tsx</b>
![alt text](https://github.com/ngyongkang/nextjs-portfolio-advanced/blob/1.0.0-full-application/public/projectImages/project.PNG)

<b>Contact.tsx</b>
![alt text](https://github.com/ngyongkang/nextjs-portfolio-advanced/blob/1.0.0-full-application/public/projectImages/contact.PNG)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on Sanity
```
npm install -g @sanity/cli
npx sanity init --coupon sonny2022 
```
using the coupon gives a longer plan for the sanity platform.
<br>
<br>
Go through the default settings and choose <b>Blog (schema)</b> when prompted for a template.

Run the following command to start sanity.
```
npx sanity start
```

Finally to deploy to the cloud.
```
npx sanity deploy
```
Do note that this takes a local copy of what you had on your local system and uploads it to the cloud similar to how git does deployment.

## Packages used on this project

NPM Packages
 1. [Hero icons][1] - ^2.1.1
 2. [React Portable text][2] - ^3.0.11
 3. [Sanity image-url][3] - ^1.0.2
 4. [Sanity vision][4] - ^3.25.0
 5. [Framer Motion][5] - ^10.18.0
 6. [Next JS][6] - 14.0.4
 7. [Next-Sanity][7] - ^7.0.10
 8. [React][8] - ^18
 9. [React-dom][9] - ^18
10. [React Simple Typewriter][10] - ^5.0.1
11. [Social Icons][11] - ^6.7.0
12. [Resend][12] - ^2.1.0
13. [Sanity][13] - ^3.25.0
14. [styled-components][14] - ^6.1.8

CSS Packages
1. [Devicons][15] - v2.15.1

All packages are linked to their respective websites. 

[1]: https://heroicons.com/
[2]: https://www.npmjs.com/package/@portabletext/react
[3]: https://www.sanity.io/docs/image-url
[4]: https://www.sanity.io/docs/the-vision-plugin
[5]: https://www.framer.com/motion/
[6]: https://nextjs.org/
[7]: https://www.npmjs.com/package/next-sanity
[8]: https://react.dev/
[9]: https://react.dev/
[10]: https://www.npmjs.com/package/react-simple-typewriter
[11]: https://www.npmjs.com/package/react-social-icons
[12]: https://resend.com/
[13]: https://www.sanity.io/
[14]: https://styled-components.com/
[15]: https://github.com/devicons/devicon

## Credits
Credits to Sonny Sangha, I followed his tutorial in order to get this project out.
The video was abit dated so I had to hack around a little to get it to work but the 
frontend work was really good. I am planning on adding more elements to it and really flashing it out. 

Click below to see the tutorial I followed. Once again, major thanks to Sonny Sangha for making the tutorial.

[![IMAGE ALT TEXT HERE](https://yt3.googleusercontent.com/wDwyoG0x4N9D0ihYzRNxCNrJPgoO6cAU8IkBU2CNhrj6aKXxCPzy_gqS_1gOrRxwhgofEQTxT4s=s176-c-k-c0x00ffffff-no-rj)](https://www.youtube.com/watch?v=urgi2iz9P6U&t=202s)
