# Max Kotas - Engineering Portfolio

![Portfolio Website](https://img.shields.io/badge/Portfolio-Live-ff6c37?style=for-the-badge&logo=firebase&logoColor=white)
![React](https://img.shields.io/badge/React-17.0.2-61dafb?style=for-the-badge&logo=react&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-7952b3?style=for-the-badge&logo=bootstrap&logoColor=white)

A modern, responsive portfolio website showcasing my engineering projects and professional experience. Built with React and featuring interactive components, project showcases with detailed descriptions, and comprehensive information about my technical skills and background.

## 📌 Live Demo

**[maxkotas.com](https://maxkotas.com)**

![Website Preview](./src/Assets/demo_images/portfolio_preview.png)

*Note: Add a screenshot of your site to the `src/Assets/demo_images` directory*

## 🔥 Featured Projects

![Projects Preview](./src/Assets/demo_images/projects_preview.png)

The portfolio showcases a variety of engineering projects including:

- **Spherical Rolling Robot PCB Redesign** - Custom PCB design with ESP32 microcontroller integration
- **FPGA-Accelerated Neural Network** - Hardware-accelerated NN using HLS4ML for low-power applications
- **IoT-Integrated Beverage Dispensing Table** - MQTT-controlled system with precision mechanical components
- **BLDC Motor Control Systems** - Advanced motor control implementations with sensor feedback
- **IoT-Controlled Precision Flamethrower** - ESP32-based control system with servo motor actuation
- **SEO Analysis Pipeline** - Python-based web scraping and NLP tool for content analysis
- **Thermal Printer Camera** - Raspberry Pi integration with thermal printing technology

## 🛠️ Technology Stack

![Tech Stack](./src/Assets/demo_images/skills_preview.png)

### Frontend
- **React.js** - Component-based UI development
- **React Bootstrap** - Responsive layout and styling
- **React Router** - Client-side routing
- **CSS3** - Custom styling and animations

### Interactive Elements
- **React Tsparticles** - Interactive particle background
- **Typewriter Effect** - Dynamic text animation
- **React Parallax Tilt** - 3D card hover effects
- **React PDF** - PDF document viewing for resume

### Deployment
- **GitHub Pages** - Static site hosting
- **Custom Domain** - Personalized web presence

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/maxkotas/maxSite.git
```

2. Navigate to the project directory
```bash
cd maxSite
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## 📂 Project Structure

```
maxSite/
├── public/                # Static files
│   ├── index.html         # HTML entry point
│   ├── favicon.png        # Website favicon
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO configuration
├── src/
│   ├── components/        # React components
│   │   ├── About/         # About section components
│   │   ├── Home/          # Home page components
│   │   ├── Projects/      # Project showcase components
│   │   └── Resume/        # Resume section components
│   ├── Assets/            # Images, PDFs, and other static assets
│   │   └── Projects/      # Project-specific images and documents
│   ├── App.js             # Main application component
│   ├── App.css            # Application-wide styles
│   └── index.js           # JavaScript entry point
└── package.json           # Project dependencies and scripts
```

## 🎨 Customization

The portfolio is designed to be easily customizable:

1. **Personal Information**: Update details in `src/components/Home/Home2.js`
2. **Projects**: Add or modify projects in `src/components/Projects/Projects.js`
3. **Skills**: Update tech stack in `src/components/About/Techstack.js` and `Toolstack.js`
4. **Resume**: Replace PDF in `src/Assets/`

## 📱 Responsive Design

![Responsive Design](./src/Assets/demo_images/responsive_preview.png)

The website is fully responsive across all device sizes:
- **Desktop** (1200px and above)
- **Tablet** (768px to 1199px)
- **Mobile** (below 768px)

All components automatically adjust their layout and styling to provide an optimal viewing experience regardless of screen size.

## ✨ Key Features

- **Dynamic Project Sorting**: Projects automatically sorted by date (newest first)
- **PDF Document Embedding**: Technical documentation and resume viewing
- **Interactive Background**: Particle animation that responds to user interaction
- **Smooth Transitions**: Page transitions and scrolling animations
- **Typewriter Effect**: Dynamic text animation on the home page
- **Consistent Theming**: Dark theme with accent color highlighting
- **GitHub Integration**: Direct links to project repositories
- **Demo Links**: Easy access to project demonstrations and documentation

## 🔧 Future Improvements

Planned enhancements for future versions:

- Upgrade to React 18 for improved performance
- Add TypeScript for better type safety
- Implement a more structured folder hierarchy (services, hooks, utils)
- Move hardcoded data to separate data files
- Add environment configuration for different deployment settings
- Implement custom hooks for code reuse
- Add error boundaries for graceful failure handling
- Standardize naming conventions throughout the codebase

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Max Kotas - [LinkedIn](https://www.linkedin.com/in/max-kotas-008984136)

Project Link: [https://github.com/maxkotas/portfolio](https://github.com/maxkotas/portfolio)