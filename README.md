# LegalEase AI

**AI-powered legal assistance platform designed to simplify Indian business law for startups and small businesses.**

🔗 **Live Demo**: [https://legalease-ai-ten.vercel.app/](https://legalease-ai-ten.vercel.app/)
📂 **GitHub**: [https://github.com/monodox/legalease-ai](https://github.com/monodox/legalease-ai)

LegalEase AI provides instant, jurisdiction-specific legal guidance through a conversational interface and generates common legal documents based on business context, reducing reliance on expensive and slow legal consultations. Built with Next.js and Google's Gemini models, LegalEase AI makes legal compliance faster, more accessible, and easier to understand for non-lawyers, enabling founders to make informed decisions with confidence.

## 🚀 Features

- **AI Legal Assistant**: Conversational interface powered by Google's Gemini models
- **Specialized AI Agents**: Three dedicated agents for compliance, contract drafting, and risk assessment
- **Document Generation**: Automated creation of common legal documents
- **Indian Business Law Focus**: Specialized knowledge for Indian startups and SMBs
- **Jurisdiction-Specific Guidance**: Location-aware legal advice
- **User-Friendly Interface**: Designed for non-lawyers to understand complex legal concepts

## 🛠️ Tech Stack

- **Frontend**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **AI**: Google Gemini API
- **Hosting**: Vercel
- **Code**: GitHub

## 📁 Project Structure

```
src/
├── agents/                   # AI Agent System
│   ├── types.ts             # Agent interfaces and types
│   ├── index.ts             # Agent registry
│   ├── compliance.agent.ts   # Compliance guidance agent
│   ├── contract-drafting.agent.ts # Contract drafting agent
│   └── risk-check.agent.ts   # Risk assessment agent
├── ai/                       # AI Integration Layer
│   ├── flows/               # Genkit AI flows
│   │   ├── compliance-guidance-chatbot.ts
│   │   ├── document-generator.ts
│   │   └── index.ts
│   ├── prompts/             # AI prompts
│   │   ├── system.ts        # Main system prompt
│   │   ├── compliance.ts    # Compliance agent prompt
│   │   ├── contract.ts      # Contract agent prompt
│   │   ├── risk.ts          # Risk agent prompt
│   │   ├── compliance-guidance.prompt.ts
│   │   ├── document-generation.prompt.ts
│   │   └── index.ts
│   ├── types/               # AI type definitions
│   │   └── legal.ts
│   └── genkit.ts            # Genkit configuration
├── app/
│   ├── api/                 # API routes
│   │   ├── chat/           # Chat API endpoint
│   │   └── documents/      # Document generation API
│   ├── auth/                # Authentication pages
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   ├── reset-password/
│   │   ├── verify-email/
│   │   └── organisation/
│   ├── console/              # Dashboard/Console pages
│   │   ├── agents/          # AI Agents management
│   │   │   ├── [id]/       # Individual agent pages
│   │   │   └── components/ # Agent-specific components
│   │   ├── chat/           # Chat interface
│   │   │   └── [id]/       # Individual chat sessions
│   │   ├── knowledge/      # Knowledge base management
│   │   ├── library/        # Document library
│   │   ├── help/           # Help and support
│   │   └── settings/       # User settings
│   ├── legal/               # Legal pages
│   │   ├── terms/
│   │   ├── privacy/
│   │   └── cookies/
│   ├── site/                # Marketing/Landing pages
│   │   ├── home/
│   │   ├── features/
│   │   ├── company/
│   │   └── resources/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── app/                  # App-wide components
│   │   ├── app-header.tsx
│   │   └── app-footer.tsx
│   ├── console/              # Console-specific components
│   │   ├── console-header.tsx
│   │   ├── console-sidebar.tsx
│   │   └── add-knowledge-form.tsx
│   ├── site/                 # Site-specific components
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   └── ui/                   # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── tabs.tsx
│       └── textarea.tsx
└── lib/
    ├── utils.ts             # Utility functions
    └── chat-utils.ts        # Chat-specific utilities
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Google AI Studio API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/monodox/legalease-ai.git
   cd legalease-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with your API keys

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel
1. Connect your GitHub repository to Vercel
2. Add environment variables
3. Deploy automatically on push to main

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**LegalEase AI** - Making legal compliance accessible for everyone.