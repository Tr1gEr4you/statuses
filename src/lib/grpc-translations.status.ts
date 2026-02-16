import { GrpcStatus } from '../enums';

export const grpcStatusTranslations = {
    [GrpcStatus.OK]: 'Успешно',
    [GrpcStatus.CANCELLED]: 'Отменено',
    [GrpcStatus.UNKNOWN]: 'Неизвестная ошибка',
    [GrpcStatus.INVALID_ARGUMENT]: 'Некорректный запрос',
    [GrpcStatus.DEADLINE_EXCEEDED]: 'Превышено время ожидания',
    [GrpcStatus.NOT_FOUND]: 'Не найдено',
    [GrpcStatus.ALREADY_EXISTS]: 'Уже существует',
    [GrpcStatus.PERMISSION_DENIED]: 'Доступ запрещен',
    [GrpcStatus.RESOURCE_EXHAUSTED]: 'Недостаточно ресурсов',
    [GrpcStatus.FAILED_PRECONDITION]: 'Недействительно',
    [GrpcStatus.ABORTED]: 'Прервано',
    [GrpcStatus.OUT_OF_RANGE]: 'Значение вне диапазона',
    [GrpcStatus.NOT_IMPLEMENTED]: 'Не реализовано',
    [GrpcStatus.INTERNAL]: 'Внутренняя ошибка сервера',
    [GrpcStatus.UNAVAILABLE]: 'Сервис недоступен',
    [GrpcStatus.DATA_LOSS]: 'Потеря данных',
    [GrpcStatus.UNAUTHENTICATED]: 'Не авторизован',
} as const;
