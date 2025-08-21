export interface RouterDetailsType {
    scheduleId: number;
}

export function createRouterRoutesType(scheduleId: number): RouterDetailsType {
    return { scheduleId };
}

export function toRouteParams(
    params: RouterDetailsType
): Record<string, string> {
    return { sceduleId: String(params.scheduleId) };
}

export function fromRouteParams(
    params: Record<string, string | string[] | undefined>
): RouterDetailsType {
    return {
        scheduleId: Number(params.scheduleId),
    };
}
