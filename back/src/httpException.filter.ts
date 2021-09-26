import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from "express";



@Catch(HttpException) 
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus(); // 상태 400 등 
        const err = exception.getResponse() as  // 에러 내용이 들어 있습니다.
        | { message: any; statusCode: number }
        | { error: string; statusCode: 400; message: string[] }; // class validator 에러 메시지.

        
        if (typeof err !== 'string' && err.statusCode === 400) {
            // class validator 가 발생시킨 에러. 
            return response.status(status).json({
                success: false,
                code: status,
                data: err.message,
            });
        }


        // 내가 발생시킨 에러. 
        response.status(status).json({
            success: false,
            code: status,
            data: err.message,
        })
    }
}