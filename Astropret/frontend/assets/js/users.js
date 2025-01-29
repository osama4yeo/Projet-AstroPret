document.addEventListener('DOMContentLoaded', function () {
    const members = [
        { name: 'Alice', role: 'Présidente', photo: 'https://via.placeholder.com/100' },
        { name: 'Bob', role: 'Trésorier', photo: 'https://via.placeholder.com/100' }
    ];

    let membersList = document.getElementById('members-list');
    members.forEach(member => {
        let div = document.createElement('div');
        div.innerHTML = `<img src="${member.photo}" alt="${member.name}"><p>${member.name} - ${member.role}</p>`;
        membersList.appendChild(div);
    });
});
