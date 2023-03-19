declare global {
    interface Window {
        cloudsponge: any;
    }
}
declare const _default: import("vue").DefineComponent<{
    apiKey: {
        type: StringConstructor;
        default: string;
    };
    afterSubmit: {
        type: FunctionConstructor;
        default: () => void;
    };
    config: {
        type: ObjectConstructor;
        default: () => void;
    };
}, unknown, {
    isLoading: boolean;
}, {}, {
    afterInit(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    apiKey: {
        type: StringConstructor;
        default: string;
    };
    afterSubmit: {
        type: FunctionConstructor;
        default: () => void;
    };
    config: {
        type: ObjectConstructor;
        default: () => void;
    };
}>>, {
    apiKey: string;
    afterSubmit: Function;
    config: Record<string, any>;
}>;
export default _default;
