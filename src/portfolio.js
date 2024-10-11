const header = {
  title: 'IR | Portfolio',
}

const about = {
  name: 'Ignacio Rivero',
  role: 'Software Developer',
  description:
  <>
  <p>
  My name is Nacho, I'm 19 years old and I'm from Uruguay. I’m a FullStack developer specializing in frontend. 
  </p>
  <p>
  I’ve been involved in projects that have equipped me with the knowledge to build applications from scratch, develop my soft skills, and work within multidisciplinary teams. 
  </p>
  <p>
    These experiences have taught me to quickly adapt to new challenges and collaborate effectively with colleagues from various backgrounds. 
  </p>
  <p>
    Throughout my career, I’ve honed my ability to adapt swiftly to new work environments. 
  </p>
  <p>
    I’m sociable, responsible, and always eager to learn and grow.
  </p>
</>,
  resume: 'https://drive.google.com/file/d/1krVDqOEAde-xg_lOEnVBqgxNLj4b8xOD/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/riveroignacio',
    github: 'https://github.com/rivero04',
  },
}

const projects = [
  {
    name: 'Outsourcing Management ManPowerGroup',
    description:
      'Development of a multi-company tool designed to manage three different environments: Suppliers, Control and Customers, ensuring legal compliance and operational efficiency through the automatic issuance of expiration alerts and email notifications.',
    stack: ['HTML', 'CSS', 'Python', 'Django', 'MySQL'],
    sourceCode: 'https://github.com/RelIT-Project/Final_Project_Experis',
    livePreview: 'https://relit-project.github.io/relitgroup/',
  },
  {
    name: 'App Radio Acuarela',
    description:
      'This project consists of an online radio mobile application, developed with React Native to offer a fluid user experience on both Android and iOS devices. The application allows users to listen to a live radio station, with an intuitive design and adaptable to different screen sizes.',
    stack: ['React Native', 'Expo', 'TypeScript'],
    sourceCode: 'https://github.com/rivero04/RadioApp',
    // livePreview: 'https://github.com',
  },
  {
    name: 'AirBnB Clone',
    description:
      'This project is an Airbnb clone developed using Python for the backend logic, along with HTML and CSS for the frontend design. The project replicates key functionalities such as accommodation search and booking management, offering a seamless and engaging user experience.',
    stack: ['HTML', 'CSS', 'Python'],
    sourceCode: 'https://github.com/rivero04/holbertonschool-AirBnB_clone_v4',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'NodeJS',
  'TypeScript',
  'React',
  'Python',
  'C',
  'MySQL',
  'Docker',
  'Git',
  'VSCode',
]

const contact = {
  email: 'ignaciorivero31@gmail.com',
}

export { header, about, projects, skills, contact }
