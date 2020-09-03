import Vue, { VueConstructor } from 'vue';

declare module 'vue/types/vue' {

    interface Vue {
        $apiClient: any;
        $eventBus: any;
        $loading: any;
    }

    interface VueConstructor {
        $apiClient: any;
        $eventBus: any;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        $apiClient?: any;
        $eventBus?: any;
    }
}