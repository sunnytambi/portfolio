// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  imageLink: require("../editable-stuff/Sunny_Profile_pic_gray.png"),
  firstName: "Sunny",
  middleName: "",
  lastName: "Tambi",
  message: " Head of Engineering | Driving Innovation and Excellence in Technology Leadership | AI/ML student | Startup Tech Specialist | Drove ~5 startups from inception to MVP and funding/acquisition ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sunnytambi/",
    },
    {
      image: "fa-github",
      url: "https://github.com/sunnytambi",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/sunny.tambi/",
    },
    {
      image: "fa-whatsapp",
      url: "https://wa.me/918605941979?text=Hello%20Sunny%2C%20Lets%20connect!",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/Sunny_Profile_pic_gray.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Sunny_Profile_pic_gray.png"),
  imageSize: 375,
  message:
    `My name is Sunny Tambi. I'm a graduate of 2005 from <b>Malaviya National Institute of Technology (MNIT) Jaipur</b> with a degree in Electronics & Communication Engineering.
    <br/>✦ As a strategic technology leader with 19+ years of experience in engineering leadership and organisational transformation, I have consistently driven enterprise-wide initiatives that have contributed to revenue generation of approximately $255M across organisations. 
    <br/>✦ As Head of Engineering, I architect the technology vision and drive engineering excellence across multiple business units. 
    <br/>✦ Key strategic accomplishments include establishing enterprise-wide engineering maturity frameworks, spearheading platform modernization through Platform Engineering Services initiative, and leading digital transformation across multiple product lines. 
    <br/>✦ I've successfully implemented data science initiatives and established robust engineering practices that align with business objectives. 
    <br/>✦ My Core Strategic Competencies include Technology Vision (Enterprise architecture roadmap, Platform modernization, Innovation initiatives), Engineering Excellence (Quality frameworks, Engineering maturity models, Performance optimization), Organisational Leadership (Multi-team leadership, Technology governance, Strategic partnerships) and Business Impact (Revenue growth, Cost optimization, Digital transformation) to name a few. 
    <br/>✦ In my past employments I have led the conceptualization and launch of enterprise B2B platforms, scaling them across international markets while establishing robust engineering practices and driving technological innovation. 
    <br/>✦ I love to play outdoor sports like 🏓Pickleball, 🏸Badminton, 🏏Cricket, etc. `,
  resume: require("../editable-stuff/Sunny Tambi_Resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const projects = {
  show: false,
  heading: "Projects",
  data: [
    {
      name: "Sumridhi, Saksham, Cropwise Grower, B2B eCommerce, Distributor Management System, Platform Services",
      companyName: "SYNGENTA INDIA PVT LTD.",
      role: "Head of Engineering",
      description: "",
      image: "",
      links: [
        "https://play.google.com/store/apps/details?id=com.syngenta.retailerapp",
        "https://play.google.com/store/apps/details?id=com.syngenta.saksham",
        "https://play.google.com/store/apps/details?id=com.syngenta.growerconnectapp",
        "https://play.google.com/store/apps/details?id=com.syngenta.syngentaretailers"
      ]
    },
    {
      name: "ARMS (Enterprise Credit Risk Management), B2B KYC",
      companyName: "RUBIX DATA SCIENCES PVT LTD.",
      role: "Director - Engineering",
      description: "ARMS is a comprehensive credit risk management platform that enables enterprises to manage their credit risk effectively. It provides a centralized view of credit risk across the organization, allowing for better decision-making and improved risk management.",
      image: "",
      links: [
        "https://arms.rubixds.com/",
        "https://digital.rubixds.com/",
        "https://videokyc.rubixds.com/",
      ]
    },

  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Sunny_Profile_pic_gray.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Sunny_Profile_pic_gray.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "JavaScript", value: 70 },
    { name: "Python", value: 70 },
    { name: "Spring Boot", value: 90 },
    { name: "Nodejs", value: 70 },
    { name: "React", value: 70 },
    { name: "AWS", value: 85 },
    { name: "Azure", value: 70 },
    { name: "GCP", value: 70 },
    { name: "SQL", value: 80 },
    { name: "NoSQL", value: 70 },
    { name: "MongoDB", value: 70 },
    { name: "Software Architecture", value: 75 },
    { name: "CI/CD", value: 70 },
    { name: "SDLC", value: 90 },
    { name: "Agile", value: 80 },
    { name: "Digital Transformation", value: 75 },
    { name: "SaaS", value: 80 },
    { name: "API management", value: 75 },
    { name: "APM", value: 80 },
    { name: "Business Intelligence", value: 65 },
    { name: "Information security", value: 70 },
    { name: "ISO27001", value: 70 },
    { name: "AI", value: 60 },
    { name: "Machine Learning", value: 70 },
    { name: "NLP", value: 70 },
    { name: "Prompt Engineering", value: 70 },
    { name: "DevOps", value: 70 },
    { name: "Docker", value: 70 },
    { name: "Kubernetes", value: 70 },
  ],
  softSkills: [
    { name: "Technology Leadership", value: 80 },
    { name: "Cross-Functional Collaboration", value: 80 },
    { name: "Vendor Management", value: 75 },
    { name: "Innovation Management", value: 80 },
    { name: "Performance management", value: 85 },
    { name: "Risk Management", value: 75 },
    { name: "Data-Driven Decision Making", value: 90 },
    { name: "Talent Acquisition", value: 90 },
    { name: "Process Improvement", value: 85 },
    { name: "Stakeholder Management", value: 85 },
    { name: "Strategic Planning", value: 80 },
    { name: "Budget Management", value: 85 },
    { name: "Team Management", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    `I help organizations achieve their business goals of Digital Transformation, New Product Launches, 
    Fostering Innovation and Expand Market Reach via my skills of technology leadership, 
    scaled product development, high performance team development and AI/ML product lifecycle.
    Feel free to email me at`,
  email: "sunnytambi@gmail.com",
};

const experiences = {
  show: true,
  heading: "Work Experiences",
  data: [
    {
      role: 'Head of Engineering',
      companyName: 'SYNGENTA INDIA PVT LTD.',
      companylogo: require('../assets/img/syngenta.png'),
      date: 'Jul 2023 - Present',
    },
    {
      role: 'Director - Engineering',
      companyName: 'RUBIX DATA SCIENCES PVT LTD.',
      companylogo: require('../assets/img/rubix.png'),
      date: 'Jun 2021 - Jul 2023',
    },
    {
      role: 'Sr. Development Manager, Offshore CTO',
      companyName: 'TALENTICA SOFTWARE PVT LTD.',
      companylogo: require('../assets/img/talentica.png'),
      date: 'Oct 2015 - Jun 2021',
    },
    {
      role: 'Member Product Architecture',
      companyName: 'INFOSYS EDGEVERVE LTD.',
      companylogo: require('../assets/img/edgeverve.png'),
      date: 'Mar 2013 - Sep 2015',
    },
    {
      role: 'Sr. Web Programmer',
      companyName: 'UBISOFT LTD.',
      companylogo: require('../assets/img/ubisoft.png'),
      date: 'Apr 2012 - Jan 2013',
    },
    {
      role: 'Information Technology Analyst',
      companyName: 'TATA CONSULTANCY SERVICES LTD.',
      companylogo: require('../assets/img/tcs.png'),
      date: 'Sep 2005 - Apr 2012',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, projects, skills, leadership, getInTouch, experiences };
