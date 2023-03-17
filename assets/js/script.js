$(document).ready(function(){
    $('.btnToggle').on('click', function(){
        let nilaiClass = $(this).hasClass('open-toggle')
        if(nilaiClass) {
            $(this).removeClass('open-toggle')
            $(this).addClass('close-toggle')
        } else {
            $(this).addClass('open-toggle')
            $(this).removeClass('close-toggle')
        }
    })
})