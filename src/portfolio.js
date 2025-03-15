/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
//import { PiMicrosoftExcelLogoFill, PiMicrosoftPowerpointLogoFill, PiMicrosoftWordLogoFill } from "react-icons/pi";
import sage3 from "./assets/images/Sage-X3-logo.png"
import Access from "./assets/images/Access.png"
import Photoshop from "./assets/images/Photoshop.png"
import Illustrator from "./assets/images/Illustrator.png"
import Excel from "./assets/images/Excel.png"
import PowerPoint from "./assets/images/PowerPoint.png"
import Word from "./assets/images/Word.png"
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "seif tarhouni",
  title: "Bonjour à tous, Je suis Seif",
  subTitle: emoji(
    "Responsable des achats passionné 🚀 En tant qu'acheteur étranger, je suis responsable de l'approvisionnement, de la négociation et de l'achat de biens et de services auprès de fournisseurs internationaux. Je garantis la meilleure qualité, le meilleur prix et les meilleures conditions de livraison, tout en entretenant des relations solides avec les fournisseurs internationaux."
  ),
  resumeLink:
    //"https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
    require("./assets/Document/TARHOUNI Seif acheteur étranger.pdf"),
    // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  //github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/tarhouni-seif-a904a92aa/",
  gmail: "saadpasta70@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/seif.tarhouni.10",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "CE QUE JE FAIT",
  //subTitle: "Je collabore avec des fournisseurs internationaux pour garantir l'accès aux meilleurs composants et équipements. ",
  subTitle:"Acheteur étranger et responsable des achats avec une large expérience dans la gestion des fournisseurs, la négociation des contrats et l'approvisionnement international. J'excelle dans l'utilisation des outils bureautiques et logiciels spécialisés pour optimiser les processus d'achat.",
  skills: [
    emoji(
      "⚡Gestion et suivi des achats internationaux"),
    emoji("⚡ Négociation avec les fournisseurs pour garantir les meilleures conditions d'achat"),
    emoji("⚡ Analyse des coûts et optimisation des budgets"),
    emoji("⚡ Utilisation avancée des outils Microsoft Office pour la gestion des données"),
    emoji("⚡ Maîtrise des logiciels de gestion ERP, notamment Sage X3"),
    emoji("⚡ Compétences en design avec Photoshop et Illustrator pour la création de supports professionnels"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Excel",
      icon: <img src={Excel} alt="Excel" style={{ width: "40px", height: "40px" }} />
      //icon: <PiMicrosoftExcelLogoFill />,  
      
    },
    {
      skillName: "Word",
      //icon: <PiMicrosoftWordLogoFill />
      icon: <img src={Word} alt="Word" style={{ width: "40px", height: "40px" }} />
      //fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "PowerPoint",
      icon: <img src={PowerPoint} alt="PowerPoint" style={{ width: "40px", height: "40px" }} />
      //icon: <PiMicrosoftPowerpointLogoFill />
    },
    {
      skillName: "Access",
      icon: <img src={Access} alt="Access" style={{ width: "40px", height: "40px" }} />
    },
    {
      skillName: "Sage X3",
      //fontAwesomeClassname: "fab fa-react"
      icon: <img src={sage3} alt="Sage X3" style={{ width: "40px", height: "40px" }} />
    },
    {
      skillName: "Photoshop",
      icon: <img src={Photoshop} alt="Photoshop" style={{ width: "50px", height: "40px" }} />
    },
    {
      skillName: "Illustrator",
      icon: <img src={Illustrator} alt="Illustrator" style={{ width: "50px", height: "40px" }} />
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Centre de formation ELITE",
      logo: require("./assets/images/Elite.png"),
      subHeader: "Dimplôme BTS en commerce international",
      duration: "Septembre 2017 - Juin 2018",
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "Lycée secondaire Grombalia",
      logo: require("./assets/images/Lycee.png"),
      subHeader: "Baccalauréat en sciences technologiques",
      duration: "Septembre 2011 - Juin 2014",
      //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
 ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Achat", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Negociation",
      progressPercentage: "80%"
    },
    {
      Stack: "Design",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Acheteur étranger",
      company: "Laboratoire Medis",
      companylogo: require("./assets/images/medis_logo.png"),
      date: "Avril 2024 – Présent",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Suivre et gérer le budget d'achat.",
        "Négocier les contrats et les conditions de service avec les fournisseurs.",
        "Effectuer des analyses coûts-avantages pour les achats potentiels."
      ]
    },
    {
      role: "Directeur des opérations",
      company: "Diet.qa/ Qatar",
      companylogo: require("./assets/images/DietQa.png"),
      date: "Avril 2021 – Avril 2024",
      descBullets:[
        "Former les nouveaux employés et assurer la formation continue de l'ensemble du personnel.",
        "Chercher des solutions pour réduire le gaspillage et les coûts d'exploitation.",
        "Participer aux comptes de résultat trimestriels."
      ]
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Responsable des achats",
      company: "CSM GIAS",
      companylogo: require("./assets/images/Csm.png"),
      date: "Octobre 20219 – Avril 2021",
      descBullets:[
        "Évaluer les fournisseurs en fonction du prix, de la qualité et des délais de livraison.",
        "Participer à des réunions, des salons professionnels et des conférences pour se renseigner sur les nouvelles tendances du secteur et nouer des contacts avec les fournisseurs."
      ]
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display:false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Réalisations et certifications 🏆 "),
  subtitle:
"Réalisations, certifications, lettres de récompense et quelques trucs sympas que j'ai faits !",
  achievementsCards: [
    {
      title: "Scrum fundamentals",
      //subtitle:
        //"First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/ScrumFundamentals.png"),
      //imageAlt: "Google Code-In Logo",
      //footerLink: [
       // {
         // name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        //},
        //{
          //name: "Award Letter",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        //},
        //{
          //name: "Google Code-in Blog",
          //url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
       // }
     // ]
    },
    {
      title: "Digital Marketing Fundamentals",
      //subtitle:
        //"Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/DigitalMarketing.png"),
    },
    {
      title: "Corporate Sales Fundamentals",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/salesFundamentals.png"),
      
    },
    {
      title: "Negotiation Associate",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/NegociationAssociate.png"),
      
    },
    {
      title: "Six Sigma Yellow Belt",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/SixSigma.png"),
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display:false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contacter Moi ☎️"),
  subtitle:
    "Vous souhaitez discuter d'une œuvre ou simplement me dire bonjour? Ma boîte de réception est ouverte à tous.",
  number: "+21624802830",
  email_address: "tarhuni.seif@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
