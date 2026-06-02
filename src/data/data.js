import productUltron from '../assets/Ultron.png';
import productAiDrive from '../assets/images/Weighbridge_AI.png';
import productReews from '../assets/images/product.png';
import achievementImage from '../assets/images/Achievement_Image.png';
import journeyImage from '../assets/images/image.png';
import productGeneral1 from '../assets/images/product.jpeg';
import evCharging from '../assets/images/EV_Charging.jpeg';
import evIntegration from '../assets/images/EV-integration.jpg';
import rezonixImage from '../assets/images/Renox.png';
import cctvAttendanceImage from '../assets/images/CCTV.png';
import intellexaImage from '../assets/images/Intelexa.png';
import achievementNrl5thPrize from '../assets/images/achievement_nrl_5th_prize.jpg';
import achievementNrlAwardCeremony from '../assets/images/achievement_nrl_award_ceremony.jpg';
import achievementNrlGroupPhoto from '../assets/images/achievement_nrl_group_photo.jpg';
import achievementParulHackverse from '../assets/images/achievement_parul_hackverse.jpg';
import achievementLeadThirdPrize from '../assets/images/achievement_lead_3rd_prize.jpg';
import achievementKpitGoldAward from '../assets/images/achievement_kpit_gold_award.jpg';
import achievementIitRoorkeeGrant from '../assets/images/achievement_iit_roorkee_grant.jpg';
import testimonial1 from '../assets/images/testimonials.jpeg';
import testimonial2 from '../assets/images/testimonials.jpg';
import testimonial3 from '../assets/images/testimonials (1).jpg';
import testimonial4 from '../assets/images/testimonials (2).jpg';
import testimonial5 from '../assets/images/testimonials (1).jpeg';
import testimonial6 from '../assets/images/testimonials.png';
import logo from '../assets/images/Logo.png';
import sdg1 from '../assets/images/sdg.png';
import sdg2 from '../assets/images/sdg (1).png';
import sdg3 from '../assets/images/sdg (2).png';
import sdg4 from '../assets/images/sdg (3).png';
import sdg5 from '../assets/images/sdg (4).png';

export const productsData = [
  {
    id: 7,
    name: 'INTELLEXA AI',
    description: 'Universal Document Intelligence platform for enterprise and government. INTELLEXA AI handles scanned, handwritten, low-quality, and legacy documents across all formats. Features include True Multilingual AI with OCR and conversational input/output across languages and scripts, Deep Contextual Understanding with semantic reasoning and entity extraction, and Conversational Knowledge Access for natural document interaction. Ask questions, research, compare, and summarize documents naturally. Enterprise-grade security, scalability, and customization for large-scale deployments. Deployed with ICED and IIT Roorkee.',
    image: intellexaImage
  },
  {
    id: 2,
    name: 'Weighbridge AI',
    description: 'WeighBridge AI is a smart automation solution designed to improve weighbridge operations using artificial intelligence. It automatically reads vehicle number plates, validates vehicle positioning, and integrates with E-Rawanna systems for seamless verification. The system also uses weight pattern recognition to detect irregularities and improve accuracy. It helps reduce manual work, increase operational efficiency, and minimize errors. With faster deployment and improved uptime, WeighBridge AI enhances productivity and revenue management.',
    image: productAiDrive
  },
  {
    id: 3,
    name: 'EEW (Early Earthquake Warning System)',
    description: 'Earthquake Early Detection & Warning System - Seconds Ahead, Lives Saved. REEWS is a seismic sensor platform designed for early earthquake detection and rapid warning. It identifies tremors in advance to provide crucial lead time, continuously collects real-time seismic data, enables remote sensor monitoring and control, supports pipelined data transmission to minimize data loss, and triggers SOS alerts with a 10-second to 5-minute safety buffer. Developed for InventisLab to improve public and infrastructure safety.',
    image: productReews
  },
  {
    id: 1,
    name: 'Ultron AI',
    description: 'Ultron AI is a next-generation neural orchestration engine designed to manage complex industrial data flows with unprecedented speed and accuracy. It leverages autonomous Deep Learning models to predict system failures, optimize resource allocation, and provide real-time decision support for large-scale enterprise environments. Built for scalability, Ultron AI eliminates manual processing bottlenecks, creating a truly intelligent and adaptive digital core for your organization.',
    image: productUltron
  },
  {
    id: 4,
    name: 'Smart EV Integration',
    description: 'Drive smarter, stay connected. Our IoT-powered Smart EV Integration interface provides battery capacity monitoring, daily battery analytics, and solar energy generation insights in one dashboard. Key capabilities include vehicle performance monitoring, security control (remote locking, ignition management, anti-theft support), park mode assistance for tight spaces, real-time battery status, service and maintenance alerts, and document management notifications for insurance and registration.',
    image: evIntegration
  },
  {
    id: 5,
    name: 'REZONIX',
    description: 'Intelligent Power, Wireless Future. REZONIX is a wireless energy platform built for modern connected environments. Key features include smart charging that dynamically adjusts transmission frequencies to maximize wireless energy efficiency, multi-device charging for simultaneous charging of smartphones and wearables, and smart home and retrofit compatibility for seamless integration into existing spaces without major infrastructure changes. Developed for Synchronous Build Digital Pvt. Ltd.',
    image: rezonixImage
  },
  {
    id: 6,
    name: 'CCTV-Based Attendance',
    description: 'Live CCTV feed captures faces in real-time or from stored images, and AI performs face recognition to mark attendance automatically. Post-feed analysis improves scheduled-duration accuracy up to 98%. Tech stack includes IP cameras, a face-recognition AI model, video/image processing framework, and database with cloud storage. Best suited for high-foot-traffic areas such as building entrances and subway stations where reliable, low-touch attendance and monitoring are required.',
    image: cctvAttendanceImage
  }
];
export const achievementsData = [
  {
    id: 1,
    category: 'Recognition',
    title: 'Gold Award at KPIT SPARKLE',
    description: 'Honored for innovation in sustainable technology and smart energy systems, driving the future of green innovation.',
    image: achievementImage
  },
  {
    id: 2,
    category: 'Multiple Awards',
    title: 'Journey of Success & Recognition',
    description: 'Award-winning team recognized across multiple competitions and innovation challenges for excellence and impact.',
    image: journeyImage
  },
  {
    id: 3,
    category: 'Awards',
    title: 'A Journey of Stellar Success',
    description: 'Multiple recognitions for excellence in renewable energy solutions',
    image: productGeneral1
  },
  {
    id: 4,
    category: 'Blog',
    title: 'Everything You Need To Know About ULTRON',
    description: 'Deep dive into our revolutionary energy management platform',
    image: productUltron
  },
  {
    id: 5,
    category: 'Innovation',
    title: 'AI-powered inverters, and IOT automation devices',
    description: 'Next-generation smart energy solutions',
    image: evCharging
  }
];

