import test from 'ava';

import { replaceGlobalObjectValues } from '../../src/custom/replaceGlobalObjectValues';

test('returns for session', async t => {
		const value = 'hi __session.userName__'
		const sessionObj = {
			userName: 'Filbert'
		}
		const ansObj = {
			ANSWERS: 'answers'
		}
		t.deepEqual(replaceGlobalObjectValues(value, sessionObj, ansObj), 'hi Filbert');
	}
);

test('returns for stringified object', async t => {
		const value = '__session.userInfo__'
		const sessionObj = {
			userName: 'Filbert',
			userInfo: '{"id":"123","city":"Bangkok"}',
		}
		t.deepEqual(replaceGlobalObjectValues(value, sessionObj), {
			id: '123',
			city: 'Bangkok'
		});
	}
);


test.skip('returns for raw object', async t => {
		const value = '__session.userInfo__'
		const sessionObj = {
			userName: 'Filbert',
			userInfo: {
				id: '123',
				city: 'Bangkok'
			},
		}
		console.log(`\n${JSON.stringify(sessionObj.userInfo)}`)
		t.deepEqual(replaceGlobalObjectValues(value, sessionObj), {
			id: '123',
			city: 'Bangkok'
		});
	}
);


test('answers not required', async t => {
		const value = 'hi __session.userName__'
		const sessionObj = {
			userName: 'Filbert'
		}
		t.deepEqual(replaceGlobalObjectValues(value, sessionObj), 'hi Filbert');
	}
);


test('session and answers not required', async t => {
		const value = 'hi __session.userName__'
		t.deepEqual(replaceGlobalObjectValues(value), 'hi __session.userName__');
	}
);


test('no value', async t => {
		const value = null
		const sessionObj = {
			userName: 'Filbert'
		}
		const ansObj = {
			ANSWERS: 'answers'
		}
		t.deepEqual(replaceGlobalObjectValues(value, sessionObj, ansObj), null);
	}
);

