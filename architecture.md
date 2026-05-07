# NDIS Management Portal - Architecture Documentation

## Overview

The NDIS Management Portal is a comprehensive healthcare management platform built for the National Disability Insurance Scheme (NDIS). It serves multiple stakeholders including participants, support workers, providers, plan managers, and administrators. The platform uses a modern **client-server architecture** with:

- **Frontend**: Next.js 15 hybrid web/mobile application (via Capacitor)
- **Backend**: NestJS REST API server (separate deployment)
- **Database**: Supabase PostgreSQL with authentication
- **Storage**: Supabase for public assets, Firebase Storage for private/secure files

## Technology Stack

### Core Framework

- **Next.js 15.5.7** - React framework with App Router for SSR, SSG (Frontend)
- **NestJS** - Progressive Node.js framework for building the backend API
- **React 18** - UI library with hooks and modern React features
- **TypeScript 5** - Type-safe development (Frontend & Backend)

### Mobile Development

- **Capacitor 8.0** - Cross-platform mobile runtime (iOS & Android)
- **Capacitor Plugins**:
  - Camera, Geolocation, Haptics
  - Local Notifications, Push Notifications
  - Preferences (local storage)

### Backend & Authentication

- **NestJS** - Backend REST API framework (separate backend server)
- **Supabase** - Authentication, database, and public asset storage
- **Firebase Storage** - Private asset storage (secure documents, private files)
- **Socket.io Client** - Real-time communication

### State Management

- **Redux Toolkit** - Global state management
- **React Redux** - React bindings for Redux
- **Redux Persist** - State persistence

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **clsx & tailwind-merge** - Conditional class handling
- **Design System**: Flat design with Tailwind colors only — no gradients, no custom colors
  - **Always use Tailwind color classes**: `bg-primary`, `text-primary`, `bg-gray-50`, `text-white`, etc.
  - Never use custom hex colors, RGB values, or CSS color names outside Tailwind's palette
  - Use primary colors (`primary`, `primary-hover`) for brand consistency
  - Use semantic colors from Tailwind (`gray-*`, `red-*`, `green-*`, `blue-*`) for UI elements
  - Avoid gradient utilities (`bg-gradient-*`, `bg-clip-text`, etc.)
  - Maintain clean, flat visual hierarchy with solid colors and shadows

### Additional Features

- **Three.js & Postprocessing** - 3D graphics and effects
- **React Signature Canvas** - Digital signatures
- **React Google Places Autocomplete** - Address autocomplete
- **Axios** - HTTP client

### Testing & Quality

- **Playwright** - E2E testing
- **Jest & Testing Library** - Unit testing
- **ESLint** - Code linting

## Project Structure

```
ndis-management-portal/
├── android/                      # Android native project (Capacitor)
├── ios/                          # iOS native project (Capacitor)
├── public/                       # Static assets
│   ├── data/                    # NDIS support catalogue JSON
│   ├── images/                  # Image assets
│   ├── landing-page/            # Landing page assets
│   └── manifest.json            # PWA manifest
├── src/
│   ├── app/                     # Next.js App Router pages (routing layer)
│   │   ├── api/                # Optional API routes (proxies, SSR helpers)
│   │   ├── auth/               # Authentication routes
│   │   ├── dashboard/          # Dashboard routes
│   │   ├── participants/       # Participant routes
│   │   ├── practitioners/      # Practitioner routes
│   │   ├── clients/            # Client routes
│   │   ├── bookings/           # Booking routes
│   │   ├── shifts/             # Shift routes
│   │   ├── invoicing/          # Invoicing routes
│   │   ├── incidents/          # Incident routes
│   │   ├── forms/              # Form routes
│   │   ├── provider/           # Provider portal routes
│   │   ├── worker/             # Support worker portal routes
│   │   ├── landing/            # Landing page route
│   │   ├── articles/           # Resource articles routes
│   │   ├── pricing/            # Pricing page route
│   │   ├── jobs/               # Job listings routes
│   │   ├── provider-directory/ # Provider directory routes
│   │   ├── properties/         # Property routes
│   │   ├── reviews-management/ # Review system routes
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── modules/                # Feature modules (business logic)
│   │   ├── auth/               # Authentication module
│   │   ├── dashboard/          # Dashboard module
│   │   ├── participants/       # Participant features
│   │   ├── practitioners-provider-pov/ # Provider perspective
│   │   ├── support-workers-provider-pov/ # Worker management
│   │   ├── clients/            # Client features
│   │   ├── bookings/           # Booking features
│   │   ├── shifts/             # Shift features
│   │   ├── invoicing/          # Invoicing features
│   │   ├── incidents/          # Incident features
│   │   ├── custom-forms/       # Custom form builder
│   │   ├── landing/            # Landing page components
│   │   ├── shared/             # Shared components & utilities
│   │   ├── chat/               # Chat/messaging features
│   │   ├── reviews/            # Review features
│   │   ├── worker/             # Worker portal features
│   │   ├── provider/           # Provider portal features
│   │   ├── recruitment/        # Recruitment features
│   │   ├── earn-money/         # Referral/earning features
│   │   ├── find-a-home/        # Housing search
│   │   ├── home-owner-service/ # Property services
│   │   ├── properties/         # Property features
│   │   ├── articles/           # Article features
│   │   └── audit-readiness-checker/ # Compliance tools
│   │       # Each module follows the same structure:
│   │       # ├── screens/      (UI screens/pages)
│   │       # ├── components/   (Feature-specific components)
│   │       # ├── services/     (API calls and business logic)
│   │       # └── types/        (TypeScript types/interfaces)
│   ├── config/
│   │   └── api.ts              # API configuration
│   └── types/
│       └── globals.d.ts        # Global type definitions
├── scripts/                     # Utility scripts
├── playwright-report/           # Test reports
├── resources/                   # Additional resources
├── www/                         # Capacitor web output
└── Configuration Files
    ├── capacitor.config.ts      # Capacitor configuration
    ├── next.config.ts           # Next.js configuration
    ├── tsconfig.json            # TypeScript configuration
    ├── tailwind.config.ts       # Tailwind configuration
    ├── eslint.config.mjs        # ESLint configuration
    ├── playwright.config.ts     # Playwright configuration
    └── package.json             # Dependencies & scripts
```

