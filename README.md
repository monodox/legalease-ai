# LegalEase AI

**AI-powered legal assistance platform designed to simplify Indian business law for startups and small businesses.**

LegalEase AI provides instant, jurisdiction-specific legal guidance through a conversational interface and generates common legal documents based on business context, reducing reliance on expensive and slow legal consultations. Built with Next.js, Firebase, and Google's Gemini models, LegalEase AI makes legal compliance faster, more accessible, and easier to understand for non-lawyers, enabling founders to make informed decisions with confidence.

## 🚀 Features

- **AI Legal Assistant**: Conversational interface powered by Google's Gemini models
- **Specialized AI Agents**: Three dedicated agents for compliance, contract drafting, and risk assessment
- **Document Generation**: Automated creation of common legal documents
- **Indian Business Law Focus**: Specialized knowledge for Indian startups and SMBs
- **Jurisdiction-Specific Guidance**: Location-aware legal advice
- **User-Friendly Interface**: Designed for non-lawyers to understand complex legal concepts
- **Organization Management**: Multi-user support with organization-based access
- **Secure Platform**: Enterprise-grade security for sensitive legal data

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Firebase (Authentication, Firestore, Functions)
- **AI**: Google Gemini 2.5 Flash, Genkit Framework
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── agents/                   # AI Agent System
│   ├── types.ts             # Agent interfaces and types
│   ├── index.ts             # Agent registry
│   ├── compliance.agent.ts   # Compliance guidance agent
│   ├── contract-drafting.agent.ts # Contract drafting agent
│   └── risk-check.agent.ts   # Risk assessment agent
├── app/
│   ├── auth/                 # Authentication pages
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   ├── reset-password/
│   │   ├── verify-email/
│   │   └── organisation/
│   ├── console/              # Dashboard/Console pages
│   │   ├── agents/          # AI Agents management
│   │   ├── chat/
│   │   └── settings/
│   ├── legal/                # Legal pages
│   │   ├── terms/
│   │   ├── privacy/
│   │   └── cookies/
│   ├── site/                 # Marketing/Landing pages
│   │   ├── home/
│   │   ├── features/
│   │   ├── company/
│   │   └── resources/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── ai/                       # AI Integration Layer
│   ├── flows/               # Genkit AI flows
│   ├── prompts/             # AI prompts
│   ├── types/               # AI type definitions
│   └── genkit.ts            # Genkit configuration
├── components/
│   ├── app/                  # App-wide components
│   ├── console/              # Console-specific components
│   ├── site/                 # Site-specific components
│   └── ui/                   # Reusable UI components
└── lib/
    └── utils.ts
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #1E40AF (Trust/Authority)
- **Primary Hover**: #1D4ED8
- **Slate Gray**: #334155 (Secondary elements)
- **Muted Blue**: #E0E7FF (Subtle highlights)
- **Main Background**: #F8FAFC
- **Card Surface**: #FFFFFF
- **Success**: #16A34A
- **Warning**: #D97706

### Typography
- **Primary Font**: Inter (Google Fonts)
- Optimized for legal text readability
- Consistent across all components

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project setup

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/legalease-ai.git
   cd legalease-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Application Routes

### Public Routes
- `/site/home` - Landing page
- `/site/features` - Feature showcase
- `/site/company` - About us
- `/site/resources` - Help and resources
- `/legal/terms` - Terms of service
- `/legal/privacy` - Privacy policy
- `/legal/cookies` - Cookie policy

### Authentication Routes
- `/auth/login` - User login
- `/auth/signup` - User registration
- `/auth/forgot-password` - Password reset request
- `/auth/reset-password` - Password reset
- `/auth/verify-email` - Email verification
- `/auth/organisation` - Join/Create organization

### Protected Routes
- `/console/agents` - AI agents management
- `/console/chat` - AI legal assistant
- `/console/settings` - User settings

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- shadcn/ui for consistent components

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Other Platforms
- Firebase Hosting
- Netlify
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the `/site/resources` page
- **Issues**: Create an issue on GitHub
- **Email**: support@legalease-ai.com

## 🎯 Roadmap

- [ ] Advanced document templates
- [ ] Multi-language support
- [ ] Integration with legal databases
- [ ] Mobile application
- [ ] API for third-party integrations
- [ ] Advanced analytics dashboard

---

**LegalEase AI** - Making legal compliance accessible for everyone.