# Subhash - Full Stack Developer Portfolio

A modern, premium full-stack developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. 
Designed with a dark theme glassmorphism aesthetic inspired by Vercel and Apple.

## Tech Stack
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Contact Form:** EmailJS
- **Scrolling:** react-scroll

## Installation & Setup

1. **Clone the repository or download the source code**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## Configuration

### Update Content
All the resume data (Experience, Projects, Skills, etc.) is located in `src/data/resumeData.js`.
You can update the text, add links, and modify the placeholder images directly in this file.

### Contact Form Setup
To make the contact form functional, you need to set up an account with [EmailJS](https://www.emailjs.com/):
1. Create a free account.
2. Add an Email Service (e.g., Gmail) to get your `Service ID`.
3. Create an Email Template to get your `Template ID`.
4. Get your `Public Key` from the Account tab.
5. Open `src/sections/Contact.jsx` and replace the placeholder strings with your actual EmailJS credentials.

### Placeholders to Replace
- **Profile Photo:** In `src/data/resumeData.js`, replace the `photoUrl` placeholder with a link to your professional photo.
- **Project Images:** Replace the `image` fields in the `projects` array with screenshots of your actual projects.
- **Resume PDF:** Upload your PDF to a cloud service (e.g., Google Drive, AWS S3) and put the link in the `resumeUrl` field.

## Deployment Steps

### Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your GitHub repository.
4. The Build Settings will automatically be detected for Vite.
5. Click "Deploy".

### Netlify
1. Push your code to a GitHub repository.
2. Log in to [Netlify](https://www.netlify.com/) and click "Add new site" -> "Import an existing project".
3. Connect to your GitHub and select the repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click "Deploy site".
