function init() {
    //获取浏览器可视宽度 算出每行列数
    //width()  不包含 padding margin border
    //outerWidth(true) true 包含margin
    var boxWidth = $(".item").outerWidth(true); /**每一个宽度 */
    var cols = parseInt($(window).width() / boxWidth) /**列数 */
    var heightArr = []

    for (var i = 0; i < cols; i++) {
        heightArr.push(0)
    }
    /**遍历每一个图片 */
    $(".item").each(function (index, item) {
        var idx = 0
        var minBoxHeight = heightArr[0]
        /**最小高度 */
        for (var i = 0; i < heightArr.length; i++) {
            if (heightArr[i] < minBoxHeight) {
                minBoxHeight = heightArr[i];
                idx = i
            }
        }
        //设置图片样式
        $(item).css({
            left: boxWidth * idx,
            /**每个图片的宽度 * 索引 */
            top: minBoxHeight //最小高度
        })
        heightArr[idx] += $(item).outerHeight(true)
    })
}


$(function () {
    init()
    $(window).on('resize', function () {
        init()
    })
})