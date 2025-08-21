import { type PopupTypes, BasePopup } from "../types/PopupWidgetBaseType";
import { ErrorPopup } from "../variants/ErrorPopup/api/PopupWidgetErrorPopupApi";

export function createPopup<T extends keyof PopupTypes>(type: T): BasePopup<T> {
    switch (type) {
        case "error":
            return new ErrorPopup() as BasePopup<T>;
    }
    throw new Error("Unknown type");
}
