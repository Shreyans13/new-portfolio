import { NavigationItem } from "@/types/state";
import { ComponentOptionsMixin } from 'vue'

const customNavigator: ComponentOptionsMixin = {
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
           this.$router.push({ path: link.to });
        }
    }
};

export default customNavigator;
