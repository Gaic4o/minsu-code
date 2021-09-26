import { createParamDecorator, ExecutionContext } from "@nestjs/common";


// user 에서 req 을 막아 테스트 편리함. 
export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user; 
    }
)