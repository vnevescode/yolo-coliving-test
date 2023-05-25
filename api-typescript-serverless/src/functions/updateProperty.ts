import {
    APIGatewayEvent,
    Handler,
    Context,
    APIGatewayProxyResult,
  } from "aws-lambda";
  import middify from "../core/middify";
  import formatJSONResponse from "../core/formatJsonResponse";
  import propertyIdService from "../database/services";
  import UpdateProperty from "../dtos/updatePropertyDto";
  
  export const handler: Handler = middify(
    async (
      event: APIGatewayEvent & UpdateProperty,
      context: Context
    ): Promise<APIGatewayProxyResult> => {
      const propertyId: string = event.pathParameters.propertyId;
      const { body } = event;
      try {
        const posts = await propertyIdService.updateProperty(propertyId, body);
  
        return formatJSONResponse(200, posts);
      } catch (err) {
        return formatJSONResponse(400, err);
      }
    }
  );