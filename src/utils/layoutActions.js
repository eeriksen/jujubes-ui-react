
let subscribers = {};

let state = {
    navActive: false,
    subBarActive: false
};

export default {

    /**
     * Toggle nav/sidebar
     */
    toggleNav(){
        state.navActive = !state.navActive;
        state.subBarActive = false;
        this._broadcastToSubscribers();
    },

    /**
     * Toggle sub bar visiblity
     */
    toggleSubBar(){
        state.subBarActive = !state.subBarActive;
        this._broadcastToSubscribers();
    },

    /**
     * Subscribe to state change
     * @param callback
     */
    subscribe(callback){
        const subscriptionId = Math.round(Math.random() * 10000);
        subscribers[subscriptionId] = callback;
    },

    /**
     * Unsubscribe
     * @param subscriptionId
     */
    unsubscribe(subscriptionId){
        delete subscribers[subscriptionId];
    },


    /**
     * Broadcast state to subscribers
     * @private
     */
    _broadcastToSubscribers(){
        for(let key in subscribers){
            subscribers[key](state);
        }
    }
}
