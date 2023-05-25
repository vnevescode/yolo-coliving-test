import {
    APIGatewayEvent,
    Handler,
    Context,
    APIGatewayProxyResult,
  } from "aws-lambda";
  import middify from "../core/middify";
  import formatJSONResponse from "../core/formatJsonResponse";
  import propertyService from "../database/services";
  
  export const handler: Handler = middify(
    async (
      event: APIGatewayEvent,
      context: Context
    ): Promise<APIGatewayProxyResult> => {
      const propertyId: string = event.pathParameters.propertyId;
      try {
        const posts = await propertyService.getProperty(propertyId);
  
        return formatJSONResponse(200, posts);
      } catch (err) {
        return formatJSONResponse(400, err);
      }
    }
  );