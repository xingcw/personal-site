// TODO Add a couple lines about each project
const data = [
  {
    title: 'Learning Driven Pose Selection for Sampling-based Planning',
    subtitle: 'Semester Project',
    image: '/images/projects/sp.png',
    date: 'Oct. 2021 - Feb. 2022',
    video_link: 'https://youtube.com/playlist?list=PL05BR7PIAwqDSjO-JhPe6wjUJ8h022wVk',
    slides_link: 'https://docs.google.com/presentation/d/1K5CbnFRSrAAyoEQsiZFr9_zryfHRtAEs2Zazve4KSZk/edit?usp=sharing',
    title_link: '',
    subtitle_link: '',
    code_link: '',
    author: 'Chunwei Xing',
    desc:
    'In this project, we trained a RL policy to to generate optimal poses and joint configurations for an excavator as it navigates diverse terrains, guided by a global trajectory on a 2D map. Our approach surpasses traditional uniform sampling methods, demonstrating superior performance and strong generalization capabilities across various terrain types.',
  },
  {
    title: 'Descriptellation: Deep Learned Constellation Descriptors for SLAM',
    subtitle: 'Perception and Learning for Robotics - Course Project',
    video_link: 'https://www.youtube.com/watch?v=j_28-maRwmo&list=PL05BR7PIAwqAx0VgwNVHPepqPwg433qfx&index=1',
    title_link: 'https://arxiv.org/abs/2203.00567',
    subtitle_link: 'https://asl.ethz.ch/education/lectures/perception_and_learning_for_robotics.html',
    code_link: 'https://github.com/ethz-asl/Descriptellation',
    slides_link: 'https://docs.google.com/presentation/d/15TJfORM8ugRDQLiqKYFq9NjYdliNyy4l9T3FXxn3TvI/edit?usp=sharing',
    image: '/images/projects/descriptellation.jpg',
    date: 'Feb. 2021 - Jun. 2021',
    author: 'Chunwei Xing | Xinyu Sun',
    desc:
      'We propose a learning-based approach that constructs constellations from semantically meaningful objects and utilizes Deep Graph Convolutional Networks to map these constellations to descriptive representations. Our method outperforms both PointNet and handcrafted constellation descriptors in global localization, while demonstrating robustness against various types of noise.',
  },
];

export default data;
