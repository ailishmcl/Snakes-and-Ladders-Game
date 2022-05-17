$.fn.shake = function(interval = 100){
    this.addClass('shaking');
    this.css('transition', 'all ' + (interval / 100).toString() + 's');
    setTimeout(() => {
        this.css('transform', 'translateX(-50%)', 'translateY(50%)');
    }, interval * 0);
    setTimeout(() => {
        this.css('transform', 'translateX(50%)', 'translateY(-25%)');
    }, interval * 1);
    setTimeout(() => {
        this.css('transform', 'translateX(-25%)', 'translateY(50%)');
    }, interval * 2);
    setTimeout(() => {
        this.css('transform', 'translateX(25%)', 'translateY(-50%)');
    }, interval * 3);
    setTimeout(() => {
        this.css('transform', 'translateX(-7%)', 'translateY(12%)');
    }, interval * 4);
    setTimeout(() => {
        this.css('transform', 'translateX(0%)', 'translateY(-20%)');
    }, interval * 5);
    this.removeClass('shaking');
};