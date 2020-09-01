    $("#cube").mousemove(function(e){ // Аз руи id-и родительскиш меқапем (mousemove барои ҳаракати муш қати тоб хурдани куб)
        $("#cube").css({
            '-moz-transform':'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)' // ва таҳти кунҷ тоб метемаш
        });
    });
