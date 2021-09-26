import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";


// AOP 역할.
// 관심사를 가로로

// A -> B -> C -> D 
// A -> C -> D 
// A -> E -> F -> D -> G 
// Z -> A -> X -> D 
// 세로로 나오는 미들웨어를 제거 할 수 있지 않을까 ? 인터셉터 역할.
// 컨트롤러 실행 전 실행 후 이렇게 해서 특정 동작을 넣어 줄 수 있습니다.
// 이 컨트롤러 모두에서 undefined 면 모두다 null 로 return 됩니다.
// @UseInterceptors(UndefinedToNullInterceptor)

// 나머지 B C E F D 같은 것들은 컨트롤러에 넣어주면 됩니다.
// A D 는 인터셉터. AOP 역할.

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>, 
    ): Observable<any> | Promise<Observable<any>> {
        // 전 부분 
        return next
        .handle()
        .pipe(map((data) => (data === undefined ? null : data)));
    }
}

// data === user 
// 에러가 난 경우, exception filter 
// {data : user code: SUCESSS} 
// Spring 개념을 Depend Injection, AOP 이런 것들을 알면 엉청 편리함.
