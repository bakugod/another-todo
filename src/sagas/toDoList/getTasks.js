import http from '../../http';
import { call, put, takeLatest } from 'redux-saga/effects';
import actionCreators from '../../actions/toDoList/GetTasks';

import * as actionTypes from '../../constants/actionTypes';

function * getTasks ({payload}) {
    try {
        let query = {
            params: {
                developer: "name"
            }
        };
        
        if (payload.sort_direction && payload.sort_field) {
            query.params = {...query.params, ...payload};
        }

        if (payload.page) {
            query.params = {...query.params, ...payload};
        }

        let response = yield call(http.get, '/', query);
        yield put(actionCreators.getTasksSuccess(response.data));
    
    } catch (error) {
        yield put(actionCreators.getTasksError(error));
    }
}

export function* fetchTasks () {
    yield takeLatest(actionTypes.GET_TASKS, getTasks);
}