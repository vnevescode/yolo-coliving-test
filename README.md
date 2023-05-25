# Yolo-coliving-test
This repository has all of my code for the Backend Serverless AWS and the Frontend built with React JS and Styled Components for Yolo Coliving Company. 
The project revolves around a straightforward CRUD (Create, Read, Update, Delete) functionality for properties. It simulates a user login system, enabling users to perform operations on their very own properties. 
By leveraging the power of Serveless AWS for the Backend and the flexibility of React JS and Styled Components for the Frontend, this project offers a seamless and user-friendly experience. 
With intuitive features and a sleek interface, you'll have the tools at your disposal to effortlessly create, view, update, and delete properties. 
Get ready to dive into this project, gain valuable insights, and unleash your creativity. 

For Backend
Remember to do : 
-- Install serveless framework : npm install -g serverless
-- Set Your credencials : npm run sls config credentials --provider aws, --key XXXXXX, --secret XXXXXXXXXXXXXXXXXXX
-- npm install to install dependencies
-- serverless deploy -v [For verbose version]
-- serverless remove [ To remove project ]
See Your project on AWS and acess your endpoints.

For this projects the endpoints provided are:
endpoints:
  POST - https://6f80xdhs4f.execute-api.us-east-1.amazonaws.com/dev/api/v1/property
  GET - https://6f80xdhs4f.execute-api.us-east-1.amazonaws.com/dev/api/v1/property
  GET - https://6f80xdhs4f.execute-api.us-east-1.amazonaws.com/dev/api/v1/property/{propertyId}
  PUT - https://6f80xdhs4f.execute-api.us-east-1.amazonaws.com/dev/api/v1/property/{propertyId}
  DELETE - https://6f80xdhs4f.execute-api.us-east-1.amazonaws.com/dev/api/v1/property/{propertyId}

For Front-end:
-- yarn install
-- yarn dev [ Run the project with Vite ]


![image](https://github.com/vnevescode/yolo-coliving-test/assets/11055113/bc82bd80-f2ba-45ff-8d5f-a17cabfc5401)
