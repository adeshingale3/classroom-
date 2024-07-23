document.getElementById('show-lecture-form').addEventListener('click', function(event) {
    event.preventDefault();
    const form = document.getElementById('lecture-form');
    form.classList.toggle('hidden');
});

document.getElementById('new-lecture-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const subject = document.getElementById('lecture-subject').value;

    const lectureList = document.getElementById('lecture-list');
    const lectureItem = document.createElement('div');
    lectureItem.className = 'lecture-one bg-zinc-300 w-[60vw] h-20 ml-10 rounded-lg flex justify-between items-center px-6 font-semibold';
    lectureItem.innerHTML = `
        <div class="Time">${startTime} - ${endTime}</div>
        <div class="subject">${subject}</div>
        <div class="flex gap-3">
            <a class="bg-blue-600 p-3 rounded-lg" href="meeting-area.html">ATTEND</a>
            <button class="bg-red-600 p-3 rounded-lg delete-btn">DELETE</button>
        </div>
    `;
    lectureList.appendChild(lectureItem);

    // Add event listener for the new delete button
    lectureItem.querySelector('.delete-btn').addEventListener('click', function() {
        lectureList.removeChild(lectureItem);
    });

    document.getElementById('lecture-form').classList.add('hidden');
    document.getElementById('new-lecture-form').reset();
});

// Add event listeners for existing delete buttons
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        const lectureItem = button.closest('.lecture-one');
        const lectureList = document.getElementById('lecture-list');
        lectureList.removeChild(lectureItem);
    });
});
