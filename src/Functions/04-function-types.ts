// ১. Generic Function এর ব্যবহার
function getData<T>(item: T): T {
    return item;
}
console.log(getData<string>("TypeScript")); // স্ট্রিং রিটার্ন করবে

// ২. Async Function এর ব্যবহার
// সাধারণত প্রমিস রিটার্ন করার সময় টাইপ ডিফাইন করা জরুরি
async function fetchUser(): Promise<{ id: number; name: string }> {
    // সিমুলেটেড API কল
    return { id: 1, name: "John Doe" };
}

// ৩. সবকিছুর সমন্বয় (Callback + Async)
async function executeTask(callback: (data: string) => void) {
    const user = await fetchUser();
    callback(`User fetched: ${user.name}`);
}

executeTask((msg) => console.log(msg));

/**
 * *In short:
**Use Types/Interfaces to enforce rules.
**Use Generics to add flexibility.
**Use Async to handle waiting for data.
 */