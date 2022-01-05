$(document).ready(function(){
    $("#navigation").on("click","a", function (event) {
      //�������� ����������� ��������� ������� �� ������
      event.preventDefault();
      //�������� ������������� ���� � �������� href
      var id  = $(this).attr('href'),
      //������ ������ �� ������ �������� �� ����� �� ������� ��������� �����
      top = $(id).offset().top;
      //��������� ������� �� ���������� - top �� 1500 ��
      $('body,html').animate({scrollTop: top}, 1500);
    });
  });


  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});