# A-storybook

A modular and scalable UI component library built with **React**, documented using **Storybook**, and styled with **Tailwind CSS**.  
Designed for reusable, testable, and well-documented front-end components.

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/AnJinHyeong/A-storybook.git
cd A-storybook

# 2. Install dependencies
npm install

# 3. Run Storybook
npm run storybook

# Storybook will be available at:
# http://localhost:6006



## 🧱 Project Structure
A-storybook/ ├── .storybook/ # Storybook configuration │ ├── main.js # Entry point for addons, stories, framework │ └── preview.js # Global decorators, parameters ├── public/ # Static files ├── src/ │ ├── components/ # Reusable UI components │ │ ├── Button.tsx │ │ └── Input.tsx │ └── stories/ # Component stories for Storybook │ ├── Button.stories.tsx │ └── Input.stories.tsx ├── tsconfig.json # TypeScript configuration ├── package.json # Project metadata and dependencies └── README.md # Project documentation