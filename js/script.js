new Choices('#model', {
    searchEnabled: false,
    itemSelectText: ''
});

new Choices('#color', {
    searchEnabled: false,
    itemSelectText: ''
});

$('#form-order').on('submit', function(event) {
    event.preventDefault();

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        dataType: 'html',
        data: $('#form-order').serialize(),
        success: function(data) {
            console.log(data);
            $('#form-order').html('Спасибо, ваша заявка успешно отправлена!');
            $('.form__submit').hide();
        }
    })
});

const btn = document.querySelector('.offer__btn');
const anchor = document.querySelector('#form-order');

btn.addEventListener('click', () => {
    anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
});

const attribute = document.querySelector('[data-link]');

attribute.addEventListener('click', (elem) => {
    elem.preventDefault();
    anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
});

// const attributes = document.querySelectorAll('[data-link]');

// attributes.forEach(function(item) {

//     item.addEventListener('click', (el) => {
//         el.preventDefault();
//         anchor.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//           })
//     });
// });

