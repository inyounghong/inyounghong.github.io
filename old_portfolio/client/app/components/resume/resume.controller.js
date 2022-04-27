class ResumeController {
  constructor() {
    this.name = 'resume';
    this.experiences = [
        {
            name: "Cornell University",
            date: "Fall 2015 - Present",
            location: "Ithaca, NY",
            title: "Computer Science Teaching Assistant",
            description: [
                "Teaching Assistant for CS 1300 and CS 2300 (Intro and Intermediate Web Design and Programming) for four semesters. Topics covered include HTML, CSS, Javascript, jQuery, AJAX, Bootstrap, PHP, MySQL, Git, and responsive design.",
                "Planned and developed lesson plans and lab activities, and led weekly one-hour discussions sections of 25-30 students.",
                "Graded assignments in a timely manner with detailed and constructive feedback.",
                "Held weekly office hours for focused one-on-one help, and monitored Piazza daily to provide prompt responses to student questions.",
            ],
            image: "cornell-logo.png",
        },
        {
            name: "American Express",
            date: "Summer 2017",
            location: "Sunrise, FL",
            title: "Software Engineer Intern",
            description: [
                "Helped migrate the legacy Relationship Care portal written in .NET from vanilla Javascript to AngularJS.",
                "Developed RESTful web application widgets using Java Spring MVC, AngularJS, and SASS.",
                "Tested and documented user exeperience problems in the Relationship Care portal and formulated alternative solutions."
            ],
            image: "amex-logo.png",
        },
        {
            name: "Sooryen Technologies",
            date: "Winter 2015 - Summer 2016",
            location: "Newark, CA",
            title: "Software Engineer Intern",
            description: [
                "Worked with both back and front-end teams to develop a client portal that allows users to register, login, and manage their financial accounts. Used Java Spring to write secure back-end API's for user registration and login, and AngularJS and SASS for front-end.",
                "Managed a team of three other software engineering interns and worked closely with the client to design, plan, and implement the front and back-end for a full CMS website in Drupal.",
                "Contributed to a TVOS app that allows users to register, login, and make purchases from their AppleTV.",
                "Participated in agile development practices by participating in daily stand-ups, weekly sprints, and code reviews. Worked with Jira and Git."
            ],
            image: "sooryen-logo.png",
        },
        {
            name: "Cornell University",
            date: "Spring 2015",
            location: "Ithaca, NY",
            title: "Web Developer",
            description: [
                "Worked closely with researchers in Cornell's Agriculture department to redesign the legacy SRI-rice website to focus on modern design and mobile accessibility.",
                "Designed and interated on detailed wireframes, mock-ups, and icons in Illustrator.",
                "Developed mobile-responsive web pages using SASS and Bootstrap.",
            ],
            image: "cornell-logo.png",
        },
        {
            name: "Belle Apps",
            date: "Spring 2015 - Summer 2016",
            location: "Ithaca, NY",
            title: "Web Developer",
            description: [
                "Led a team of students to build an application in PHP and Javascript to allow users to request and fulfill peer-to-peer food deliveries.",
                "Implemented interactive, mobile-responsive web pages using Bootstrap and jQuery.",
                "Designed web pages, icons, and graphics for website and mobile."
            ],
            image: "belle-logo.png",
        },
        {
            name: "Fiberspark",
            date: "Fall 2014 - Spring 2015",
            location: "Ithaca, NY",
            title: "Web Developer",
            description: [
                "Redesigned previous website to better fit the target audience. Coded mobile-responsive pages using Bootstrap.",
                "Rebranded logo and designed web graphics."
            ],
            image: "fiberspark-logo.png",
        },
        {
            name: "Women in Computing at Cornell",
            date: "Fall 2014 - Spring 2016",
            location: "Ithaca, NY",
            title: "Website Co-Chair",
            description: [
                "Redesigned the Women in Computing at Cornell (WICC) website to improve usability and encourage students to take advantage of the resources and information provided on the site.",
                "Converted Photoshop mock-ups into web pages using SASS and Bootstrap.",
            ],
            image: "wicc-logo.png",
        },

    ];
  }
}

export default ResumeController;
