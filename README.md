# SupaSend

## Overview
SupaSend is a comprehensive e-commerce and delivery platform designed for businesses and customers in Chuka, Kenya. The platform facilitates seamless ordering, payment processing, and delivery management through an integrated system connecting local businesses with customers.

## Features

### For Businesses
- Easy registration and verification process
- Product management dashboard
- Real-time order notifications
- Payment tracking and withdrawal system
- Delivery dispatch management
- Analytics and reporting

### For Customers
- User-friendly product browsing
- Category-based search
- Shopping cart management
- Multiple payment options (M-Pesa, Bank)
- Order tracking
- Delivery status updates

### For Delivery Personnel
- Simple registration process
- Real-time order notifications
- Route optimization
- Delivery confirmation system
- Earnings tracking

## Technical Stack

### Backend
- Node.js with TypeScript
- Express.js framework
- PostgreSQL database
- TypeORM for database management
- Socket.io for real-time communications
- JWT authentication

### Frontend (Web)
- Angular.js
- Angular Material UI
- NgRx for state management
- Socket.io client
- Google Maps integration

### Mobile App
- Flutter
- Provider/Riverpod for state management
- Hive for local storage
- Firebase Cloud Messaging

## Installation

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v13 or higher)
- Angular CLI
- Flutter SDK
- Docker (optional)

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/your-username/supasend.git

# Navigate to backend directory
cd supasend/backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update environment variables
nano .env

# Run migrations
npm run typeorm migration:run

# Start development server
npm run dev
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start development server
ng serve
```

### Mobile App Setup
```bash
# Navigate to mobile directory
cd ../mobile

# Get Flutter dependencies
flutter pub get

# Run the app
flutter run
```

## Environment Variables

### Backend
```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://username:password@localhost:5432/supasend
JWT_SECRET=your_jwt_secret
MPESA_CONSUMER_KEY=your_mpesa_key
MPESA_CONSUMER_SECRET=your_mpesa_secret
AWS_ACCESS_KEY=your_aws_key
AWS_SECRET_KEY=your_aws_secret
```

### Frontend
```env
API_URL=http://localhost:3000
GOOGLE_MAPS_KEY=your_google_maps_key
```

## API Documentation
API documentation is available at `/api/docs` when running the development server. The documentation is generated using Swagger UI.

## Testing

### Backend Tests
```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run all tests with coverage
npm run test:coverage
```

### Frontend Tests
```bash
# Run unit tests
ng test

# Run end-to-end tests
ng e2e
```

### Mobile Tests
```bash
# Run Flutter tests
flutter test
```

## Deployment

### Backend Deployment
```bash
# Build the application
npm run build

# Start production server
npm start
```

### Frontend Deployment
```bash
# Build for production
ng build --prod

# Deploy to hosting service
npm run deploy
```

### Mobile App Deployment
```bash
# Build Android APK
flutter build apk

# Build iOS IPA
flutter build ios
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Support
For support, email support@supasend.com or join our Slack channel.

## Team
- Earljoe Kadima - Project Manager & Full Stack Developer
- Victor Preston - Backend Developer
- Emmanuel Marshall - Frontend Developer
- Alvin Leli - Backend Developer