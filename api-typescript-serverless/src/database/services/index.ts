import createDynamoDBClient from "../db";
import PropertyService from "./propertyService";

const TableName = 'PropertyTable';

const propertyService = new PropertyService(createDynamoDBClient(), TableName);

export default propertyService;