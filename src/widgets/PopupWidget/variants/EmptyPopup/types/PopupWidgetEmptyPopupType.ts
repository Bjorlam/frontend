import type { Component } from "vue";

type ListenerFn = (...args: any[]) => void;

export interface EmptyPopupConfig {
    component: Component;
    props?: Record<string, any>;
    listeners?: Record<string, ListenerFn>;
}
