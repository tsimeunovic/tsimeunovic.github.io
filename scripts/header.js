(function () {
    var scrollThreshold = 42;
    var headerScrolled = false;
    document.addEventListener('scroll', function () {
        var scrollingElement = document.scrollingElement || document.documentElement || document;
        var scrollTop = scrollingElement.scrollTop;
        if (scrollTop >= scrollThreshold && !headerScrolled) {
            document.body.classList.add('scrolled');
            headerScrolled = true;
        } else if (scrollTop < scrollThreshold && headerScrolled) {
            document.body.classList.remove('scrolled');
            headerScrolled = false;
        }
    });
})();