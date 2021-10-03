import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { State, NavigationItem } from "@/types/state"
import { darkTheme } from "naive-ui";

// export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  strict: true,
  state: {
    theme: darkTheme,
    currentTheme: true,
    customTheme: {
        colors: {
            neonGreen : "#39FF14"
        }
    },
    navigation: [{
        text: "Home",
        to: "/",
        icon: "fas fa-shopping-bag",
        meta: {
            showToolbar: true,
            showBottomNav: true
        },
    },
    {
        text: "About",
        to: "/about",
        icon: "fas fa-shopping-bag",
        meta: {
            showToolbar: true,
            showBottomNav: true
        },
      }
    ],
    },
    getters: {
      topNavigation: (state : State) : ReadonlyArray<NavigationItem> => state.navigation.filter((link : NavigationItem) : Boolean => link.meta.showToolbar === true),
      bottomNavigation: (state: State): ReadonlyArray<NavigationItem> => state.navigation.filter((link: NavigationItem): Boolean => link.meta.showBottomNav === true),
      customColors: (state: State) => state.customTheme.colors
    },
  mutations: {
    toggleTheme(state: State) {
      state.currentTheme = state.currentTheme ? false : true;
      }
    },
  actions: {
    changeTheme(context) {
      context.commit("toggleTheme")
    }
  },
	modules: {},
})

// define your own `useStore` composition function
// export function useStore () {
//   return baseUseStore(key)
// }