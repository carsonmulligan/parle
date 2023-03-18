$(function() {
  $('#chat-form').submit(function(event) {
    event.preventDefault();
    var input = $('#input').val();
    $.ajax({
      url: '/chat',
      method: 'POST',
      data: { input: input }
    }).done(function(response) {
      $('#conversation').html(response);
      $('#input').val('');
    });
  });
});
