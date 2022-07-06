document.querySelector('.switch')
    .addEventListener('mouseup', function() {
        var amounts = document
            .getElementsByClassName('card-amount');
        for(var i = 0; i < amounts.length; i++)
        {
            var element = amounts[i];
            var classList = element.classList;
            classList.toggle('hide');
        }
    });