// Grid Demo

var cols = $(".selector").parent().siblings().length - 1;

var literalColumn = "<div class='u-column--1'><select class='selector'> <option class='c1'>col-1</option> <option class='c2'>col-2</option> <option class='c3'>col-3</option> <option class='c4'>col-4</option> <option class='c5'>col-5</option> <option class='c6'>col-6</option><option class='c7'>col-7</option> <option class='c8'>col-8</option> <option class='c9'>col-9</option> <option class='c10'>col-10</option> <option class='c11'>col-11</option> <option class='c12'>col-12</option> </select></div></div>"

$('.o-add-column').on('click', function() {
  $('.u-row').append( literalColumn );
  cols++;
  //alert(cols);
});

$(".o-column-switcher-row div").each(function (index, value) { 
  colClass = $(this).attr('class');
  $(this).find(".o-column-switcher").val(colClass);
});

$('.o-column-switcher').change(function() {
  rowColumns = 12;
  colNum = $(this).find("option:selected").text(); // col-3
  stripColNum = Math.abs(colNum.replace("u-column--", "") - rowColumns); // 5
  invNum =  Math.floor(Math.abs(stripColNum / cols));
  invColNum = "u-column--" + invNum;
  otherCol = $(this).parent().siblings();
  otherColNum = otherCol.find(".o-column-switcher");

  $(this).parent().removeClass().addClass(colNum);
  $(otherCol).removeClass().addClass(invColNum);
  $(otherColNum).val(invColNum);
});
//alert(colClass);

$(function() {
    // Dropdown Demo
    $('.c-dropdown__toggle, .c-button--dropdown').click(function() {
        $(this).next('.c-dropdown__content').toggleClass('is-active');
    });

    // Menu Demo
    $('.c-menu__link').click(function() {
        $('.c-menu__link').removeClass('is-active');
        $(this).addClass('is-active');
    });

    // Notification Demo
    $('.c-notification .c-button--icon').click(function() {
        $(this).parent().addClass('u-hide');
    });

    // Accordion Demo
    $('.o-accordion .o-accordion__label').click(function() {
        $(this).parent().toggleClass('is-open');
    });

    // Iconbar Demo
    $('.o-iconbar__item').click(function() {
        $('.o-iconbar__item').removeClass('is-active');
        $(this).addClass('is-active');
    });

    // Modal Demo
    $('.o-modal__close').click(function() {
        $(this).parents('.o-modal').toggleClass('is-active');
    });
});
