import router from "@/router";
import { NavigationItem } from "@/types/state";

const customNavigator = {
    created: function () {
        console.log("MyMixin.created()");
    },
    mounted: function () {
        console.log("MyMixin.mounted()");
    },
    methods: {
        mixinTest: function (text:string) : void {
            console.log("mixin test: " + text);
        },
        handleBack: function() {
            console.log("backPressed in Header");
        },
        navigate: function(link: NavigationItem) {
           router.push({ path: link.to });
        }
    }
};

export default customNavigator;
