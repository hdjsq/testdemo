$(function () {
    init()
    $(window).on("resize",function(){
        init()
    })
    function init() {
        var screenWidth = $(window).width()
        var itemWidth = $(".item").outerWidth(true)
        var cols = Math.floor(screenWidth / itemWidth)
        console.log(screenWidth, itemWidth, cols)
        var arr = []
        for (var i = 0; i < cols; i++) {
            arr.push(0)
        }
        $(".item").each((index, item) => {
            var idx = 0
            var minHeight = arr[0]
            for (let i in arr) {
                if (arr[i] < minHeight) {
                    minHeight = arr[i]
                    idx = i
                }
            }
            // console.log($(this).outerHeight(true))
            $(item).css({
                top: minHeight,
                left: itemWidth * idx
            })
            arr[idx] += $(item).outerHeight(true)
            // console.log(arr)
        });
    }
})