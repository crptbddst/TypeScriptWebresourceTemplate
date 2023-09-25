/* eslint-disable @typescript-eslint/no-unused-vars */
import { ENV_VARIABLES_CONST } from "../constants/envVariables";
import { RequestData } from "../dataModels/dataModel";
import { DataverseService } from "../services/DataverseService";

export class SendRequestRibbon {
    static async sendRequest(primaryControl: Xrm.FormContext) {
        const formContext = primaryControl;
        const service = new DataverseService();
        const envVariable = await service.GetEnvironmentVariableValue(ENV_VARIABLES_CONST.ENV_VARIABLE_1);
        const currentUserId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");

        const requestBody: RequestData = {
            RequestId: "Imaginary GUID",
            CurrentUser: "Imginary User",
        };
        const requestUrl = "microsoft.com/";

        const requestResponse = await service.sendPostRequest(requestBody, requestUrl);
    }
}
