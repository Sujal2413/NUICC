$(document).on("click", "#accordion6 .card-header", function (e) {
    e.preventDefault();
    var target = $(this).find("a").attr("href");
    $("#accordion6 .collapse").not(target).collapse("hide");
    $(target).addClass("show");
});

$(document).ready(function () {
    $("form.contact-us").submit(function (e) {
        e.preventDefault();
        Swal.fire({
            title: "Please wait....",
            didOpen: () => {
                Swal.showLoading();
            },
            allowOutsideClick: false
        });
        $.ajax({
            url: '/contactsave',
            type: 'post',
            dataType: 'json',
            data: $(this).serialize(),
            success: function (res) {
                Swal.hideLoading();
                if (res.success) {
                    Swal.fire({
                       html: `
                            <h2 style="color:#1a73e8; font-weight:bold; margin-bottom:10px;">
                                <i>Thank You!</i>
                            </h2>
                            <p style="font-size:16px;">${res.message}</p>
                                `,
                        icon: "success",
                        iconColor: "#04AB14",
                        allowOutsideClick: false
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                window.location.reload();
                            }
                        });
                } else if (res.error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: res.message,
                        allowOutsideClick: false
                    });
                }
            },
            error: function (xhr, status, error) {
                Swal.hideLoading();
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                    allowOutsideClick: false
                });
            }
        })
    })
});