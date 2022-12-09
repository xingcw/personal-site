"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[690],{4690:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var i=n(2791),r=n(1523),a=n(6842),o=n(184),s=function(e){var t=e.data;return(0,o.jsx)("article",{className:"degree-container",children:(0,o.jsxs)("header",{children:[(0,o.jsx)("h4",{className:"degree",children:t.degree}),(0,o.jsxs)("p",{className:"school",children:[(0,o.jsx)("a",{href:t.link,children:t.school}),", ",t.start_year,"-",t.end_year]})]})})},c=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"education",children:[(0,o.jsx)("div",{className:"link-to",id:"education"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,o.jsx)(s,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return(0,o.jsxs)("article",{className:"jobs-container",children:[(0,o.jsxs)("header",{children:[(0,o.jsxs)("h4",{children:[t.position," - ",(0,o.jsx)("a",{href:t.link,children:t.company})]}),(0,o.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,o.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,o.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"experience",children:[(0,o.jsx)("div",{className:"link-to",id:"experience"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,o.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var h=d,p=function(e){var t=e.data;return(0,o.jsx)("article",{className:"pubs-container",children:(0,o.jsx)("ul",{className:"papers",children:(0,o.jsxs)("li",{children:[t.author,"  ",(0,o.jsx)("a",{href:t.link,children:t.title}),"  ",t.other]})})})},m=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"publications",children:[(0,o.jsx)("div",{className:"link-to",id:"publications"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Publications"})}),t.map((function(e){return(0,o.jsx)(p,{data:e},e.title)}))]})};m.defaultProps={data:[]};var f=m;function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var g=n(9611);function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function j(e,t){if(t&&("object"===v(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return j(this,n)}}var k=n(4942),w=n(1413),N=function(e){var t=e.handleClick,n=e.active,i=e.label;return(0,o.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},S=function(e){var t=e.data,n=e.categories,i=t.category,r=t.competency,a=t.title,s={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},c=(0,w.Z)((0,w.Z)({},s),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return(0,o.jsxs)("div",{className:"skillbar clearfix",children:[(0,o.jsx)("div",{className:"skillbar-title",style:s,children:(0,o.jsx)("span",{children:a})}),(0,o.jsx)("div",{className:"skillbar-bar",style:c}),(0,o.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};S.defaultProps={categories:[]};var C=S,P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,g.Z)(e,t)}(a,e);var t,n,i,r=x(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,i){return(0,w.Z)((0,w.Z)({},n),{},(0,k.Z)({},i,e===i&&!t.buttons[i]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,w.Z)((0,w.Z)({},e),{},(0,k.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,o.jsx)(C,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,o.jsx)(N,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,o.jsxs)("div",{className:"skills",children:[(0,o.jsx)("div",{className:"link-to",id:"skills"}),(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h3",{children:"Skills"}),(0,o.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,o.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,o.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&y(t.prototype,n),i&&y(t,i),Object.defineProperty(t,"prototype",{writable:!1}),a}(i.Component);P.defaultProps={skills:[],categories:[]};var R=P,T=function(e){var t=e.data,n=e.last;return(0,o.jsxs)("li",{className:"course-container",children:[(0,o.jsx)("a",{href:t.link,children:(0,o.jsx)("p",{className:"course-name",children:t.title})}),!n&&(0,o.jsx)("div",{className:"course-dot",children:(0,o.jsx)("p",{className:"course-name",children:" \u2022"})})]})};T.defaultProps={last:!1};var O=T,A=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,o.jsx)(O,{data:t,last:n===e.length-1},t.title)}))},E=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"courses",children:[(0,o.jsx)("div",{className:"link-to",id:"courses"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Selected Courses"})}),(0,o.jsx)("ul",{className:"course-list",children:A(t)})]})};E.defaultProps={data:[]};var L=E,D=function(){return(0,o.jsxs)("div",{className:"references",children:[(0,o.jsx)("div",{className:"link-to",id:"references"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)(r.rU,{to:"/contact",children:(0,o.jsx)("h3",{children:"References are available upon request"})})})]})},M=[{title:"Vision Algorithms for Mobile Robotics",link:"https://rpg.ifi.uzh.ch/teaching.html",university:"ETH Zurich"},{title:"IMAGE ANALYSIS AND COMPUTER VISION",link:"https://people.ee.ethz.ch/~cvcourse/",university:"ETH Zurich"},{title:"Introduction to Machine Learning",link:"https://las.inf.ethz.ch/teaching/introml-s20",university:"ETH Zurich"},{title:"Recursive Estimation",link:"https://idsc.ethz.ch/education/lectures/recursive-estimation.html",university:"ETH Zurich"},{title:"Autonomous Mobile Robots",link:"https://asl.ethz.ch/education/lectures/autonomous_mobile_robots/spring-2021.html",university:"ETH Zurich"},{title:"Perception and Learning for Robotics",link:"https://asl.ethz.ch/education/lectures/perception_and_learning_for_robotics.html",university:"ETH Zurich"},{title:"Advanced Machine Learning",link:"https://ml2.inf.ethz.ch/courses/aml/",university:"ETH Zurich"},{title:"Robot Dynamics",link:"https://rsl.ethz.ch/education-students/lectures/robotdynamics.html",university:"ETH Zurich"},{title:"Dynamic Programming and Optimal Control",link:"https://rsl.ethz.ch/education-students/lectures/robotdynamics.html",university:"ETH Zurich"},{title:"Computational Models of Motion",link:"http://crl.ethz.ch/teaching/computational-motion-22/",university:"ETH Zurich"}],z=[{school:"ETH Zurich",degree:"M.S. Robotics, Systems and Control",link:"https://ethz.ch/en.html",start_year:2020,end_year:2023},{school:"Tsinghua University",degree:"B.S. Mechanical Engineering (1st Major)",link:"https://www.tsinghua.edu.cn/en/",start_year:2016,end_year:2020},{school:"Tsinghua University",degree:"B.S. Economics (2nd Major)",link:"https://www.tsinghua.edu.cn/en/",start_year:2016,end_year:2020},{school:"Delft University of Techonolgy",degree:"Exchange M.S. Mechanical Engineering",link:"https://www.tudelft.nl/en/",start_year:2018,end_year:2019}],Z=[{company:"Robotics and Perception Group, University of Zurich",position:"Master Thesis Student",link:"https://rpg.ifi.uzh.ch/",daterange:"Dec. 2022 - Present",points:["To learn robust visual representations from raw image inputs using Vision Transformers(ViT) for reinforcement learning controllers with offboard computing resources."]},{company:"ABB Corporate Research Center in Switzerland",position:"Software Developement Intern",link:"https://global.abb/group/en/technology/corporate-research-centers/switzerland",daterange:"May. 2022 - Nov. 2022",points:["Developed Physics-Informed Neural Networks(PINN) to fit the execution time distributions and predict the Worst-Case Execution Time(WCET) of applications running on ABB commercial motor drivers."]},{company:"Robotic Systems Lab (RSL), ETHz",position:"Semester Project Student",link:"https://rsl.ethz.ch/",daterange:"Oct. 2021 - Feb. 2022",points:["Developed a base pose selector based on Reinforcement Learning (PPO) and trained policies for a wheeled-legged robot to ground on challenging terrains.","Formulated evaluation metrics, experimented with reward shaping and improved the performances.","Achieved a success rate of 80% at a grounding error of 0.05m on challenging terrains, e.g. Holes.","Integrated the pose selector into the global planner (RRT*) and benchmark against brute force search."]},{company:"AI Center, ETHz",position:"NeurlIPS21 Competition",link:"https://www.drivendata.org/competitions/79/competition-image-similarity-1-dev/",daterange:"Aug. 2021 - Oct. 2021",points:["Implemented a self-distillation network by combining the DINO backbone (Vision Transformer) and SimCLRv2 backbone, and improved the performances by 20% over the published baselines."]},{company:"Autonomous Systems Lab (ASL), ETHz",position:"Course Project Student",link:"https://asl.ethz.ch/",daterange:"Feb. 2021 - Jun. 2021",points:["Implemented a semi-supervised triplet-loss-based graph convolution network modified from DeepGCNs to learn a deep-learned descriptor for the objects constellation for global localization in SLAM.","Introduced semantic embedding and graph attention into the base network for learning and improved the performance both on the simulation data and real data.","Achieved over 95% top 5 ratio on simulation datasets and over 80% top 5 ratio on real datasets, and the precision for localization outperforms PointNet descriptor and Hand-crafted descriptors, such as Random Walk descriptor. "]},{company:"Mech-Mind Robotics Technologies Ltd.",position:"Deep Learning Research Intern",link:"https://www.mech-mind.com/",daterange:"Jul. 2020 - Sep. 2020",points:["Collected RGBD image data sets by manipulating robotic arms to grasp densely aligned medicines and food wrapper boxes in real scenarios and implemented offline and online data augmentation.","Implemented Bi-Directional Cascade Network(BDCN) using Tensorflow/Keras, and tested different feature extraction convolution networks as the backbone and different network structures.","Improved the online detection speed by 10 times compared to the original network DexiNed, with the detection accuracy decreasing by only 5%."]},{company:"Biomanufacturing Center, Tsinghua University",position:"Bachelor Thesis Student",link:"https://www.me.tsinghua.edu.cn/en/info/1024/1041.htm",daterange:"Feb. 2020 - Jun. 2020",points:["Collected a private data set for the instance segmentation task of cervical cancer screening based on the clinical medical data offered by cooperative hospitals.","Implemented binary class and multi-class instance segmentation using Mask-RCNN model with ResNet50 and ResNet101 as the backbone to recognize and segment various cancer cells, including overlapping cytoplasm and nuclei, and visualized the results.","Achieved an mAP of 0.866 for cytoplasm segmentation on the public data set, 0.825 for nuclei segmentation, and an mAP of 0.742 cytoplasm segmentation on the clinical data set respectively at the level of IoU = 0.5."]},{company:"Advanced Nanomaterials & Microrobotics Lab, CUHK",position:"Undergraduate Student Researcher",link:"http://www.cuhklizhanggroup.com/",daterange:"Jul. 2019 - Sep. 2019",points:["Designed multi-scale prototype circuit boards and diminished their sizes to 5mm x 8mm x 30mm","Tested the energy harvesting, signal transmission, and receiving efficiency of multi-scale prototype circuit boards, which were powered by DC power supply and copper-zinc primary battery respectively.","Designed a mechanical reciprocating propulsion system installed on a stomach model to simulate the creeping of patients\u2019 stomachs."]},{company:"Institute of Automation, Chinese Academy of Sciences",position:"Undergraduate Research Assistant",link:"http://english.ia.cas.cn/",daterange:"Mar. 2019 - Jul. 2019",points:["Realized the relocalization and automatic obstacle avoidance functions of disinfection robots used in hospital scenes, and conducted C++ secondary development based on the one-time pre-built map and real-time map interfaces offered by SLAMTEC\u2019s APOLLO robot development platform.","Designed a user-friendly operator interface for Windows systems based on MFC, including functions-integrated buttons and real-time display of a 2D bitmap."]},{company:"Department of Mechanical Engineering, Tsinghua University",position:"Research Training Student",link:"https://www.me.tsinghua.edu.cn/en/",daterange:"Oct. 2017 - Aug. 2018",points:["Addressed time synchronization problem using GPS, and located UAVs using optical flow methods.","Completed the navigation of UAVs based on MAVROS and developed the autopilot for speed and gesture control through PX4 Firmware.","Completed the gazebo simulation of UAVs and tested the algorithms on the simulation platform."]}],I=[{author:"Chunwei Xing, Xinyu Sun, Andrei Cramariuc, Samuel Gull, Jen Jen Chung, Cesar Cadena, Roland Siegwart, and Florian Tschopp.",title:"Descriptellation: Deep Learned Constellation Descriptors for SLAM.",link:"https://arxiv.org/abs/2203.00567",other:"CoRR abs/2203.00567 (2022). (In submission to ICRA 2023)"}],_=n(907);var H=n(181);var B,U=[{title:"Javascript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:4,category:["Tools","Languages"]},{title:"Git/Mercurial",competency:4,category:["Tools"]},{title:"ROS",competency:4,category:["Tools"]},{title:"Linux",competency:5,category:["Tools"]},{title:"Numpy",competency:4,category:["Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Machine Learning","Python"]},{title:"PyTorch",competency:4,category:["Machine Learning","Python"]},{title:"Jupyter",competency:3,category:["Tools","Python"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"LaTex",competency:5,category:["Languages"]},{title:"C++",competency:4,category:["Languages"]},{title:"MATLAB",competency:3,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Pandas",competency:3,category:["Data Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Machine Learning","Python"]},{title:"Chinese",competency:5,category:["Natrual Language"]},{title:"English",competency:4,category:["Natrual Language"]},{title:"German",competency:2,category:["Natrual Language"]}].map((function(e){return(0,w.Z)((0,w.Z)({},e),{},{category:e.category.sort()})})),J=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],V=(B=new Set(U.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,_.Z)(e)}(B)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(B)||(0,H.Z)(B)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:J[t]}})),G=["Education","Publications","Experience","Skills","Courses","References"],F=function(){return(0,o.jsx)(a.Z,{title:"Resume",description:"Chunwei Xing's Resume.",children:(0,o.jsxs)("article",{className:"post",id:"resume",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(r.rU,{to:"resume",children:"Resume"})}),(0,o.jsxs)("div",{className:"link-container",children:[(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:"".concat("","sources/Resume_Chunwei_Xing.pdf"),children:"Download"})},"Download Resume"),G.map((function(e){return(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))]})]})}),(0,o.jsx)(l,{data:z}),(0,o.jsx)(f,{data:I}),(0,o.jsx)(h,{data:Z}),(0,o.jsx)(R,{skills:U,categories:V}),(0,o.jsx)(L,{data:M}),(0,o.jsx)(D,{})]})})}},4942:function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return i}})},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=690.6d7a5a0e.chunk.js.map