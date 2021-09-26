import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

// 이 미들웨어 자체는 라우터 보다 먼저 실행.
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger('HTTP');

    use(request: Request, response: Response, next: NextFunction): void {
        // 라우터 시작 할 떄 기록. 
        const { ip, method, originalUrl } = request;
        const userAgent = request.get('user-agent') || '';
        // 라우터 끝날 떄 기록. 
        response.on('finish', () => {
            const { statusCode } = response;
            const contentLength = response.get('content-length');
            this.logger.log(`${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
        );
        });

        next();
    }
}