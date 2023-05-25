import {
    APIGatewayEvent,
    Handler,
    Context,
    APIGatewayProxyResult,
  } from "aws-lambda";
  import * as uuid from "uuid";
  import middify from "../core/middify";
  import formatJSONResponse from "../core/formatJsonResponse";
  import propertyService from "../database/services";
  import CreateProperty from "../dtos/createPropertyDto";
  
  export const handler: Handler = middify(
    async (
      event: APIGatewayEvent & CreateProperty,
      context: Context
    ): Promise<APIGatewayProxyResult> => {
      const { propertyName, owner, address, city , federalState,zip_code } = event.body;
  
      try {
        const propertyId: string = uuid.v4();
        const post = await propertyService.createProperty({
          propertyId,
          propertyName,
          owner,
          address,
          city,
          federalState,
          zip_code,
          createdAt: new Date().toISOString(),
        });
  
        return formatJSONResponse(201, post);
      } catch (err) {
        return formatJSONResponse(400, err);
      }
    }
  );