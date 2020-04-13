fetch('../data/supporters.json').then(res => res.json()).then(supporters => {
    const energy = '❇️ ❇️ ❇️ ❇️ ❇️ ❇️ ❇️ ❇️ ❇️ ❇️ ❇️ ❇️ ❇️ ❇️ ❇️ ❇️';
    console.log(`${energy}\n${energy}\nTHANK YOU TO OUR SUPPORTERS...\n${energy}\n${energy}\n`)
    supporters.forEach(supporter => {
        console.log(`${supporter.name} (${supporter.class_name})\n${energy}`);
        document.querySelector(supporter.element).classList.add(supporter.class_name);
    });
    console.log(`${energy}\n${energy}`);
});

