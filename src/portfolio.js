const header = {
  title: '2024 | Portfolio'
}


const about = {
  name: 'Ignacio Rivero',
  role: 'Software Developer',
  description:
  <>
 <p>
  My name is <strong>Nacho</strong>, I'm <strong>19 years old</strong> and I'm from <strong>Uruguay</strong>. I’m a <strong>FullStack developer</strong> specializing in <strong>frontend</strong>. 
</p>
<p>
  I’ve been involved in projects that have equipped me with the knowledge to <strong>build applications from scratch</strong>, develop my <strong>soft skills</strong>, and work within <strong>multidisciplinary teams</strong>. 
</p>
<p>
  These experiences have taught me to <strong>quickly adapt</strong> to new challenges and collaborate effectively with colleagues from various backgrounds. 
</p>
<p>
  Throughout my career, I’ve honed my ability to <strong>adapt swiftly</strong> to new work environments. 
</p>
<p>
  I’m <strong>sociable</strong>, <strong>responsible</strong>, and always eager to <strong>learn and grow</strong>.
</p>
</>,
  resume: 'https://drive.google.com/file/d/1krVDqOEAde-xg_lOEnVBqgxNLj4b8xOD/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/riveroignacio',
    github: 'https://github.com/rivero04',
    instagram: 'https://www.instagram.com/rivero.04/',
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
  { name: 'HTML', class: 'skill-html' },
  { name: 'CSS', class: 'skill-css' },
  { name: 'JavaScript', class: 'skill-javascript' },
  { name: 'NodeJS', class: 'skill-nodejs' },
  { name: 'TypeScript', class: 'skill-typescript' },
  { name: 'React', class: 'skill-react' },
  { name: 'Python', class: 'skill-python' },
  { name: 'C', class: 'skill-c' },
  { name: 'MySQL', class: 'skill-mysql' }
];

const tools = [
  { name: 'VSCode', class: 'tool-vscode' },
  { name: 'Github', class: 'tool-github' },
  { name: 'Docker', class: 'tool-docker' },
  { name: 'Git', class: 'tool-git' },
  { name: 'Vercel', class: 'tool-vercel' }
];

const contact = {
  email: 'ignaciorivero31@gmail.com',
}

export { header, about, projects, skills, tools, contact }
