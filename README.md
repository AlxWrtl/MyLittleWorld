# MyLittleWorld

A modern, full-stack React application built with React Router 7, Prisma, and TailwindCSS.

## Tech Stack

- ⚛️ **React 19** - Latest version of React for building user interfaces
- 🛣️ **React Router 7** - For client and server-side routing
- 💾 **Prisma 6.4** - Next-generation ORM for Node.js and TypeScript
- 🎨 **TailwindCSS 4** - Utility-first CSS framework
- 🎯 **TypeScript** - For type-safe code
- 🔧 **Vite** - Next Generation Frontend Tooling
- 🎭 **Radix UI** - Unstyled, accessible components for building high‑quality design systems
- 📦 **PNPM** - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- PNPM package manager
- Docker (optional, for containerized deployment)

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Set up your environment variables:
   Copy `.env.example` to `.env` and update the values as needed.

### Development

Start the development server:

```bash
pnpm dev
```

Your application will be available at `http://localhost:5173`.

For type checking:

```bash
pnpm typecheck
```

## Building for Production

Create a production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Docker Deployment

Build the Docker image:

```bash
docker build -t mylittleworld .
```

Run the container:

```bash
docker run -p 3000:3000 mylittleworld
```

## Project Structure

```
mylittleworld/
├── app/              # Application source code
├── prisma/           # Prisma schema and migrations
├── public/           # Static assets
├── .react-router/    # React Router configuration
├── components.json   # UI components configuration
├── tsconfig.json    # TypeScript configuration
└── vite.config.ts   # Vite configuration
```

## Features

- 🚀 Server-side rendering with React Router 7
- 📱 Modern, responsive UI with TailwindCSS and Radix UI
- 🔒 Type-safe database operations with Prisma
- ⚡️ Fast development with Vite and HMR
- 🔄 Efficient dependency management with PNPM
- 🐳 Docker support for easy deployment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using React Router, Prisma, and TailwindCSS.
