
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "YawBia",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Publications",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}

export const intro = {
  title: "Hey, I'm YawBia",
  description: "a structural biologist interested in infectious disease research.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1eqJmBhY9-aOUIdL6OO6IUjd-3ukpWErw/view?usp=sharing",
      isPrimary: false,
    },
    {
      title: "Publications",
      link: "https://scholar.google.com/citations?user=vRS_sU4AAAAJ&hl=en&authuser=1",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I graduated from Lee Kong Chian School of Medicine, Nanyang Technological University in 2023 for pursuing a PhD programme.",
    "My research focused in understanding how virus replicate themselves during infection using structural biology and protein sciences methods.",
    "I contributed to several research breakthroughs that advances the RNA virus research field for providing molecular insights into virus replication process and published in high impact scientific journals.",
    "While away from work, I enjoy being a foodie, photographer, and nature-lover.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Protein + RNA",
      description: "I analyse 3D structures of Protein and RNA molecules involed in complex biological processes for viral infection and immune defenses.",
      icons: null,
    },
    {
      title: "Assay Development",
      description: "I develop in vitro assays to characterize the biochemistry and biophysics of target protein and its interactions with ligands.",
      icons: null,
    },
    {
      title: "Biotherapeutics",
      description: "I design biotherapeutic modalities with antiviral properties to address the unmet demand for infectious diseases.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "CHIKV-RC",
      description: "Molecular architecture of the Chikungunya virus replication complex - Y.B. Tan et al Science Advances 2023",
      icons: [
        {
          icon: faAppStore,
          link: "https://doi.org/10.1126/sciadv.add2536",
        },
      ]
    },
    {
      title: "Alphavirus Polymerase",
      description: "Crystal structures of alphavirus nonstructural protein 4 (nsP4) reveal an intrinsically dynamic RNA-dependent RNA polymerase fold - Y.B. Tan et al, Nucleic Acids Research 2022",
      icons: [
        {
          icon: faAppStore,
          link: "https://doi.org/10.1093/nar/gkab1302",
        },
      ]
    },
    {
      title: "Portfolio",
      description: "My Research Portfolio.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/yawbia",
        },
      ]
    },
  ],
}


export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at tanyawbia6@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:tanyawbia6@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://calendar.app.google/4BoeR8svw7PZiYQa6",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Yaw Bia | Structural Biologist | Drug Discovery | Biotherapeutics",
  description: "I analyse 3D molecular structures of biological processes to design biotherapeutics for human diseases.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@yawbia",
  description: "Structural Biologist | Biotherapeutics Development",
  cards: [
    {
      title: "My website",
      link: "https://yawbia.github.io/portfolio/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/yawbia/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/yawbia/",
    },
    {
      title: "My Scholar",
      link: "https://scholar.google.com/citations?user=vRS_sU4AAAAJ&hl=en&authuser=1",
    },
    {
      title: "My ORCID",
      link: "https://orcid.org/0000-0002-1491-2516",
    },
  ]
}