## Architecture Patterns

### 1. Feature-Based Module Architecture

The project follows a feature-based architecture where related functionality is grouped into modules:

- **`src/app/`**: Next.js App Router - thin routing layer that imports and renders screens from modules
- **`src/modules/`**: Business logic, components, screens, services, and feature implementations
- **`src/config/`**: Configuration files and constants
- **`src/types/`**: Global TypeScript type definitions

**Routing Flow**: Routes in `/app` → import screens from `/modules` → screens use components and services from same module

#### Standard Module Structure

Each module follows a consistent internal structure:

```
module-name/
├── screens/          # UI screens/pages for this feature
│   ├── list-screen.tsx
│   ├── detail-screen.tsx
│   └── create-screen.tsx
├── components/       # Feature-specific components (organized by screen for multi-screen modules)
│   ├── list-screen/ # Components specific to list screen
│   │   ├── table.tsx
│   │   ├── filters.tsx
│   │   └── card.tsx
│   ├── detail-screen/ # Components specific to detail screen
│   │   ├── header.tsx
│   │   ├── info-panel.tsx
│   │   └── actions.tsx
│   └── shared/      # Components used across multiple screens in this module
│       └── modal.tsx
├── services/         # API calls and business logic (.ts files only)
│   ├── api.ts       # Direct API calls using API_BASE_URL
│   └── utils.ts
├── state/            # Redux slices and state management (optional)
│   └── slice.ts
└── types/            # TypeScript types/interfaces
    └── index.ts
```

**Note**: For smaller modules with a single screen, components can be flat in the `components/` folder. For modules with multiple screens (e.g., landing, detail, create), organize components into screen-specific subfolders to maintain clarity and scalability.

This separation ensures:

- **Clear separation of concerns**: UI (screens), reusable components, API logic (services), and types
- **Component organization by screen**: For multi-screen modules, components are grouped by their associated screen
- **Reusable business logic**: Services can be imported across screens
- **Type safety**: Centralized types for each feature domain
- **Easy navigation and maintenance**: Predictable structure across all modules
- **Scalable codebase structure**: New features follow the same pattern

### 2. Multi-Portal Architecture

The application serves different user types through dedicated portals:

```
┌─────────────────────────────────────────────────────┐
│           Landing Page & Public Routes              │
│     (Landing, Articles, Pricing, Jobs, etc.)        │
└─────────────────────────────────────────────────────┘
                         │
                ┌────────┴────────┐
                │  Authentication │
                └────────┬────────┘
                         │
        ┌────────────────┼────────────────┬────────────────┐
        │                │                │                │
┌───────▼────────┐ ┌────▼──────┐ ┌──────▼───────┐ ┌──────▼────────┐
│   Participant  │ │  Provider │ │Support Worker│ │ Practitioner  │
│     Portal     │ │   Portal  │ │    Portal    │ │    Portal     │
└────────────────┘ └───────────┘ └──────────────┘ └───────────────┘
        │                │                │                │
        └────────────────┴────────────────┴────────────────┘
                                  │
                       ┌──────────▼──────────┐
                       │   Admin Dashboard   │
                       └─────────────────────┘
```

