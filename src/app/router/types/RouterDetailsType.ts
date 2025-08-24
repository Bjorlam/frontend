export interface RouterDetailsType {
    scheduleId: number;
    person: number;
}

export function createRouterRoutesType(
    scheduleId: number,
    person: number
): RouterDetailsType {
    return { scheduleId, person };
}

export function toRouteParams(
    params: RouterDetailsType
): Record<string, string> {
    return {
        sceduleId: String(params.scheduleId),
        person: String(params.person),
    };
}

export function fromRouteParams(
    params: Record<string, string | string[] | undefined>
): RouterDetailsType {
    return createRouterRoutesType(
        Number(params.scheduleId),
        Number(params.person)
    );
}
