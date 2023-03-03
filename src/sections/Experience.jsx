import "./Experience.css";

import JobCard from "../components/JobCard";

const HISTORY = [
  {
    logo: "./images/Wells_Fargo_Logo_(2020).svg",
    company: "Wells Fargo",
    position: "Software Engineer",
    project: "Electronic Document Services",
    content: [
      `Built a prototype Micro Frontend Application using React and Hooks that displayed both active and processed electronic DocuSign documents. Through the use of Wells Fargo's React Components library, I created a responsive and intuitive user interface that alerted users to critical and time-sensitive documents within their banking account.`,
      `As part of a project involving the migration of electronic documents to a new system, I wrote SQL scripts to extract, transform, and load data from multiple sources. To validate the accuracy of the migrated data, I generated electronic documents from the new system and compared them against the original documents to ensure that the data fields were correctly mapped. This process involved developing test scenarios and using SQL queries to verify the data, as well as working closely with stakeholders to identify any discrepancies and make necessary adjustments to the data mapping.`,
      `Utilized Webpack 5 to configure module federation and enable seamless integration with container applications. Implemented robust error handling mechanisms to ensure the electronic document service remained available to users. Conducted a successful product demonstration, highlighting the application's value proposition and its alignment with Wells Fargo's banking needs.`,
    ],
  },
  {
    logo: "./images/T-Mobile_New_Logo.png",
    company: "T-Mobile",
    position: "React Developer",
    project: "Regional Budget Analytics Application",
    content: [
      `Developed a mission-critical React and JavaScript business analytics tool that converted Excel spreadsheets into an interactive web application on the Azure cloud.`,
      `Collaborated with product owners and backend engineers to update, expand, and validate backend services and REST APIs through Swagger API.`,
      `Integrated Microsoft BI Reports into web application and reduced asset-performance metrics by 30%.`,
    ],
  },
  {
    logo: "./images/jump-by-cognixia.png",
    company: "Cognixia",
    position: "Full Stack Web Developer",
    project: "Consultant Projects",
    content: [
      `Deployed to T-Mobile and Wells Fargo as a React Developer and Software Engineer to build web applications.`,
      `Received training in preparation of contract assignments with Fortune 500 companies by building a diverse portolio of data analytics tools and single-page/responsive web applications using React, Node.js, Express.js, MongoDB, MySQL, and Java Spring Boot.`,
      `Led a team of consultants to win first place in a company organized hackathon where we pitched and prototyped an in-car IoT device that monitored and alerted drivers of divided attention, accident prone areas, and navigational assistance.`,
    ],
  },
  {
    logo: "",
    company: "City of Seattle",
    position: "Legal Project Coordinator",
    project: "Software Applications Analysis",
    content: [
      `Collected use-cases and created application work-flows to define user stories and business requirements for technical documentations.`,
      `Collaborated with judicial teams to identify court records and documents for digital production and make accessible to the general public.`,
      `Identified bottlenecks and repetitive court processes within the use of software and court applications and provided recommendations that reduced case loads by 25%.`,
    ],
  },
];

const Experience = () => {
  return (
    <div className="container experience-container" id="experience">
      <h2 className="h2-title">Work History</h2>
      {HISTORY.map((job, index) => (
        <JobCard
          key={index}
          index={index}
          logo={job.logo}
          company={job.company}
          position={job.position}
          project={job.project}
          content={job.content}
        />
      ))}
    </div>
  );
};

export default Experience;
