import { HttpStatus } from '../enums/http-status.enum';
import { RpcStatus } from '../enums/rps-status.enum';

export const rpcToHttpStatus = {
    [RpcStatus.OK]: HttpStatus.OK,
    [RpcStatus.CANCELLED]: 499,
    [RpcStatus.UNKNOWN]: HttpStatus.INTERNAL_SERVER_ERROR,
    [RpcStatus.INVALID_ARGUMENT]: HttpStatus.BAD_REQUEST,
    [RpcStatus.DEADLINE_EXCEEDED]: HttpStatus.GATEWAY_TIMEOUT,
    [RpcStatus.NOT_FOUND]: HttpStatus.NOT_FOUND,
    [RpcStatus.ALREADY_EXISTS]: HttpStatus.CONFLICT,
    [RpcStatus.PERMISSION_DENIED]: HttpStatus.FORBIDDEN,
    [RpcStatus.RESOURCE_EXHAUSTED]: HttpStatus.TOO_MANY_REQUESTS,
    [RpcStatus.FAILED_PRECONDITION]: HttpStatus.BAD_REQUEST,
    [RpcStatus.ABORTED]: HttpStatus.CONFLICT,
    [RpcStatus.OUT_OF_RANGE]: HttpStatus.BAD_REQUEST,
    [RpcStatus.NOT_IMPLEMENTED]: HttpStatus.NOT_IMPLEMENTED,
    [RpcStatus.INTERNAL]: HttpStatus.INTERNAL_SERVER_ERROR,
    [RpcStatus.UNAVAILABLE]: HttpStatus.SERVICE_UNAVAILABLE,
    [RpcStatus.DATA_LOSS]: HttpStatus.INTERNAL_SERVER_ERROR,
    [RpcStatus.UNAUTHENTICATED]: HttpStatus.UNAUTHORIZED,
} as const;
