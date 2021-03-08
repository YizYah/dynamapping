import test from 'ava';

import { replaceGlobalValuesInObject } from '../../src/custom/replaceGlobalValuesInObject';


test('returns for session', async t => {
	const obj = {
		testCase: 'hi __session.userName__'
	};
	const sessionObj = {
		userName: 'Filbert'
	}
	const ansObj = {
		ANSWERS: 'answers'
	}
	t.deepEqual(replaceGlobalValuesInObject(obj, sessionObj, ansObj), { testCase: 'hi Filbert' });
});

test('tests replace of "true"', async t => {
	const obj = {
		testCase: '__session.isTrue__'
	};
	const sessionObj = {
		userName: 'Filbert',
		isTrue: 'true'
	}
	const ansObj = {
		ANSWERS: 'answers'
	}
	t.deepEqual(replaceGlobalValuesInObject(obj, sessionObj, ansObj), { testCase: true });
});

test('test replace of "false"', async t => {
	const obj = {
		testCase: '__session.isTrue__'
	};
	const sessionObj = {
		userName: 'Filbert',
		isTrue: 'false'
	}
	const ansObj = {
		ANSWERS: 'answers'
	}
	t.deepEqual(replaceGlobalValuesInObject(obj, sessionObj, ansObj), { testCase: false });
});


test('test does not leave "false" as a string', async t => {
	const obj = {
		testCase: '__session.isTrue__'
	};
	const sessionObj = {
		userName: 'Filbert',
		isTrue: 'false'
	}
	const ansObj = {
		ANSWERS: 'answers'
	}
	t.notDeepEqual(replaceGlobalValuesInObject(obj, sessionObj, ansObj), { testCase: 'false' });
});

test('no matches', async t => {
	const obj = {
		state: 'true'
	};
	const sessionObj = {
		ustate: true
	}
	const ansObj = {
		ANSWERS: 'answers'
	}
	t.deepEqual(replaceGlobalValuesInObject(obj, sessionObj, ansObj), { state: 'true' });
});
