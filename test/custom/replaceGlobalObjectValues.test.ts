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

test('answers not required', async t => {
		const value = 'hi __session.userName__'
		const sessionObj = {
			userName: 'Filbert'
		}
		t.deepEqual(replaceGlobalObjectValues(value, sessionObj), 'hi Filbert');
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

