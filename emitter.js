

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
    console.log(` Listener registered for: "${eventName}"`);
  }

  emit(eventName, data) {
    if (!this.events[eventName]) {
      console.log(`  No listeners for: "${eventName}"`);
      return;
    }

    console.log(` Emitting: "${eventName}"`);

    this.events[eventName].forEach(callback => {
      callback(data);
    });
  }

  off(eventName) {
    if (this.events[eventName]) {
      delete this.events[eventName];
      console.log(`  Removed all listeners for: "${eventName}"`);
    } else {
      console.log(`  No listeners found for: "${eventName}"`);
    }
  }
}


console.log('=== EVENT EMITTER TEST ===\n');

const emitter = new EventEmitter();

console.log('--- Test 1: Register Listener ---');
emitter.on('taskAdded', (t) => {
  console.log('   New task:', t);
});

console.log('\n--- Test 2: Emit Event ---');
emitter.emit('taskAdded', { id: 101, title: 'Study CAPM' });

console.log('\n--- Test 3: Multiple Listeners ---');
emitter.on('taskAdded', (t) => {
  console.log(`   Alert! Task "${t.title}" was added`);
});

emitter.on('taskAdded', (t) => {
  console.log(`   Total tasks increased (ID: ${t.id})`);
});

emitter.emit('taskAdded', { id: 102, title: 'Learn JavaScript' });

console.log('\n--- Test 4: Different Event ---');
emitter.on('taskCompleted', (t) => {
  console.log(`   Task completed: ${t.title}`);
});

emitter.emit('taskCompleted', { id: 101, title: 'Study CAPM' });

console.log('\n--- Test 5: No Listeners ---');
emitter.emit('taskDeleted', { id: 999 });

console.log('\n--- Test 6: Remove Listeners ---');
emitter.off('taskAdded');
emitter.emit('taskAdded', { id: 103, title: 'Should not trigger' });

console.log('\n--- Test 7: Real-World Example ---');

emitter.on('userLogin', (user) => {
  console.log(`   Welcome back, ${user.name}!`);
});

emitter.on('userLogin', (user) => {
  console.log(`   Sending notification to ${user.email}`);
});

emitter.on('userLogin', (user) => {
  console.log(`   Last login: ${user.lastLogin}`);
});

emitter.emit('userLogin', {
  name: 'Alice',
  email: 'alice@example.com',
  lastLogin: '2024-12-10'
});

console.log('\n=== TEST COMPLETE ===');

emitter.on('myEvent', (data) => {
  console.log('My event happened!', data);
});

emitter.emit('myEvent', { message: 'Hello!' });