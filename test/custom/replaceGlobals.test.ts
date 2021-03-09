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

test('tests replace of number', async t => {
	const obj = {
		amount: '__session.amount__'
	};
	const sessionObj = {
		userName: 'Filbert',
		amount: 5
	}
	t.deepEqual(replaceGlobalValuesInObject(obj, sessionObj), { amount: 5});
});

test('tests replace of number in string', async t => {
	const obj = {
		amount: '__session.amount__ dollars'
	};
	const sessionObj = {
		userName: 'Filbert',
		amount: 5
	}
	t.deepEqual(replaceGlobalValuesInObject(obj, sessionObj), { amount: '5 dollars'});
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

test('tests replace of "true" in a string', async t => {
	const obj = {
		testCase: 'it is __session.isTrue__ now'
	};
	const sessionObj = {
		userName: 'Filbert',
		isTrue: 'true'
	}
	const ansObj = {
		ANSWERS: 'answers'
	}
	t.deepEqual(replaceGlobalValuesInObject(obj, sessionObj, ansObj), { testCase: 'it is true now' });
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


test('no answers parameter', async t => {
	const obj = {
		testCase: '__session.isTrue__'
	};
	const sessionObj = {
		userName: 'Filbert',
		isTrue: 'false'
	}
	t.deepEqual(replaceGlobalValuesInObject(obj, sessionObj), { testCase: false });
});

test('no sessions and answers parameters', async t => {
	const obj = {
		testCase: '__session.isTrue__'
	};
	t.deepEqual(replaceGlobalValuesInObject(obj), { testCase: '__session.isTrue__' });
});

test('null value', async t => {
	const obj = {
		testCase: null
	};
	const sessionObj = {
		userName: 'Filbert',
		isTrue: 'false'
	}
	t.deepEqual(replaceGlobalValuesInObject(obj, sessionObj), { testCase: null });
});


test('non-string value', async t => {
	const obj = {
		testCase: 1
	};
	const sessionObj = {
		userName: 'Filbert',
		isTrue: 'false'
	}
	t.deepEqual(replaceGlobalValuesInObject(obj, sessionObj), { testCase: 1 });
});


test('faulty object key', t => {
	const obj = {
		testCase: '__nonexistent.isTrue__'
	};
	const sessionObj = {
		userName: 'Filbert',
		isTrue: 'false'
	}
	const error = t.throws(() => {
		replaceGlobalValuesInObject(obj, sessionObj);
	}, undefined);

	t.is(error.message, 'trying to replace an unrecognized object type: \'nonexistent\'');
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


// answers
test('returns for answers', async (t) => {
	const obj = {
		testCase: 'hi __answers.userName__',
	};
	const sessionObj = {
		userName: 'Jane Doe',
	};
	const ansObj = {
		userName: 'John Doe',
	};
	t.deepEqual(replaceGlobalValuesInObject(obj, sessionObj, ansObj), { testCase: 'hi John Doe' });
});
