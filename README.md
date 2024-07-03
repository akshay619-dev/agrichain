### Project Name : Agrichain Assignment

### Overview

Implement the code for a supermarket checkout process that calculates the total
price of items added in the cart by the customer. In our store, we’ll use individual
letters of the alphabet (A, B, C, and so on) to represent items. Products can be
purchased at their individual pricing or at a discounted price when purchased in
groups as listed below: For example, item ‘A’ might cost 50 cents individually, but
this week we have a special offer: buy three ‘A’s and they’ll cost you $1.30. Product
pricing for this week is as below:
         
| Item   | Unit Price    | Special Price   |
| ------ |:-------------:| ---------------:|
| A      | 50            | 3 for 130       |
| B      | 30            | 2 for 45        |
| C      | 20            |                 |
| D      | 15            |                 |


Our checkout accepts items in any order, so that if we scan product B, then product
A, and then another product B, we’ll recognize the two B’s and price them at a
discounted price of Rs 45 instead of individual pricing of Rs 30, which brings the
Total order pricing to Rs 95.

Expected output are as follows:

Examples:

| INPUT  | OUTPUT        |
| ------ |:-------------:|
| ""     | 0             |
| "A"    | 50            |
| "AB"   | 80            |
| "CDBA" | 115           |


Guidelines for implementing this challenge : 
1. Use Python3 to solve the problem.
2. Apply OOPs principles
3. Add Readme on how to run/setup
4. Added Bonus - Tests and dockerisation.




### Folder Structure : 📂


```shell
backend/               # Backend application directory
  |-- Dockerfile       # Dockerfile for backend service
  |-- checkout/        # Django app for users management
  |-- backend/         # Django project settings and configurations
  |-- manage.py        # Django management script
  |-- requirements.txt # Python dependencies

frontend/              # Frontend application directory
  |-- Dockerfile       # Dockerfile for frontend service
  |-- public/          # Public assets
  |-- src/             # Source code
  |-- package.json     # Node.js dependencies

docker-compose.yml    # Docker Compose configuration file

README.md              # This file

```

### Setup Instructions

### Prerequisites
Docker and Docker Compose installed locally
Node.js and npm (for frontend development)

### Backend Setup

Clone the repository:

```shell
git clone https://github.com/akshay619-dev/agrichain.git
cd agrichain
```

Build and run the Docker container:

```shell
docker-compose up --build -d
```

### OR Setup Manually

```shell
cd backend
pip install -r requirements.txt
```
### Run the application 
```shell
python manage.py runserver
```

### Access the backend API at http://localhost:8000.

### Frontend Setup

Navigate to the frontend directory:

```shell
cd ../frontend
```
## Install dependencies:

```shell
npm install
```
## Run Frontend as dev environemt

```shell
npm run dev
```

### Access the frontend at http://localhost:5173.

## Build the frontend application:

```shell
npm run build
```

### Tech Stack Overview

### Backend
- **Django**: Web framework for building the RESTful API.
- **Django REST Framework**: Toolkit for creating Web APIs.

### Frontend
- **React**: Library for building the user interface.
- **TypeScript**: Superset of JavaScript for type safety.
- **Tailwind CSS**: Utility-first CSS framework and Components.
- **Vite**: Build tool for bundling and serving the frontend.
- **Axios**: HTTP client for making API requests.

### Deployment and Infrastructure
- **Docker**: Container platform for application development and deployment.
- **Docker Compose**: Tool for managing multi-container applications.






