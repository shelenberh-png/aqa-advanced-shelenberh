import axios from 'axios';
import assert from 'node:assert';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function runApiTests() {
  console.log(' Запуск тестового сценарію...\n');

  try {
    // -------------------------------------------------------------
    // Тест 1: GET /posts/1 — Отримання одного поста
    // -------------------------------------------------------------
    console.log('Test 1: GET /posts/1');
    const res1 = await axios.get(`${BASE_URL}/posts/1`);

    assert.strictEqual(res1.status, 200, 'Статус відповіді має бути 200');
    assert.strictEqual(res1.data.id, 1, 'ID поста має дорівнювати 1');
    assert.strictEqual(typeof res1.data.userId, 'number', 'userId має бути числом');
    assert.ok(
      res1.data.title && typeof res1.data.title === 'string',
      'Заголовок title має бути стрічкою'
    );
    assert.ok(res1.data.body && typeof res1.data.body === 'string', 'Тіло body має бути стрічкою');
    console.log('✅ Passed: GET /posts/1 успішно перевірено\n');

    // -------------------------------------------------------------
    // Тест 2: GET /posts — Отримання списку всіх постів
    // -------------------------------------------------------------
    console.log('Test 2: GET /posts');
    const res2 = await axios.get(`${BASE_URL}/posts`);

    assert.strictEqual(res2.status, 200, 'Статус відповіді має бути 200');
    assert.ok(Array.isArray(res2.data), 'Відповідь має бути масивом');
    assert.strictEqual(res2.data.length, 100, 'Масив має містити 100 елементів');
    console.log('✅ Passed: GET /posts успішно перевірено\n');

    // -------------------------------------------------------------
    // Тест 3: GET /users/1 — Отримання інформації про користувача
    // -------------------------------------------------------------
    console.log('Test 3: GET /users/1');
    const res3 = await axios.get(`${BASE_URL}/users/1`);

    assert.strictEqual(res3.status, 200, 'Статус відповіді має бути 200');
    assert.strictEqual(res3.data.id, 1, 'ID користувача має бути 1');
    assert.ok(res3.data.name, 'Поле name має існувати');
    assert.ok(res3.data.email.includes('@'), 'Email має містити символ @');
    assert.ok(
      res3.data.address && res3.data.address.city,
      'Користувач повинен мати вкладений об’єкт address.city'
    );
    console.log('✅ Passed: GET /users/1 успішно перевірено\n');

    // -------------------------------------------------------------
    // Тест 4: POST /posts — Створення нового поста
    // -------------------------------------------------------------
    console.log('Test 4: POST /posts');
    const newPost = {
      title: 'AQA Axios Test Title',
      body: 'This is a test post content',
      userId: 1,
    };
    const res4 = await axios.post(`${BASE_URL}/posts`, newPost);

    assert.strictEqual(res4.status, 201, 'Статус створення має бути 201 Created');
    assert.strictEqual(res4.data.title, newPost.title, 'Заголовок має відповідати надісланому');
    assert.strictEqual(res4.data.body, newPost.body, 'Тіло поста має відповідати надісланому');
    assert.strictEqual(res4.data.userId, newPost.userId, 'userId має відповідати надісланому');
    assert.ok(res4.data.id, 'Відповідь має містити згенерований ID нових даних');
    console.log('✅ Passed: POST /posts успішно перевірено\n');

    // -------------------------------------------------------------
    // Тест 5: POST /comments — Створення нового коментаря
    // -------------------------------------------------------------
    console.log('Test 5: POST /comments');
    const newComment = {
      postId: 1,
      name: 'Tester',
      email: 'test@example.com',
      body: 'Great post!',
    };
    const res5 = await axios.post(`${BASE_URL}/comments`, newComment);

    assert.strictEqual(res5.status, 201, 'Статус створення має бути 201 Created');
    assert.strictEqual(res5.data.postId, newComment.postId, 'postId має збігатися');
    assert.strictEqual(res5.data.email, newComment.email, 'email має збігатися');
    assert.ok(res5.data.id, 'Відповідь має містити новий ID');
    console.log('✅ Passed: POST /comments успішно перевірено\n');

    console.log(' Усі 5 тестів успішно пройдені!');
  } catch (error) {
    console.error('❌ Помилка під час виконання тестів:', error.message);
  }
}

runApiTests();
