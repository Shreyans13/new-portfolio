import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import {State, NavigationItem} from "@/types/state"
import { darkTheme } from "naive-ui";

// export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  strict: true,
  state: {
        theme: darkTheme,
        navigation: [{
            text: "Order",
            to: "/",
            icon: "fas fa-shopping-bag",
            meta: {
                showToolbar: true,
                showBottomNav: true
            },
        }],
    },
    getters: {
      topNavigation: (state : State) : ReadonlyArray<NavigationItem> => state.navigation.filter((link : NavigationItem) : Boolean => link.meta.showToolbar === true),
      bottomNavigation: (state: State): ReadonlyArray<NavigationItem> => state.navigation.filter((link: NavigationItem): Boolean => link.meta.showBottomNav === true),
    },
    mutations: {},
	actions: {},
	modules: {},
})

// define your own `useStore` composition function
// export function useStore () {
//   return baseUseStore(key)
// }