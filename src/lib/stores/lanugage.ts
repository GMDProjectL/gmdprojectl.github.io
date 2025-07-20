import { writable } from "svelte/store";

export const language = writable<string>("en");

export const setLanguage = (lang: string) => {
    language.set(lang);
};