### 3. Hybrid Web/Mobile Architecture

```
┌──────────────────────────────────────┐
│         Web Browser                  │
│    (Desktop & Mobile Web)            │
└──────────────────────────────────────┘
                 │
┌────────────────┴─────────────────────┐
│      Next.js Frontend Application    │
│  ┌────────────────────────────────┐  │
│  │      App Router (Routes)       │  │
│  ├────────────────────────────────┤  │
│  │  React Components & Modules    │  │
│  └────────────────────────────────┘  │
└────────────┬─────────────────────────┘
             │
             ▼
┌────────────────────────────────────┐
│       NestJS Backend API           │
│    (Separate Backend Server)       │
└────────────┬───────────────────────┘
             │
┌────────────┴─────────────────────┐
│      Capacitor Runtime           │
│  ┌──────────┐  ┌──────────────┐  │
│  │ iOS App  │  │ Android App  │  │
│  └──────────┘  └──────────────┘  │
└──────────────────────────────────┘
```

### 4. Data Flow Architecture

```
┌──────────────────────┐
│      UI Layer        │ (React Components)
└──────────┬───────────┘
           │
┌──────────▼───────────┐
│    Redux Store       │ (Global State)
└──────────┬───────────┘
           │
┌──────────▼───────────┐
│     API Layer        │ (Axios/Fetch)
└──────────┬───────────┘
           │
┌──────────▼───────────┐
│   NestJS Backend     │ (REST API Server)
└──────────┬───────────┘
           │
     ┌─────┴─────┬──────────────────┐
     │           │                  │
┌────▼─────┐ ┌──▼────────┐ ┌───────▼────────┐
│Supabase  │ │  Firebase │ │   Socket.io    │
│Database/ │ │  Storage  │ │   (Real-time)  │
│Auth/     │ │ (Private) │ └────────────────┘
│Public    │ │           │
│Assets    │ │           │
└──────────┘ └───────────┘
```

## Key Features & Modules

### Core Management Features

1. **Participant Management** - Profile, support plans, funding tracking
2. **Support Worker Management** - Scheduling, qualifications, assignments
3. **Provider Management** - Organization management, worker oversight
4. **Booking System** - Appointment scheduling and management
5. **Shift Management** - Shift scheduling, rostering, and tracking
6. **Timesheet Management** - Auto-generated time tracking
7. **Invoicing** - Automated billing and invoice generation
8. **Payment Processing** - Payment tracking and processing
9. **Incident Reporting** - Safety incident management
10. **Document Management** - Forms, agreements, consent forms

### Compliance & Forms

- Emergency Plan Forms
- Participant Support Plan Forms
- Privacy & Consent Forms
- Service Agreements
- Schedule of Supports
- Intake Forms
- Custom Form Builder
- Audit Readiness Checker

### Communication Features

- Real-time Chat/Messaging (Socket.io)
- Notifications (Push & Local)
- Email Communications

### Discovery & Marketplace

- Provider Directory
- Job Listings (for support workers)
- Property Listings (Find a Home)
- Service Marketplace

### Additional Features

- Reviews & Ratings
- Articles & Resources
- Pricing Information
- Contact Management
- Customer Lead Management
- Practitioner Scheduling

## API Architecture

### Backend API Structure

The application uses a **NestJS backend server** (separate repository/deployment from the Next.js frontend) that provides RESTful API endpoints:

```
NestJS API Server (Separate Backend)
├── /auth              # Authentication endpoints
├── /participants      # Participant CRUD operations
├── /practitioners     # Practitioner management
├── /bookings          # Booking operations
├── /shifts            # Shift management
├── /invoices          # Invoice generation
├── /payments          # Payment processing
├── /incidents         # Incident reporting
├── /forms             # Form submissions
├── /chat              # Chat/messaging
└── /notifications     # Push notifications
```

**Note**: The NestJS backend is maintained as a separate codebase and deployed independently from the Next.js frontend.

### Frontend API Integration (`/src/app/api/`)

The Next.js application may include lightweight API routes for:

- Server-side rendering data fetching
- Edge functions for specific use cases
- Proxy endpoints for third-party services

### Backend Services & Storage

