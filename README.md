# CV Builder

A modern, responsive, and high-performance Resume Builder built with **React**, **Vite**, and **Tailwind CSS**. This application allows users to create professional, futuristically designed resumes in real-time and export them as high-quality PDF files.

## ✨ Features

* **Real-time Editor**: Modify your personal information, work experience, education, and skills, and see the changes instantly.
* **Futuristic Design**: A unique, dark-themed template with glow effects, animated blobs, and a clean professional layout.
* **Desktop**: Side-by-side view with a resizable editor panel (limit: 40% width).
* COMING SOON: **Mobile**: Adaptive Tab-view to switch between Editor and Preview on small screens.


* **Precision PDF Export**: Optimized CSS Grid for printing, ensuring the layout remains perfect on A4 paper using `react-to-print`.
* **Responsive Handle**: Fully collapsible sidebar to maximize preview space.
* **Custom Color Schemes**: Supports dynamic primary color changes across the entire template.

## 🛠️ Tech Stack

* **Framework**: [React](https://reactjs.org/) (Functional Components & Hooks)
* **Build Tool**: [Vite](https://vitejs.dev/) (for lightning-fast development)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Printing/PDF**: [react-to-print](https://github.com/gregnb/react-to-print)
* **Icons**: Custom Icon Components
* **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
* npm or yarn

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/clintbr/CV_Maker.git
cd CV_Maker

```


2. **Install dependencies**:
```bash
npm install

```


3. **Start the development server**:
```bash
npm run dev

```


4. **Open the app**:
Navigate to `http://localhost:5173` in your browser.

## Project Structure

```text
├── src/
│   ├── components/
│   │   ├── Editor/       # Input forms and data handling
│   │   ├── Preview/      # Futuristic CV Templates
│   │   └── ui/           # Reusable UI components (Icons, etc.)
│   ├── test/
│   │   └── TestPersona.js # Static data for testing and demos
│   ├── App.jsx           # Main logic (Resizing, Mobile-Toggle, State)
│   └── main.jsx
├── public/               # Static assets
├── vite.config.js        # Build configuration
└── package.json

```

## 📄 Deployment

The project is configured for **GitHub Pages**. To deploy your own version:

1. Update the `base` property in `vite.config.js` to match your repository name.
2. Run:
```bash
npm run deploy

```
3. This repo is my intellectual property: Please mention my name if using the Project



## Future Enhancements

* [ ] Multiple Template Support (Light/Classic/Minimalist).
* [ ] LocalStorage integration to save progress.
* [ ] Multi-language support for CV headers.
* [ ] Skill-tags with auto-complete.

---

Created by Clint Bryan Nguena
