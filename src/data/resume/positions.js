const positions = [
  {
    company: 'Robotic Systems Lab (RSL), ETHz',
    position: 'Semester Project',
    link: 'https://rsl.ethz.ch/',
    daterange: 'Oct. 2021 - Feb. 2022',
    points: [
      'Developed a base pose selector based on Reinforcement Learning (PPO) and trained policies for a wheeled-legged robot to ground on challenging terrains.',
      'Formulated evaluation metrics, experimented with reward shaping and improved the performances.',
      'Achieved a success rate of 80% at a grounding error of 0.05m on challenging terrains, e.g. Holes.',
      'Integrated the pose selector into the global planner (RRT*) and benchmark against brute force search.',
    ],
  },
  {
    company: 'AI Center, ETHz',
    position: 'NeurlIPS21 Competition',
    link: 'https://www.drivendata.org/competitions/79/competition-image-similarity-1-dev/',
    daterange: 'Aug. 2021 - Oct. 2021',
    points: [
      'Implemented a self-distillation network by combining the DINO backbone (Vision Transformer) and SimCLRv2 backbone, and improved the performances by 20% over the published baselines.',
    ],
  },
  {
    company: 'Autonomous Systems Lab (ASL), ETHz',
    position: 'Course Project',
    link: 'https://asl.ethz.ch/',
    daterange: 'Feb. 2021 - Jun. 2021',
    points: [
      'Implemented a semi-supervised triplet-loss-based graph convolution network modified from DeepGCNs to learn a deep-learned descriptor for the objects constellation for global localization in SLAM.',
      'Introduced semantic embedding and graph attention into the base network for learning and improved the performance both on the simulation data and real data.',
      'Achieved over 95% top 5 ratio on simulation datasets and over 80% top 5 ratio on real datasets, and the precision for localization outperforms PointNet descriptor and Hand-crafted descriptors, such as Random Walk descriptor. ',
    ],
  },
  {
    company: 'Mech-Mind Robotics Technologies Ltd.',
    position: 'Research Intern',
    link: 'https://www.mech-mind.com/',
    daterange: 'Jul. 2020 - Sep. 2020',
    points: [
      'Collected RGBD image data sets by manipulating robotic arms to grasp densely aligned medicines and food wrapper boxes in real scenarios and implemented offline and online data augmentation.',
      'Implemented Bi-Directional Cascade Network(BDCN) using Tensorflow/Keras, and tested different feature extraction convolution networks as the backbone and different network structures.',
      'Improved the online detection speed by 10 times compared to the original network DexiNed, with the detection accuracy decreasing by only 5%.',
    ],
  },
  {
    company: 'Biomanufacturing Center, Tsinghua University',
    position: 'Bachelor Thesis',
    link: 'https://www.me.tsinghua.edu.cn/en/info/1024/1041.htm',
    daterange: 'Feb. 2020 - Jun. 2020',
    points: [
      'Collected a private data set for the instance segmentation task of cervical cancer screening based on the clinical medical data offered by cooperative hospitals.',
      'Implemented binary class and multi-class instance segmentation using Mask-RCNN model with ResNet50 and ResNet101 as the backbone to recognize and segment various cancer cells, including overlapping cytoplasm and nuclei, and visualized the results.',
      'Achieved an mAP of 0.866 for cytoplasm segmentation on the public data set, 0.825 for nuclei segmentation, and an mAP of 0.742 cytoplasm segmentation on the clinical data set respectively at the level of IoU = 0.5.',
    ],
  },
  {
    company: 'Advanced Nanomaterials & Microrobotics Lab, CUHK',
    position: 'Summer Intern',
    link: 'http://www.cuhklizhanggroup.com/',
    daterange: 'Jul. 2019 - Sep. 2019',
    points: [
      'Designed multi-scale prototype circuit boards and diminished their sizes to 5mm x 8mm x 30mm',
      'Tested the energy harvesting, signal transmission, and receiving efficiency of multi-scale prototype circuit boards, which were powered by DC power supply and copper-zinc primary battery respectively.',
      'Designed a mechanical reciprocating propulsion system installed on a stomach model to simulate the creeping of patients’ stomachs.',
    ],
  },
  {
    company: 'Institute of Automation, Chinese Academy of Sciences',
    position: 'Student Research Intern',
    link: 'http://english.ia.cas.cn/',
    daterange: 'Mar. 2019 - Jul. 2019',
    points: [
      'Realized the relocalization and automatic obstacle avoidance functions of disinfection robots used in hospital scenes, and conducted C++ secondary development based on the one-time pre-built map and real-time map interfaces offered by SLAMTEC’s APOLLO robot development platform.',
      'Designed a user-friendly operator interface for Windows systems based on MFC, including functions-integrated buttons and real-time display of a 2D bitmap.',
    ],
  },
  {
    company: 'Department of Mechanical Engineering, Tsinghua University',
    position: 'Studnet Research Training',
    link: 'https://www.me.tsinghua.edu.cn/en/',
    daterange: 'Oct. 2017 - Aug. 2018',
    points: [
      'Addressed time synchronization problem using GPS, and located UAVs using optical flow methods.',
      'Completed the navigation of UAVs based on MAVROS and developed the autopilot for speed and gesture control through PX4 Firmware.',
      'Completed the gazebo simulation of UAVs and tested the algorithms on the simulation platform.',
    ],
  },
];

export default positions;
