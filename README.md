
# AbresStore Admin Panel

The **AbresStore Admin Panel** is a robust eCommerce management system developed using **Next.js**. This project provides administrators with essential tools for managing products, orders, and store settings, all within a streamlined, user-friendly interface.

## Features

- **Next.js 14.1.0**: Built with the latest Next.js version, providing server-side rendering and static site generation for optimal performance.
- **Clerk Authentication**: User authentication and management using Clerk for secure access control.
- **Form Handling**: Form validation and submission powered by `react-hook-form` and `zod` for schema validation.
- **Product Display and Data Visualization**: Integration with `recharts` for visualizing sales and store metrics.
- **Database Management**: `mongoose` for handling interactions with the database.
- **Image Upload**: `next-cloudinary` for efficient media management and optimized image delivery.
- **Styling**: Fully styled using `Tailwind CSS` with utilities like `clsx`, `tailwind-merge`, and animations from `tailwindcss-animate` to create a clean, responsive UI.
- **Date Management**: Date functions handled by `date-fns` for easy manipulation of date and time data.

## Installation

To run this project locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/abressiddique/abresstore-admin.git
   ```

2. Navigate to the project folder:

   ```bash
   cd abresstore-admin
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Lints the codebase for consistency.

## Dependencies

- **Next.js**: Version 14.1.0 for building a fast and scalable admin interface.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Clerk**: Seamless authentication management.
- **Mongoose**: Object data modeling (ODM) for MongoDB.
- **Recharts**: Charting library for presenting data visually.
- **React Hook Form**: Simplifies form validation and handling.

## Dev Dependencies

- **TypeScript**: Provides static type checking for better development experience.
- **ESLint**: Lints JavaScript and TypeScript code for consistency.
- **PostCSS & Autoprefixer**: For processing CSS with vendor prefixes automatically.

## Future Enhancements

- Enhanced analytics dashboard.
- Role-based access control for multiple admin users.
- Improved UI/UX with additional animation and interactivity.

## License

This project is licensed under the MIT License.

---

