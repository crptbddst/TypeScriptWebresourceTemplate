import { RequestData, RequestResponse } from "../dataModels/dataModel";

export class DataverseService {
    async GetEnvironmentVariableValue(name: string): Promise<string> {
        const results = await Xrm.WebApi.retrieveMultipleRecords(
            "environmentvariabledefinition",
            `?$filter=schemaname eq '${name}'&$select=environmentvariabledefinitionid&$expand=environmentvariabledefinition_environmentvariablevalue($select=value)`
        );

        if (!results || !results.entities || results.entities.length < 1) return null;
        const variable = results.entities[0];

        if (!variable.environmentvariabledefinition_environmentvariablevalue || variable.environmentvariabledefinition_environmentvariablevalue.length < 1) {
            return null;
        }

        return variable.environmentvariabledefinition_environmentvariablevalue[0].value;
    }

    async sendPostRequest(body: RequestData, url: string): Promise<RequestResponse> {
        return new Promise<RequestResponse>((resolve) => {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                },
                body: JSON.stringify(body),
            })
                .then((response: Response) => {
                    if (response.ok && response.body) {
                        response.json().then((responseValue: RequestResponse) => {
                            resolve(responseValue);
                        });
                    } else {
                        resolve(null);
                    }
                })
                .catch(() => {
                    resolve(null);
                });
        });
    }
}
