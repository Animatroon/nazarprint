# Nazarprint Development Guide

This is a full-stack printing services e-commerce platform with Angular frontend and Express backend.

## Project Structure

```
nazarprint/
├── nazarprint-front/    # Angular 19 frontend (port 4200)
└── nazarprint-back/     # Express + Prisma backend (port 3001)
```

## Setup & Running

### Backend (Port 3001)
```bash
cd nazarprint-back
npm install
npm run dev          # Development with nodemon
npm start            # Production mode
npm run db:seed      # Seed database with initial data
```

### Frontend (Port 4200)
```bash
cd nazarprint-front
npm install
npm start            # Starts dev server
npm run build        # Production build
npm test             # Run tests (if configured)
```

### Database Setup
Backend uses PostgreSQL via Prisma ORM. Connection string should be configured in `.env` file:
```bash
cd nazarprint-back
# Create .env with DATABASE_URL, PORT, NODE_ENV, FRONTEND_URL
npx prisma migrate dev   # Run migrations
npx prisma generate      # Generate Prisma Client
npm run db:seed          # Seed initial data
```

## Architecture

### Backend (Express + Prisma)
- **Type**: ES Modules (`"type": "module"` in package.json)
- **ORM**: Prisma with PostgreSQL
- **API Structure**: RESTful with consistent response format `{ success, data }`
- **Routes**: Organized by domain (catalogs, categories, faq, home, requests)
- **Controllers**: Handle business logic, services interact with Prisma
- **Data Flow**: Route → Controller → Service → Prisma → Database

**Key Models** (from schema.prisma):
- `Product`: Main product model with relations to categories, images, printing methods
- `Category`: Product categories (clothes, bags, headwears, etc.)
- `Order` / `OrderItem`: Order management system
- `Faq`: FAQ questions and answers
- `CallbackRequest` / `CalculationRequest`: Customer inquiry forms

### Frontend (Angular 19)
- **Module-based architecture** with lazy loading
- **Components are NOT standalone** by default (`standalone: false` in angular.json)
- **Routing**: App-level routing with catalog/service sub-routes
- **State Management**: Service-based with RxJS
- **HTTP**: All API calls through environment-configured baseUrl

**Component Organization**:
- `components/catalogs/` - Product catalog pages (13 categories)
- `components/services-pages/` - Printing method info pages (DTF, UV, Silky, etc.)
- `components/elements/` - Reusable UI components (header, footer, product, etc.)
- `shared/services/` - Cross-component services (catalog, SEO, contacts)
- `shared/directives/` - Custom directives (phone-mask, etc.)

### SCSS Architecture
- **Global styles**: `src/assets/styles.scss` imports variables, mixins, reset
- **Variables**: `src/assets/_variables.scss` - CSS custom properties for colors, spacing
- **Mixins**: `src/assets/_mixins.scss` - Reusable SCSS patterns (section-title, buttons, etc.)
- **Forms**: `src/assets/_forms.scss` - Form styling utilities
- **Component styles**: Each component has its own `.scss` file

**Important**: Place regular CSS properties BEFORE `@include` statements that contain nested rules or media queries to avoid SCSS deprecation warnings.

## API Endpoints

### Products & Catalogs
- `GET /api/catalogs/{category}` - Get products by category
  - Categories: clothes, bags, headwears, for-home, dishes, office, gifts, package, for-sports, sport-forms, award-products, discount, uniforms
- `GET /api/catalogs/{category}/:id` - Get single product by ID
- `GET /api/categories` - Get all categories with product counts

### Home Page Data
- `GET /api/home/catalogs` - Featured catalog sections for homepage
- `GET /api/home/instagram` - Instagram feed images

### Other
- `GET /api/faq` - FAQ questions and answers
- `POST /api/requests/callback` - Submit callback request
- `POST /api/requests/calculation` - Submit calculation request

### Swagger Documentation
Available at `http://localhost:3001/api-docs` when backend is running.

## Key Conventions

### Backend
- **ES Modules**: Always use `import`/`export`, not `require()`
- **Prisma imports**: Use default import from `@prisma/client`
  ```javascript
  import { PrismaClient } from '@prisma/client';
  ```
- **Response format**: All API responses follow `{ success: boolean, data: any }` structure
- **Error handling**: Controllers wrap async operations in try-catch, return appropriate HTTP status codes
- **CORS**: Frontend URL is environment-configured (`FRONTEND_URL` in .env)

### Frontend (Angular)
- **Components**: Use module-based, not standalone (default in angular.json)
- **Routing**: When adding new routes, register in `app-routing.module.ts`
- **Module imports**: Import `RouterLink` via `AppRoutingModule`, not in individual components
- **Environment config**: API URL in `src/environments/environment.ts`
- **Services**: Use environment.apiUrl for base URL, return Observables
- **SEO**: Use `SeoService` to set meta tags for pages