export const achievementsPageData = [
  {
    id: 1,
    category: 'Award',
    title: '5th Prize - NRL Clean Energy Hackathon',
    description: 'Recognized at the NRL Clean Energy Hackathon for our innovation-led energy solution.',
    image: achievementNrl5thPrize
  },
  {
    id: 2,
    category: 'Award Ceremony',
    title: 'NRL Clean Energy Hackathon - Winners Circle',
    description: 'Celebrating with fellow teams and mentors at the official award ceremony.',
    image: achievementNrlAwardCeremony
  },
  {
    id: 3,
    category: 'Team Milestone',
    title: 'NRL Hackathon Team Group Photo',
    description: 'A proud team moment captured with participants, organizers, and jury members.',
    image: achievementNrlGroupPhoto
  },
  {
    id: 4,
    category: 'Winner',
    title: 'Parul Hack Verse Validation Ceremony',
    description: 'Our team receiving recognition during the Hack Verse validation ceremony.',
    image: achievementParulHackverse
  },
  {
    id: 5,
    category: '3rd Prize',
    title: 'LEAD 2.0 Autonomous Challenge',
    description: 'Won third prize for impactful performance in the LEAD autonomous innovation event.',
    image: achievementLeadThirdPrize
  },
  {
    id: 6,
    category: 'Gold Award',
    title: 'KPIT Sparkle Gold Award',
    description: 'Secured the Gold Award at KPIT Sparkle for breakthrough sustainable technology.',
    image: achievementKpitGoldAward
  },
  {
    id: 7,
    category: 'Grant',
    title: 'DST-NIDHI PRAYAS Grant - IIT Roorkee',
    description: 'Selected for the DST-NIDHI PRAYAS grant support from TIDES IIT Roorkee.',
    image: achievementIitRoorkeeGrant
  },
  {
    id: 8,
    category: 'Recognition',
    title: 'Gold Award at KPIT SPARKLE',
    description: 'Honored for innovation in sustainable technology and smart energy systems, driving the future of green innovation.',
    image: achievementImage
  },
  {
    id: 9,
    category: 'Multiple Awards',
    title: 'Journey of Success & Recognition',
    description: 'Award-winning team recognized across multiple competitions and innovation challenges for excellence and impact.',
    image: journeyImage
  },
  {
    id: 10,
    category: 'Awards',
    title: 'A Journey of Stellar Success',
    description: 'Multiple recognitions for excellence in renewable energy solutions',
    image: productGeneral1
  },
  {
    id: 11,
    category: 'Blog',
    title: 'Everything You Need To Know About ULTRON',
    description: 'Deep dive into our revolutionary energy management platform',
    image: productUltron
  },
  {
    id: 12,
    category: 'Innovation',
    title: 'AI-powered inverters, and IOT automation devices',
    description: 'Next-generation smart energy solutions',
    image: evCharging
  }
];
export const testimonialsData = [
  {
    id: 1,
    name: 'Dr. Anindita Roy',
    position: 'Assistant Dean',
    company: 'GD Goenka',
    date: '12 March 2024',
    content: 'The level of professionalism and technical mastery Rym Grenergy brings is unmatched. They delivered exactly what they promised—and more.',
    image: testimonial1
  },
  {
    id: 2,
    name: 'Devam Srivastava',
    position: 'CEO',
    company: 'Synchronous Build Digital',
    date: '28 July 2023',
    content: 'We\'ve never worked with a team this committed to excellence. Their solutions are reliable, futuristic, and built to scale.',
    image: testimonial2
  },
  {
    id: 3,
    name: 'Gaurav Minda',
    position: 'CEO',
    company: 'GKM Energy',
    date: '5 November 2022',
    content: 'Rym Grenergy transformed our energy systems with precision and innovation. Their tech-first approach saved us both time and money.',
    image: testimonial3
  },
  {
    id: 4,
    name: 'Dr. Apeksha Mittal',
    position: 'Associate Professor',
    company: 'GD Goenka',
    date: '19 January 2025',
    content: 'Rym Grenergy doesn\'t just solve problems—they redefine what\'s possible. Working with them has been a complete game-changer.',
    image: testimonial4
  },
  {
    id: 5,
    name: 'Mr. Dheeraj Anand',
    position: 'CEO',
    company: 'BWorth',
    date: '3 September 2023',
    content: 'From concept to execution, Rym Grenergy made everything seamless. Their attention to detail truly sets them apart.',
    image: testimonial5
  },
  {
    id: 6,
    name: 'Mr. Arun',
    position: 'Co - Founder',
    company: 'InventisLabs',
    date: '4 June 2024',
    content: 'Our operations became dramatically more efficient after partnering with Rym Grenergy. Their technology is as impressive as their support.',
    image: testimonial6
  }
];
export const projectsData = [
  { id: 'featured', name: 'AI RECOGNITION SYSTEMS', client: 'Automated Attendance and Monitoring', featured: true },
  { id: '01', name: 'Weighbridge AI', client: 'DMG, Rajasthan' },
  { id: '02', name: 'DamChat', client: 'ICED, IIT Roorkee' },
  { id: '03', name: 'BULK ATTENDANCE SYSTEM', client: 'GD Goenka University' },
  { id: '04', name: 'AI DRIVE THROUGH', client: 'Synchronous Build Digital' },
  { id: '05', name: 'EEDW', client: 'IIT Roorkee & Inventis Lab' },
  { id: '06', name: 'Vehicle Tracking', client: 'GKM Energy' }
];
export const partnersLogos = [
  logo,
  logo,
  logo,
  logo
];
export const sdgIcons = [
  sdg1,
  sdg2,
  sdg3,
  sdg4,
  sdg5
];
export const faqData = [
  {
    question: 'What does RYM specialize in?',
    answer: 'RYM specializes in cutting-edge AI Solutions, Deep Learning architectures, and IOT Ecosystems. We build intelligent automation systems, autonomous agents, and connected sensor networks that transform how industries operate.'
  },
  {
    question: 'What is Ultron AI?',
    answer: 'Ultron AI is our flagship neural orchestration system that uses Deep Learning to automate complex decision-making and optimize large-scale data infrastructures.'
  },
  {
    question: 'How much energy capacity does RYM offer?',
    answer: 'We offer scalable energy solutions tailored to your specific needs, from small-scale installations to large industrial deployments.'
  },
  {
    question: 'When was RYM Grenergy founded?',
    answer: 'RYM Grenergy was founded with a vision to revolutionize the renewable energy sector through innovation and technology.'
  },
  {
    question: 'What recognition has RYM received?',
    answer: 'RYM has received the Gold Award at KPIT SPARKLE and numerous other recognitions for innovation in sustainable technology and smart energy systems.'
  },
  {
    question: 'Are RYM solutions scalable?',
    answer: 'Absolutely! Our AI and IOT frameworks are built on cloud-native architectures, allowing for seamless scaling from pilot projects to global enterprise deployments with 99.9% uptime.'
  }
];
export const statsData = [
  {
    id: 1,
    value: '50',
    suffix: '+',
    label: 'Deployment-ready AI models and neural architectures.',
    prefix: 'AI MODELS'
  },
  {
    id: 2,
    value: '99',
    suffix: '%',
    label: 'Uptime for distributed IOT networks and edge devices.',
    prefix: 'IOT RELIABILITY'
  },
  {
    id: 3,
    value: '10',
    suffix: 'ms',
    label: 'Latencies achieved with our Deep Learning inference engines.',
    prefix: 'DL SPEED'
  }
];
