/**
 * Enable / disable browser scrolling
 */


export default {

    disableBodyScroll(){
        document.body.setAttribute("style", "overflow:hidden");
    },

    enableBodyScroll(){
        document.body.removeAttribute("style");
    }

}
