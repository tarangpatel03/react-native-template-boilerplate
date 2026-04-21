# React Native Boilerplate Template

A scalable React Native starter template with **feature-based architecture**, preconfigured libraries, and production-ready setup.

Designed for fast project initialization with consistent structure.

---

## Usage

Create a new React Native project using this template:

```bash
npx @react-native-community/cli@latest init MyApp --template <your-github-username>/<repo-name>
```

Example:

```bash
npx @react-native-community/cli@latest init MyApp --template tarangpatel03/react-native-template-boilerplate
```

## After Project Creation

```bash
cd MyApp

yarn

cd ios && pod install && cd ..

npx react-native run-ios
npx react-native run-android
```

---

## Features

### Architecture

- Feature-based folder structure
- Clear separation between app, shared, and features
- Scalable navigation setup
- Strict import boundaries

```txt
src/
 ├── app/
 ├── assets/
 ├── features/
 └── shared/
```

---

### Preconfigured Libraries

**Core**

- React Native 0.85+
- TypeScript
- ESLint + Prettier
- Absolute imports

**Navigation**

- @react-navigation/native
- native-stack
- bottom-tabs

**State Management**

- Redux Toolkit
- redux-persist

**Networking**

- axios client
- interceptor setup
- centralized error handling

**Server State**

- @tanstack/react-query

**UI & UX**

- @gorhom/bottom-sheet
- react-native-toast-message
- react-native-safe-area-context
- react-native-gesture-handler
- react-native-reanimated
- react-native-linear-gradient
- react-native-fast-image
- shimmer placeholder

**Forms**

- Custom input validation setup

**Utilities**

- i18next localization setup
- theme system
- network monitor
- global loader handler
- reusable components

---

## Included Setup

### Navigation structure

- Root navigator
- Bottom tab navigator
- feature-level stacks

### Global Providers

- Redux Provider
- Persist Gate
- Bottom Sheet Provider
- Toast Provider
- Theme Provider

### API layer

- axios instance
- request/response interceptors
- token injection
- error parsing

### UI primitives

- Buttons
- Inputs
- Text components
- Loader
- Toast
- BottomSheet abstraction

---

## Code Generators

This template includes CLI scripts to generate features and entities with consistent structure.

Generators help enforce architecture boundaries and reduce manual setup.

### Generate Feature

Creates a new feature module with standard structure.

```bash
yarn generate:feature <FeatureName>
```

Example:

```bash
yarn generate:feature Auth
```

Generated structure:

```txt
src/features/Auth/
├── components/
├── screens/
├── hooks/
├── services/
├── store/
├── types/
├── utils/
└── index.ts
```

---

### Generate Entity

Creates reusable domain entity.

Entities are shared business objects used across features.

```bash
yarn generate:entity <EntityName>
```

Example:

```bash
yarn generate:entity User
```

Generated structure:

```bash
src/entities/User/
├── types/
├── services/
├── hooks/
└── index.ts
```

---

## Architecture Overview

Feature-based structure

Features are isolated and should not import from other features directly.

Instead, shared logic should live in:

```bash
src/shared/
```

or

```bash
src/entities/
```

---

## Layer responsibilities

### app

Application bootstrap and providers.

```txt
src/app/
```

Contains:

- navigation
- store setup
- providers
- config

---

### features

Self-contained business features.

Example:

```txt
src/features/auth
src/features/chat
src/features/orders
```

Each feature contains:

- UI
- hooks
- services
- store slice
- types

---

### entities

Reusable domain objects.

Example:

```txt
User
Product
Order
Conversation
Message
```

Entities may include:

- types
- service helpers
- validation schema
- mapping logic

---

### shared

Cross-feature reusable code.

```txt
components
hooks
utils
services
themes
constants
types
```

---

## Roadmap

This template will continue to evolve with additional improvements, reusable modules, and developer experience enhancements.

New improvements will be added incrementally without breaking the core structure.

You can safely pull updates or adapt new patterns into existing projects when needed.

## License

MIT