### Product Catalog Pattern
All 13 catalog pages follow a consistent template structure:
1. Component receives category name as input or from route
2. Loads products via `CatalogService.getProductsByCategory()`
3. Displays in grid layout with filters
4. Product detail route: `/catalogs/{category}/:id`

When adding new catalogs:
1. Create component in `components/catalogs/`
2. Add route to `app-routing.module.ts`
3. Ensure backend route exists in `catalogs.routes.js`
4. Add category icon to `assets/home-catalogs/`

### SCSS Usage
- Use CSS custom properties from `_variables.scss` (e.g., `var(--primary-color)`)
- Import mixins in component styles: `@import 'src/assets/mixins';`
- Use mixins for consistency: `@include section-title;`, `@include primary-button;`
- Component styles are encapsulated (ViewEncapsulation.Emulated by default)

## Common Tasks

### Adding a New Product Category
1. Backend: Add category to schema.prisma enum if needed
2. Backend: Add route in `src/routes/catalogs.routes.js`
3. Backend: Add controller logic in `src/controllers/products.controller.js`
4. Frontend: Create component in `components/catalogs/`
5. Frontend: Add route to `app-routing.module.ts`
6. Frontend: Add navigation link to main catalog page

### Adding a New API Endpoint
1. Define route in appropriate routes file (e.g., `src/routes/*.routes.js`)
2. Create/update controller in `src/controllers/`
3. Create/update service in `src/services/` if database interaction needed
4. Add Swagger documentation comments above route handler
5. Test endpoint at `http://localhost:3001/api/...`

### Running Database Migrations
```bash
cd nazarprint-back
npx prisma migrate dev --name description_of_changes
npx prisma generate    # Regenerate Prisma Client after schema changes
```

## Development Standards

### Code Quality Principles
As a senior developer working on this project, follow these standards:

**Architecture & Design**
- Think before coding: Understand the full scope and ask clarifying questions for complex features
- Design scalable solutions that work within the existing architecture patterns
- Consider edge cases and error scenarios upfront
- Follow existing patterns (e.g., catalog component structure, API response format)

**Code Quality**
- Write clean, readable code with meaningful variable/function names
- Keep functions focused and single-purpose
- Remove dead code and unused imports immediately
- Use TypeScript types properly - avoid `any`, define interfaces for data structures
- Handle errors gracefully with user-friendly messages

**Angular Best Practices**
- Follow the module-based architecture (non-standalone components)
- Use OnPush change detection where possible for performance
- Unsubscribe from observables in ngOnDestroy (use takeUntil pattern)
- Keep components focused on presentation, logic in services
- Use Angular lifecycle hooks appropriately

**SCSS Best Practices**
- Use CSS custom properties from `_variables.scss` for consistency
- Place regular properties BEFORE @include statements
- Avoid deep nesting (max 3 levels)
- Use mixins for reusable patterns
- Keep component styles scoped and minimal

**Backend Best Practices**
- Validate all inputs before processing
- Use Prisma transactions for multi-step database operations
- Return consistent response formats
- Add proper error handling with meaningful status codes
- Document API endpoints with Swagger comments

**Before Starting Complex Tasks**
Ask questions about:
- Expected behavior for edge cases
- UI/UX requirements and design intent
- Performance considerations
- Integration points with other features
- Data validation requirements

**Testing Mindset**
- Test in browser after each change
- Verify both happy path and error scenarios
- Check responsive design on different screen sizes
- Test API endpoints with various inputs
- Validate form submissions and error messages

## Known Issues (from TASKS.md)

### Critical Issues to Check
1. **Prisma Client Import**: If `PrismaClient` import fails, run `npx prisma generate`
2. **Footer Component**: Remove `imports: [RouterLink]` if component has `standalone: false`
3. **Missing Module**: Ensure `ServicesPageModule` is imported in `AppModule` for `app-formos` selector

### SCSS Warnings
Several catalog components (accessories, office, souvenirs, sport) have `margin-top` declarations after `@include` statements with nested rules. Move margin declarations before the includes to avoid deprecation warnings.

## Testing

- **Backend**: No test suite currently configured
- **Frontend**: Angular test setup exists but tests need to be written
  - Run with `npm test` in nazarprint-front/
  - Single test: `ng test --include='**/component-name.spec.ts'`

## Deployment

- Backend deployment requires PostgreSQL database
- Frontend builds to `dist/nazarprint/` directory
- Environment variables must be configured for production
- See `.github/workflows/` for CI/CD pipeline configuration

## Future Enhancements

### Playwright E2E Testing (Planned)
After completing current frontend stabilization tasks, Playwright will be configured for E2E testing:
- Test user flows (browsing catalogs, viewing products, form submissions)
- Visual regression testing
- Cross-browser compatibility testing
- Integration with CI/CD pipeline

### Database Migration (Planned)
Currently using Prisma with mock/seed data. Future plans include:
- Full PostgreSQL integration with production data
- Admin panel for content management
- Image upload and storage system
- Authentication and user management
