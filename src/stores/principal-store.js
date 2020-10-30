import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _token;

class Store extends EventEmitter {
    getToken() {
        return _token;
    }

    addEventListener(callback) {
        this.on(CHANGE, callback);
    }

    removeEventListener(callback) {
        this.removeListener(CHANGE, callback);
    }

    emitChange() {
        this.emit(CHANGE);
    }
}

const store = new Store();

dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.REQUEST_TOKEN:
            _token = action.payload;
            store.emitChange();
            break;

        default:
            break;
    }
});

export default store;
