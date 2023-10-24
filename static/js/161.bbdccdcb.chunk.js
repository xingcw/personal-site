"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(e,t,i){i.r(t),i.d(t,{default:function(){return l}});i(2791);var n=i(1523),o=i(6842),a=i(184),s=function(e){var t=e.data;return(0,a.jsx)("div",{className:"cell-container",children:(0,a.jsxs)("article",{className:"mini-post",children:[(0,a.jsxs)("header",{children:[(0,a.jsx)("h3",{children:(0,a.jsx)("a",{href:t.title_link,children:t.title})}),(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:t.subtitle_link,children:t.subtitle}),"  |  ",t.date]}),(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:t.title_link,children:"Paper"})," | ",(0,a.jsx)("a",{href:t.video_link,children:"Demo"})," | ",(0,a.jsx)("a",{href:t.code_link,children:"Code"})]})]}),(0,a.jsxs)("div",{className:"project-content",children:[(0,a.jsx)("a",{href:t.video_link,className:"image",children:(0,a.jsx)("img",{src:"".concat("").concat(t.image),alt:t.title})}),(0,a.jsx)("div",{className:"description",children:(0,a.jsx)("p",{children:t.desc})})]})]})})},r=[{title:"Learning Driven Pose Selection for Sampling-based Planning",subtitle:"Semester Project",image:"/images/projects/sp.png",date:"Oct. 2021 - Feb. 2022",video_link:"https://youtube.com/playlist?list=PL05BR7PIAwqDSjO-JhPe6wjUJ8h022wVk",title_link:"",subtitle_link:"",code_link:"",author:"Chunwei Xing",desc:"The motion planning problem for wheeled-legged robots is complicated on challenging terrains. In our previous work, a combined sampling and optimization based method is proposed to solve the problem. We expect to further improve the efficiency of the sampling-based planner by substituting the heuristic base pose selector with a learning-based method. We formulate a Reinforcement Learning (RL) problem for the base pose selector and optimize the reward functions to excel the potential of learning policy. In this project, we further optimize the RL policy by experimenting with different training methods. We formulate evaluation metrics for the RL testing and benchmark the performance of our learned policy based on it. Besides, we benchmark the performance of brute force search method for comparison. In the end, we finish the preparation steps to integrate our learned policy into the global planner."},{title:"Descriptellation: Deep Learned Constellation Descriptors for SLAM",subtitle:"Perception and Learning for Robotics - Course Project",video_link:"https://www.youtube.com/watch?v=j_28-maRwmo&list=PL05BR7PIAwqAx0VgwNVHPepqPwg433qfx&index=1",title_link:"https://arxiv.org/abs/2203.00567",subtitle_link:"https://asl.ethz.ch/education/lectures/perception_and_learning_for_robotics.html",code_link:"https://github.com/ethz-asl/Descriptellation",image:"/images/projects/descriptellation.jpg",date:"Feb. 2021 - Jun. 2021",author:"Chunwei Xing | Xinyu Sun",desc:"Current global localization descriptors in Simultaneous Localization and Mapping (SLAM) often fail under vast viewpoint or appearance changes. Adding topological information of semantic objects into the descriptors ameliorates the problem. However, hand-crafted topological descriptors extract limited information and they are not robust to environmental noise, drastic perspective changes, or object occlusion or misdetections. To solve this problem, we formulate a learning-based approach by constructing constellations from semantically meaningful objects and use Deep Graph Convolution Networks to map the constellation representation to a descriptor. We demonstrate the effectiveness of our Deep Learned Constellation Descriptor (Descriptellation) on the Paris-Rue-Lille and IQmulus datasets. Although Descriptellation is trained on randomly generated simulation datasets, it shows good generalization abilities on real-world datasets. Descriptellation outperforms the PointNet and handcrafted constellation descriptors for global localization, and shows robustness against different types of noise."},{title:"Semi-Direct Visual Odometry",subtitle:"Vision Algorithms for Mobile Robotics - Course Project",title_link:"https://rpg.ifi.uzh.ch/teaching.html",video_link:"https://youtube.com/playlist?list=PL05BR7PIAwqCpqSakaCp8zM4E67eLsHRL",subtitle_link:"https://rpg.ifi.uzh.ch/teaching.html",code_link:"https://github.com/rwn17/VAMR",image:"/images/projects/vamr.png",date:"Dec. 2021 - Jan. 2022",author:"Chunwei Xing | Jin Cheng | Weining Ren | Changlin Qian",desc:"In this mini-project, we developed a semi-direct visual odometry and achieved good performance on KITTI, Garage, Malaga and customized datasets. Our pipeline is mainly inspired by the mini-SVO and we made some task-specific modifications. We introduced keyframe mechanism into our pipeline and used KLT to track frame-frame correspondences and SURF features for keyframe-keyframe correspondences. We also introduced sliding window Bundle Adjustment method for optimization. "},{title:"MPC-Based Path Planning and Collision Avoidance for Mobile Robots",subtitle:"Planning and Decision Making for Autonomous Robots - Course Project",title_link:"",subtitle_link:"https://idsc-frazzoli.github.io/PDM4AR-exercises/10-final21.html",code_link:"https://github.com/xingcw/PDM4AR_Project",video_link:"https://youtube.com/playlist?list=PL05BR7PIAwqD3PHP3Iehm7MMpkkuLFh5O",image:"/images/projects/pdm4ar.png",date:"Dec. 2021 - Jan. 2022",author:"Chunwei Xing | Changlin Qian | Kiwan Wong",desc:"In this program exercise, we implemented a path planing and collision avoidance algorithm based on MPC (Model Predictive Control). Our task is to control the spacecraft to explore in the space full of static and dynamic obstacles within limited accelerates, velocity and time. A global path planner, RRT*, a local path follower, MPC controller, and a collision detection and avoidance mechanism are implemented as the main modules to solve the task. Our method passed the test cases and it's also scalable and extendable to more complicated environments. "},{title:"Kinematics and Dynamics Modelling of Legged Robots",subtitle:"Computational Models of Motion - Mini-Projects",title_link:"",subtitle_link:"",video_link:"https://youtube.com/playlist?list=PL05BR7PIAwqCvgHkd9qis5xTmW69q2vH0",code_link:"https://github.com/CMM-22",image:"/images/projects/cmm.png",date:"Mar. 2022 - Jun. 2022",author:"Chunwei Xing",desc:"In these mini-projects, I implemented various tasks to model the kinematics and dynamics of the legged robots."}],l=function(){return(0,a.jsx)(o.Z,{title:"Projects",description:"Learn about Chunwei Xing's projects.",children:(0,a.jsxs)("article",{className:"post",id:"projects",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h2",{"data-testid":"heading",children:(0,a.jsx)(n.rU,{to:"/projects",children:"Projects"})}),(0,a.jsx)("p",{children:"A selection of course and research projects in my Master Program."})]})}),r.map((function(e){return(0,a.jsx)(s,{data:e},e.title)}))]})})}}}]);
//# sourceMappingURL=161.bbdccdcb.chunk.js.map