import { FaCodepen } from 'react-icons/fa';

export const NavLinks = [
  {
    id: 1,
    url: '#home',
    label: 'Home',
  },
  {
    id: 2,
    url: '#experiences',
    label: 'Experiences',
  },
  {
    id: 3,
    url: '#projects',
    label: 'Projects',
  },
  {
    id: 4,
    url: '#blogs',
    label: 'Blogs',
  },
  {
    id: 5,
    url: '#contact',
    label: 'Contact',
  },
];

export const Experiences = [
  {
    role: 'AI Engineer Intern',
    company: 'Meeting.ai (Jakarta, Indonesia)',
    date: 'February 2025 - June 2025',
    Icon: FaCodepen,
    description:
      'AI Feature Prototyping, Integrating, and Benchmarking Suite Development',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Moladin (Jakarta, Indonesia)',
    date: 'February 2024 - July 2024',
    Icon: FaCodepen,
    description:
      'Vehicle Management System Development, Automated Test Maintenance',
  },
];

export const Education = [
  {
    role: 'B.Sc. in Computer Science',
    company: 'Universitas Indonesia (Depok, Indonesia)',
    date: '2021 - 2025',
    Icon: FaCodepen,
    description:
      'Undergrad life: all-nighter, caffeinated, long debugging sesh, skipping some lectures, and whatnot',
  },
  {
    role: 'Machine Learning Cohort (Capstone)',
    company: 'Bangkit Academy (Remote)',
    date: 'February 2024 - June 2024',
    Icon: FaCodepen,
    description:
      'Real-time Translation App Development, ML Curriculum Completion',
  },
  {
    role: 'Research Assistant',
    company: 'Universitas Indonesia (Depok, Indonesia)',
    date: 'January 2024 - June 2024',
    Icon: FaCodepen,
    description:
      'Full-Stack Development for Ontology Curriculum Research, from PRD to Deployment',
  },
];

export const Blogs = [
  {
    image: '/images/nest_logo.jpeg',
    title: 'Secret Tools for Flawless NestJS Apps!',
    link: 'https://jamessmith404.bearblog.dev/building-like-a-pro-secret-tools-for-flawless-nestjs-apps/',
    date: '28 May, 2024',
    tags: ['NestJS', 'Testing', 'Mocks'],
  },
  {
    image: '/images/figures-teamwork-brainstorming.jpg',
    title: 'Building Eventable: Teamwork, Tracking, and Code Like a Superhero!',
    link: 'https://jamessmith404.bearblog.dev/building-eventable-teamwork-tracking-and-code-like-a-superhero/',
    date: '28 May, 2024',
    tags: ['Git', 'PM', 'Agile'],
  },
  {
    image: '/images/docker-logo.svg',
    title: `Apps with Shipping Containers: A Beginner's Guide to Taking Your App from Idea to Awesome`,
    link: 'https://jamessmith404.bearblog.dev/building-eventable-teamwork-tracking-and-code-like-a-superhero/',
    date: '28 May, 2024',
    tags: ['Docker', 'CI/CD', 'Workflow'],
  },
];

