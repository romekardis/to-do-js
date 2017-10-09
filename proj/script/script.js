window.addEventListener('DOMContentLoaded', function () {
    var inputText = document.querySelector('form input[type=text]'),
        tasksList = document.querySelector('.to-do-list__tasks'),
        form = document.querySelector('form');

    form.onsubmit = function (e) {
        if (!inputText.value.length) return;
        e.preventDefault();
        createTask(function(btn) {
            tasksList.removeChild(btn.closest('div'));
        });
    };

    function createTask (callback) {
        var div = document.createElement('div'),
            p = document.createElement('p'),
            span = document.createElement('span'), 
            inputValue = inputText.value;

        if (inputValue.length > 15) {
            p.textContent = inputValue.split('').slice(0, 15).join('') + '...';
        }   else {
            p.textContent = inputValue;
        }
        span.onclick = function () {
            callback(this);
        };
        div.appendChild(p);
        div.appendChild(span);
        tasksList.appendChild(div);
        inputText.value = '';
    };
    
});
