


# HomelyHub

HomelyHub is a hotel booking and management website developed using the MERN stack (MongoDB, Express.js, React, Node.js). This project was created as part of an internship at Webstack Academy (WSA) in a virtual mode. 

## Features

- **Hotel Management**: Add, update, and manage hotel details.
- **User Authentication**: Secure login and registration using JWT.
- **Image Upload**: Upload and manage images using Cloudinary.
- **Payment Integration**: Stripe payment gateway integration.
- **Email Notifications**: Sending emails via MailTrap.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Payment Gateway**: Stripe
- **Image Hosting**: Cloudinary
- **Email Service**: MailTrap
- **Local Development**: Mongoose Compass

## Project Structure

```plaintext
HomelyHub/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── README.md
└── package.json
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Stripe Account
- Cloudinary Account
- MailTrap Account

### Installation

1. Clone the repository

```bash
git clone https://github.com/DevKrishnasai/wsa-internship-homelyhub
```

2. Navigate to the project directory

```bash
cd homelyhub
```

3. Install dependencies for backend

```bash
cd backend
npm install --legacy-peer-deps
```

4. Install dependencies for frontend

```bash
cd ../frontend
npm install --legacy-peer-deps
```

### Configuration

1. Backend: Create a `.env` file in the `backend` directory and add the following environment variables

```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
```

2. Frontend: Update the API endpoint in `frontend/src/services/api.js` if necessary.

### Running the Application

1. Start the backend server

```bash
cd backend
npm start
```

2. Start the frontend development server

```bash
cd ../frontend
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, feature requests, or improvements.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Webstack Academy (WSA)](https://webstackacademy.com) for the internship opportunity.
- [MERN Stack](https://www.mongodb.com/mern-stack) for the amazing technology stack.
- [Stripe](https://stripe.com) for payment integration.
- [Cloudinary](https://cloudinary.com) for image hosting services.
- [MailTrap](https://mailtrap.io) for email testing.

