import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetVenue = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.venue.id;
  },
);