export const Projects = [
  {
    id: 'ser',
    title: 'Speech Emotion Recognition',
    description:
      'Audio emotion classification using two approaches: FAST-CNN from-scratch architecture and transfer learning with Wav2Vec2 + CNN; evaluated with macro F1.',
    imageUrl: '/images/ser.png',
    tags: ['Python', 'Transfer Learning', 'CNN', 'Speech'],
    resourceUrl:
      'https://drive.google.com/drive/u/0/folders/1Laogkkt6GffR_OO89SMaoG9jT6XixC_S',
    content:
      'Built a deep-learning-based audio classification model to recognize human emotions from speech. The curated dataset merges two popular corpora and harmonizes labels into six classes: angry, disgust, fear, happy, neutral, sad. Evaluation metric: macro-averaged F1 score.\n\nApproach A — FAST-CNN (from-scratch): Implemented a lightweight convolutional architecture optimized for spectrogram inputs (log-Mel or MFCC). Preprocessing pipeline: trimming/padding, silence removal, normalization, and conversion to fixed-size time-frequency representations. Data augmentation strategies included time-shifting, additive noise, pitch/time warping, and SpecAugment to improve robustness. Trained with class-balanced sampling and focal-loss variants to mitigate class imbalance. The FAST-CNN prioritized inference efficiency and achieved competitive macro-F1 after hyperparameter tuning (learning rate schedules, batch size, and augmentations).\n\nApproach B — Transfer Learning (Wav2Vec2 + CNN): Leveraged a pre-trained Wav2Vec2 audio encoder to extract contextualized embeddings from raw waveforms, followed by a light CNN head and a classifier layer fine-tuned on the curated emotion dataset. The pipeline used feature extraction at the raw-audio level (no handcrafted spectrograms), reduced training time, and improved generalization—especially on limited-data emotion classes. Training included gradual unfreezing of the encoder, discriminator-style regularization, and heavy augmentation during the classifier stage. Both approaches were rigorously evaluated using stratified cross-validation and the macro-averaged F1 score. Observations: transfer learning with Wav2Vec2 significantly improved recall on low-resource emotion classes, while FAST-CNN delivered a fast and interpretable baseline for edge deployment. Common challenges included label subjectivity, noisy recordings, and inter-speaker variability; mitigation strategies involved data cleaning, augmentation, and ensemble scoring.',
  },
  {
    id: 'marketplace-api',
    title: 'Marketplace API',
    description:
      'Microservices-based marketplace backend with containerization, orchestration, HPA, and load-testing scenarios.',
    imageUrl: '/images/aaw.png',
    tags: ['Go', 'Microservices', 'Kubernetes', 'HPA', 'Load Testing'],
    githubUrl: 'https://github.com/jamessmith404/aaw-marketplace-main',
    content:
      'A production-oriented backend for a marketplace platform implemented as a set of microservices (catalog, orders, users, payments, inventory) with RESTful APIs and service-to-service communication. Each service is containerized (Docker) and deployed to Kubernetes. Key infrastructure features include Horizontal Pod Autoscaling (HPA) based on CPU and custom metrics, resource requests/limits tuning, and rolling update strategies for zero-downtime deployments. The project includes automated CI pipelines to build and publish container images, and Helm charts to manage multi-environment deployments. Load testing scenarios (using k6 and locust) were designed to validate scaling behavior — simulated traffic patterns included checkout spikes, catalog browsing, and inventory bursts. Observability stack (Prometheus + Grafana + Loki) was integrated to monitor latency, error rates, pod autoscaling events, and resource usage. Lessons learned cover API idempotency, circuit breaker patterns for fault isolation, and the importance of realistic load tests to validate HPA thresholds and request sizing.',
  },
  {
    id: 'covearch',
    title: 'Covearch: Covid-19 Research Search Engine',
    description:
      'Information retrieval system for Covid-19 research papers built with PyTerrier, integrating BM25, BiEncoder, CrossEncoder, and MonoT5 pipelines evaluated using MAP, nDCG@10, and Precision@10.',
    imageUrl: '/images/covearch.png',
    tags: ['NLP', 'PyTerrier', 'Information Retrieval', 'Reranking'],
    githubUrl: 'https://github.com/TBI-Pacil/ML-SearchEngine',
    demoUrl: 'https://youtu.be/0xWsXag8xig',
    content:
      'Covearch is an academic search engine designed to retrieve research papers and publications related to Covid-19, developed as part of the Information Retrieval (CSCE604135) course.\n\nThe project implements a full Information Retrieval (IR) pipeline using **PyTerrier**, integrating both traditional and neural ranking models to benchmark performance across different retrieval approaches. The baseline BM25 model was compared against dense retrieval techniques leveraging **BiEncoder**, **CrossEncoder**, and **MonoT5** architectures. The pipeline includes indexing, candidate retrieval, re-ranking, and evaluation stages.\n\nFor evaluation, the system utilized three key metrics: **Precision@10**, **Mean Average Precision (MAP)**, and **Normalized Discounted Cumulative Gain (nDCG@10)** to assess both retrieval accuracy and ranking quality. Each model was tuned through parameter optimization and batch experimentation to ensure fair comparison.\n\nResults indicated that the **MonoT5-based pipeline** achieved the highest performance in semantic understanding and ranking relevance, while BM25 remained strong in speed and scalability. The BiEncoder model provided efficient dense vector retrieval, and CrossEncoder improved contextual relevance in the re-ranking phase.\n\nBeyond model experimentation, Covearch demonstrates practical implementation of an IR pipeline for a real-world biomedical domain, integrating preprocessing of textual corpora, tokenization, vector embedding generation, and hybrid retrieval fusion. The project highlights the impact of transformer-based architectures in advancing domain-specific search, and provides an extensible foundation for research retrieval systems in the biomedical field.',
  },
  {
    id: 'minesweeper-java',
    title: 'Simple Minesweeper Java',
    description:
      'Classic Minesweeper implementation using Java Swing with event-driven UI and game state management.',
    imageUrl: '/images/minesweeper.png',
    tags: ['Java', 'Swing', 'OOP'],
    githubUrl: 'https://github.com/jamessmith404/SImple-Minesweeper-Java',
    demoUrl: 'https://youtu.be/J3Wk4RLTfL0',
    content:
      'A desktop implementation of the classic Minesweeper game built with Java Swing. The project focuses on clean separation between the game model, controller, and Swing-based view. Features include: grid generation with randomized mine placement, recursive cell reveal (flood-fill) for empty neighbors, flagging/unflagging cells, win/loss detection, timer and move counter, and difficulty levels (easy/medium/hard). The UI uses custom-drawn cells and event listeners for left/right mouse actions. Emphasis was placed on robust state management to avoid inconsistent states during rapid user interaction and on delivering a responsive, native-feel desktop experience using pure Java SE (no external GUI libraries).',
  },
];