- **NestJS**: Primary backend REST API server (separate deployment)
- **Supabase**:
  - Authentication and user management
  - PostgreSQL database
  - **Public asset storage** (profile pictures, public documents, marketing materials)
- **Firebase Storage**:
  - **Private asset storage** (participant records, confidential documents, secure files)
  - Access controlled through Firebase security rules
- **Socket.io**: Real-time bidirectional communication for chat and notifications

## State Management

### Redux Store Structure

```typescript
{
  auth: {
    user: User | null,
    session: Session | null,
    loading: boolean
  },
  participants: {
    list: Participant[],
    selected: Participant | null
  },
  bookings: {
    list: Booking[],
    filters: FilterState
  },
  // ... other slices
}
```

### Persistence

- Redux Persist maintains state across sessions
- Capacitor Preferences for mobile-specific storage

## Mobile Capabilities

### Native Features (via Capacitor)

- **Camera**: Photo capture for documentation
- **Geolocation**: Location tracking for check-ins
- **Haptics**: Tactile feedback
- **Notifications**: Local and push notifications
- **Offline Support**: Progressive Web App (PWA) capabilities

### Platform-Specific Builds

- **iOS**: Xcode project in `/ios`
- **Android**: Gradle project in `/android`

## Performance Optimizations

1. **Image Optimization**: Disabled for Capacitor compatibility
2. **SWC Minification**: Fast minifier for production builds
3. **Package Import Optimization**: Tree-shaking for Capacitor plugins
4. **Modularized Imports**: React Icons loaded on-demand
5. **Code Splitting**: Automatic with Next.js App Router
6. **Compression**: Enabled for production

## Testing Strategy

### E2E Testing (Playwright)

- Authentication flows
- Dashboard functionality
- Worker management
- Lead management
- Provider dashboard

### Test Scripts

```bash
npm run test              # Run all tests
npm run test:ui           # UI mode
npm run test:auth         # Auth tests
npm run test:dashboard    # Dashboard tests
npm run test:worker       # Worker tests
npm run test:leads        # Lead tests
```

## Build & Deployment

