# Subhash - Full Stack Developer Portfolio

A modern, premium full-stack developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Designed with a dark theme glassmorphism aesthetic inspired by Vercel and Apple.

## Tech Stack

* **Framework:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** React Icons
* **Scrolling:** react-scroll

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

All portfolio content—including your profile, experience, education, projects, skills, certifications, and social links—is stored in:

```text
src/data/resumeData.js
```

You can easily customize your portfolio by updating the data in this file.

### Placeholders to Replace

Before deploying your portfolio, replace the placeholder assets with your own:

* **Profile Photo:** Update the `photoUrl` field in `src/data/resumeData.js` with the URL of your professional profile photo.
* **Project Images:** Replace the `image` fields in the `projects` array with screenshots of your projects.
* **Resume PDF:** Upload your resume to a cloud storage service (such as Google Drive or AWS S3) and update the `resumeUrl` field with the public link.

## Deployment

### Vercel (Recommended)

1. Push your project to a GitHub repository.
2. Sign in to Vercel and click **Add New Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect the Vite configuration.
5. Click **Deploy**.

### Netlify

1. Push your project to a GitHub repository.
2. Sign in to Netlify and select **Add new site → Import an existing project**.
3. Connect your GitHub account and choose the repository.
4. Configure the following settings:

   * **Build Command:** `npm run build`
   * **Publish Directory:** `dist`
5. Click **Deploy Site**.
