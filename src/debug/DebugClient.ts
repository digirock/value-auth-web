import ApiClient, {ApiClientOptions} from "@/client/ApiClient";
import {IRequestOptions} from "typed-rest-client";
import {AccessTokenResult} from "@/client/ApiResult";

export interface DebugClientOptions extends ApiClientOptions {
    authCode: string,
    apiKey: string,
    customerKey: string,
    initializationCallback?: (value: ApiClient) => void
}

export default class DebugClient extends ApiClient {
    protected authCode: string;

    constructor(options: DebugClientOptions) {
        super(options);
        this.authCode = options.authCode;

        if (!this.accessToken) {
            let promise = this.getAccessToken(options.apiKey, options.customerKey);
            if (options.initializationCallback) {
                promise.then(options.initializationCallback);
            }
        }
    }

    async getAccessToken(apiKey: string, customerKey: string) {
        let path = this.apiPathFor(`/v2/${this.authCode}/auth/accesstoken`)
        let options: IRequestOptions = {
            queryParameters: {
                params: {
                    customer_key: customerKey
                }
            }
        }
        return this.defaultRestClient(apiKey).get<AccessTokenResult>(path, options).then(response => {
            this.accessToken = response!.result!.results.access_token;
            this.parseAccessToken();
            return this;
        });
    }
}
