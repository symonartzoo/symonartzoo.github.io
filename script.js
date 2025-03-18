$(document).ready(function() {
    $('#generateBtn').click(function() {
        var text = $('#inputText').val();
        $('#qrcode').empty(); // Kosongkan QR code sebelumnya
        if (text) {
            $('#qrcode').qrcode(text);
        } else {
            alert('Silakan masukkan teks atau URL!');
        }
    });
});