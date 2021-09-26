import { createParamDecorator, ExecutionContext } from "@nestjs/common";


// @Token() token 이런 식으로 사용 할 수 있습니다.  
export const Token = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const response = ctx.switchToHttp().getResponse();
        return response.locals.jwt;
    },
);
// @Token() token 
