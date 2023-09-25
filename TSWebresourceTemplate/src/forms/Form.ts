export class CalcRequestForm {
    static async onLoad(executionContext: Xrm.Events.EventContext): Promise<void> {
        const formContext = executionContext.getFormContext();
        formContext.getAttribute("attribute_logical_name").addOnChange(this.onAttributeChange);
    }

    static async onAttributeChange(executionContext: Xrm.Events.EventContext): Promise<void> {
        const formContext = executionContext.getFormContext();
        console.log(formContext);
    }
}
