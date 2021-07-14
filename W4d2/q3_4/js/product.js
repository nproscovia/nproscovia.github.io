$(function() {
    function showSuccessMsg() {
        $('#msg').show();
    }

    function hideSuccessMsg() {
        $('#msg').hide();
    }

    hideSuccessMsg();

    $('#productForm').submit(function() {
        const price = $('input[name="price"]').val();
        const name = $('input[name="name"]').val();
        console.log(name, price);

        $.post('/addToCart', { "price": price, "name": name })
            .done(function(data) {
                showSuccessMsg();
                setTimeout(hideSuccessMsg, 3000);

                const res = JSON.parse(data);

                $('#linktocart').text(res + " item in the chart");

            }).fail(function(x, s, ex) { console.log(ex) });

        return false;
    })
})