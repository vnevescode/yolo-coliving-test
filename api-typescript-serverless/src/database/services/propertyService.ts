import { DocumentClient } from "aws-sdk/clients/dynamodb";
import Property from "../../models/Property"

class PropertyService {
  constructor(
    private readonly docClient: DocumentClient,
    private readonly tableName: string
  ) {}

  async getAllProperties(): Promise<Property[]> {
    const result = await this.docClient
      .scan({
        TableName: this.tableName,
      })
      .promise();

    return result.Items as Property[];
  }

  async getProperty(propertyId: string): Promise<Property> {
    const result = await this.docClient
      .get({
        TableName: this.tableName,
        Key: { propertyId },
      })
      .promise();

    return result.Item as Property;
  }

  async createProperty(property: Property): Promise<Property> {
    await this.docClient
      .put({
        TableName: this.tableName,
        Item: property,
      })
      .promise();

    return property;
  }

  async updateProperty(propertyId: string, partialProperty: Partial<Property>): Promise<Property> {
    const updated = await this.docClient
      .update({
        TableName: this.tableName,
        Key: { propertyId },
        UpdateExpression:
          "set #propertyName = :propertyName, address = :address, city = :city, federalState = :federalState, zip_code = :zip_code",
        ExpressionAttributeNames: {
          "#propertyName": "propertyName",
        },
        ExpressionAttributeValues: {
          ":propertyName": partialProperty.propertyName,
          ":address": partialProperty.address,
          ":city": partialProperty.city,
          ":federalState": partialProperty.federalState,
          ":zip_code": partialProperty.zip_code,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return updated.Attributes as Property;
  }

  async deleteProperty(propertyId: string) {
    return this.docClient
      .delete({
        TableName: this.tableName,
        Key: { propertyId },
      })
      .promise();
  }
}

export default PropertyService;