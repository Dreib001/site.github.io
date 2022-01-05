"use strict";

$(document).ready(function () {
  $("#navigation").on("click", "a", function (event) {
    //�������� ����������� ��������� ������� �� ������
    event.preventDefault(); //�������� ������������� ���� � �������� href

    var id = $(this).attr('href'),
        //������ ������ �� ������ �������� �� ����� �� ������� ��������� �����
    top = $(id).offset().top; //��������� ������� �� ���������� - top �� 1500 ��

    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});
//# sourceMappingURL=script.dev.js.map
