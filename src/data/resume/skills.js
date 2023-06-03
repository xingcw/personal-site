// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  // {
  //   title: 'Node.JS',
  //   competency: 3,
  //   category: ['Web Development', 'Javascript'],
  // },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  // {
  //   title: 'Amazon Web Services',
  //   competency: 4,
  //   category: ['Web Development', 'Tools'],
  // },
  // {
  //   title: 'Heroku',
  //   competency: 2,
  //   category: ['Web Development', 'Tools'],
  // },
  // {
  //   title: 'MongoDB',
  //   competency: 3,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'ElasticSearch',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'PostgreSQL/SQLite3/SQL',
  //   competency: 4,
  //   category: ['Web Development', 'Databases', 'Languages'],
  // },
  // {
  //   title: 'Redis',
  //   competency: 3,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'Data Mining',
  //   competency: 3,
  //   category: ['Data Science'],
  // },
  // {
  //   title: 'Express.JS',
  //   competency: 2,
  //   category: ['Web Development', 'Javascript'],
  // },
  // {
  //   title: 'D3',
  //   competency: 2,
  //   category: ['Web Development', 'Javascript'],
  // },
  // {
  //   title: 'Flask',
  //   competency: 2,
  //   category: ['Web Development', 'Python'],
  // },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'ROS',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['Tools'],
  },
  // {
  //   title: 'Kubernetes',
  //   competency: 2,
  //   category: ['Tools', 'Data Engineering'],
  // },
  // {
  //   title: 'Google Cloud Compute',
  //   competency: 2,
  //   category: ['Tools', 'Web Development'],
  // },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  // {
  //   title: 'Numba',
  //   competency: 2,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Tools', 'Python'],
  },
  // {
  //   title: 'Typescript',
  //   competency: 2,
  //   category: ['Web Development', 'Languages', 'Javascript'],
  // },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'LaTex',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  // {
  //   title: 'Julia',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  // {
  //   title: 'Data Visualization',
  //   competency: 3,
  //   category: ['Data Science', 'Javascript'],
  // },
  // {
  //   title: 'GraphQL',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Machine Learning', 'Python'],
  },
  // {
  //   title: 'Hadoop',
  //   competency: 2,
  //   category: ['Data Engineering', 'Data Science'],
  // },
  // {
  //   title: 'Spark',
  //   competency: 2,
  //   category: ['Data Engineering', 'Data Science'],
  // },
  // {
  //   title: 'Dagster',
  //   competency: 2,
  //   category: ['Data Engineering', 'Python'],
  // },
  // {
  //   title: 'Mypy',
  //   competency: 3,
  //   category: ['Python'],
  // },
  // {
  //   title: 'Pylint',
  //   competency: 4,
  //   category: ['Data Engineering', 'Python'],
  // },
  {
    title: 'Chinese',
    competency: 5,
    category: ['Natrual Language'],
  },
  {
    title: 'English',
    competency: 4,
    category: ['Natrual Language'],
  },
  {
    title: 'German',
    competency: 2,
    category: ['Natrual Language'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
