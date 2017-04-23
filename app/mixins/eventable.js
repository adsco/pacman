/**
 * Base class for each class that supports events
 */
export default class Eventable {
    /**
     * Constructor
     */
    constructor() {
        if (this._eventsCallbacks !== undefined) {
            throw new Error('Eventable mixin uses property "_eventsCallbacks", please free it from use');
        }

        this._eventsCallbacks = {};
    }
    
    /**
     * Add event listener on event
     * 
     * @param {String} eventName - name of event to listern
     * @param {Function} callback - callback to be invoked on event trigger
     */
    addEventListener(eventName, callback) {
        if (!this._eventsCallbacks.hasOwnProperty(eventName)) {
            this._eventsCallbacks[eventName] = {
                callbacks: []
            }
        }
        
        this._eventsCallbacks[eventName].callbacks.push(callback);
    }
    
    /**
     * Trigger event
     * 
     * @param {String} eventName - name of event to trigger
     */
    triggerEvent(eventName) {
        var callbacks = this._eventsCallbacks[eventName] ? this._eventsCallbacks[eventName].callbacks : [];
        
        for (let i = 0, len = callbacks.length; i < len; i++) {
            callbacks[i](this);
        }
    }
}