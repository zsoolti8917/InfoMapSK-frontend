# InfoMapSK

InfoMapSK is a full-stack web application developed as a master's thesis project for [Your University Name]. This project aims to visualize demographic data from Slovakia using the MERN (MongoDB, Express.js, React, Node.js) stack, providing an interactive and informative platform for exploring various demographic indicators across different administrative levels of Slovakia.

## Project Documentation

For detailed information about the project's development, methodology, and implementation, please refer to the master's thesis document: [https://opac.crzp.sk/?fn=detailBiblioFormChildCF67L&sid=CAE3E57F1FDC62BA2EBFD9E8C24F&seo=CRZP-detail-kniha](https://opac.crzp.sk/?fn=detailBiblioFormChildCF67L&sid=CAE3E57F1FDC62BA2EBFD9E8C24F&seo=CRZP-detail-kniha)

## Live Demo

Frontend: [InfomapSK](https://infomap.sk)

## Features

- Interactive map of Slovakia with region, district, and city/village selection
- Visualization of demographic data using various chart types
- Data categories include Population, Economic Activity, Agriculture, and Organizational Statistics
- Search functionality for finding specific locations
- Responsive design for various devices
- Accessibility features following WCAG 2.1 guidelines
- Contact form for user feedback and inquiries

## Technology Stack

### Frontend
- React.js
- TailwindCSS for styling
- React Router for navigation
- Recharts for data visualization
- React-leaflet for interactive mapping
- Formik and Yup for form handling and validation

### Backend
- Node.js with Express.js
- MongoDB for data caching
- Mongoose for database modeling
- Nodemailer for email functionality

### Data Sources
- Statistical Office of the Slovak Republic API
- Geoportal of Slovakia for geospatial data

## Repository Links

- Frontend: [https://github.com/zsoolti8917/InfoMapSK-frontend](https://github.com/zsoolti8917/InfoMapSK-frontend)
- Backend: [https://github.com/zsoolti8917/InfoMapSK-backend](https://github.com/zsoolti8917/InfoMapSK-backend)

## Setup and Installation

1. Clone both frontend and backend repositories
2. Install dependencies for both frontend and backend
3. Set up environment variables
4. Run the development server

Detailed instructions for setup can be found in the project documentation.

## API Endpoints

The backend provides several API endpoints for:
- Fetching geospatial data
- Retrieving demographic data for different administrative levels
- Handling email submissions
- Supporting the search functionality

## Deployment

- Frontend: Deployed on Netlify
- Backend: Deployed on Heroku

## Contributing

Contributions to InfoMapSK are welcome.

## Author

This project was developed by Zsolt Varjú.

- GitHub: [@zsoolti8917](https://github.com/zsoolti8917)
- LinkedIn: [Zsolt Varjú](https://www.linkedin.com/in/zsoltvarju/)
- Website: [Portfolio](https://www.zsoltvarju.com)

For any inquiries or support, please contact: zsolt.varju.rl@gmail.com

## Acknowledgments

- Statistical Office of the Slovak Republic for providing open data
- Geoportal of Slovakia for geospatial information
- Univerzita Konštantina Filozofa v Nitre for supporting this master's thesis project
