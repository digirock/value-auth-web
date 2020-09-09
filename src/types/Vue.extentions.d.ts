import Vue, {VueConstructor} from 'vue';

declare module 'vue/types/vue' {

    interface Vue {
        $vaApiClient: any;
        $vaEventBus: any;
        $loading: any;
    }

    interface VueConstructor {
        $vaApiClient: any;
        $vaEventBus: any;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        $vaApiClient?: any;
        $vaEventBus?: any;
    }
}