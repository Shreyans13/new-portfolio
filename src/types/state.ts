import { BuiltInGlobalTheme } from "naive-ui/lib/themes/interface";

type to = "/about" | "/";

export interface NavigationItem {
    text: String,
    to: to,
    icon: String,
    meta: {
        showToolbar: Boolean,
        showBottomNav: Boolean
    },
} 

export interface State {
    navigation: ReadonlyArray<NavigationItem>;
    theme: BuiltInGlobalTheme;
    currentTheme: Boolean;
    customTheme: {
        colors: {
            neonGreen : String
        }
    }
}

