export function aboutMeData() {
  return "Second-year Computer Science student at The Open University. Proficient in problem-solving, critical thinking, self-learning, and adaptability to new technologies. Experienced team player, skilled at collaborating with others to achieve common objectives. Looking for an internship or full-time job as a software developer.";
}

export function skillData() {
  return [
    "JavaScript",
    "Java",
    "Python",
    "C",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Bootstrap",
    "Linux",
    "Docker",
  ];
}

export function educationData() {
  return [
    {
      svg: "tou",
      school: "The Open Univeristy",
      degree: "B.Sc., Computer science",
      gpa: "GPA:89",
      start: "2023",
      end: "2024",
    },
  ];
}

export function experienceData() {
  return [
    {
      svg: "nitzanim",
      title: "Python instructor for “Nitzanim junior” program",
      start: "2023",
      end: "2024",
      notes: [
        "Taught, formed lesson structures and assignments in Python from basics to Pygame.",
        "Managed a class of 30 students.",
      ],
    },
    {
      svg: "tutor",
      title: "Private tutor for level 5 Bagrut in Math and computer science",
      start: "2018",
      end: "2023:",
      notes: [
        "Teaching 10th-12th graders and university students the fundamentals of java.",
        "preparing 10th-12th graders for 5 units math Bagrut.",
      ],
    }/*,
    {
      svg: "idf",
      title:
        "captain rank(reserve), Lachish brigade, c.u.t.m operation’s officer",
      start: "2018",
      end: "2024",
      notes: [
        "Management of Qiryat-gat’s corona vaccination and inspection facilities.",
        "Organize and track the c.u.t.m missions and affairs during iron sword’s war.",
        "Advice and counseling to Qiryat-gat’s mayor, spokesman operations and health departments.",
      ],
    },
    {
      svg: "idf",
      title: "Head of Gaza division’s Home Front section",
      start: "2016",
      end: "2018",
      notes: [
        "Management of operational training of Israeli cities next to the Gaza strip.",
        "Organize and track the c.u.t.m missions and affairs during iron sword’s war.",
        "Advice and counseling to Qiryat-gat’s mayor, spokesman operations and health departments.",
      ],
    },
    {
      svg: "idf",
      title:
        "captain rank(reserve), Lachish brigade, c.u.t.m operation’s officer",
      start: "2015:",
      end: "2016:",
      notes: [null],
    },
    {
      svg: "idf",
      title: "Search and rescue combat officer, The “Home Front” Unit",
      start: "2012",
      end: "2015:",
      notes: [null],
    },*/
  ];
}

export function projectsData() {
    return [
      {
        projectName: "Exercise tracker",
        ProjectText: "Developed a sports application for building and tracking personalized training programs and diets. Utilized a NoSQL database (MongoDB) and implemented the backend using Node.js and Express.js. Designed a responsive frontend using React and Bootstrap for an intuitive user experience.",
        ProjectTech: ["JavaScript","Node.js","React","MongoDB"]
      },
      {
        projectName: "Container logger micro service",
        ProjectText: "Designed a Docker container logger service using JavaScript, Docker, yargs, and MongoDB.The service enables logging and secure storage of logs in the database, addressing service crashes.",
        ProjectTech: ["JavaScript","Node.js","Docker","MongoDB"]
      },
      {
        projectName: "Container logger micro service",
        ProjectText: "Developed an assembler in C that converts assembly code into hashed quaternary code lines using custom data structures and careful memory management.",
        ProjectTech: ["C"]
      },
      {
        projectName: "Message Board",
        ProjectText: "Implemented a message board system using UDP connection for efficient server-to-client communication. Designed JavaFX interfaces to facilitate message broadcasting and subscription functionalities.",
        ProjectTech: ["Java"]
      }
    ];
  }

