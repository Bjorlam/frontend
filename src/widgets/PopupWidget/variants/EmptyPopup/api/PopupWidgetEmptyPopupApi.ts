import { BasePopup } from "../../../types/PopupWidgetBaseType";
import { getPopup } from "./PopupWidgetEmptyPopupInstance";

export class EmptyPopup extends BasePopup<"empty"> {
    show() {
        const instance = getPopup("empty");
        if (!instance) throw new Error("EmptyPopup component not registered");
        instance.open(this.config);
    }
}
