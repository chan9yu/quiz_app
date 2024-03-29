import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { categoryReducer, categorySaga } from './category';
import { quizReducer, quizSaga } from './quiz';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
	category: categoryReducer,
	quiz: quizReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(function* () {
	yield all([fork(categorySaga), fork(quizSaga)]);
});
