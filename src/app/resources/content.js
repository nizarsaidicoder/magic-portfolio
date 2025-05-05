import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Nizar",
  lastName: "Saidi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer / Student",
  avatar: "/images/avatar.jpg",
  location: "Europe/Strasbourg", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nizarsaidicoder",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nizar-saidi-5a6b71302/",
  },
  {
    name: "Email",
    icon: "email",
    link: "nizar.saidi.coder@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Computer science student</>,
  subline: (
    <>
      I'm a developer and designer studying{" "}
      <InlineCode>Computer Science</InlineCode> at the University of Strasbourg.
      I craft intuitive
      <br /> user experiences and powerful software.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from France/Strasbourg`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a developer and designer studying computer science at the University
        of Strasbourg. Passionate about crafting impactful digital experiences,
        I specialize in blending creativity with cutting-edge technology to
        create sleek websites and intuitive interfaces. Outside of my studies,
        I'm dedicated to honing my craft through independent coding projects and
        design explorations.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Jung Logistique",
        timeframe: "2025 - Present",
        role: "Intern",
        achievements: [
          <>
            Developed and maintained an internal ERP functionalities
            in .NET Platform
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Strasbourg",
        description: (
          <>
            <InlineCode>-- 2023 - 2026 --</InlineCode> Bachelor of Computer
            Science
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to Prototype and Design in Figma.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "React/Next.js",
        description: <>Building next gen apps with React/Next.js.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
       {
        title: "Prisma/PostreSQL",
        description: <>Clean database integration with the powerful Duo Prisma and PostgreSQL</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
          
      {
        title: "Nest/Express API Developpement",
        description: <>Developping error free APIs using up-to-date technologies Nest, Express, ASP, SpringBoot...</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "PHP/Laravel",
        // optional: leave the array empty if you don't want to display images
        description : <>Experienced in developping CRUD Apps using Laravel</>.
        images: [],
      },
      {
        title: ".NET / Java",
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "vertical",
    },

    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-15.jpg",
      alt: "image",
      orientation: "horizontal",
    },

    {
      src: "/images/gallery/img-17.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-18.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-19.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-20.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
