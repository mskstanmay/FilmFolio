# FilmFolio

A full-stack web application for managing and sharing your movie collection.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

## Project Structure

```
FilmFolio/
├── filmfolio-frontend/  # Next.js frontend application
└── filmfolio-backend/   # Express.js backend application
```

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
```bash
cd filmfolio-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/filmfolio"
JWT_SECRET="your-secret-key"
PORT=3001
```

4. Set up the database:
```bash
npx prisma db push
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on http://localhost:3001

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd filmfolio-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Start the frontend development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000

## Features

- User authentication
- Profile management
- Post creation and sharing
- Real-time updates using Socket.IO
- Image upload and processing

## Technologies Used

- **Frontend:**
  - Next.js 15
  - React 19
  - TailwindCSS
  - Axios

- **Backend:**
  - Express.js
  - Prisma
  - PostgreSQL
  - Socket.IO
  - JWT Authentication

## Development

- Run tests: `npm test` (in respective directories)
- Lint code: `npm run lint`
- Build for production:
  - Frontend: `npm run build`
  - Backend: `npm run build`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
