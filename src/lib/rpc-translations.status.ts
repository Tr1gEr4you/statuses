import { RpcStatus } from '../enums';

export const RPC_STATUS_TRANSLATIONS = {
    [RpcStatus.OK]: 'Успешно',
    [RpcStatus.CANCELLED]: 'Отменено',
    [RpcStatus.UNKNOWN]: 'Неизвестная ошибка',
    [RpcStatus.INVALID_ARGUMENT]: 'Некорректный запрс',
    [RpcStatus.DEADLINE_EXCEEDED]: 'Превышено время ожидания',
    [RpcStatus.NOT_FOUND]: 'Не найдено',
    [RpcStatus.ALREADY_EXISTS]: 'Уже существует',
    [RpcStatus.PERMISSION_DENIED]: 'Доступ запрещен',
    [RpcStatus.RESOURCE_EXHAUSTED]: 'Недостаточно ресурсов',
    [RpcStatus.FAILED_PRECONDITION]: 'Недействительно',
    [RpcStatus.ABORTED]: 'Прервано',
    [RpcStatus.OUT_OF_RANGE]: 'Значение вне диапазона',
    [RpcStatus.NOT_IMPLEMENTED]: 'Не реализовано',
    [RpcStatus.INTERNAL]: 'Внутренняя ошибка сервера',
    [RpcStatus.UNAVAILABLE]: 'Сервис недоступен',
    [RpcStatus.DATA_LOSS]: 'Потеря данных',
    [RpcStatus.UNAUTHENTICATED]: 'Не авторизован',
} as const;
