# Gossip's Blog Platform

A modern, responsive blog platform built with Next.js and MongoDB. This platform allows users to browse, search, and read blogs across different categories.

## Features

- Modern and responsive UI design
- Real-time blog search functionality
- Mobile-friendly interface
- Category-based blog filtering
- Rich blog content display
- Fast and efficient performance

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gossips-1.git
cd gossips-1
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
gossips-1/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── blog-details/      # Blog detail pages
│   └── page.js            # Home page
├── components/            # React components
│   ├── atoms/            # Basic UI components
│   ├── sections/         # Page sections
│   └── skeletons/        # Loading skeletons
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
└── scripts/              # Utility scripts
```

## Features in Detail

### Blog Browsing
- View all blogs in a responsive grid layout
- Filter blogs by category using interactive badges
- Search blogs by title or author

### Blog Details
- View full blog content with rich formatting
- Responsive image display
- Author information and publication date
- Category tags

### Search Functionality
- Real-time search suggestions
- Debounced search input
- Mobile-optimized search interface

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- MongoDB for the database solution
- Tailwind CSS for the utility-first CSS framework
