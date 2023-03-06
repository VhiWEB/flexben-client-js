export const storeDataManagement = () => {
    const store: Record<string, any> = {}

    const Setter = <T>(name: string) => {
        return (value: T): void => {
            store[name] = value
        }
    }

    const Getter = <T>(name: string, defaultVal?: T) => {
        return (): T => {
            return store[name] ?? defaultVal
        }
    }

    return ({
        // initialinze
        getAuthToken: Getter<string>('token'),
        setAuthToken: Setter<string>('token'),

        getClientId: Getter<string>('clientId'),
        setClientId: Setter<string>('clientId'),

        getClientSecret: Getter<string>('clientSecret'),
        setClientSecret: Setter<string>('clientSecret'),

        getGrantType: Getter<string>('grantType'),
        setGrantType: Setter<string>('grantType'),

        getApiKey: Getter<string>('apiKey'),
        setApiKey: Setter<string>('apiKey'),
    })
}
