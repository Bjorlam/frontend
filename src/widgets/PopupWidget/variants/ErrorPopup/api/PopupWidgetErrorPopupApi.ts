import { BasePopup } from "../../../types/PopupWidgetBaseType";
import { getPopup } from "./PopupWidgetErrorPopupInstance";

export class ErrorPopup extends BasePopup<"error"> {
    show() {
        const instance = getPopup("error");
        if (!instance) throw new Error("ErrorPopup component not registered");
        instance.open(this.config);
    }
}
