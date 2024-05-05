document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('#wordleForm input');
    inputs.forEach((input, index) => {
        input.addEventListener('input', function () {
            if (this.value.length >= 1) {
                const nextIndex = index + 1;
                if (nextIndex < inputs.length) {
                    inputs[nextIndex].focus();
                }
            }
        });
    });
});
