
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { State, NavigationItem } from "@/types/state"
import { darkTheme } from "naive-ui";


export const store = createStore<State>({
  strict: true,
  state: {
    theme: darkTheme,
    darkTheme: true,
    customTheme: {
        colors: {
          neonGreen : "#39FF14",
          black : "#2d2f33"
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
      state.darkTheme = state.
        darkTheme ? false : true;
      }
    },
  actions: {
    changeTheme(context) {
      context.commit("toggleTheme")
    }
  },
	modules: {},
})
