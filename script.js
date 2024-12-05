$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var music = $("#backgroundMusic")[0];

    // Open the envelope and show the words, hearts, and balloons
    btn_open.click(function() {
        open();
    });

    // Reset the envelope to its initial state
    btn_reset.click(function() {
        close();
    });

    function open() {
        // Open the envelope
        envelope.addClass("open").removeClass("close");

        // Play the music when the "Open" button is pressed
        music.play();

        // Trigger the animation for the "Happy Birthday" text
        $(".words").each(function(index) {
            var delay = index * 500; // Stagger the text animation
            $(this).css("transition-delay", delay + "ms");
        });

        // Trigger balloons and hearts animations
        $(".balloon").each(function(index) {
            var delay = (index + 1) * 500; // Stagger balloon animation
            $(this).css({
                "opacity": "1",
                "transition-delay": delay + "ms",
                "transform": "translateY(-300px)"
            });
        });

        // Trigger hearts animation with random position and delay
        $(".heart").each(function(index) {
            var randomDelay = Math.random() * 1500; // Randomize delay
            var randomLeft = Math.random() * 100; // Randomize horizontal position
            var randomAnimationDuration = 4 + Math.random() * 2; // Randomize animation speed

            $(this).css({
                "left": randomLeft + "%",
                "animation-delay": randomDelay + "ms",
                "animation-duration": randomAnimationDuration + "s"
            });

            // Start the animation
            $(this).addClass("animate");
        });
    }

    function close() {
        // Close the envelope and reset everything
        envelope.removeClass("open").addClass("close");
        $(".words").css({
            "opacity": "0",
            "transform": "translateY(50px)"
        });
        $(".balloon").css({
            "opacity": "0",
            "transform": "translateY(0)"
        });
        $(".heart").removeClass("animate");
    }
});