### Web Application

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
```

### Mobile Applications

```bash
npm run mobile:sync           # Sync web to mobile
npm run mobile:android        # Open Android Studio
npm run mobile:ios            # Open Xcode
npm run mobile:build:ios      # Build iOS app
```

### Environment Configuration

- `.env` files for environment variables
- Separate configurations for web and mobile
- Production and development environments

## Security Considerations

1. **Authentication**: Supabase Auth with row-level security
2. **API Security**: NestJS backend with guards, JWT tokens, and authentication middleware
3. **Data Validation**: TypeScript type checking + NestJS validation pipes
4. **Content Security**: Next.js security headers
5. **Secure Storage**:
   - Public assets on Supabase (read-only for general access)
   - Private assets on Firebase Storage (access-controlled)
   - Encrypted preferences on mobile devices

## Scalability Considerations

1. **Feature Modules**: Independent, scalable feature sets
2. **Separate Backend**: NestJS backend can scale independently from frontend
3. **Database**: Supabase PostgreSQL with automatic scaling
4. **Storage Strategy**:
   - Public assets via Supabase (CDN-backed)
   - Private assets via Firebase Storage (secure, scalable)
5. **Frontend**: Next.js with automatic code splitting and optimization
6. **Load Balancing**: NestJS backend can run on multiple instances

## Development Guidelines

### Code Organization

- Keep feature logic in `/modules` using the standard structure:
  - **screens/**: UI screens and page components (.tsx files)
  - **components/**: Reusable feature-specific components (.tsx files)
  - **services/**: API calls, data fetching, and business logic (.ts files only)
  - **state/**: Redux slices and state management (optional)
  - **types/**: TypeScript interfaces and types for the module
- Routes in `/app` are thin routing layers that import and render screens from `/modules`
  - Example: `/app/participants/page.tsx` imports `ParticipantListScreen` from `/modules/participants/screens/`
- Shared components and utilities in `/modules/shared`
- Global type definitions in `/src/types`
- Module-specific types in each module's `types/` folder

### API Call Guidelines

- **All direct API calls must be in `.ts` service files**, never in `.tsx` component or screen files
  - ❌ Bad: Making fetch/axios calls directly in components or screens
  - ✅ Good: Import and call service functions from `services/api.ts`
- **Use `API_BASE_URL` from `/src/config/api.ts`** as the base URL for all API calls
  - Example: `${API_BASE_URL}/participants`
- **Most API calls require JWT Bearer token authentication**
  - Include `Authorization: Bearer <token>` header in requests
  - Token is typically retrieved from Redux store or authentication context
  - Example: `headers: { Authorization: `Bearer ${token}` }`
- Components and screens should only:
  - Import service functions
  - Call service functions
  - Handle loading/error states
  - Render UI based on data
- This separation ensures testability, reusability, and maintainability

### Naming Conventions

- Component Files: kebab-case (`participant-card.tsx`, `compliance-hero.tsx`)
- Component Exports: PascalCase (`ParticipantCard`, `ComplianceHero`)
- Utilities: camelCase (`formatDate.ts`)
- Constants: UPPER_SNAKE_CASE (`API_BASE_URL`)
- Routes: kebab-case (`/support-workers`)

### TypeScript Guidelines

- **Never use `any` type**: Using `any` disables type checking and causes build errors
  - Use specific types, interfaces, or generics instead
  - Use `unknown` if the type is truly unknown and add type guards
  - Example: ❌ `const data: any = ...` → ✅ `const data: Participant = ...`
- Define types in module `types/` folders for feature-specific types
- Use global type definitions in `/src/types` for shared types
- Leverage TypeScript's strict mode for maximum type safety

### HTML/JSX Content Guidelines

When creating HTML content (especially in template strings, PDFs, or dynamic HTML generation):

- **Use HTML entities for quotes and apostrophes** instead of plain `'` and `"` characters
  - `&apos;` - Apostrophe (')
  - `&lsquo;` - Left single quote (')
  - `&rsquo;` - Right single quote (')
  - `&#39;` - Alternative apostrophe encoding
  - `&ldquo;` - Left double quote (")
  - `&rdquo;` - Right double quote (")
  - `&quot;` - Alternative double quote encoding
- **Why**: Prevents parsing issues, ensures proper rendering across browsers, maintains code quality
- **Example**:
  - ❌ Bad: `<p>It's a great day for "compliance"</p>`
  - ✅ Good: `<p>It&apos;s a great day for &ldquo;compliance&rdquo;</p>`
- **Especially important for**:
  - Dynamically generated HTML content
  - PDF generation using HTML templates
  - Email templates
  - Server-side rendered content with user input

### Component Structure

#### Routing Layer Example

```typescript
// app/participants/page.tsx (Next.js route - thin layer)
import { ParticipantListScreen } from '@/modules/participants/screens/participant-list-screen';

export default function ParticipantsPage() {
  return <ParticipantListScreen />;
}
```

#### Module Files

```typescript
// modules/participants/types/index.ts
export interface Participant {
  id: string;
  name: string;
  // ...
}

// modules/participants/services/api.ts
import { Participant } from '../types';

export const fetchParticipants = async (): Promise<Participant[]> => {
  // API call logic
};

// modules/participants/components/participant-card.tsx
import React from 'react';
import { Participant } from '../types';

interface Props {
  participant: Participant;
}

export const ParticipantCard: React.FC<Props> = ({ participant }) => {
  return (/* ... */);
};

// modules/participants/screens/participant-list-screen.tsx
import React from 'react';
import { ParticipantCard } from '../components/participant-card';
import { fetchParticipants } from '../services/api';

export const ParticipantListScreen: React.FC = () => {
  // Screen logic with components and services
  return (/* ... */);
};
```

#### General Component Pattern

```typescript
// 1. Imports
import React from 'react';

// 2. Types
interface Props {
  // ...
}

// 3. Component
const Component: React.FC<Props> = ({ ...props }) => {
  // 4. Hooks
  // 5. Handlers
  // 6. Render
  return (/* ... */);
};

// 7. Export
export default Component;
```

## Future Considerations

1. **Microservices**: Consider breaking down NestJS monolith into domain-specific microservices
2. **GraphQL**: Add GraphQL layer for more flexible data fetching
3. **Edge Runtime**: Utilize Next.js edge functions for geographically distributed content
4. **Caching Layer**: Implement Redis for session management and API caching
5. **Analytics & Monitoring**: Integrate analytics tracking and error monitoring (e.g., Sentry)
6. **CI/CD**: Automated testing and deployment pipelines for both frontend and backend
7. **Message Queue**: Add message broker (RabbitMQ/AWS SQS) for async processing

## Additional Documentation

- **System Design**: See `ndis_management.system.md` for UML diagrams and entity relationships
- **README**: See `README.md` for quick start guide
- **API Documentation**: (To be added)
- **Component Library**: (To be added)

---

**Last Updated**: February 2026
**Version**: 0.1.0
**Maintainers**: Development Team
